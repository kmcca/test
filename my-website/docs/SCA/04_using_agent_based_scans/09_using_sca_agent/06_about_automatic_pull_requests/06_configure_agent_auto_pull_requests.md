---
"ft:title" : "Configure Agent for Automatic Pull Requests"
"ft:prettyUrl" : "t_configure_auto_pr"
---

You configure parameters of automatic pull requests in your Veracode Software Composition Analysis agent.

<p font-size="13pt"><b>Before You Begin</b></p>


-   Enable pull requests for [GitHub](https://docs.veracode.com/r/t_configure_pr_github) or [GitLab](https://docs.veracode.com/r/t_configure_pr_gitlab).
-   Enable the [update advisor](https://docs.veracode.com/r/t_update_advisor).
-   Work in a [supported project](https://docs.veracode.com/r/Understanding_Automatic_Pull_Request_Support).

<p font-size="13pt"><b>Steps</b></p>

1.  Set the relevant [scan directives](https://docs.veracode.com/r/c_sc_scan_directives) in your shell or automation script to configure the parameters that determine when to generate the pull requests. You can set the directives in two ways:

    -   As environment variables in your CI/CD settings, with `SRCCLR_`appended to the directive names. For example:

        ```
        export SRCCLR_PR_ON=methods
        export SRCCLR_NO_BREAKING_UPDATES=true
        export SRCCLR_IGNORE_CLOSED_PRS=false
        export SRCCLR_SCM_URL=https://gitlab.acme.io
        EXTRA_ARGS='--update-advisor --pull-request'
        ```

    -   As directives in the `srcclr.yml` file of your agent-based scanning project. For example:

        ```
        pr_on: methods
        no_breaking_updates: true
        ignore_closed_prs: false
        ```

        <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If configured in both files, the environment variables override the `srcclr.yml` directives.
</p>

After you complete the configuration, your Veracode SCA agent can generate pull requests when the scan results meet the specified parameters. You can review and approve the pull request in your GitHub or GitLab project.

<p font-size="13pt"><b>Next Steps</b></p>

For a more effective integration with your CI pipeline, Veracode recommends you customize the automatic pull request behavior in your pipeline job, such as the following example in GitLab:

```
sourceclear:
  stage: security
  variables:
    SRCCLR_API_TOKEN: ${SRCCLR_API_TOKEN}
  script:
    - |
      if [[ $CI_BUILD_REF_NAME = master ]]; then
 
        # Set up ssh-agent
        which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )
        eval $(ssh-agent -s)
        echo "$SSH_PRIVATE_KEY" | base64 --decode | ssh-add - > /dev/null
        mkdir -p ~/.ssh
        chmod 700 ~/.ssh
        [[ -f /.dockerenv ]] && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config
        git config --global user.email "user@sourceclear.com"
        git config --global user.name "user"
 
        # We want the PR to target the master branch
        git checkout -b master
 
        # GitLab doesn't set a remote either
        git remote set-url origin "git@git.ci.srcclr.io:$CI_PROJECT_PATH.git"

        EXTRA_ARGS='--update-advisor --pull-request'
 
        export SRCCLR_SCM_TOKEN="$GITLAB_TOKEN"
        export SRCCLR_SCM_TYPE=GITLAB
        export SRCCLR_SCM_URL='https://git.mycompany.com'
      fi
    - VERBOSE=true curl -sSL https://download.sourceclear.com/ci.sh | sh -s -- scan $EXTRA_ARGS
```


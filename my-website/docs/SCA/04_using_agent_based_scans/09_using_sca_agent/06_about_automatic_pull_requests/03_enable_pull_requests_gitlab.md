---
"ft:title" : "Enable Pull Requests for GitLab"
"ft:prettyUrl" : "t_configure_pr_gitlab"
---

To use automatic pull requests for Veracode Software Composition Analysis (SCA) agent-based scanning, you need permission to create merge requests in GitLab.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to [GitLab.com](https://gitlab.com).

2.  If prompted, enter your GitLab credentials to log in.

3.  On the Personal Access Tokens page, enter a token name.

4.  Select the **api** checkbox.

5.  Click **Create personal access token**.

6.  After generating the token, copy it to your clipboard and save it to a safe location.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> After you leave the page, you cannot access this token again.
    </p> 

7.  Add your token using one of these methods:

    -   Add this code to the `agent.yml` [file](https://docs.veracode.com/r/c_sc_agent_usage) installed in your `~/.srcclr` folder:

        ```
        scmType: GITLAB
        scmToken: {token copied in earlier step}
        ```

    -   Set the token as an environment variable [in your CI/CD settings](https://docs.veracode.com/r/t_sc_gitlab_variable) or in a command script. For example, add this code in Linux bash:

        ```
        export SRCCLR_SCM_TYPE="GITLAB"
        export SRCCLR_SCM_TOKEN="{token copied in earlier step}"
        ```

8.  If you are using an installation of GitLab other than `GitLab.com`, add your project URL using one of these methods:

    -   Add the project URL to the `agent.yml` file installed in your `~/.srcclr` folder:

        ```
        scmUrl: https://gitlab.acme.io
        ```

    -   Set the project URL as an environment variable [in your CI/CD settings](https://docs.veracode.com/r/t_sc_gitlab_variable).
    -   Set the project URL as an environment variable in a command script. For example, add this code in Linux bash:

        ```
        export SRCCLR_SCM_URL=https://gitlab.acme.io
        ```
    
---
"ft:title" : "Configure Your GitLab Repository"
"ft:prettyUrl" : "t_sc_configure_gitlab"
---

<p font-size="13pt"><b>Steps</b></p>

1.  To scan using Veracode Software Composition Analysis (SCA) agent-based scanning, add the following to the `after_script` step in your `.gitlab-ci.yml` file:

    ```
    after_script:
        - curl -sSL https://download.sourceclear.com/ci.sh | sh
    ```

2.  Commit the change to start a build for your repository.

<p font-size="13pt"><b>Results</b></p>

Veracode SCA performs an agent-based scan, displaying results to your agent-based scanning environment.

<p font-size="13pt"><b>Next Steps</b></p>

If you want to add Veracode SCA agent-based scanning to other repositories, add the installation and scan code above, along with the `SRCCLR_API_TOKEN` environment variable, to any `.gitlab-ci.yml` files you want to scan. Then you can perform scans on each new build.


---
"ft:title" : "Configure Your Codeship Basic Repository"
"ft:prettyUrl" : "t_sc_codeship_pipeline"
---

<p font-size="13pt"><b>Steps</b></p>

1.  In Codeship, go to the project you want to scan.

2.  Select **Project Settings** \> **Testing**.

3.  In the test pipelines commands, enter the following code after your build commands:

    ```
    curl -sSL https://download.sourceclear.com/ci.sh | sh
    ```

4.  Commit these changes to trigger a build for your repository.

<p font-size="13pt"><b>Results</b></p>

Veracode SCA performs a scan and displays results to your agent-based scanning environment.

<p font-size="13pt"><b>Next Steps</b></p>

If you want to add Veracode SCA agent-based scanning to other repositories, add the installation and scan code above to any test pipelines you want. After you add the `SRCCLR_API_TOKEN` environment variable, you can perform scans on each new build.


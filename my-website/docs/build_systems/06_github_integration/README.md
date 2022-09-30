---
"ft:title" : "Veracode for GitHub"
"ft:prettyUrl" : "c_about_github"
---
You can use Veracode for GitHub to integrate Veracode Static Analysis with GitHub Actions. This integration enables you to automate scanning of your application code from within GitHub.

<p><span style="font-size: medium;">Veracode GitHub Actions</span></p>

Veracode provides these preconfigured GitHub Actions in the GitHub Marketplace:

- [Veracode Upload and Scan](https://github.com/marketplace/actions/veracode-upload-and-scan): use the Veracode Java API wrapper to perform an [upload and scan](https://docs.veracode.com/r/r_uploadandscan) of your application code in your GitHub project. You can [view the scan results in the Veracode Platform](https://docs.veracode.com/r/review_results). To configure this action, edit the settings in the provided action.yml file.
- [Veracode Static Analysis Pipeline Scan and import of results to SARIF](https://github.com/marketplace/actions/veracode-static-analysis-pipeline-scan-and-sarif-import): run a pipeline scan of your application code within your GitHub development pipeline. The action also converts the scan results to a Static Analysis Results Interchange Format (SARIF) file and imports them as code-scanning alerts. To view the scan results, in your GitHub project, select **Security** \> **Code scanning alerts**.

    To configure this action, edit the settings in the provided `/workflows/main.yml` file. For example, if you do not want the action to convert the scan results from JSON format to SARIF format and import them into GitHub, you can remove or comment out those settings.

Veracode provides [additional Pipeline Scan examples](https://docs.veracode.com/r/Github_Pipeline_Scan_Examples) that you can add to GitHub Actions. You can also [integrate Veracode Software Composition Analysis (SCA) with GitHub Actions](https://docs.veracode.com/r/Create_an_Agent_Based_Scanning_Integration_for_GitHub).

<p><span style="font-size: medium;">Prerequisites</span></p>

- You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
- Your Veracode API credentials are stored securely using encrypted secrets in GitHub. To access Veracode, you add these encrypted secrets to the YAML files in the provided GitHub Actions.
- If you are performing static analysis using a [Veracode development sandbox](https://docs.veracode.com/r/c_about_sandbox), you have configured the sandbox you want to use.
- You have compiled and packaged your application source files according to the [Veracode Packaging Requirements](https://docs.veracode.com/r/compilation_packaging).
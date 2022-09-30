---
"ft:title" : "Run a Pipeline Scan in a Pipeline"
"ft:prettyUrl" : "t_run_pipeline_scan"
---
You can add the Pipeline Scan to a job in your development pipeline. You can use the provided code examples as templates for adding the Pipeline Scan as a stage in a pipeline job and configure the command parameters to achieve the desired scan results.

<p font-size="13pt"><b>Before You Begin</b></p>

Before running a Pipeline Scan, [ensure you meet the prerequisites](02_c_pipeline_scan_prereqs.md).

<p font-size="13pt"><b>Overview</b></p>

  <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"> <b>Note:</b> Veracode strongly recommends that you configure a Pipeline Scan in a test pipeline. For example, use a test pipeline on a local workstation or virtual machine (VM) in case you encounter any problems. You can safely resolve any problems in your test pipeline and ensure your configuration provides the expected scan results before moving the configuration to your production pipeline.</p>

If you want to run a Pipeline Scan, try different commands, debug, or review scan results outside of a pipeline, you can [Run a Pipeline Scan from the Command Line](04_t_run_first_pipeline_scans_desktop.md).

You can also run and manage scans using the [Pipeline Scan API](https://docs.veracode.com/r/c_pipe_intro).

A [Veracode account](https://docs.veracode.com/r/c_about_veracode_accounts) is limited to six Pipeline Scans per 60 seconds and each scan is limited to a maximum scan time of 60 minutes.

<p font-size="13pt"><b>Steps</b></p>

1.  [Obtain the Pipeline Scan files](https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip).

2.  In your development pipeline, add or edit a job for the Pipeline Scan that runs after the stage for building your application.

3.  Add the [code for your CI/CD code repository](05_r_pipeline_scan_examples.md) to the Pipeline Scan stage.

    For additional code examples or to ask questions, visit the [Veracode Community](https://community.veracode.com/s/?utm_medium=help_center_+community_section&utm_source=veracode_help_center).

4.  In the Pipeline Scan job, include either the `pipeline-scan.jar` file you extracted from [pipeline-scan-LATEST.zip](03_t_download_pipeline_scan.md) or the Docker image.

    Veracode recommends that you set the job to download `pipeline-scan-LATEST.zip` or get the latest Docker image, each time the job runs, to ensure that you are using the latest version of the Pipeline Scan. Alternatively, you can cache `pipeline-scan-LATEST.zip` locally on your CI system and download it at regular intervals. The [code examples](05_r_pipeline_scan_examples.md) include a step for downloading and extracting the latest version of the Pipeline Scan ZIP archive.

5.  Edit the Pipeline Scan job to include the [command parameters](05_r_pipeline_scan_examples.md) that meet the security-scanning requirements for your application.

    The [example configuration scenarios](10_c_pipeline_scan_config_scenarios.md) provide common configurations for specifying fail-build criteria, such as failing the pipeline on specific flaw severities or CWEs.

6.  Run the pipeline to run the Pipeline Scan job.

    The [scan results](11_r_pipeline_scan_output.md) provide a list of discovered flaws, if any, and a [status code](12_r_pipeline_scan_status_codes.md). If the Pipeline Scan finds any flaws, it returns the status code `>=1`, or greater than or equal to 1, to indicate the number of flaws found and fails the pipeline job.

    The Pipeline Scan saves the scan results to a build artifact, which is a JSON file named `results.json`. You can rename the JSON file and you can also use it as a [baseline file](06_c_about_pipeline_baseline_file.md) to set a baseline of discovered flaws for the scanned application.

<p font-size="13pt"><b>Next Steps</b></p>

-   If you set a baseline file, store it in version control at the same level as the scanned application. Any changes to a baseline file can affect your security strategy. It is important that you version this file to ensure it contains the required baseline of findings for the given application. If necessary, you can revert to a previous version of the file.
-   Review the scan results with your team to [determine a mitigation plan](https://docs.veracode.com/r/improve_mitigation) for addressing the discovered flaws.

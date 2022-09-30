---
"ft:title" : "Run a Pipeline Scan from the Command Line"
"ft:prettyUrl" : "Run_a_Pipeline_Scan_from_the_Command_Line"
---
You can run a few Pipeline Scan commands at a local console, outside of a development pipeline, to get started with running a scan and viewing scan results without the need for a test or production pipeline. You can also use the command line for debugging.

<p font-size="13pt"><b>Before You Begin</b></p>

Before running a Pipeline Scan, [ensure you meet the prerequisites](02_c_pipeline_scan_prereqs.md).

<p font-size="13pt"><b>Overview</b></p>

This is an optional procedure that steps you through running a few Pipeline Scan commands from the command line using different [command parameters](04_r_pipeline_scan_commands.md) for generating scan results, creating a custom [baseline file](06_c_about_pipeline_baseline_file.md), and running a Pipeline Scan against that baseline file.

If you want to add a Pipeline Scan to your development pipeline, you can skip this procedure and go to [Run a Pipeline Scan in a Pipeline](05_t_run_pipeline_scan.md). You can also run and manage scans using the [Pipeline Scan API](https://docs.veracode.com/r/c_pipe_intro).

A [Veracode account](https://docs.veracode.com/r/c_about_veracode_accounts) is limited to six Pipeline Scans per 60 seconds and each scan is limited to a maximum scan time of 60 minutes.

The example Java application is a WAR file named `verademo.war`, which you can download from the [Veracode GitHub repository](https://github.com/veracode/verademo). You can also use any application that meets the [language and packaging requirements](02_c_pipeline_scan_prereqs.md).

<p font-size="13pt"><b>Steps</b></p>

1. [Obtain the Pipeline Scan files](https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip).
2. Run this command to view all [scan results](05_r_pipeline_scan_examples.md) for an application:

    ```java
    java -jar pipeline-scan.jar --file verademo.war
    ```

    Each scan returns a [status code](12_r_pipeline_scan_status_codes.md).

3. Run this command to include additional details about each finding in the scan results:

    ```java
    java -jar pipeline-scan.jar --file verademo.war -id true
    ```
   
4. Run this command to save the scan results to a JSON file with a custom filename:

    ```java
    java -jar pipeline-scan.jar --file verademo.war -jf verademo_results.json
    ```

    By default, Pipeline Scan saves the scan results to a `results.json` file in the local directory. This file is also called an artifact.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Each Pipeline Scan command overwrites the default results.json file with the latest results. By giving your JSON file a unique filename you can prevent subsequent scans from overwriting your saved scan results.</p>

    The JSON file contains detailed information about each flaw in key-value pair. This example shows a single finding in a JSON file.

5. Run this command to set your custom JSON file as the baseline file of known findings for this application:

    ```java
    java -jar pipeline-scan.jar --file verademo.war -bf verademo_results.json
    ```

<p font-size="13pt"><b>Next Steps</b></p>

- If you set a baseline file, store it in version control at the same level as the scanned application. Any changes to a baseline file can affect your security strategy. It is important that you version this file to ensure it contains the required baseline of findings for the given application. If necessary, you can revert to a previous version of the file.
- Review the scan results with your team to [determine a mitigation plan](https://docs.veracode.com/r/improve_mitigation) for addressing the discovered flaws.

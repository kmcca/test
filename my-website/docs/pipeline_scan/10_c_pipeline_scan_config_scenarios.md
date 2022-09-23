---
"ft:title" : "Using Pipeline Scan Configuration Scenarios"
"ft:prettyUrl" : "Using_Pipeline_Scan_Configuration_Scenarios"
---
This section provides a few configuration scenarios that you can use when deciding how you want to implement a Pipeline Scan in your development environment. You add these scenarios to a stage in your pipeline that runs after the stage for building your application.

<p font-size="13pt"><b>Report Flaws that Violate Policy and Proceed Regardless of the Results</b></p>

1.  Define the policy criteria with the `--fail_on_severity` and `--fail_on_cwe` parameters, or use the `--policy_file` or `--policy_name` parameters to specify a [Veracode security policy](https://docs.veracode.com/r/c_appsec_policies).
2.  Initiate the Pipeline Scan on the built application.
3.  After the Pipeline Scan stage runs, proceed to the next stage, ignoring any exit code from the Pipeline Scan stage.

    Veracode identifies this scenario as allow failure. Implementation details vary for each CI system.

<p font-size="13pt"><b>Fail the Pipeline Stage if Flaws Violate Policy (Break the Build)</b></p>

1.  Define the policy criteria with the `--fail_on_severity` and `--fail_on_cwe` parameters, or with a security policy using the `--policy_file` or `--policy_name` parameters.
2.  Initiate the Pipeline Scan on the built application.
3.  The Pipeline Scan stage fails if it finds any flaws matching the defined criteria. The exit code reports the number of flaws, up to 200.
4.  The Pipeline Scan stage passes if it does not find flaws matching the defined criteria.

<p font-size="13pt"><b>Fail the Pipeline Stage if New Flaws Violate Policy (Break the Build)</b></p>

1.  Include a [baseline file](01_getstarted_pipeline_scan/06_c_about_pipeline_baseline_file.md), either as an artifact from a previous build or the project repository, to establish a set of known flaws for the scanned application.
2.  Define the policy criteria with the `--fail_on_severity` and `--fail_on_cwe` parameters, or with a security policy using the `--policy_file` or `--policy_name` parameters. Include the baseline file using the `-bf` parameter.
3.  Initiate the Pipeline Scan on the built application.
4.  The Pipeline Scan stage fails if it finds any flaws matching the defined criteria that are not present in the baseline file. The exit code reports the number of flaws, up to 200.
5.  The Pipeline Scan stage passes if it does not find flaws that match the defined criteria or if the baseline file includes all the flaws.


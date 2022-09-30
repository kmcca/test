---
"ft:title" : "Pipeline Scan Command Parameters"
"ft:prettyUrl" : "r_pipeline_scan_commands"
---
You use command-line parameters to configure the Pipeline Scan settings.

Use the Pipeline Scan command line to either:

-   Download a [custom policy](https://docs.veracode.com/r/c_appsec_policies) to your working directory using the `--request_policy <custom policy name>` parameter. The only result is that you download the requested policy. No scanning occurs.

    Veracode recommends that you only download a policy that has changed and do not download a policy every time you run a pipeline build.

-   Specify an application to scan using the `--file <filename>` parameter with these parameters for configuring the scan, the scan results, and project metadata, which is your CI/CD code repository:

    - [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3): Your Veracode Platform API ID and key, using either a [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) or parameters on the command line
    - Scan configuration: Settings for how the scan runs, including definition of how to fail a pipeline, maximum scan runtime, and a baseline file against which to compare results
    - Results display: Options for how to display the results of the scan
    - Project metadata: Information about your CI/CD code repository to include in results output and usage reports

The Pipeline Scan uses this command syntax:

```java

java -jar pipeline-scan.jar
[-h] [-v] -f <file> [-prof <Veracode profile>] [-vkey <Veracode API key>]
[-vid <Veracode API ID>] [-fs fail_on_severity] [-fc fail_on_cwe]
[-bf <baseline file path>] [-t <timeout>] [-id {true,false}] [-sd {true,false}]
[-jd {true,false}] [-so {true,false}] [-sf <summary output file>]
[-jo {true,false}] [-jf <JSON output file>] [-p <project name>] [-u <project URL>]
[-r <project ref>] [-aid <app ID>] [-ds {Development,Testing,Release}]
[-gig {true,false}] [-gvg {true,false}] [-fjf <filtered JSON output file>]
[-pn <policy name>] [-pf <policy file>] [-rp <custom policy name>] [-V {true,false}]

```

If you are using JVM (Java Virtual Machine) version 9 or later, you may need to add `--add-modules java.xml.bind` in front of the `-jar` parameter.

This table describes the Pipeline Scan command parameters:

|Parameter|Long Version|Description|
|--- |--- |--- |
|`-f` **Required**|`--file`|Filename of the packaged application to upload and scan.|
|`-rp`|`--request_policy`|Name of the security policy to download as a file. Required only if you want to download the configuration for a custom policy defined by your organization. After downloading the policy, you can provide this file in a subsequent command using the `--policy_file` parameter. See an [example of using a custom policy](https://docs.veracode.com/r/Pipeline_Scan_Example_for_Using_GitLab_and_Gradle_with_Automatic_Vulnerability_Generation_Using_a_Custom_Policy).|
|`-prof`|`--veracode_profile`|Name of the profile in your Veracode API credentials file that contains your Veracode API credentials. Default is the default profile.|
|`-vid` **Required**|`--veracode_api_id`|Your Veracode API ID. Instead of using this parameter in the command line, Veracode recommends you use them in a [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) or store them as [environment variables](https://docs.veracode.com/r/t_store_creds_linux_env).|
|`-vkey` **Required**|`--veracode_api_key`|Your Veracode API key. Instead of using this parameter in the command line, Veracode recommends you use them in a [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) or store them as [environment variables](https://docs.veracode.com/r/t_store_creds_linux_env).|
|`-fs`|`--fail_on_severity`|Fail the pipeline job if the scan finds flaws of the specified severities. Enter a comma-separated list of severities in quotation marks. For example, `--fail_on_severity="Very High, High"` reports if issues of severity Very High or High exist in the scan. Default is `"Very High, High, Medium, Low, Very Low"`.|
|`-fc`|`--fail_on_cwe`|Fail the pipeline job if the scan finds flaws of the specified CWEs. Enter a comma-separated list of CWE IDs. For example, if you include `--fail_on_cwe=95,100,978`, the scan results only list issues related to CWEs 95, 100, or 978. Default is to fail the job for all discovered CWEs. If you use `--fail_on_cwe` without defining a `--fail_on_severity` parameter, the Pipeline Scan uses the default `--fail_on_severity` values: `"Very High, High, Medium, Low, Very Low"`.|
|`-bf`|`--baseline_file`|Filter the flaws that exist in the specified [baseline file](https://docs.veracode.com/r/Using_a_Pipeline_Scan_Baseline_File) and show only the additional flaws in the current scan.|
|`-pn`|`--policy_name`|Name of the Veracode default policy rule to apply to the scan results. You can only use this parameter with a Veracode default policy.|
|`-pf`|`--policy_file`|Name of the local policy file you want to apply to the scan results. To download this file, use the `--request_policy` parameter.|
|`-t`|`--timeout`|Amount of time, in minutes, for the Pipeline Scan to wait before reporting an unsuccessful scan if the scan does not complete. Default is 60 minutes, which is also the maximum value. You can also set a timeout with the [Pipeline Scan API](https://docs.veracode.com/r/c_pipe_intro).|
|`-id`|`--issue_details`|Enter true to show detailed messages for each issue in the results summary. The results include a [link to Veracode remediation guidelines](https://docs.veracode.com/r/About_Veracode_SCA_Remediation_Guidance). Default is `false`.|
|`-sd`|`--summary_display`|Enter true to show a human-readable results summary on the console. Default is `true`.|
|`-jd`|`--json_display`|Enter true to show the JSON containing the scan results on the console. Default is `false`.|
|`-V`|`--verbose`|Enter true to display detailed messages in the scan results. Default is `false`.|
|`-so`|`--summary_output`|Enter true to save the scan results as a human-readable file. Default is `false`.|
|`-sf`|`--summary_output_file`|Enter the filename of the scan results summary file. The file is stored in the current directory. Default is `results.txt`.|
|`-jo`|`--json_output`|Enter true to save the scan results in JSON format. Default is true.|
|`-jf`|`--json_output_file`|Rename the JSON file that contains the scan results. The file is stored in the current directory. Default filename is `results.json`.|
|`-fjf`|`--filtered_json_output_file`|Enter the filename in the current directory to save results that violate pass-fail criteria. Default is `filtered_results.json`. <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You must use different filenames for the <code>--json_output_file</code> and <code>--filtered_json_output_file</code> parameters.</p>|
|`-gig`|`--gl_issue_generation`|Enter true to create GitLab issues from discovered flaws. Default is false. <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Before you can use the `--gl_issue_generation` parameter in a Pipeline Scan, you must <a href="https://docs.veracode.com/r/tS9CaFwL4_lbIEWWomsJoA/l4M7BQcShmRkRGf8gOBKwg">create a GitLab access token</a>. If you want to use this parameter when scanning Java applications, you must also <a href="https://docs.veracode.com/r/tS9CaFwL4_lbIEWWomsJoA/j4ms~TIMqdC87efkGWgUFA">configure environment variables to set GitLab base directories</a>. You can use any GitLab subscription to generate GitLab issues.<br>The issue generation feature uses the GitLab API. You can configure it to support custom domains. To use a custom domain, set the GITLAB_URL CI/CD variable to the base URL. For example: <code>GITLAB_URL=https://&lt;GITLAB_URL&gt;/api/v4/projects/</code>. If not set, this value defaults to <code>https://gitlab.com/api/v4/projects/</code></p>|
|`-gvg`|`--gl_vulnerability_generation`|Enter true to create a JSON file from the scan results. GitLab automatically imports the flaws from the JSON file as vulnerabilities. Default is false. <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> To use this parameter, you must define the paths and reports settings in the GitLab CI.</p>|
|`-p`|`--project_name`|Enter the name of the CI/CD code repository that runs a Pipeline Scan. This parameter adds the repository name to the scan results, which can help you track scans across repositories.|
|`-u`|`--project_url`|Enter the source control URL for the CI/CD code repository that runs a Pipeline Scan.|
|`-r`|`--project_ref`|Enter the source control reference, revision, or branch for the CI/CD code repository that runs a Pipeline Scan.|
|`-aid`|`--app_id`|Enter the [application profile](https://docs.veracode.com/r/request_profile) ID for the application you want to upload and scan.|
|`-ds`|`--development_stage`|Enter one these values, which are case-sensitive, for the type of development stage: Development, Testing, Release.|
|`-h`|`--help`|List all the possible commands and parameters for the Pipeline Scan.|
|`-v`|`--version`|Display the Pipeline Scan version.|

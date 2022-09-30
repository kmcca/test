---
"ft:title" : "Add a Jenkins Pipeline Step with Bound Credentials for Static Analysis"
"ft:prettyUrl" : "t_jenkins_pipe"
---
You can add the Veracode Jenkins Plugin to a pipeline job to include [Static Analysis](https://docs.veracode.com/r/c_static_overview) in your build pipeline.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).
- You have [installed the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).
- If you bound your Veracode API credentials using the [Jenkins Binding plugin](https://docs.veracode.com/r/t_jenkins_install_credbinding), you have [generated the script containing the environment variables](https://docs.veracode.com/r/t_binding_creds).

<p font-size="13pt"><b>Steps</b></p>

1. In Jenkins, select **Pipeline Syntax** to display the Snippet Generator page.

2. From the Sample Step dropdown menu, select **veracode: Upload and Scan with Veracode Pipeline**.

3. In the Application Name field, enter the name of the Veracode application profile that you want to scan. If you want to create a new application profile using the provided application name, select the **Create Application** checkbox.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> The name of the application profile must not contain quotation marks.</p>

4. In the Team Name field, enter a comma-separated list of team names to which to assign the application.

5. From the Business Criticality dropdown menu, select the [level of criticality](https://docs.veracode.com/r/review_assurancelevels) of this application.

6. If you want to run the scan from a development sandbox, in the Sandbox Name field, enter the sandbox name. If the sandbox does not already exist, select the **Create Sandbox** checkbox to create a sandbox using the name you entered.

7. In the Scan Name field, enter a name for the scan.

8. In the Upload section, enter filepath patterns to specify which files to include or exclude for uploading to Veracode for scanning.

    Use a comma-separated list of ant-style include patterns relative to the job workspace directory.

9. In the Scan section, enter filename patterns of the uploaded files you want to scan as top-level modules. Use a comma-separated list to specify the filenames in ant-style format. As this is a flat file structure, you do not need to specify folder paths.

10. Optionally, in the Save As section, enter the filename pattern of the files for upload and the replacement filename patterns to which to rename the uploaded files. You can leave these fields blank to not rename the files.

11. Optionally, select the **Wait for scan to complete** checkbox to open the Maximum Wait Time field. Enter the number of minutes that you want the Jenkins job to wait for the scan to complete and pass policy. If the scan does not complete or pass policy within the specified time, the scan continues in the Veracode Platform, but the Jenkins build fails. The default timeout is 60 minutes.

12. For Delete Incomplete Scan, select an option for automatically deleting an incomplete scan, based on its status, to allow the [`uploadandscan`](https://docs.veracode.com/r/r_uploadandscan) action to continue processing. Default is `0`, which specifies to not delete an incomplete scan.

13. Enter your Veracode API credentials. If you [bound your credentials](https://docs.veracode.com/r/t_binding_creds) using the Credentials Binding plugin, enter the username variable and password variable.

14. If you want the entire Jenkins job to fail if the Upload and Scan with Veracode action fails, select the **Fail Build** checkbox.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> If you do not select the <b>Fail Build</b> checkbox, Jenkins does not notify you if the action fails but the job completes.</p>

15. Optionally, if you are using a remote build machine, called a node, and need to copy your binaries to a Jenkins controller server before uploading to Veracode for scanning, select the **Copy Output Remote Files to Controller** checkbox.

    If you do not select this checkbox, the plugin uploads your binaries directly from the remote machine to Veracode. On the remote machine, the plugin first copies the Veracode Java API wrapper JAR files to the temporary directory `{root}/veracode-jenkins-plugin`. Then, the Java API wrapper CLI executes on the remote machine to upload the binaries to Veracode.

16. Select the **Debug** checkbox to display troubleshooting information in the console output window.

17. Select the **Connect using proxy** checkbox, if connecting to Veracode through a proxy host. Then, enter the proxy host information.

18. Click **Generate Pipeline Script**.

    The generated script, which is Apache Groovy code, contains the `veracode` step. This step contains details about your application and the Veracode scan settings.

19. Copy the entire `veracode` script step and add it to your pipeline job.

    You are finished. You can now run your pipeline build. If you are using [bound credentials](https://docs.veracode.com/r/t_binding_creds), continue to the next step.

20. Add the entire `withCredentials` script step to the beginning of your pipeline script.

21. Place the `veracode` step inside the `withCredentials` step.

22. Replace the value for the `vid` parameter with the value from the `usernameVariable` parameter.

23. Replace the value for the `vkey` parameter with the value from the `passwordVariable` parameter.

24. Delete the single quotation marks from the values for the `vid` and `vkey` parameters.

    This code example shows two complete pipeline scripts with bound Veracode API credentials. The `veracode` step is inside the `withCredentials` step. The second, commented-out example includes the optional `timeout` parameter. For parameter descriptions, see [Veracode Jenkins Plugin Script Parameters](https://docs.veracode.com/r/r_jenkins_pipeline_script_params).

    ```groovy
    echo 'Veracode scanning'
        withCredentials([ usernamePassword (
            credentialsId: 'veracode_login', usernameVariable: 'VERACODE_API_ID', passwordVariable: 'VERACODE_API_KEY') ]) {
                // fire-and-forget
                veracode applicationName: "${VERACODE_APP_NAME}", criticality: 'VeryHigh', debug: true, fileNamePattern: '', pHost: '', pPassword: '', pUser: '', replacementPattern: '', sandboxName: '', scanExcludesPattern: '', scanIncludesPattern: '', scanName: "${BUILD_TAG}", uploadExcludesPattern: '', uploadIncludesPattern: 'target/verademo.war', vid: "${VERACODE_API_ID}", vkey: "${VERACODE_API_KEY}"
    
               // wait for scan to complete (includes timeout parameter)
               // veracode applicationName: "${VERACODE_APP_NAME}", criticality: 'VeryHigh', debug: true, timeout: 20, fileNamePattern: '', pHost: '', pPassword: '', pUser: '', replacementPattern: '', sandboxName: '', scanExcludesPattern: '', scanIncludesPattern: '', scanName: "${BUILD_TAG}", uploadExcludesPattern: '', uploadIncludesPattern: 'target/verademo.war', vid: "${VERACODE_API_ID}", vkey: "${VERACODE_API_KEY}"
    }
    ```

    You are finished. You can now run your pipeline build using bound Veracode API credentials.
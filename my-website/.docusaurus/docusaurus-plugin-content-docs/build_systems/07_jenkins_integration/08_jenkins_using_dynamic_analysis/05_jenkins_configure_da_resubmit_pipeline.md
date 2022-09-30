---
"ft:title" : "Configure a Step to Resubmit Dynamic Analysis with Pipeline Builds"
"ft:prettyUrl" : "t_jenkins_configure_da_resubmit_pipeline"
---
You can add a step to your Jenkins pipeline project for performing a [Dynamic Analysis](https://docs.veracode.com/r/c_was_intro) of you application.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).
- You have [installed the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).
- For added security, Veracode highly recommends using the Credentials Binding plugin to manage your credentials. You use the plugin to bind your credentials to environment variables, which prevents your credentials from appearing in the Jenkins interface. See [Protect Veracode Credentials in Jenkins Pipeline Builds](https://docs.veracode.com/r/t_binding_creds).

Veracode recommends using a snippet generator to create code snippets for routinely repeated steps in your build/test/deploy pipeline.

<p font-size="13pt"><b>Steps</b></p>

1. In your Jenkins pipeline project, click **Configure**.

2. Scroll down to the Pipeline section.

3. Click **Pipeline Syntax** to display the Snippet Generator page.

4. From the **Sample Step** dropdown menu, select **veracodeDynamicAnalysisResubmit: Resubmit Veracode Dynamic Analysis**.

5. In the Analysis Name field, enter the name of a Dynamic Analysis that already exists in the Veracode Platform.

6. Enter the maximum duration, in hours, that you want the analysis to run.

7. Select whether to fail the Jenkins build if the analysis fails.

8. Enter your Veracode API credentials.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> If your Veracode API credentials are <a href="https://docs.veracode.com/r/t_binding_creds"> bound to environment variables</a>, you can enter the environment variables for the API ID and API key.</p>

9. Select **Run in debug mode** to collect detailed information about the analysis. The plugin stores the information in the console log of each Jenkins project.

10. If you are using a proxy host to connect to the Veracode Platform, select **Connect using proxy** and enter the proxy host information.

11. Click **Generate Pipeline Script** to generate a script using the selected settings.

    This example shows a script using bound credentials. The values for the Veracode API user ID (`vid`) and API key (`vkey`) are the environment variables that map to the actual credentials in the Jenkins credential store.

    ```
    veracodeDynamicAnalysisResubmit analysisName: 'Dynamic Analysis Test 2', debug: true, failBuildAsScanFailed: true, maximumDuration: 72, vid: 'VERACODE_API_ID', vkey: 'VERACODE_API_KEY'
    ```

13. Copy the pipeline script, which you then add to your pipeline project.

14. Go back to the main page of your pipeline project.

15. Click **Configure** \> **Pipeline**.

16. In the Pipeline section, paste the generated script into the Script field.

17. Delete the quotes from around the values for `vid` and `vkey`.

18. Click **Save**.

<p font-size="13pt"><b>Next Steps</b></p>

Continue to [Configure a Step to Review Dynamic Analysis Results with Pipeline Builds](https://docs.veracode.com/r/t_jenkins_configure_da_review_pipeline).


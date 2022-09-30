---
"ft:title" : "Configure a Step to Review Dynamic Analysis Results with Pipeline Builds"
"ft:prettyUrl" : "t_jenkins_configure_da_review_pipeline"
---
You can add a step to your Jenkins pipeline project to get scan results from a [Dynamic Analysis](https://docs.veracode.com/r/c_was_intro) of your application.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).
- You have [installed the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).
- For added security, Veracode highly recommends using the Credentials Binding plugin to manage your credentials. You use the plugin to bind your credentials to environment variables, which prevents your credentials from appearing in the Jenkins interface. See [Protect Veracode Credentials in Jenkins Pipeline Builds](https://docs.veracode.com/r/t_binding_creds).
- You must have already linked an existing Dynamic Analysis to an application profile with a Veracode policy. See [Manually Link Dynamic Analysis Results to an Application](https://docs.veracode.com/r/t_link_apps). If the Dynamic Analysis is linked to multiple URLs, you cannot view the analysis results in Jenkins. Therefore, you can either unlink URLs until there is only one linked to the Dynamic Analysis, or you can view the results in the Veracode Platform.

Veracode recommends using a snippet generator to create code snippets for routinely repeated steps in your build/test/deploy pipeline.

<p font-size="13pt"><b>Steps</b></p>

1. In your Jenkins pipeline project, click **Configure** \> **Pipeline**.

2. Click **Pipeline Syntax** to display the Snippet Generator page.

3. From the **Sample Step** dropdown menu, select **veracodeDynamicAnalysisReview: Review Veracode Dynamic Analysis Results**.

4. Enter the number of hours to wait for analysis results to be available.

5. Select whether to fail the Jenkins build if the analysis violates a linked Veracode policy.

6. Enter your [API service account credentials](https://docs.veracode.com/r/c_api_credentials3).

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> If your Veracode API credentials are <a href="https://docs.veracode.com/r/t_binding_creds"> bound to environment variables</a>, you can enter the environment variables for the API ID and API key.</p>

7. Select **Run in debug mode** to collect detailed information about the analysis. The plugin stores the information in the console log of each Jenkins project.

8. If you are using a proxy host to connect to the Veracode Platform, select **Connect using proxy** and enter the proxy host information.

9. Click **Generate Pipeline Script** to generate a script using the selected settings.

    This example shows a script using bound credentials. The values for the Veracode API user ID (`vid`) and API key (`vkey`) are the environment variables which map to the actual credentials in the Jenkins credential store.

    ```
    veracodeDynamicAnalysisReview debug: true, failBuildForPolicyViolation: true, vid: 'VERACODE_API_ID', vkey: 'VERACODE_API_KEY' waitForResultsDuration: 1
    ```

10. Copy the pipeline script, which you add to your pipeline project.

11. Go back to the main page for your pipeline project.

12. Click **Configure** \> **Pipeline**.

13. In the Pipeline section, paste the script into the Script field.

14. Delete the quotes from around the values for `vid` and `vkey`.

15. Click **Apply** to save your changes.

16. Go back to the main page for your pipeline project.

17. Click **Build Now** and wait for the build and analysis to complete successfully.

18. Under **Build History**, click a build number.

19. Click **Veracode Dynamic Analysis** to review the results of the analysis.
    
    In the results, you can click the **View Executive Summary** link to view additional information in the Veracode Platform.
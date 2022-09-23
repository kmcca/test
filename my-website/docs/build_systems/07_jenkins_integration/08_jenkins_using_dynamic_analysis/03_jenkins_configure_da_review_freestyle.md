---
"ft:title" : "Configure a Post-Build Action to Review Dynamic Analysis Results with Freestyle Builds"
"ft:prettyUrl" : "t_jenkins_configure_da_review_freestyle"
---
You can add a post-build action to your Jenkins freestyle project to get scan results from a [Dynamic Analysis](https://docs.veracode.com/r/c_was_intro) of your application.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).
- You have [installed the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).
- You have [linked an existing Dynamic Analysis to an application profile with a Veracode policy](https://docs.veracode.com/r/t_link_apps). If the Dynamic Analysis is linked to multiple URLs, you cannot view the analysis results in Jenkins. Therefore, you can either unlink URLs until there is only one linked to the Dynamic Analysis, or you can view the results in the Veracode Platform.

<p font-size="13pt"><b>Steps</b></p>

1.  In your Jenkins freestyle project, go to the Post-build Actions section.

2.  From the **Add post-build action** dropdown menu, select **Review Veracode Dynamic Analysis Results**.

3.  Enter the number of hours to wait for analysis results to be available.

4.  Select whether to fail the Jenkins build if the analysis violates a Veracode policy.

5.  Select whether to use global Veracode API credentials. If you select to use global credentials, continue to step 7.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> If you select to use global credentials, but have not configured them using the API service account credentials, the build fails. See <a href="https://docs.veracode.com/r/t_jenkins_configure_global_credentials_freestyle">Configure Global Credentials with Freestyle Builds</a></p>

6.  In the Veracode Credentials section, enter your Veracode API credentials.

7.  Click **Apply** to save your changes.

8.  Go back to the main page of your freestyle project.

9.  Click **Build Now** and wait for the build and analysis to complete successfully.

10. Under **Build History**, click a build number.

11. Click **Veracode Dynamic Analysis** to review the results of the analysis.

    In the results, you can click the **View Executive Summary** link to view additional information in the Veracode Platform.
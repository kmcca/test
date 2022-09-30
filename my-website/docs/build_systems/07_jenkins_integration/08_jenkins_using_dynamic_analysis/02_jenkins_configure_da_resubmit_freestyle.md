---
"ft:title" : "Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds"
"ft:prettyUrl" : "t_jenkins_configure_da_resubmit_freestyle"
---
You can add a post-build action to your Jenkins freestyle project that submits your application for [Dynamic Analysis](https://docs.veracode.com/r/c_was_intro). 

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).
- You have [installed the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).

<p font-size="13pt"><b>Steps</b></p>

1.  In your Jenkins freestyle project, go to the Post-build Actions section.

2.  From the **Add post-build action** dropdown menu, select **Resubmit Veracode Dynamic Analysis**.

3.  In the Analysis Name field enter the name of a Dynamic Analysis that already exists in the Veracode Platform.

4.  Enter the maximum duration, in hours, that you want the analysis to run.

5.  Select whether to fail the Jenkins build if the analysis fails.

6.  Select whether to use global credentials using your Veracode API credentials. If you select to use global credentials, continue to step 8.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> If you select to use global credentials, but have not configured them using the API service account credentials, the build fails. See <a href="https://docs.veracode.com/r/t_jenkins_configure_global_credentials_freestyle">Configure Global Credentials with Freestyle Builds</a></p>

7.  In the Veracode Credentials section, enter your Veracode API credentials.

8.  Click **Apply** to save your changes.

<p font-size="13pt"><b>Next Steps</b></p>

Continue to [Configure a Post-Build Action to Review Dynamic Analysis Results with Freestyle Builds](https://docs.veracode.com/r/t_jenkins_configure_da_review_freestyle).

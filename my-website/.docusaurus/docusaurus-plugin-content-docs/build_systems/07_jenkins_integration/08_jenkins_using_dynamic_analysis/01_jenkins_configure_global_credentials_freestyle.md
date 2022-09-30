---
"ft:title" : "Configure Global Credentials for Dynamic Analysis in Freestyle Builds"
"ft:prettyUrl" : "t_jenkins_configure_global_credentials_freestyle"
---
You can configure the Veracode Jenkins Plugin to use global Veracode API credentials when running a Dynamic Analysis as a post-build action in freestyle builds.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).
- You have [installed the Jenkins plugin](https://docs.veracode.com/r/t_install_jenkins).

If you are not using global credentials, you can proceed to [Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds](https://docs.veracode.com/r/t_jenkins_configure_da_resubmit_freestyle) and enter your credentials in a post-build action.

<p font-size="13pt"><b>Steps</b></p>

1.  In Jenkins, select **Manage Jenkins** \> **Configure System**.

2.  Scroll down to the Veracode Jenkins Plugin section.

3.  Enter your Veracode API credentials.

4.  If you are using a proxy host to connect to the Veracode Platform, select **Connect using proxy** and enter the proxy host information.

5.  Select **Run in debug mode** to collect detailed information about the analysis. The plugin stores the information in the console log of each Jenkins project.

6.  Click **Apply** to save your changes.

<p font-size="13pt"><b>Next Steps</b></p>

[Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds](https://docs.veracode.com/r/t_jenkins_configure_da_resubmit_freestyle).

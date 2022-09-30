---
"ft:title" : "Configure TeamCity Global Settings"
"ft:prettyUrl" : "c_config_teamcity"
---
You can configure TeamCity to customize the integration of the Veracode TeamCity Plugin.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites](https://docs.veracode.com/r/c_about_teamcity).
- You have [installed the TeamCity plugin](https://docs.veracode.com/r/Install_the_Veracode_TeamCity_Plugin).
- You are logged in to TeamCity as administrator.

<p font-size="13pt"><b>Steps</b></p>

1.  In the Integrations section of the Administration page, select **Veracode** to display the global configuration settings.

2.  In the Fail Build section, ensure the checkbox is selected to cause TeamCity to fail the build if the Veracode upload and scan task fails.

3.  In the Veracode Credentials section, enter your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).

4.  In the Default Values section, select the checkbox to apply defaults to all applications for all TeamCity jobs for these settings:

    - Use the TeamCity project name as the default name for new applications. You can override this setting for individual projects.
    - Use the TeamCity server workspace path and IP address as the default application description. For example: `TeamCity-URL: http://localhost:8080/ Host-Name: user-1234 Workspace-Path:C:\TeamCity\buildAgent\work\8948ef41a3f17e4e (Auto-generated by Veracode Teamcity Plugin)`
    - Use the TeamCity project build number as the default scan name. You can override this setting for individual projects.
     
5.  In the Debug section, select the **Run in debug mode** checkbox to run in debug mode. If you select this option, TeamCity collects detailed information about Veracode scans and stores the information in the console log of each TeamCity project.

6.  If you intend to connect using a proxy, in the Proxy Settings section, select the **Use Proxy** checkbox. Then, provide the specific host, port, username, and password settings for global use in TeamCity.

7.  Optionally, click **Test connection** to confirm that you can connect to the Veracode Platform using the Veracode credentials you provided.

8.  Click **Save**.
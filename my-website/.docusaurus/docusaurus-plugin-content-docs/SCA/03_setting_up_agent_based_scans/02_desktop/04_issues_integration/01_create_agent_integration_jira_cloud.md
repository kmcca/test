---
"ft:title" : "Create an Agent-Based Scanning Integration for Jira Cloud"
"ft:prettyUrl" : "Create_an_Agent_Based_Scanning_Integration_for_Jira_Cloud"
---

Setting up the Veracode Software Composition Analysis agent-based scanning integration for Jira Cloud allows your organization to create Jira issues from within the Veracode Platform.

If you also use Veracode Static Analysis, Veracode recommends you use the [Veracode Integration for Jira Cloud](https://docs.veracode.com/r/c_jira_cloud_about), which offers additional features and greater customization. To integrate your agent-based scan findings with Veracode Integration for Jira Cloud, you must  <a href="https://docs.veracode.com/r/Link_SCA_Projects_to_Applications">link your project to an application profile</a> in the Veracode Platform.


<p font-size="13pt"><b>Before You Begin</b></p>

To set up this integration, you must have the Security Lead [role](https://docs.veracode.com/r/c_role_permissions) in the Veracode Platform and be an administrator of your Jira instance.

This integration works with both Jira Cloud and Jira Server. For Jira Server, the server must be accessible from outside the internet.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.

2. Click the **Agent-Based Scan** tab.

3. Click **Agent-Based Scan Settings** > **Integrations** > **Actions** > **Create Jira Cloud Integration**.

4. Enter a name and server URL for your integration and click **Next**.

5. Click the application link to leave the Veracode Platform and go to your Jira instance.

6. Inside JIRA application link setting, for **URL**, enter `https://sca.analysiscenter.veracode.com`.

7. Click **Create New Link**.

8. If you see a warning saying no response was received from the URL you entered, click **Continue**.

9. In the Application Name field, enter `SourceClear`.

10. From the **Application Type** dropdown menu, select **Generic Application**.

11. Click **Continue**.

12. Click the pencil icon to the right of the newly created application.

13. Select **Incoming authentication** and copy the values you see on step 3 into this screen.

14. Click **Save**.

15. Copy these values:

    -   Consumer Key
    -   Consumer Name
    -   Public Key
    -   Callback URL

16. Click **Save.**

17. In the Veracode Platform, click **Next**.

<p font-size="13pt"><b>Results</b></p>

When you see the Step 3 window, click on the link and select **Allow** to authorize the OAuth application. You now have the ability to create your first ticket template.
---
"ft:title": "Install the Veracode Integration for Jira Cloud"
"ft:prettyUrl": "t_jira_cloud_install"
---
You can install the Veracode Integration for Jira Cloud as a plugin from the Atlassian Marketplace.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode Integration for Jira Cloud does not support team-managed projects.</p>

<p font-size="13pt"><b>Before You Begin</b></p>

Before you can install and use the Veracode Integration for Jira Cloud, you must meet these prerequisites:

-   Supported versions of the software listed in the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix)
-   Permissions to install the Veracode Integration for Jira Cloud
-   Jira user account with permissions to create and modify all Jira issues for all projects to which you are importing flaws
-   Jira Cloud is configured to use specific [state names and transition names](../01_jira_finding_life_cycle.md) for issues. When importing flaws to Jira as issues, the integration uses these names to assign the correct state and automatically make the correct transitions
-   An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Results API and Mitigation API [roles](https://docs.veracode.com/r/c_API_roles)
-   Generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)

<p font-size="13pt"><b>Steps</b></p>

1.  Log in to your Jira Cloud instance as an admin.

2.  From Application Switcher, select **Jira Software**.

3.  Go to **Jira settings** \> **Apps** \> **Find new apps**.

4.  In the Search the Marketplace field, find Veracode Integration for Jira Cloud.

5.  Click **Install** to download and install the Veracode Integration for Jira Cloud.



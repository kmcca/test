---
"ft:title": "Veracode Integration for Jira Cloud"
"ft:prettyUrl": "c_jira_cloud_about"
---
You can use the Veracode Integration for Jira Cloud to import security flaws that Veracode identifies in your application to Jira Cloud.

The Veracode Integration for Jira Cloud manages the import of security flaws from Veracode and creates issues in Jira Cloud for each imported flaw. You can also use the [Veracode Integration for Jira](../04_jira_integration/README.md), which provides the same functionality for Jira Server and Jira Data Center.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode Integration for Jira Cloud does not support team-managed projects.</p>

The Jira integration assigns each unique application finding to a unique Jira issue, created in the designated Jira project. Import criteria can include all open findings from all scans, all findings that affect policy, all unmitigated findings from the most recent scan, or other criteria.

You can choose to import findings on a one-time basis or selectively choose which findings to import. You can also schedule findings imports on an hourly, daily, or weekly basis. You can import findings from a specific application scan or from all your application scans. The integration can also update findings comments on the Veracode Platform, but cannot mitigate findings from within the Jira integration.

<p><span style="font-size: medium;">Jira Users</span></p>

There are two types of Jira users that interact with the Jira Cloud integration. You need to be aware of these user types when installing and using the integration.

- Jira User: this user is an account inside of Jira with permissions to create and modify all Jira issues for all projects to which you are importing flaws.
- Veracode User: this user has access to the Veracode Platform. The integration can only import findings for applications that this user can access. Veracode recommends that this user is an [API service account](https://docs.veracode.com/r/c_about_veracode_accounts).
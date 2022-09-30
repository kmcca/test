---
"ft:title": "Install the Veracode Integration for Jira"
"ft:prettyUrl": "t_jira_deploy"
---
You can install the Veracode Integration for Jira as a plugin from the Atlassian Marketplace.

<p font-size="13pt"><b>Before You Begin</b></p>

The Veracode Integration for Jira has these prerequisites:

-   You are running a supported version of Jira listed in the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix).
-   Your Jira instance must use the [state names and transition names](https://docs.veracode.com/r/c_jira_finding_cycle) for the integration to be able to appropriately assign the correct state and automatically make the correct transitions.
-   If you are using Jira Data Center, in the `cluster.properties` file, you must specify the value of the `jira.shared.home` property as the common file location for processing findings import data. The property could be a local directory or network file system (NFS) directory that all Jira nodes access. If you are using an NFS location, you must perform drive mapping in each Jira node.
-   You have the necessary permissions to write to the Jira `HOME` directory.
-   If you are using Jira Data Center, you must have already moved the data, plugins, logos, import, and export folders from the local to shared `HOME` directory.
-   Have an [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the [Results API and Mitigation API roles](https://docs.veracode.com/r/c_API_roles_details). Veracode recommends that the administrator of your account creates a separate API service account specifically for this Jira integration. If your organization uses [team access](https://docs.veracode.com/r/admin_team) to scan results, add the new API service account to the teams associated with the applications that you are scanning. The integration imports all findings from applications to which the API service account has access.
-   Use a Jira user account that has the permissions for creating and modifying all Jira issues for all the projects into which you are importing findings data.
-   The system running the Jira server must have network connectivity.
-   Veracode has these minimum hardware recommendations for Jira server:
    -   Processor (CPU): Quad Core 2GHz
    -   Memory: 32GB RAM
    -   Storage: 10GB for the database

<p font-size="13pt"><b>Steps</b></p>

1.  Go to the [Atlassian Marketplace](https://marketplace.atlassian.com/).

2.  Search for `Veracode`.

3.  In the search results, click the link for the Veracode Integration for Jira.

4.  Download the plugin and follow the installation instructions.

5.  If prompted, re-index Jira.

6.  In Jira, select **Administration** > **Manage apps** > **Manage apps**.

    If the installation completes successfully, you see the Veracode Integration for Jira on the Manage apps page.

<p font-size="13pt"><b>Next Steps</b></p>

[Configuring the Veracode Integration for Jira](../03_configure_jira_integration/README.md).
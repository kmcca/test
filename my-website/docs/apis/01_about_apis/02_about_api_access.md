---
"ft:title" : "Accessing the Veracode APIs"
"ft:prettyUrl" : "c_API_roles"
---
To be able to access the Veracode APIs, you must have a [Veracode account](https://docs.veracode.com/r/c_about_veracode_accounts) with the required roles for performing specific tasks with the APIs.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>. Also, ensure you access the APIs with the <a href="https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs">domain for your region</a>.</p>

Ensure that your IP address is in the list or range of addresses in the [Allowed IP Addresses](https://docs.veracode.com/r/admin_ip) field of your user account login settings. If the IP range is set incorrectly, edit the Allowed IP Addresses field to include the IP address of the location of your login.

You must have the [Administrator or Team Admin role](https://docs.veracode.com/r/c_role_permissions) to create API service accounts. You configure API user roles and permissions on the User Account page in the Veracode Platform. To use the Admin or Archer Report XML APIs, you must have the **API Service Account** checkbox selected (API service account) and the respective API user roles selected in the Login Settings section of the User Account page in the Veracode Platform. You can also assign roles with the [Identity REST API](https://docs.veracode.com/r/c_identity_create_api) or the [Admin XML API](https://docs.veracode.com/r/r_createuser).

You can restrict API service accounts to teams, limiting their access to only data for applications that are associated with that team. Select **Restrict to Selected Teams**, then choose the appropriate team. You can also restrict the scan types a user can perform.

If you want to create a new user account with the APIs, you must pass both the role parameters and the scan type permissions. For a user account, the role parameters (case-sensitive) are:

- `Administrator`
- `Creator`
- `Executive`
- `Mitigation Approver`
- `Policy Administrator`
- `Reviewer`
- `Security Lead`
- `Submitter`
- `Security Insights`
- `Veracode eLearning`

The scan permission types are: 

- `Static Scan`
- `Dynamic Scan`
- `Manual Scan`
- `Discovery Scan`
- `DynamicMP Scan`
- `All Scan Types`

[Team Administrators](https://docs.veracode.com/r/c_role_permissions) can grant only these API roles to users they manage: Results API, Upload and Scan API, Mitigation API, Upload API - Submit Only, and Greenlight API.

If you set the visibility for an application to [Teams & Security Leads](https://docs.veracode.com/r/Assign_an_Application_to_Teams), before a user account can access the application using the Veracode APIs, that account must have the Reviewer, Creator, or Submitter user roles and be a member of the specified team.
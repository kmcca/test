---
"ft:title" : "Understanding API Roles"
"ft:prettyUrl" : "c_API_roles_details"
---

This section describes the non-API user roles that your user account must have before you can use the APIs to automate specific tasks.

If you are a member of a team, the access of the team to specific accounts also determines your permissions.

To use the Upload, Results, and Mitigation and Comments APIs, you must select one of these checkboxes:

-   **API Service Account** checkbox and the respective API user role
-   The respective non-API user roles ([user account](https://docs.veracode.com/r/c_role_permissions)), such as Reviewer or Security Lead

<p><span style="font-size: medium;">Archer Report API</span></p>

| API Role      | User Account Role | Tasks                                                     |
|---------------|-------------------|-----------------------------------------------------------|
| Archer Report | Submitter         | <ul><li>Run Archer reports</li><li>View reports</li></ul> |

<p><span style="font-size: medium;">Admin API</span></p>

If you intend to use the [Admin API](https://docs.veracode.com/r/admin_api) to create a new user account, you must pass the role parameters and the scan type permissions.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The role parameters for the user account are case-sensitive.
</p>

The user role parameters are:

-   Administrator
-   Creator
-   Executive
-   Mitigation Approver
-   Policy Administrator
-   Reviewer
-   Security Lead
-   Submitter
-   Security Insights
-   eLearning

The scan permission types are:

-   Static Scan
-   Dynamic Scan
-   Manual Scan
-   All Scan Types

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> When the visibility for an application is set to <a href="https://docs.veracode.com/r/Assign_an_Application_to_Teams">Teams & Security Leads</a>, before a user account can access the application using the Veracode APIs, that account must have the Reviewer, Creator, or Submitter user roles and be a member of the specified team.
</p>

| API Role | User Account Role                                                                | Tasks                                                                                                                                                                                                                                                                                                                                                        |
|----------|----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Admin    | Security Lead, Creator, or Submitter, depending on the task you want to perform. | <ul><li>Create login account</li><li>Access Admin API</li><li>Delete team</li><li>Create a curriculum</li><li>Application portfolio</li><li>Manage account level eLearning</li><li>Assign application to any team</li><li>Assign application to team</li><li>Edit team</li><li>Create team</li><li>Edit login account</li><li>Delete login account</li></ul> |

<p><span style="font-size: medium;">Greenlight API </span></p>

The Greenlight API User role is only available to organizations with active Veracode Greenlight subscriptions.

| API Role            | User Account Role   | Tasks                                                                                     |
|---------------------|---------------------|-------------------------------------------------------------------------------------------|
| Greenlight API User | Greenlight IDE User | <ul><li>Submit code for Greenlight scans</li><li>Review Greenlight scan results</li></ul> |

<p><span style="font-size: medium;">Mitigation and Comments API</span></p>

| API Role                | User Account Role                                        | Tasks                                                                                                |
|-------------------------|----------------------------------------------------------|------------------------------------------------------------------------------------------------------|
| Mitigation              | Reviewer or Security Lead                                | <ul><li>View results</li><li>Update results</li><li>Approve or reject proposed mitigations</li></ul> |

<p><span style="font-size: medium;">Results API</span></p>

| API Role | User Account Role         | Tasks                                                                                                                                                                                                                              |
|----------|---------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Results  | Reviewer or Security Lead | <ul><li>View reports</li><li>View results</li><li>Export custom data</li><li>View the list of sandboxes</li><li>Access Results API</li><li>Download build and application results data, and summary and detailed reports</li></ul> |

<p><span style="font-size: medium;">Upload and Scan API</span></p>

| API Role        | User Account Role                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Tasks                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Upload and Scan | Security Lead, Creator, or Submitter, depending on the task you want to perform. <br><br> A user with the Creator role can only create application profiles for teams in which the Creator is a member. The Submitter role can submit a scan request. The Security Lead role can perform all tasks. API users need the Upload and Scan API role to create a new application using Veracode Static for Visual Studio and to create sandboxes using the Veracode Jenkins Plugin. | <ul><li>Ability to enable applications for next day consultations for Creation and Update</li><li>Change business criticality of the application</li><li>Delete a sandbox scan</li><li>Create a sandbox scan for an application</li><li>Change the Archer name of an application</li><li>Manage policies</li><li>Create a sandbox in an application</li><li>View the list of sandboxes in an application</li><li>Create a policy scan for an application</li><li>Create a new application</li><li>Delete an application</li><li>Delete a policy scan</li><li>Submit a pipeline scan</li><li>Use the Dynamic Analysis REST API</li></ul> |

<p><span style="font-size: medium;">Upload API - Submit Only</span></p>

This role can also create and delete scan requests, and has the ability to edit builds before rescanning the application. However, this role does not allow users to create new applications, including users of the Veracode integrations.

| API Role             | User Account Role | Tasks                                                                                                                                                                                                                                                                                                                                                                     |
|----------------------|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Upload - Submit only | Submitter         | <ul><li>Create a new build for an existing application profile</li><li>Upload files to a build</li><li>Begin prescan</li><li>Check prescan status</li><li>Submit a scan</li><li>Delete a policy scan</li><li>Delete a sandbox scan</li><li>Create a policy scan</li><li>Create a sandbox scan</li><li>Submit a pipeline scan</li><li>View the list of sandboxes</li></ul> |


---
"ft:title" : "Understanding User Roles and Permissions"
"ft:prettyUrl" : "c_role_permissions"
---

This section provides details about the permissions available to each role on the Veracode Platform. To see which roles are often relevant to different users in your organization, see [Common Roles for User Accounts](https://docs.veracode.com/r/Common_Roles_for_User_Accounts).

To grant access to the Veracode APIs, administrators assign the necessary [API roles](https://docs.veracode.com/r/c_API_roles) to users with an [API service account](https://docs.veracode.com/r/c_about_veracode_accounts). To see the roles assigned to your account, you can click **Your Account** from the top navigation menu in the Veracode Platform.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Do not share your account credentials for the Veracode Platform with other users.
</p>

**Administrator**

Can manage users, teams, and SAML settings. Only Veracode Technical Support can grant Administrator access. A user with the Administrator and eLearning roles is considered an eLearning administrator and can manage Veracode eLearning administration tasks.

**Creator**

Can create, edit, and delete application profiles, as well as request and delete scans for applications that belong to the user's teams. Can only create application profiles for teams in which the user with the Creator role is a member. Can assign applications to teams. Can allow next-day consultations for an application. Can view the list of applications to which you have access. Can also promote a sandbox scan to a policy scan and delete sandbox scans. You can assign the Creator role for specific scan types or for all scan types. In addition, if your [user account](https://docs.veracode.com/r/c_about_veracode_accounts) is restricted to specific scan types, you can only request scans of that type.

**Delete Scans**

Can delete scans. To be able to delete scans, you must also have the Security Lead or Creator role. Can view the list of applications to which you have access.

**eLearning**

Can access Veracode eLearning courses, assessments, and/or the Knowledge Base.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Assigning a role to an eLearning user (learner) consumes one of your purchased Veracode eLearning seats when the learner launches a course. If a learner does not launch a course, you can assign the role to another user. You can only assign as many roles as you have purchased seats.
</p>

**Executive**

Can access Veracode Analytics and reports for all applications. Users with the Executive role must also have the eLearning role to access the Veracode eLearning summary reports. Can view the list of applications to which you have access.

**Greenlight IDE User**

Can access the Veracode Greenlight plugin in your IDE, perform Greenlight scans, and review Greenlight scan results. This role is only available to organizations that have active Veracode Greenlight subscriptions.

**Mitigation Approver**

Can approve mitigations for flaws. Can view the list of applications to which you have access.

**Policy Administrator**

Can access the Policies page, enabling the ability to create and edit policies, set default policies and notification rules, and assign different policies to applications. When assigned in combination with the Creator or Security Lead role, you can change policy assignments for individual applications using the application profile.

**Reviewer**

Can access reports and flaw details for applications that belong to the user teams, and propose mitigations, but cannot access the review modules page. Can review scan results and scan reports for sandboxes. Can view the list of applications to which you have access.

**Sandbox Administrator**

Can create development sandboxes for scanning code in development for applications associated with the user account. For applications which the Sandbox Administrator can access, can edit or delete development sandboxes and propose mitigation comments.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You use the Sandbox Administrator role in addition to another role (Creator, Submitter, Reviewer, or Security Lead).
</p>

**Sandbox User**

Can create and edit development sandboxes that enable scanning code in development for applications that belong to the user teams. Can scan code within a development sandbox, delete their scan, review results of a sandbox scan, add comments, and propose mitigations. You can promote the sandbox scan to a policy scan, which counts toward your policy compliance score, if you:

   - Have the Sandbox User role with the Creator or Submitter role
   - Have All Scan Types or Static Scan selected

**Security Insights**

Can access Veracode Analytics where the user can view scan metrics of applications in the user's team portfolio, and custom reports.

**Security Labs User**

Can access the Veracode Security Labs interactive training labs.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Assigning this role to a Veracode Security Labs user consumes one of your purchased Security Labs seats. You can see the number of remaining seats by clicking the Security Labs User help icon <img src="../images/iHelp_icon.png"> when assigning roles on the Admin page.
</p>

**Security Lead**

Can create, edit, and delete application profiles. Can access Veracode Analytics, reports, and flaw details for all applications. Can submit applications and approve scan requests made by Creators and Submitters. Can assign applications to teams. Can review all applications and scans, including receiving all notifications for these applications and scans, without any restrictions or team assignment limitations. Can allow next-day consultations for an application. Can promote a sandbox scan to a policy scan.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You can assign the Security Lead role for all scan types or only for specific scan types. A scan type restricted assignment limits the type of scans you can create.
</p>

**Submitter**

Can request scans for applications that belong to the user's teams, has access to the review modules page, and can upload binaries. Can view the list of applications to which you have access. Cannot create, edit, or delete applications, or delete scans. If you are a vendor receiving a third-party scan request to submit a scan, you need to accept the third-party scan request first. Can promote a sandbox scan to become a policy scan. Can create, rename, and delete agents and regenerate agent tokens in Veracode Software Composition Analysis.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You can assign the Submitter role for all scan types, or only for specific scan types. A scan type restricted assignment limits the type of scans you can submit.
</p>

**Team Admin**

Can manage users, including creating new users, resetting passwords, and updating roles. Can only view or manage users who are in the [team](https://docs.veracode.com/r/admin_team) that the team admin manages. Can add or remove team memberships from a user who is in one of the teams managed by the team admin. Cannot add users to teams that the team admin does not manage. Team admins cannot edit the roles for users who have the Administrator, Executive, Policy Administrator, Security Lead, or Workspace Administrator roles. Cannot create teams or [business units](https://docs.veracode.com/r/t_add_business_unit), both of which require the Administrator role. When the administrator creates a user with the Team Admin role, the administrator assigns [team membership](https://docs.veracode.com/r/admin_team) to that user.

**Vendor Manager**

Can view the list of all third-party vendors for the organization. This role may not be available for your account.

**Workspace Administrator**

Can edit and delete workspaces in Veracode Software Composition Analysis. Can create, edit, and delete agents in a workspace. Can add teams to a workspace and remove them. Can manage rules in a workspace and view workspace reports. Can create and comment on issues. Can manage project settings.

**Workspace Editor**

Can create, edit, and delete agents in a workspace in Veracode Software Composition Analysis. Can manage rules in a workspace and view workspace reports. Can create and comment on issues. Can manage project settings.

|Action|Administrator|Creator|Delete Scans|Security Lead|Submitter|
|------|-------------|-------|------------|-------------|---------|
|Create Application Profile| |X| |X| |
|Bulk Add Applications| | | |X| |
|Assign Application to Team| |X| | | |
|Request Manual, Static, or Pipeline Scan| |X| |X|X|
|Request Discovery Scan|X|X| |X|X|
|Delete Scans| |X|X|X| |

<br>

|Action|Administrator|Creator|Executive|Reviewer|Security Lead|
|------|-------------|-------|---------|--------|-------------|
|Comment on Static Results| | | | |X|
|View or Delete File Exchange Files|X| | | |X|
|Download Discovery Results|X| |X|X|X|
|Download XML Results| | |X|X|X|
|Download Discovery Site Lists|X|X| | |X|

<br>

|Action|Executive|Mitigation Approver|Policy Administrator|Reviewer|Security Lead|Submitter|Vendor Manager|Security Insights|Security Labs User|
|------|---------|-------------------|--------------------|--------|-------------|---------|--------------|-----------------|------------------|
|View Analytics|X| | | |X| | |X| |
|View Reports|X| | |X|X| | | | |
|Access eLearning|X| | | | | | | | |
|Access Security Labs| | | | | | | | |X|
|Propose Mitigations| | | |X|X| | | | |
|Approve Mitigations| |X| | | | | | | |
|Create Policies| | |X| | | | | | |
|View Vendors Page| | | | | | |X| | |
|Publish Results| | | | |X| | | | |

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Users with the Executive role must <b>also</b> have the eLearning role to be able to access eLearning summary reports. Users who are members of the team associated with the application can accept third-party terms or scan requests. Users with both the Reviewer and Security Insights role can view analytics only for the teams for which they have access.
</p>

<p><span style="font-size: medium;">Dynamic Analysis Roles</span></p>

The following tables summarize the Dynamic Analysis permissions available to certain roles on the Veracode Platform.

|Action|Administrator|Creator|Submitter|Reviewer|Security Lead|
|------|-------------|-------|---------|--------|-------------|
|Request/Create/ Submit Analysis|X|X|X| |X|
|Upload or Enter URLs|X|X|X| |X|
|Import URLs From Applications|X|X|X| |X|
|Turn on Application Auto-Linking|X| | | |X|
|Manually Link Results to Application|X|X|X| |X|
|Assign Teams|X|X|X| |X|

<br>

|Action|Creator|Submitter|Reviewer|Security Lead|
|------|-------|---------|--------|-------------|
|Edit Analysis and Schedule|X|X| |X|
|Edit Scan Configuration|X|X| |X|
|Add or Delete Scan from Existing Analysis|X|X| |X|
|View Results| | |X|X|
|View Status|X|X|X|X|
|View Analysis Configuration|X|X| |X|
|Delete Analysis|X|X| |X|
|View Vulnerability Summary|X|X|X|X|

<p><span style="font-size: medium;">Sandbox Capabilities</span></p>

The following table summarizes the Sandbox permissions available to each role on the Veracode Platform.

Developers can create sandboxes within existing application profiles, and use them to submit the application code for analysis while still in development. Sandbox scans do not affect the developer's ability to run a formal policy scan of the application, and the results of the sandbox scans do not degrade the policy status or flaw metrics of the production version of the application.

|Action|Creator|Submitter|Reviewer|Sandbox Administrator|Sandbox User|Security Lead|
|------|-------|---------|--------|---------------------|------------|-------------|
|Create Sandbox Profile|X| | |X| |X|
|Delete Sandbox|X| | |X| |X|
|Create Policy Scan|X|X| | | |X|
|Submit Policy Scan|X|X| | | |X|
|Create Sandbox Scan|X|X| | |X|X|
|Submit Sandbox Scan|X|X| | |X|X|
|Review Scan Results| | |X| |X|X|
|Review Scan Reports| | |X| |X|X|

<p><span style="font-size: medium;">Veracode Software Composition Analysis</span></p>

|Action|Mitigation Approver|Security Lead|Executive|Creator|Reviewer|Submitter|Workspace Administrator|Workspace Editor|
|------|-------------------|-------------|---------|-------|--------|---------|-----------------------|----------------|
|View the SCA Portfolio Page| |X|X|X|X|X|X|X|
|Create and Delete Applications| |X| |X| | | | |
|Edit Applications| |X| |X| | | | |
|Add Teams to Applications| |X| |X| | | | |
|View All Applications| |X|X| | | | | |
|View Specific Applications| |X|X|X|X| | | |
|Request SCA \(Static\) Scans| |X| |X| | | | |
|Propose Mitigations| |X| | |X| | | |
|Approve Mitigations|X| | | | | | | |
|View the Workspace Portfolio Page| |X|X|X|X| |X|X|
|Create Workspaces| |X| |X| | | | |
|Delete Workspaces| |X| |X| | |X| |
|Edit Workspaces| |X| |X| | |X| |
|Add Teams to Workspaces| |X| |X| | |X| |
|View All Workspaces| |X|X| | | | | |
|View Specific Workspaces| |X|X| |X| |X|X|
|Manage Projects| |X| | | | |X|X|
|Link Projects to Applications| |X| | | | |X|X|
|Manage Agent-Based Scan Rules| |X| | | | |X|X|
|Manage Integrations| |X| | | | | | |
|Manage Agents| |X| | | |X|X|X|
|Ignore and Unignore Issues|X| | | | | | | |

<p><span style="font-size: medium;">Use APIs with a User Account </span></p>

The Upload Using the Veracode Plugins permission is available to the Submitter role on the Veracode Platform.

The Create Application Using the Veracode Plugins permission is available to the Creator role on the Veracode Platform.


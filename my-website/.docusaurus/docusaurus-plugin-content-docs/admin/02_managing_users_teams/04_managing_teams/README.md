---
"author": ["Kevin McCarthy"]
"ft:title": "Managing Teams"
"ft:prettyUrl": "admin_team"
---
You can use a team to grant users access to applications. You can [assign an application to a team](https://docs.veracode.com/r/Assign_an_Application_to_Teams) when you create the application profile or when viewing details of the application. Administrators can assign users to teams to access applications. If you are a [Team administrator](https://docs.veracode.com/r/c_role_permissions), you can only manage users who belong to your team.

As a team administrator, you can only edit team members who are not team administrators.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Team membership affects only users with the Submitter and Reviewer roles. Security Leads and Executives can see applications across all teams. Administrators have limited access to all applications, for instance to assign the application to teams.
</p>

From the Administration page, you can [create new teams](https://docs.veracode.com/r/Create_a_Team_in_the_Veracode_Platform), [manage existing teams](https://docs.veracode.com/r/Update_a_Team_in_the_Veracode_Platform), or [remove teams](https://docs.veracode.com/r/Delete_a_Team_in_the_Veracode_Platform).

<p><span style="font-size: medium;">Managing Teams as a Team Administrator</span></p>

If you have the [Team Admin role](https://docs.veracode.com/r/c_role_permissions), you cannot create teams, but you can manage the users in your team.

Team administrators can access the **Users** and **Teams** tabs on the Administration page. Team administrators can view only those users on the teams that they manage.

Team administrators can assign these [roles](https://docs.veracode.com/r/c_role_permissions) to members of their teams:

-   Creator
-   Delete Scans
-   Mitigation Approver
-   Policy Administrator
-   Reviewer
-   Sandbox Administrator
-   Sandbox User
-   Security Insights
-   Submitter
-   Vendor Manager
-   Workspace Editor

Team administrators can create and manage API service accounts with these [roles](https://docs.veracode.com/r/c_API_roles):

-   Greenlight API User
-   Mitigation API
-   Results API
-   Upload and Scan API
-   Upload API - Submit Only

<p><span style="font-size: medium;">Team Access to APIs</span></p>

When you set the visibility of an application to [Teams & Security Leads](https://docs.veracode.com/r/request_profile), a user account with the Reviewer, Creator, or Submitter user role must be a member of the specified team to be able to access that application using the APIs.

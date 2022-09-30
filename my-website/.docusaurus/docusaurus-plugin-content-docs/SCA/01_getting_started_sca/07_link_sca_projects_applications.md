---
"ft:title" : "Link SCA Projects to Applications"
"ft:prettyUrl" : "Link_SCA_Projects_to_Applications"
---

You can link the projects you create for Veracode Software Composition Analysis agent-based scans to your Veracode Platform application profiles to enable a unified view of your results for all Veracode scans and include agent-based scan results in your application policy evaluations.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Security Lead, Workspace Administrator, or Workspace Editor [role](https://docs.veracode.com/r/c_role_permissions) to link projects to applications.

<p font-size="13pt"><b>Overview</b></p>

Linking a project to an application sends the inventory of that project to the application profile, allowing the application profile to reflect all libraries and vulnerabilities found through agent-based scans.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you modify the filenames of third-party libraries, it may lead to duplicate findings when you perform an agent-based scan and an upload scan of the same application.
</p>


You can link multiple projects to an application. If you want to link one project to multiple applications, you need to scan that project under multiple [workspaces](https://docs.veracode.com/r/Create_a_Veracode_SCA_Workspace), then link each instance of that project to a different application.

To include agent-based results in the policy evaluation for your application, you must perform at least one upload scan of the application before linking an agent-based scanning project to the application.

To extract findings from linked projects using an API, Veracode recommends you use the [Findings REST API](https://docs.veracode.com/r/c_findings_v2_intro).

<p font-size="13pt"><b>Steps</b></p>

1. Go to **Scans & Analysis** > **Software Composition Analysis**.

2. Click the **Agent-Based Scan** tab.

3. Select a workspace.

4. Click **Projects**.

5. Select the project you want to link to an application.

6. Click **Settings** > **Link to Application**.

7. Select an application from the dropdown menu.

8. Click **Save**.

    The application now appears in the Linked Application column of the Project List table. The project is now included in the Linked Projects column of the Applications list on the **Upload and Scan** tab.

<p font-size="13pt"><b>Results</b></p> 

   After you link a project to an application, Veracode includes the findings from agent-based scans of that project in your application results and [Veracode reports](https://docs.veracode.com/r/c_results_reports), displaying them exactly like the findings from scans of uploaded applications. You can also access the results with the [`detailedreport.do`](https://docs.veracode.com/r/r_detailedreport) API call.

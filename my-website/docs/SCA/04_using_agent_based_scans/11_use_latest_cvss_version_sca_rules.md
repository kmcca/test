---
"ft:title" : "Use the Latest CVSS Version in SCA Rules"
"ft:prettyUrl" : "Use_the_Latest_CVSS_Version_in_SCA_Rules"
---

You can use Common Vulnerability Scoring System (CVSS) version 3 in your agent-based scanning rules to evaluate your vulnerabilities against the latest version of the standard.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Security Lead, Workspace Administrator, or Workspace Editor [role](https://docs.veracode.com/r/c_role_permissions) to edit the CVSS version for a workspace rule. You must have the Security Lead role to edit the CVSS version for an organization rule.

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, select **Scans & Analysis** \> **Software Composition Analysis**.

2.  Click the **Agent-Based Scan** tab.

3.  Select a workspace.

4.  Click the **Custom Rules** tab.

5.  Click **Edit**.

6.  Choose a rule control you want to modify or click **Add control** to create a new control.

7.  For **Level**, choose if you want violations of this control to result in an error or a warning.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Errors result in a build failure. Warnings result in log entries to the continuous integration systems, but they do not cause a build failure.
</p>

8.  Expand the control row to display all condition options.

9.  From the **Severity** dropdown menu, select the CVSS score you want to use for this control.

10. If you want to generate issues based on the CVSS severity, select the **Create Issue** checkbox.

11. Click **Save**.



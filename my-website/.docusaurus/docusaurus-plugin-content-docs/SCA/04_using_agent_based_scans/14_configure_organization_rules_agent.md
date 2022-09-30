---
"ft:title" : "Configure Organization Rules for Agent-Based Scanning"
"ft:prettyUrl" : "t_int_create_org_rules"
---

To ensure consistency and remove the redundancy of creating rules for each workspace, you can configure a custom set of rules you can apply to any of the workspaces in your organization.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You cannot enforce organization rules in My Workspace.
</p>

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Security Lead [role](https://docs.veracode.com/r/c_role_permissions).

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.

2.  Click the **Agent-Based Scan** tab.

3.  Click **Agent-Based Scan Settings**.

4.  Click **Rules**.

5.  In the Enforce Organization Rules Across Workspaces field, make one of these selections:

    - Click **Yes** to apply the organization rules to your workspaces.
    - Click **No** to make the organization rules an optional selection at the workspace level.
    
    Enforcing organization rules overrides the rules set at the workspace level.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If organization rules are enforced, then you turn them off, they are still applied to workspaces until you change the rules at the workspace level.
</p>

6. If you enforce the organization rules across workspaces, select one of these options:

    -   To enforce the rules for every workspace, select **All workspaces**.
    -   To exclude specific workspaces from enforcement, select **All workspaces except the following**, then select the workspaces to which you do not want the organization rules to apply.
 
7. Click **Save**.

8. Click **Enforce Rules**.

9. In the Define Organization Rules section, select one of these options:

    -   Select **Veracode Defaults** to set the default Veracode rules as your organization rules.
    -   Select **Custom Rules** to configure a custom set of rules for your organization.
10. If you select **Custom Rules**, click **Edit**, then configure your [custom rules](https://docs.veracode.com/r/c_sc_policies_custom).



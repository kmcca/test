---
"ft:title" : "Actions of Controls in Agent-Based Scanning Rules"
"ft:prettyUrl" : "Actions_of_Controls_in_Agent_Based_Scanning_Rules"
---

The action for a control defines what happens automatically when the condition evaluates to `false`.

If you select **Create Issue**, Veracode creates an issue when the condition is false and the control is violated at scan time.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Creating an issue from a rule does not automatically create issues in third-party applications. However, if you have an integration to Jira or GitHub set up for agent-based scanning, you can manually create a Jira or GitHub issue from a Veracode SCA issue in the Veracode Platform.
</p>
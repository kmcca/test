---
"ft:title": "Set the Mitigations Field to Read-Only in Jira"
"ft:prettyUrl": "t_jira_mitigate_readonly"
---
Veracode recommends that you do not allow the Jira users in your organization to edit the Mitigations Status and Comments field of imported finding issues. To prevent users from changing this field, you can set it to read-only.

<p font-size="13pt"><b>Steps</b></p>

1.  On your Jira system, download and install ScriptRunner for Jira from the [Atlassian Marketplace](https://marketplace.atlassian.com).

2.  In Jira, select **Administration** \> **Manage apps** \> **Behaviours**.

3.  In the Add Behaviour section, in the Name field, enter Make Mitigation Status and Comments read-only.

4.  Click **Add**.

5.  Click **Add Mapping** next to the behaviour you added.

6.  In the Fields section, click **Readonly**.

7.  In the Add Field dropdown menu, select **Mitigation Status and Comments** and click **Add**.

8.  Click **Save**. In the Jira issues of imported findings, the Mitigation Status and Comments field is shaded to indicate that it is read-only.
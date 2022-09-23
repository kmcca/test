---
"ft:title" : "Edit a Policy"
"ft:prettyUrl" : "t_edit_policy"
---
You can edit a custom policy at any time. If you edit a policy that is assigned to any applications, Veracode automatically re-evaluates the applications against the updated policy.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Policy Administrator [role](https://docs.veracode.com/r/c_role_permissions) to edit policies.

<p font-size="13pt"><b>Overview</b></p>

You can also edit a policy with the [Policy API](https://docs.veracode.com/r/c_policy_rest_api).

<p font-size="13pt"><b>Steps</b></p>

1.  Go to **Policies** \> **Policies** at the top of the Veracode Platform.

2.  Find the policy you want to edit from the Policies table.

3.  Click the Actions menu and select **Edit Policy**.

4.  Make any necessary changes to the policy name or description and click **Next**.

5.  Add, delete, or edit any of the [rules](https://docs.veracode.com/r/c_policy_rules), [evaluation timeframe](https://docs.veracode.com/r/c_policy_eval_time), [grace periods](https://docs.veracode.com/r/c_policy_grace_period), and [custom severities](https://docs.veracode.com/r/c_policy_custom_severities) and click **Next**.

6.  Make any necessary changes to the scan requirements and click **Finish**.

<p font-size="13pt"><b>Results</b></p>

After you successfully edit the policy, the Veracode Platform displays a confirmation message and sends an email to members of the team associated with any applications to which the policy is assigned.

---
"author": ["Scott Jordan"]
"ft:lang": "en-US"
"ft:title": "Create a Policy"
"ft:prettyUrl": "t_create_policy"
---

Policies must include one or more of the following types of requirements to which an application must adhere: rules, evaluation timeframes, scan requirements, and remediation grace periods. You define the requirements while creating a new policy.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Policy Administrator [role](https://docs.veracode.com/r/c_role_permissions) to create policies.

<p font-size="13pt"><b>Overview</b></p>

You can also create a policy with the [Policy API](https://docs.veracode.com/r/c_policy_rest_api).

<p font-size="13pt"><b>Steps</b></p>

1.  Go to **Policies** \> **Policies** at the top of the Veracode Platform.

2.  Click **Add New Policy**.

3.  Enter the name of the new policy. This policy name appears in these locations:

    -   Applications list

    -   Application profile

    -   Reports

    -   Results from the Results and Archer APIs

4.  Enter a detailed description of the policy. This policy description appears in the application scan results report.

5.  Click the **Use as Vendor Policy** switch if you want to use this policy to calculate scan results that [vendors share with you](https://docs.veracode.com/r/c_shared_reports).

6.  Click **Next**.

7.  Add the [rules](https://docs.veracode.com/r/c_policy_rules), [evaluation timeframe](https://docs.veracode.com/r/c_policy_eval_time), [grace periods](https://docs.veracode.com/r/c_policy_grace_period), and [custom severities](https://docs.veracode.com/r/c_policy_custom_severities) that you want to include in the policy.

8.  Click **Next**.

9.  Select the [scan requirement frequency](https://docs.veracode.com/r/c_policy_scan_reqs) for either all scan types or specific scan types.

10. Click **Finish**.

<p font-size="13pt"><b>Results</b></p>

After you successfully create the policy, the Veracode Platform displays a confirmation message.

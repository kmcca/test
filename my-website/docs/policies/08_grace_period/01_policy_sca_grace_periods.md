---
"ft:title" : "Apply Grace Periods to Veracode SCA Policy Rules"
"ft:prettyUrl" : "Apply_Grace_Periods_to_Veracode_SCA_Policy_Rules"
---
You can set distinct grace periods for each of your Veracode Software Composition Analysis policy rules in the same policy in which you define grace periods for other scan types. You can also set grace periods for specific CVSS score ranges.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Policy Administrator [role](https://docs.veracode.com/r/c_role_permissions).

<p font-size="13pt"><b>Overview</b></p>

For Veracode SCA findings, Veracode evaluates newly-announced vulnerabilities as new findings, so grace periods apply from the announcement date. For example, a Veracode SCA upload scan identifies a component on May 1 and, then, a vulnerability with a CVSS score of 8.0 is announced in that component on June 15. If you have a 30-day grace period for findings with a score of 8.0 and above, you must resolve the vulnerability by July 15 to pass policy.

<p font-size="13pt"><b>Steps</b></p>

1.  From the Rules screen in the Add New Policy page, click **Grace Periods** \> **Software Composition Analysis**.

2.  Select the rule types for which you want to apply a grace period.

    If your policy does not include a rule for the selected rule types, the grace period has no affect on your policy compliance.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> To avoid having conflicting requirements or grace periods, do not include both a Vulnerability CVSS Score rule and Findings by Severity rule that applies to SCA in your policy. Veracode recommends using only Vulnerability CVSS Score to determine the allowable severity for Veracode SCA vulnerabilities.</p>

3.  Enter the number of days to allow before findings can cause your policy to not pass policy.

4.  To set different grace periods for different CVSS score ranges:

      a.  Click **Add Another** under the Vulnerability CVSS Score option to create up to five grace periods.

      b.  Edit the first value in each score range to define the low end of the range.
        The high end of the first range is automatically 10.0. The high end of additional ranges is automatically one tenth of a point below the low end of the range above it. The low end of the last range is automatically 0.0.

      c.  Enter the number of days to allow for each CVSS score range.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Grace periods only apply to findings in the score range that the Vulnerability CVSS Score rule defines as not allowed. For example, if your policy disallows findings with a score of 8.0 and above, the grace periods for findings below 8.0 have no effect.</p>

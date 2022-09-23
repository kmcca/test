---
"author": ["Scott Jordan"]
"ft:lang": "en-US"
"ft:title": "Applying Grace Periods to a Policy"
"ft:prettyUrl": "c_policy_grace_period"
---

When [creating policies](https://docs.veracode.com/r/t_create_policy), you can define remediation grace periods for Minimum Scan Score, Component Blocklist Enforcement, Component Licenses, and Vulnerability CVSS Score rules. You can also specify grace periods by severity that apply to Findings by Severity, Security Standard, Findings by CWE ID, and Findings in CWE Category rules.

A remediation grace period is the amount of time in which you can fix or mitigate findings or raise the score for the application. During the grace period, the application passes policy on the condition that you fix or mitigate the affected findings or the scan meets the minimum score rule. Veracode applies the grace period starting from the first found date or, if re-opened, the last re-opened date. After the grace period expires, if you have not fixed or mitigated the findings, the application no longer passes policy. Veracode monitors grace periods as a date associated with each finding that persists across application scans.

If you set a grace period of `0` for a certain severity or rule, Veracode evaluates applications with findings that violate the rule immediately as not passing the policy.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Grace periods only apply to findings that a custom rule defines as not allowed. For example, unless you have a custom rule that specifies that Informational findings are not allowed, Veracode ignores any grace period value you set for Informational findings.</p>

When a grace period approaches its expiration date, Veracode sends a notification to the team associated with the application.

For more information specific to Veracode SCA rules, see [Apply Grace Periods to Veracode SCA Policy Rules](https://docs.veracode.com/r/Apply_Grace_Periods_to_Veracode_SCA_Policy_Rules).

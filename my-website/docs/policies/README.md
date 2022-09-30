---
"author": ["Scott Jordan"]
"ft:originID": "policies"
"ft:lang": "en-US"
"ft:title": "Application Security Policies"
"ft:prettyUrl": "c_appsec_policies"
"media_dir": "images/"
---

You can define and enforce a uniform application security policy across all applications in a portfolio for your organization.

The elements of an application security policy include:

-   The target [Veracode Level](https://docs.veracode.com/r/policy_veracodelevel) for the application.
-   Types of findings that should not be in the application. You can restrict findings by severity, CWE category, CWE ID, license risk, CVSS score, or a common standard, including OWASP, OWASP Mobile, CWE Top 25, or PCI.
-   Minimum Veracode security score.
-   Component blocklist for Veracode SCA findings.
-   Required scan types and frequencies.
-   Time period in which findings can impact policy compliance.
-   Grace period within which you must fix any policy-relevant findings.

You can [create](https://docs.veracode.com/r/t_create_policy), [edit](https://docs.veracode.com/r/t_edit_policy), or [delete](https://docs.veracode.com/r/t_delete_policy) a policy. You must have the Policy Administrator [role](https://docs.veracode.com/r/c_role_permissions) to perform policy maintenance activities.

You can also manage policies with the [Policy API](https://docs.veracode.com/r/c_policy_rest_api).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You are not required to create custom policies because the Veracode Platform includes two sets of <a href="https://docs.veracode.com/r/policy_veracodedefault">default policies</a> that you can choose from when implementing your security policy.</p>

<p><span style="font-size: medium;">Policy Constraints</span></p>

You can apply these main policy constraints: rules, required scans, evaluation timeframes, and remediation grace periods.

<p><span style="font-size: medium;">Evaluating Applications Against a Policy</span></p>

When an application is evaluated against a policy, it can receive one of these four assessments:

**Not Assessed**

The application has not yet had a scan published.

**Passed**

The application has passed all the aspects of the policy, including rules, required scans, and grace period.

**Did Not Pass**

The application has not completed all required scans; has not achieved the target Veracode Level; or has one or more policy relevant flaws that have exceeded the grace period to fix.

**Conditional Pass**

The application has one or more policy relevant flaws that have not yet exceeded the grace period to fix.

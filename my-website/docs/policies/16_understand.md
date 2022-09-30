---
"ft:title" : "Understanding Policies"
"ft:prettyUrl" : "policy_understand"
---

The Veracode Platform enables an organization to define and enforce a uniform application security policy across all applications in its portfolio. An application security policy includes these elements:

-   The target [Veracode Level](https://docs.veracode.com/r/policy_veracodelevel) for the application.

-   Types of findings that should not be in the application. You can restrict findings by severity, CWE category, CWE ID, license risk, CVSS score, or a common standard, including OWASP, OWASP Mobile, CWE Top 25, or PCI.

-   Minimum Veracode security score.

-   Component blocklist for Veracode SCA findings.

-   Required scan types and frequencies.

-   Time period in which findings can impact policy compliance.

-   Grace period within which you must fix any policy-relevant findings.

<p><span style="font-size: medium;">Policy Constraints</span></p>

You can apply three main constraints to policies: rules, required scans, and remediation grace periods.

<p><span style="font-size: medium;">Evaluating Applications Against a Policy</span></p>

When an application is evaluated against a policy, it can receive one of the following four assessments:

**Not assessed**

The application has not yet had a scan published.

**Passed**

The application has passed all the aspects of the policy, including rules, required scans, and grace period.

**Did not pass**

The application has not completed all required scans, has not achieved the target Veracode Level, or has one or more policy-relevant findings that have exceeded the grace period to fix.

**Conditional pass**

The application has one or more policy relevant flaws that have not yet exceeded the grace period to fix.

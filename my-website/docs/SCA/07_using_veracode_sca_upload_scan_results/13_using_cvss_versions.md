---
"ft:title" : "Using CVSS Versions"
"ft:prettyUrl" : "Using_CVSS_Versions"
---

Veracode Software Composition Analysis supports applying version 2 or version 3 of the Common Vulnerability Scoring System \(CVSS\) to your policies. The version you apply can impact whether a finding from an SCA scan causes your application to fail policy.

By default, the [severity ratings](https://docs.veracode.com/r/review_severity_exploitability) you can apply to Veracode policies are based on CVSS version 2. To update the scoring system your organization uses when evaluating policies for all of its applications to version 3, you must contact Veracode Technical Support.

After updating the scoring system, Veracode determines policy evaluations for all future scans of your applications based on the new CVSS version.

You can view the severity of your SCA findings according to either scoring system by selecting a version from the Display dropdown menu on the **Third-Party Components** or **Vulnerabilities** tab.

The display defaults to the CVSS version associated with your organization.


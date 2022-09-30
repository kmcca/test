---
"ft:title" : "Applying Rules to a Policy"
"ft:prettyUrl" : "c_policy_rules"
---
When [creating a policy](https://docs.veracode.com/r/t_create_policy), you can add several rules that applications must follow to pass the policy.

You can also apply rules with the [Policy API](https://docs.veracode.com/r/c_policy_rest_api).

|Rule|Description|This Rule Applies to Static Analysis, Dynamic Analysis, and Manual Penetration Testing Scans|This Rule Applies to Software Composition Analysis (SCA) Scans|
|----|----|----|----|
|Minimum Scan Score|Enter a value between 1 and 100. To pass policy, applications must meet or exceed the specified score value.|X| |
|Security Standard|Select one or more of these security standards: PCI, OWASP, OWASP Mobile, CWE Top 25, or CERT. To pass policy, applications must not contain any findings defined in the selected standards.<br><br>If you select the Auto-Update OWASP, Auto-Update CWE Top 25, or Auto-Update CERT requirement, Veracode automatically reassesses the application when it implements a new version of that specific standard. If you select the Auto-Update PCI requirement, Veracode automatically reassesses the application when it implements a new version of the OWASP, CWE Top 25, or CERT standards.<br><br>[CWEs That Violate Security Standards](https://docs.veracode.com/r/r_cwes_impact_policy) provides the full list of CWEs that can prevent an application from passing security standard rules in policies.|X| |
|Findings with CWE ID|Search in the CWEs table and select one or more CWE IDs. To pass policy, applications must not contain the specified CWE IDs. |X| |
|Findings in CWE Category|Select one or more [CWE categories](https://docs.veracode.com/r/c_review_cwe). To pass policy, applications must not contain CWEs in the specified categories.|X| |
|Findings within Scan Type|Select one or more of these scan types: Static Analysis, Dynamic Analysis, or Manual Penetration Testing. To pass policy, applications must not contain findings from one or more of the specified scan types. |X| |
|Findings by Severity|Select the scan type options and select a severity rating. To determine the allowable severity for Veracode SCA vulnerabilities, Veracode recommends you use a Vulnerability CVSS Score rule, which has more configuration options and separate grace periods.</br>To pass policy, applications must not contain any findings that meet or exceed the specified severity rating for the specified scan types.|X|X|
|Component Blocklist Enforcement|To pass policy, applications must not contain any findings from your organization [blocklist](https://docs.veracode.com/r/c_blocklist). The list of blocklisted components appears after you add this rule. This rule only applies to findings from Veracode SCA upload scans. | |X|
|Vulnerability CVSS Score|Select a [CVSS score](https://docs.veracode.com/r/review_scoringmethodology). To pass policy, applications must not contain any findings that meet or exceed the specified CVSS score. This rule only applies to findings from Veracode SCA upload scans. To avoid having conflicting requirements, do not include a Findings by Severity rule for Veracode SCA findings in your policy. | |X|
|Component Licenses|Select the [license risk ratings](https://docs.veracode.com/r/c_integrated_license_agent) to disallow. In the Advanced Options section, you can apply these additional configurations:<ul><li>Disallow non-OSS licenses.</li><li>For components with multiple licenses, require one or all of the licenses to meet the rule requirements.</li><li>Allow specific licenses that do not meet the other rule requirements.</li><li>Disallow specific licenses that do meet the other rule requirements.</li></ul><br><br>This rule only applies to findings from Veracode SCA upload scans. | |X|

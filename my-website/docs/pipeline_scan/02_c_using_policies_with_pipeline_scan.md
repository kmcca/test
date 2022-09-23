---
"ft:title" : "Using Policies with Pipeline Scans"
"ft:prettyUrl" : "Using_Policies_with_the_Pipeline_Scan"
---
You can use a Veracode security policy to evaluate the scan results from a Pipeline Scan.

You can configure a Pipeline Scan to evaluate the scan results against one of the standard or recommended [security policies](https://docs.veracode.com/r/c_appsec_policies). To use a custom policy, you must include the <code>[--request_policy](04_r_pipeline_scan_commands.md)</code> parameter in your pipeline or at the command line to retrieve the policy definition from Veracode.

Because a Pipeline Scan performs a static scan and is not aware of the full history of findings, it supports only these [policy rule types](https://docs.veracode.com/r/c_policy_rules):

- Findings with CWE ID
- Findings in CWE Category
- Findings by Severity

When using a Veracode policy, a Pipeline Scan does not consider grace periods, required scan frequency, or evaluation time frames.


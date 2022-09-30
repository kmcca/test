---
"ft:title" : "Understanding Data in the XML Report"
"ft:prettyUrl" : "c_about_XML_report"
---
The XML export contains some data that is provided for automated consumption of flaw results, including remediation status and date first found.

The Detailed Results XML file for an application that contains more than one scan can contain information about both new and fixed flaws. The report states the line where each flaw is located, the number of lines of code \(LOC\) in a module, and also maps the flaws to the CWE, OWASP, and CERT industry standard lists of vulnerabilities.

Flaws that have been fixed can be filtered out by using the XML attribute `remediation_status`:

`<flaw ... remediation_status="fixed" ... >`

The `date_first_occurrence` attribute of the flaw contains the date on which the first report referencing this flaw was published. You can use this date to compute statistics about flaw aging.

The `cia_impact` attribute contains information about the Veracode assessment of the confidentiality, integrity, and availability impact of the flaw if it is exploited. Veracode uses this information, part of the CVSS standard, to compute the severity for the flaw. The value is presented as three letters, where the first letter is the confidentiality, second is integrity, and third is availability. Possible values for each letter are `c` for Complete, `p` for Partial, or `n` for None.

The `policy_compliance_status` attribute contains information about the Veracode policy evaluation for sandbox scan results. Each finding for a sandbox scan includes the policy impact under the BLANK attribute, which allows you to inspect the sandbox findings that impact policy. A sandbox scan does not take into account the activity-based policy rules, such as scan types and scan frequency. Sandbox scans do not count towards the rule of scan frequency. In a sandbox, only the findings are assessed for policy implications.


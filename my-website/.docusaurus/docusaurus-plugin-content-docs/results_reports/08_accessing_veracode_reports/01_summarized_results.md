---
"ft:title" : "Summarized Results"
"ft:prettyUrl" : "c_results_summaryresults1"
---
The Summarized Results section of the Results page in the Veracode Platform provides an excellent overview of all the flaws by severity and status, as well as a summary of the top risks and how your metrics data is trending.

At a glance, you can see the number and types of flaws the application currently contains.

The Open Flaw Severities section shows open flaws characterized by potential impact to confidentiality, integrity, and availability of the application as defined in the CVSS.

| Severity           | CVSS Rating \(SCA and MPT only\) | Description                                                                                                                                                                        |
|--------------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 5 - Very High      | 8.1-10                           | These lines of code have a very serious weakness and are an easy target for an attacker. Fix this finding immediately to avoid potential attacks.                                  |
| 4 - High           | 6.1-8                            | These lines of code have a serious weakness and are an easy target for an attacker. Fix this finding immediately to avoid potential attacks.                                       |
| 3 - Medium         | 4.1-6                            | These lines of code have a moderate weakness and might be an easy target for an attacker. Fix this finding after fixing all Very High and High findings.                           |
| 2 - Low            | 2.1-4                            | These lines of code have a low weakness. Consider fixing this finding after fixing all Very High, High, and Medium findings.                                                       |
| 1 - Very Low       | 0.1-2                            | These lines of code have a very low weakness. The finding might indicate other problems in the code, but you do not need to mitigate it.                                           |
| 0 - Informational  | 0                                | These lines of code have an issue with no impact on the security of the application, but the finding might indicate other problems in the code. You can safely ignore this issue.  |

The Remediation Status section shows the number of flaws found in an application, characterized by remediation status.

The Trend Data section shows the history of the scans and their scores over time. You can hover over data points on the chart to view the name, date, and score of each scan.


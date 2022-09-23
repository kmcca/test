---
"author": ["Kevin McCarthy"]
"ft:originID": "review_results"
"ft:lang": "en-US"
"ft:title" : "Reviewing Scan Results"
"ft:prettyUrl" : "review_results"
"media_dir": "images/"
---
The Results page provides a single point of reference for the results of all completed scans. From this page you can download reports, bookmark reports, and schedule a consultation call with Veracode Technical Support.

In the Veracode Platform, select an application and click **Results** in the left navigation menu to go to the Results page. The page includes three sections:

-   [Results Reports](#results)
-   [Policy Evaluation](#evaluation)
-   [Summarized Results](#summarized)

<a name ="results"></a>
<p><span style="font-size: medium;">Results Reports</span></p>

From the Results page, you can download reports, bookmark reports, share results, and request a scan results consultation call with Veracode Technical Support. You can also view the Veracode and PCI Compliance reports.

Click **Veracode Report** or **PCI Compliance Report** to open these reports. The Veracode Report contains the same information as the Detailed Report that you can download from the Results page. The Veracode Report summarizes the security flaws identified during this scan, explains how the application fared against the associated policy controls, and outlines the Veracode recommendations. The [PCI Compliance Report](https://docs.veracode.com/r/review_pci) provides guidance on how to fix the discovered flaws to achieve PCI compliance and how the application performed against the PCI policy.

From the Results page, you can use the buttons to:

**Download Reports**

Click the **Download** button to view the drop-down menu of reports you can download.

[**Bookmark this Report**](https://docs.veracode.com/r/using_bmarks)

You can bookmark this results page, enabling you to come back to it later.

[**Share this Report**](https://docs.veracode.com/r/c_shared_VAST)

If you have a vendor-enterprise relationship with other organizations, you can share scan results using this button.

[**Schedule a Consultation**](https://docs.veracode.com/r/t_schedule_consultation)

If you want to receive assistance in interpreting your scan results, click this button to schedule a consultation call with Veracode Technical Support.

<a name ="evaluation"></a>
<p><span style="font-size: medium;">Policy Evaluation</span></p>

The Policy Evaluation section of the Results page provides an overview of how the application fared against its associated policy.

The [policy evaluation](https://docs.veracode.com/r/policy_understand) indicates if the application was assessed against rules, required scans, and a remediation grace period. The [Veracode Level](https://docs.veracode.com/r/policy_veracodelevel) the application achieves is based on the security score it receives after the scans.

Click the scan names in the Static, Dynamic, and Manual columns to go to the [overview pages](https://docs.veracode.com/r/c_nav_app_menu) to see more details of the scan results.

<a name ="summarized"></a>
<p><span style="font-size: medium;">Summarized Results</span></p>

The Summarized Results section of the Results page provides an overview of all the flaws by severity and status, as well as a summary of the top risks and how your metrics data is trending.

At a glance, you can see the number and types of flaws the application currently contains.

Open Flaw Severities shows open flaws characterized by potential impact to confidentiality, integrity, and availability of the application as defined in the CVSS.


| Severity           | CVSS Rating \(SCA and MPT only\) | Description                                                                                                                                                                        |
|--------------------|----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 5 - Very High      | 8.1-10                           | These lines of code have a very serious weakness and are an easy target for an attacker. Fix this finding immediately to avoid potential attacks.                                  |
| 4 - High           | 6.1-8                            | These lines of code have a serious weakness and are an easy target for an attacker. Fix this finding immediately to avoid potential attacks.                                       |
| 3 - Medium         | 4.1-6                            | These lines of code have a moderate weakness and might be an easy target for an attacker. Fix this finding after fixing all Very High and High findings.                           |
| 2 - Low            | 2.1-4                            | These lines of code have a low weakness. Consider fixing this finding after fixing all Very High, High, and Medium findings.                                                       |
| 1 - Very Low       | 0.1-2                            | These lines of code have a very low weakness. The finding might indicate other problems in the code, but you do not need to mitigate it.                                           |
| 0 - Informational  | 0                                | These lines of code have an issue with no impact on the security of the application, but the finding might indicate other problems in the code. You can safely ignore this issue.  |

Remediation Status data shows the number of flaws found in an application, characterized by remediation status.


| Status                   | Scan Type           |Description|
|--------------------------|---------------------|-----------|
| New                      | Policy              |The number of flaws that Veracode did not find in any previous policy scan.|
| New                      | Sandbox             |The number of flaws that Veracode did not find in any previous scan.|
| Open                     | Policy              |The number of flaws Veracode found in a previous policy scan.|
| Open                     | Sandbox             |The number of flaws Veracode found in a previous scan, not necessarily within this sandbox.|
| Reopened                 | Policy or Sandbox   |The number of flaws Veracode found in a previous scan within the sandbox or policy scan, not found in a subsequent scan within the sandbox or policy scan, but found again in the current scan.|
| Fixed                    | Policy or Sandbox   |The number of flaws Veracode found in a previous scan within the policy or sandbox scan, but did not find again in the current scan.|
| Mitigated                | Policy or Sandbox   |The number of flaws that someone approved as mitigated by OS environment, mitigated by network environment, and mitigated by design.|
| Potential False Positive | Policy or Sandbox   |The number of flaws that someone approved as a potential false positive.|

Trend Data shows the history of the scans and their scores over time. You can hover over data points on the chart to view the name, date, and score of each scan.


---
"ft:title" : "Developing a Remediation Plan"
"ft:prettyUrl" : "review_remediationplan"
---
After you review the flaws identified in a Veracode automated scan, you can use the guidance in the Triage Flaws page and the report to fix the flaws.

<p><span style="font-size: medium;">Defining the Target Fix List with Action Items</span></p>

The Action Items section of the Veracode report provides guidance on how to get the application to an A score.

The Action Items: the Immediate Timeframe section of every report provides Veracode's short-term recommendations for improving the security quality of your application. The recommendations are based on the dates that flaws in your application should be fixed to meet the requirements of the application [policy](https://docs.veracode.com/r/policy_understand), including the grace period, if applicable. These recommendations are based on the flaws that must be fixed to bring the application into compliance with the policy. The recommendation takes into account the [severity](https://docs.veracode.com/r/review_severity_exploitability) of the flaws so that the minimum work is necessary to achieve the A rating. After fixing these flaws, you should run the application scan for a follow-up analysis to ensure that the flaws are fixed and no new flaws have been introduced.

<p><span style="font-size: medium;">Defining Which Flaws to Fix</span></p>

**Fix First: Severity and Ease of Fix**

You can use the Fix First Analyzer for a visual representation of exactly which flaws to fix first to improve the overall security posture of the application. You can view flaws based on severity of the flaw and the difficulty to fix the flaw. To access the Fix First Analyzer, on the **Triage Flaws** page, select **Fix First Analyzer** in the top-right corner. The size of the circles on the Fix First Analyzer is proportional to the number of flaws for a given combination of severity and effort to fix.

To identify a group of flaws within a given severity, click the red circles, starting with the upper right-hand quadrant. The chart displays the list of flaws you must remediate to decrease the application's risk quickly with the least amount of effort. To see all flaws again after choosing one of the circles, click **Clear Filter**.

**Prioritizing by Exploitability**

Within a given group of flaws in the Fix First Analyzer, you can sort the flaws by [exploitability](https://docs.veracode.com/r/review_severity_exploitability) to further prioritize the flaws, beginning with flaws that are Very Likely to be exploited.

Some flaws have additional information about the likelihood that they will be exploited, based on contextual analysis of the dataflow. For example, flaws could show the source of a potential tainted data input and whether any attempt is made to cleanse the data. These flaws have an information icon next to the exploitability rating, which provides additional information about the likelihood the flaw can be exploited.
 
<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Likelihood of exploitability is available only for static flaws. Dynamic flaws are assumed always to be exploitable because of the nature of dynamic testing.
</p>

<p><span style="font-size: medium;">Flaws in Common Modules</span></p>

If your application reuses some code modules repeatedly, flaws in those modules can have a disproportionate impact on the security of your application. Reports for applications containing flaws in common modules contain a list of these flaws prioritized by score impact. If you address these flaws first, it can have a large impact on your score.

<p><span style="font-size: medium;">Guidance on Fixing Flaws</span></p>

After you use the Fix First Analyzer to determine which flaws you must fix to have the greatest impact on the security of the application, Veracode provides detailed remediation recommendations that include a description of the flaw, its severity, specific flaw sub-category details, effort to fix, exploitability, compliance relevant impact such as PCI, and the exact line number or URL where the flaw is located. This guidance is available both on the Review Flaws page and in the reports. Each vulnerability finding is also presented with a direct link to the Common Weakness Enumeration \(CWE\) and other standards-based resources such as OWASP, where developers can find additional guidance from third-party resources.

The flaw details provide guidance on how the flaw was discovered and how it can be remediated, as well as links to CWE and OWASP guidelines.


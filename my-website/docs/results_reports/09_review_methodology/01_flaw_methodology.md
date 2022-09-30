---
"ft:title" : "Flaw Methodology"
"ft:prettyUrl" : "c_review_flaw_method"
---
<p><span style="font-size: medium;">Flaw Types by Severity Level</span></p>

The Flaw Types by Severity level table provides a summary of flaws found in the application by Severity and Category. The table puts the Security Quality Score into context by showing the specific breakout of flaws by severity, used to compute the score as described above. If multiple analysis techniques are used, the table includes a breakout of all flaws by category and severity for each analysis type performed.

<p><span style="font-size: medium;">Flaws by Severity</span></p>

The Flaws by Severity chart shows the distribution of flaws by severity. An application can receive a mediocre security rating by having a few high-risk flaws or many medium-risk flaws.

<p><span style="font-size: medium;">Flaws in Common Modules</span></p>

The flaws in the Common Modules Listing shows a summary of flaws in shared dependency modules in this application. A shared dependency is a dependency that is used by more than one analyzed module. Each module is listed with the number of executables that consume it as a dependency and a summary of the impact on the application's security score of the flaws found in the dependency.

The score impact represents the amount that the application score would increase if all the flaws in the shared dependency module were fixed. This information can be used to focus remediation efforts on common modules with a higher impact on the application security score.

Only common modules uploaded with debug information are included in the Flaws in Common Modules listing.

<p><span style="font-size: medium;">Action Items</span></p>

The Action Items section of the Veracode scan results report provides guidance on the steps required to bring the application to a state where it passes its assigned policy. These steps may include fixing or mitigating flaws or performing additional scans. The section also includes best practice recommendations to improve the security quality of the application.

<p><span style="font-size: medium;">Common Weakness Enumeration (CWE)</span></p>

The Common Weakness Enumeration (CWE) is an industry standard classification of types of software weaknesses, or flaws, that can lead to security problems. CWE is widely used to provide a standard taxonomy of software errors. Every flaw in a Veracode report is classified according to a standard CWE identifier. More guidance and background about the CWE is available at http://cwe.mitre.org/data/index.html.


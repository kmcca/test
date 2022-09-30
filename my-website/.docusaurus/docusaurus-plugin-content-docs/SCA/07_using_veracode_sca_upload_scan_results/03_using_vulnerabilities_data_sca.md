---
"ft:title" : "Using Vulnerabilities Data with Veracode SCA"
"ft:prettyUrl" : "c_SCA_vulns"
---

The **Vulnerabilities** tab in the Veracode Platform lists all the vulnerabilities in your portfolio by CVE and severity rating.

This tab provides detailed information on all the known vulnerabilities in your portfolio. It sorts the vulnerabilities by severity, and lists the Common Vulnerabilities and Exposures \(CVE\) and Common Weakness Enumeration \(CWE\) IDs. It describes and counts each severity. The description field provides links to the affected applications and components.

Use the filter function to list applications by CVE ID, application name, component, or any combination of these filters. If you switch tabs after filtering data, the filter sorts the content in the new tab unless you clear the filter. Click the CVE or CWE ID link in the table to view additional information in the [National Vulnerability Database](https://nvd.nist.gov/) \(NVD\) or [MITRE CWE list](https://cwe.mitre.org/data/index.html), respectively.

Additional vulnerability details, such as vulnerable method detection and dependency graphs, are available through [agent-based scanning](https://docs.veracode.com/r/c_sc_what_is).

<p><span style="font-size: medium;">Vulnerability Data Sources</span></p>

The Veracode Platform may list two different data sources in the Vulnerability column for vulnerabilities: a CVE ID indicates that the vulnerability came from the NVD and a SRCCLR ID indicates that the vulnerability came from the SCA Vulnerability Database.

<p><span style="font-size: medium;">Vulnerability Updates</span></p>

Veracode makes daily updates to the vulnerabilities list to reflect any changes in the National Vulnerability Database or the Veracode SCA Vulnerability Database to provide the latest information on third-party component vulnerabilities in your applications. In turn, SCA results and related dashboards such as a Governance Risk and Compliance \(GRC\) systems are updated to reflect any new vulnerabilities. You do not need to rescan your applications to reflect the latest vulnerability changes. Veracode recommends that you review your SCA policy compliance after every vulnerability update.

Veracode also sends an email to users when a newly identified or upgraded vulnerability affects your policy. 

To receive SCA email notifications, navigate to **Your Account Settings**, enter your email address, and select **I wish to receive email notifications when a newly identified vulnerability or change in severity causes my application to violate policy**.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The link to the Veracode Platform provided in the email notification is only accessible to users with the Security Lead <a href="https://docs.veracode.com/r/c_role_permissions">role</a>.
</p>


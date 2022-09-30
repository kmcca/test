---
"ft:title": "Choosing a Scan Type"
"ft:prettyUrl": "scantype"
---
Veracode offers application scans as an integral part of any company-wide security policy. You can use Veracode to enforce consistent application security policies across your entire inventory of applications, both those that you develop and third-party applications.

<p><span style="font-size: medium;">Scan Permissions</span></p>

You must have the Creator, Submitter, or Security Lead [roles](https://docs.veracode.com/r/c_role_permissions) to be able to start a scan. In addition, you must also have the specific permission to submit each type of scan. Click **Your Account** in the top-right of the Veracode Platform to review your scan permissions. Contact the Veracode administrator in your organization if you want to request further permissions.

<p><span style="font-size: medium;">Application Scans</span></p>

Application scans deeply analyze individual applications and provide a detailed report on the discovered flaws and remediation guidance. Using all scan techniques increases the completeness and depth of analysis for your application.

Veracode recommends both Static Analysis and Dynamic Analysis scans for web applications with very high, high, or medium business criticality.

* [Static Scans](https://docs.veracode.com/r/Requesting_a_Static_Scan): perform deep analyses in an offline environment of compiled or ready-to-deploy web, enterprise, desktop, or mobile applications to detect security flaws in the underlying code. Static scans create a model of the entire application and analyzes its data and inter-procedural flow, and are ideal if you have access to the compiled code for your web or backoffice \(non-web\) applications.
* [Dynamic Scans](https://docs.veracode.com/r/c_was_intro): perform deep analyses of web applications, using customized scan, crawl, and authentication settings to establish a deep understanding of the vulnerabilities of a single web application. Dynamic scans simulate malicious user behavior and detect potential attack points by crawling the application and checking if intended functionality can be misused. This type of scan is necessary if the web application and its security are critical to your business.
* [Manual Penetration Testing](https://docs.veracode.com/r/c_understanding_manual): leverage and extend the findings identified by automated static and dynamic assessments to uncover unforeseen design issues within an application.

You can start an application scan from the **Scans & Analysis** menu. After you choose a scan type, select an application that you want to scan from the list. Then, click **Start a Scan** and choose a scan type to begin the analysis.

After starting a scan, you can monitor [in progress](https://docs.veracode.com/r/c_in_progress_scans) and [completed](https://docs.veracode.com/r/c_completed_scans) scans in the [left navigation menu](https://docs.veracode.com/r/using_leftnav).
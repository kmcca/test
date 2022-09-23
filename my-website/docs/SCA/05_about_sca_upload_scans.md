---
"author": ["Kevin McCarthy"]
"ft:lang": "en-US"
"ft:title" : "About SCA Upload Scans"
"ft:prettyUrl" : "c_about_SCA"
"media_dir": "images/"
---

Veracode Software Composition Analysis (SCA) helps you build an inventory of your third-party components to identify vulnerabilities, including open-source and commercial code.

The Veracode Platform analyzes both your own and third-party code in a single static scan, providing you visibility across your entire application portfolio. You can access SCA results after your static prescan is complete.

To use Veracode SCA upload scans, select **Scans & Analysis** > **Software Composition Analysis** at the top of the Veracode Platform. You must have the Executive, Security Lead, or Administrator [role](https://docs.veracode.com/r/c_role_permissions) to view the data. You can also navigate to SCA from the left navigation menu to view SCA in the context of an application.

Depending on your role, you can:

-   [View a list of application vulnerabilities](https://docs.veracode.com/r/c_SCA_vulns) from applications in your portfolio to view which applications are passing or failing your policy.

-   [View which of your components](https://docs.veracode.com/r/t_sca_policy) are passing or failing the security requirements specified in the SCA policy rules, and the remediation practices you can use to lower your application security risk.


Detailed composition information is organized by these tabs:

-   [Applications](https://docs.veracode.com/r/Using_Application_Data_with_Veracode_SCA)
-   [Third-party components](https://docs.veracode.com/r/c_SCA_comps)
-   [Vulnerabilities](https://docs.veracode.com/r/c_SCA_vulns)

Click **Data Exports** and [export your Veracode SCA results](https://docs.veracode.com/r/Export_Veracode_SCA_Portfolio_Results) to view findings in CSV format. This report contains details about all components across all of your applications in your portfolio.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> In the report, you may see duplicate vulnerabilities if the same component is found in multiple locations within an application.
</p>

The [Customizable Report](https://docs.veracode.com/r/c_veracode_report) contains Veracode SCA findings for individual applications in PDF format.

If you want to scan your code early and frequently in your software development lifecycle, Veracode recommends using [Veracode SCA agent-based scanning](https://docs.veracode.com/r/c_SC_platform). Agent-based scans provide additional features, such as dependency mapping, vulnerable methods, and automated pull requests.



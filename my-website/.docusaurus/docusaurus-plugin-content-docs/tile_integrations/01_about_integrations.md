---
"ft:title": "About Veracode Integrations"
"ft:prettyUrl": "c_veracode_integrations"
---
Veracode integrations allow you to maximize the benefits of static and dynamic cloud-based security testing in your Software Development Life Cycle (SDLC) and Governance, Risk, and Compliance (GRC) workflows.

Veracode application programming interfaces (APIs) and plugins automate the major software development tasks, including coding, building, testing, and deploying, involved in scanning applications and analyzing the results.

Veracode integrations enable you to automate all necessary security verification tasks, including:

-   Creating application profiles
-   Uploading applications
-   Submitting applications for scanning directly from integrated development environments (IDEs) and continuous integration (CI) servers

With specific line-of-code vulnerability identification and remediation instructions, you can directly integrate into IDEs and defect tracking systems to streamline defect triage and fixing.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>.</p>

<p><span style="font-size: medium;">Veracode Integrations</span></p>

| Integration                                                                                                       | Description                                                                                                                                                                                                                                            |
|-------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Veracode REST APIs](https://docs.veracode.com/r/c_rest_intro)                                                    | Veracode REST APIs enable you to programmatically interact with the Veracode Platform to seamlessly incorporate application flaw, summary, and policy information into your compliance and risk management programs.                                   |
| [Veracode XML APIs](https://docs.veracode.com/r/c_api_main)                                                       | Veracode XML APIs enable you to programmatically interact with the Veracode Platform to seamlessly incorporate application flaw, summary, and policy information into your compliance and risk management programs.                                    |
| [Veracode API Wrappers](https://docs.veracode.com/r/c_about_wrappers)                                             | The Veracode API wrappers are Veracode-developed CLI programs that can communicate with the Veracode XML APIs. You can use the API wrappers to accelerate the integration of the Veracode XML APIs in your software development lifecycle.             |
| [Veracode IDE Integrations](https://docs.veracode.com/r/c_ide_intro)                                              | Before checking in your code, you can start a scan, review security findings and triage the results, all from within your IDE. Veracode integrates with Eclipse, IntelliJ, and Visual Studio.                                                          |
| [Veracode Greenlight Plugin](https://docs.veracode.com/r/c_master_greenlight)                                     | Veracode Greenlight finds security defects in your code and provides contextual remediation advice to help you fix issues in seconds, directly in your IDE.                                                                                            |
| [Veracode Build and Release Management System Integrations](https://docs.veracode.com/r/c_integration_buildservs) | By integrating Veracode into your Jenkins, Azure DevOps, or Team Foundation Server build or release pipelines, you can test in the pipeline or in parallel. You can also stop the pipeline if Veracode finds security issues that violate your policy. |
| [Veracode Ticketing Integrations](https://docs.veracode.com/r/c_integration_ticketing)                            | The Veracode defect-tracking integrations with Jira, Azure DevOps/TFS, and Bugzilla create defect tickets from Veracode findings. The integrations also update or close defects automatically after you retest your code.                              |
| [Veracode GRC Integrations](https://docs.veracode.com/r/c_about_grc)                                              | Veracode provides native integration for RSA Archer to make it easier to understand which of your applications may be in violation of your corporate security policies and how quickly the organization is addressing issues.                          |
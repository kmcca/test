---
"ft:title" : "About Veracode Greenlight"
"ft:prettyUrl" : "c_master_greenlight"
---
Veracode Greenlight, which is also called IDE Scan, finds security defects in your code in seconds so you can fix the findings directly in your IDE. Instant detection discovers issues early and reduces costs.

Veracode Greenlight scans files or small packages and delivers results back quickly, enabling developers to test software quickly and frequently, and find security-related defects when they are the easiest and cheapest to fix, during development. In addition to highlighting defects, Veracode Greenlight provides positive feedback to developers, listing coding best practices when developers effectively avoid introducing security defects.

In addition to using Veracode Greenlight, Veracode recommends that you perform a [full static analysis scan](https://docs.veracode.com/r/Requesting_a_Static_Scan) using the Veracode Platform or the Veracode plugin for your IDE to achieve comprehensive coverage, actionable results, and policy-level reporting to determine application production readiness.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>.</p>

<p><span style="font-size: medium;">Supported IDEs and Languages</span></p>

This table lists the IDEs and languages that Veracode Greenlight supports. For information about the supported IDE versions, see the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix).

| IDE                                                                                                                 | Languages                                                                                                                                                                                                  |
|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Eclipse](https://docs.veracode.com/r/c_technical_reqs_gl_eclipse)                                                   | Java, JavaScript, JSP (Apache Tomcat)                                                                                                                                                                      |
| IBM RAD (supported by [Greenlight for Eclipse](https://docs.veracode.com/r/c_technical_reqs_gl_eclipse))            | Java, JavaScript, JSP (WebSphere)                                                                                                                                                                          |
| [IntelliJ and Android Studio](https://docs.veracode.com/r/c_technical_requirements_intellij)                        | Java, JavaScript, JSP (Apache Tomcat)<br><p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Kotlin is not supported. JSP is only supported for IntelliJ.</p> |
| Spring Tool Suite (supported by [Greenlight for Eclipse](https://docs.veracode.com/r/c_technical_reqs_gl_eclipse)\) | Java and JavaScript                                                                                                                                                                                        |
| [Visual Studio](https://docs.veracode.com/r/c_technical_requirements_vs)                                            | JavaScript, .NET and .NET Core: C#, VB.NET, ASP.NET<br><br>Greenlight for Visual Studio does not support .NET Core 1 and .NET Core 1.1 (XPROJ).                                                            |
| [Visual Studio Code](https://docs.veracode.com/r/c_technical_requirements_vs_code)                                  | JavaScript, TypeScript, .NET Core: C#                                                                                                                                                                      |
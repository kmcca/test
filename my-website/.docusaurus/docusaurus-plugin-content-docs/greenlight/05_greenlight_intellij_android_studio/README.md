---
"ft:title" : "Veracode Greenlight for IntelliJ"
"ft:prettyUrl" : "c_technical_requirements_intellij"
---
Veracode Greenlight for IntelliJ is a plugin for running Greenlight scans in IntelliJ IDEA or Android Studio. The plugin supports all Java platforms and frameworks listed in [Packaging Java Applications](https://docs.veracode.com/r/compilation_java).

Veracode Greenlight is designed to scan a file or small package. For this reason, initiating a scan at the project level is restricted. For project-level scans, use [Veracode Static Analysis](https://docs.veracode.com/r/c_static_overview).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Kotlin is not supported.</p>

Greenlight for IntelliJ can only scan Java classes that compile correctly and ignores all other files. It can also scan top-level packages that contain other packages, as well as non-minified JavaScript files. Non-minified code has not had unnecessary characters such as white space, new lines, comments, and block delimiters removed.

It is only possible to scan JavaScript embedded in these file types: ASP, CSS, EHTML, ES, ES6, HANDLEBARS, HBS, HJS, HTM, HTML, JS, JSON, JSP (IntelliJ only), JSX, MAP, MUSTACHE, PHP, TS, TSX, and XHTML.

The Greenlight plugin uses these two certificates that are signed by a certificate authority: `downloads.veracode.com` and `api.veracode.com`.

In addition to using Greenlight for IntelliJ, Veracode recommends that you perform a [full static analysis scan](https://docs.veracode.com/r/Requesting_a_Static_Scan) using the Veracode Platform or the Greenlight for IntelliJ to achieve comprehensive coverage, actionable results, and policy-level reporting to determine application production readiness.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The Veracode Greenlight plugin has minimal impact to your local system. If your environment is outside the above requirements and you are interested in the Veracode Greenlight plugin, email <a href="mailto: support@veracode.com">support@veracode.com</a> regarding your interest, your IDE tools, IDE version, and programming languages you use in your job.</p>
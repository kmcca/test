---
"ft:title" : "Veracode Greenlight for Eclipse"
"ft:prettyUrl" : "c_technical_reqs_gl_eclipse"
---
Veracode Greenlight for Eclipse is a plugin for the Eclipse IDE. You can install the plugin to perform Greenlight scanning from within the IDE.

Veracode Greenlight is designed to scan a file or small package. For this reason, initiating a scan at the project level is restricted. For project-level scans, use Veracode Static Analysis. Greenlight supports Java and the Java platforms and frameworks listed in [Packaging Java Applications](https://docs.veracode.com/r/compilation_java).

Veracode Greenlight for Eclipse can scan:

- Java files and packages that compile correctly in Java projects.
- JavaScript embedded in these file types: ASP, CSS, EHTML, ES, ES6, HANDLEBARS, HBS, HJS, HTM, HTML, JS, JSX, JSON, JSP, MAP, MUSTACHE, PHP, TS, TSX, XHTML.
- Java Server Page (JSP) files and folders that contain JSP files.
- Non-minified JavaScript files and folders in JavaScript projects. Non-minified code has not had unnecessary characters, such as white space, new lines, comments, and block delimiters removed.

Veracode Greenlight uses these two certificates that are signed by a certificate authority: `downloads.veracode.com` and `api.veracode.com`.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The Veracode Greenlight plugin has minimal impact to your local system. If your environment is outside the above requirements and you are interested in the Veracode Greenlight plugin, email <a href="mailto: support@veracode.com">support@veracode.com</a> regarding your interest, your IDE tools, IDE version, and programming languages you use in your job.</p>
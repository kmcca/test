---
"ft:title" : "ASP Classic Application Packaging"
"ft:prettyUrl" : "compilation_ASPclassic"
---

Your Classic ASP applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires all source files for the application.

<p><span style="font-size: medium;">Supported Classic ASP Versions</span></p>

|Language|Platform|Version|
|---|---|---|
|Classic ASP|Windows|1.x, 2.x, 3.0|

<p><span style="font-size: medium;">Packaging Guidance</span></p>

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode does not support binary analysis for Classic ASP applications. You must upload your Classic ASP source files to Veracode for analysis.</p>

Upload a compressed ZIP archive to Veracode containing all Classic ASP, VBScript, and ActiveX code and required dependencies. Do not attempt to upload individual Classic ASP files.

Do not upload a combination of Classic ASP files and Windows DLL or EXE files in the same archive. Uploading a combination of Classic ASP and modules written in other languages delays the delivery of your scan results.

Veracode only scans files with these extensions:

-   ASA
-   ASP
-   GRP
-   INC
-   JS
-   OCX

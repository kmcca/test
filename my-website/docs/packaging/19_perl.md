---
"ft:title" : "Perl Application Packaging"
"ft:prettyUrl" : "compilation_perl"
---

Your Perl CGI applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires all source files for the application.

<p><span style="font-size: medium;">Supported Perl Versions</span></p>

|Language|Version|
|----|----|
|Perl|5.x (CGI applications only)|

<p><span style="font-size: medium;">Compilation and Packaging Guidance</span></p>

Upload a compressed ZIP archive containing all Perl source code, maintaining the project structure, to Veracode. Do not include third-party packages.

Veracode only scans files with these extensions:

-   PL
-   PM
-   PLX
-   PL5
-   CGI

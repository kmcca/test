---
"ft:title" : "PL/SQL Application Packaging"
"ft:prettyUrl" : "c_compilation_plsql"
---

Your PL/SQL applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Supported PL/SQL Versions</span></p>

|Language|Supported Versions|
|----|----|
|PL/SQL|Oracle 18c, 19c, 21c|

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires source files for the PL/SQL application. Veracode Static Analysis supports all PL/SQL constructs.

Veracode Static Analysis does not:

-   Analyze general SQL scripts or queries
-   Support middleware libraries or RAD tool libraries

<p><span style="font-size: medium;">Packaging Guidance</span></p>

Upload a compressed ZIP archive containing all PL/SQL code to Veracode. Files must be UTF-8 encoded.

Do not include third-party packages. Do not upload individual PL/SQL source files.

Veracode only scans PL/SQL files with these extensions:

-   FNC
-   PCK
-   PKB
-   PKS
-   PLS
-   PRC
-   SQL
-   TPB
-   TPS
-   TRG
-   VW

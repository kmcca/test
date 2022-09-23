---
"ft:title" : "Transact-SQL Application Packaging"
"ft:prettyUrl" : "Packaging_Transact_SQL_Applications"
---

Your Transact-SQL \(T-SQL\) applications must meet specific packaging requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Supported T-SQL Versions</span></p>

|Language|Supported Versions|
|----|----|
|T-SQL|15.x and earlier (SQL Server 2019)|

<p><span style="font-size: medium;">Packaging Guidance</span></p>

Veracode requires source files for the T-SQL application. Veracode Static Analysis supports all T-SQL constructs.

Veracode only scans T-SQL files with the SQL extension.

Veracode Static Analysis does not:

-   Analyze general SQL scripts or queries
-   Support middleware libraries or RAD tool libraries

Upload to Veracode a ZIP archive containing all T-SQL code. Files must be UTF-8 encoded. Do not upload individual T-SQL source files.

Do not include third-party packages.

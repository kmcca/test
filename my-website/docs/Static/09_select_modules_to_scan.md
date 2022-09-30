---
"ft:title" : "Select Modules to Scan for Veracode Static Analysis"
"ft:prettyUrl" : "c_request_modules_scan"
---
You can scan modules that Veracode selects by default or change the selection using the [Advanced Mode](https://docs.veracode.com/r/Viewing_Changes_Between_File_Uploads).

<p font-size="13pt"><b>Overview</b></p>

After prescan verification is complete, the Review Modules page displays information about the scannable modules within the application. Veracode performs a default module selection based on the structure of the application identified during prescan verification. If you have scanned this application previously, Veracode remembers the modules you selected in previous scans and automatically populates subsequent scan configurations for this scan.

<p font-size="13pt"><b>Steps</b></p>

1.  From the File Selection dropdown menu, select **Previous Selection** to use the file selection used in the previous scan, or select **Veracode Default** if you want to use the Veracode recommended module selection.

2.  In most cases, Veracode recommends using the default module selection. However, if you want to change your selection, click the **Advanced Mode** tab, which shows a list of all the modules uploaded and their statuses.

    The module includes these possible status values:

    -   Validated: Veracode checked the module and the module is ready to be scanned.
    -   Non-blocking issue: Veracode checked the module. The module has one or more issues that can impair the quality of results but do not prevent the scan from proceeding. The status column displays a summary of the issue.
    -   Blocking error, shown in red highlight: Veracode has checked the module and has identified one or more issues that prevent it from being scanned. The status column displays a summary of the issue.

    You can filter the list of modules to show only the modules in error status, shown in red or yellow.

3.  To view details about blocking errors or non-blocking issues, click the status text.

    Veracode displays detailed information about the error or issue as well as the [guidance for resolving specific error messages](https://docs.veracode.com/r/errors_master).

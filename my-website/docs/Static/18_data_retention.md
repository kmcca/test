---
"ft:title" : "Understanding Veracode Rules for Data Retention and Archiving"
"ft:prettyUrl" : "c_data_retention"
---
Veracode retains your uploaded binaries according to specific rules.

Veracode uses retention rules for these categories of user-provided and system-generated data:

**User-Provided Data**

You upload your application files to Veracode for analysis. Veracode recognizes these application files as binaries, which include the ZIP archives of JavaScript and other source languages. After you upload binaries, Veracode retains them for a number of days to:

-   Perform results-quality investigations upon request
-   Support rescan without [re-uploading modules with issues or errors](https://docs.veracode.com/r/Re-upload_Modules_with_Issues_or_Errors)

Veracode sets these default retention periods for these files:

-   45 days for binaries for a submitted scan.
-   90 days for scans you started, but did not submit. This status can occur if:
    -   The prescan completed, but you did not click **Submit**.
    -   The prescan did not complete because it found errors.
    -   You created the scan, but did not upload any files.

These periods are subject to change. Veracode may decrease these retention periods for your Veracode account.

When Veracode deletes an uploaded binary, it adds an entry to the activity log for the scan. The activity log identifies the binaries deleted for a specific scan. After deleting the uploaded binary, Veracode cycles the encryption key.

**Template Files**

A template file consists of an application file provided as source code. For example, the application file might be a JSP, JavaScript, or Python file. Veracode retains template files for a number of days to allow you to view the results of a static scan in the Triage Flaws page. Veracode does not require you to select the source file in the browser.

Veracode sets the default retention period for template files to 60 days, but this period is subject to change. Veracode may decrease this retention period for your Veracode Platform account.

**Veracode-Generated Data**

Veracode generates a datapath for certain types of static findings. This datapath includes a list of source files and line numbers in the application through which your data passes to the potentially-vulnerable line. Veracode retains this datapath information by keeping either of these collections, whichever has the larger number of scans:

-   The last three scans
-   All scans from the last three months

If a scan is older than the retention timeframe, Veracode automatically removes its datapath information. If the finding remains open, you can view the datapath in results for the latest scan.

**Sandbox Scan Results**

Veracode retains sandbox scan results according to the time-to-live setting for the sandbox. After the time-to-live period expires, Veracode archives sandbox scan results to [Veracode Analytics](https://docs.veracode.com/r/c_about_dashboards).

After you delete sandbox information, you cannot recover it.

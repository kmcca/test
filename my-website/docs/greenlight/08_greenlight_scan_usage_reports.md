---
"ft:title" : "About Veracode Greenlight Scan Usage Reports"
"ft:prettyUrl" : "c_greenlight_reports"
---
In the Veracode Platform, you can access two reports for reviewing summaries of Greenlight scan usage. You must have the necessary [role to access these reports](https://docs.veracode.com/r/c_API_roles_details).

Go to **Reports** > **Export Data**. Click ![](./images/generate_icon.png) to initiate the report and then click ![](./images/download_icon.png) when it is available, indicating that the report has finished generating.

<p><span style="font-size: medium;">Veracode Greenlight Daily Scan Usage Summary</span></p>

This summary logs a row for the scan activity of each user that scanned with Veracode Greenlight on each day. If the user did not scan on a particular day, there is no entry in the report. The fields reported are:

-   Email Address: email of the user who performed the scan.
-   Created Day: date the scan occurred.
-   Successful Active Scans: number of successful scans the users initiated from their IDE.
-   Successful Auto-Scans: number of successful scans automatically initiated when the IDE saved the file.
-   Successful API Scans: number of scans initiated by the Veracode Greenlight API in the build/CI workflow.
-   Total Unsuccessful Scans: number of unsuccessful active, auto-scan, or API scans.
-   Total Successful Scans: number of successful and unsuccessful, active, auto-scan, or API scans.

<p><span style="font-size: medium;">Veracode Greenlight Technology Usage Summary</span></p>

This summary logs the information about the IDE and plugin used during the Greenlight scan. The fields in the report are:

-   Email Address: email address of the user who performed the scan.
-   IDE: IDE used, either Eclipse, IntelliJ or Visual Studio.
-   IDE Version: version of the IDE use when the scan was submitted.
-   Plugin Version: Veracode Greenlight plugin version when the scan was submitted.
-   Language: language of the code scanned, either:
    -   net: C#, VB.NET, ASP.NET
    -   js: JavaScript
    -   java: Java
-   Scan Count: total number of scans submitted plus the information for the IDE, IDE version, plugin version, and language.

If you perform Veracode Greenlight scans using the API, the IDE, IDE version, and plugin version columns are blank in the Veracode Greenlight Technology Usage Summary report.
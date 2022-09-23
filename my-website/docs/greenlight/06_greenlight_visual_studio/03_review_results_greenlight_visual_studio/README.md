---
"ft:title" : "Reviewing Findings in Veracode Greenlight for Visual Studio"
"ft:prettyUrl" : "c_vs_findings"
---
After Veracode Greenlight for Visual Studio has scanned a file, a line of code with an issue is underlined red with a red icon at the right of the line of code. The green text indicates code that complies with best practices and is protected against specific CWEs.

Veracode recommends that you dock the Veracode Greenlight Findings pane below the Visual Studio code editor pane. At the top of the **Veracode Greenlight Findings** tab, you can see the number of discovered findings, which are grouped by severity and best practice. The scan level indicates whether you ran the scan at the package or file level. From this tab you can:

-   Toggle the severity counts to filter the findings by severity grouping: Very High, High, Medium, Low, Very Low, or Info.
-   Use the filter icon in the CWE ID to filter by CWE.
-   Click the link in the line column to locate the issue in the specific line of code in the file.
-   Click **Details** to show the finding details in a separate findings pane.
-   Clear all the findings of the Veracode Greenlight scan by clicking the eraser icon in the top-right corner or using the shortkey, Ctrl+Shift+\\.
-   Hover over the orange circle icon at the beginning of a line of code to show the details of the finding in that line.
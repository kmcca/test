---
"ft:title" : "Scan with Veracode Greenlight for Eclipse"
"ft:prettyUrl" : "t_scan_greenlight"
---
You can scan your Java or JavaScript code, including a package file containing code, directly within your IDE.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).

<p font-size="13pt"><b>Steps</b></p>

1.  Open the project and select the Java or JavaScript file you want to scan.

2.  Select **Veracode Greenlight** > **Scan with Greenlight**, or use the shortkey, Ctrl+6.

    You can also right-click a package file and select **Veracode Greenlight** > **Scan with Greenlight** to scan all files contained in the package.

3.  After the scan is complete, review the security findings on the **Veracode Greenlight** tab.

    The Veracode Greenlight results are summarized in the **Findings** subtab. In the **Best Practices** subtab, Veracode indicates the CWEs protected against in the code. The scan level indicates whether Veracode scanned at the package level or file level.

4.  Double-click a finding to locate the issue in the specific line of code in the scanned file.

5.  Alternatively, right-click a finding to see the actions you can choose: open the finding in the scanned file, show the finding details in a separate Details pane, or [filter by severity or CWE](https://docs.veracode.com/r/t_filter_greenlight).

<p font-size="13pt"><b>Results</b></p>

The details for each finding provide information about the CWE and specific remediation advice on what you can do to fix the code.

Log file location for the scan:

-   On Windows: `C:\users\username\AppData\Local\Temp\`
-   On Linux: `/tmp`
-   On macOS, run this command in your terminal: `open $TMPDIR`

To clear all the results of the Veracode Greenlight scan, click the eraser icon in the top-right corner or use the shortkey, Ctrl+0.
---
"ft:title" : "Review Greenlight Findings in IntelliJ or Android Studio"
"ft:prettyUrl" : "c_intellij_results"
---
You can enable a setting that adds a red underline to the filename of files with detected findings.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).
- You have [run a Greenlight scan in IntelliJ or Android Studio](https://docs.veracode.com/r/Scan_with_Veracode_Greenlight_for_IntelliJ).
 
<p font-size="13pt"><b>Overview</b></p>

A summary of your Veracode Greenlight scan is available on the **Findings** tab. The scan level indicates whether the scan occurred at the package level or file level. The scan results on the **Best Practices** subtab provide coding [best practices](https://docs.veracode.com/r/c_best_practices_intellij) and also list the CWEs against which your code is protected.

The scan results use colored lines to identify findings and best practices. The colors correlate to the finding severity type: Very High, High, Medium, and Low. For example, code that contains a finding is highlighted red and code that contains a best practice is underlined green.

<p font-size="13pt"><b>Steps</b></p>

1. In your IDE, select **Tools** \> **Veracode Greenlight** \> **Configure Preferences**. 
2. Select the checkbox under the Settings section. 
3. Click **OK**.
---
"ft:title" : "Working with Scan Results from Within IntelliJ or Android Studio"
"ft:prettyUrl" : "c_intellilJ_results"
---
After [downloading the Veracode scan results](https://docs.veracode.com/r/Download_Veracode_Results_for_Eclipse_Using_the_Veracode_Platform), they appear in the Results view in IntelliJ.

To be able to see Veracode results, you must have the [Results API role](https://docs.veracode.com/r/c_API_roles). To mitigate findings, you must have the [Mitigation API role](https://docs.veracode.com/r/c_API_roles).

The Results view lists information about each finding, including the CWE ID, category, module name, folder path \(if available\), filename, function name, attack vector, line number, count, severity, exploitability, remediation effort, remediation status and mitigation status. To view additional columns or hide columns, click the icon to the right of the columns.

When the Veracode results open in the Results view, you can double-click one of the entries to open the source file. If the source file is in the current workspace and open in an IntelliJ project, scroll the viewer window to highlight the location of the finding.
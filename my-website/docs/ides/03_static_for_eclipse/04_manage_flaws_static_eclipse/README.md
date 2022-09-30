---
"ft:title" : "Working with the Veracode Results in Eclipse"
"ft:prettyUrl" : "c_Eclipse_results"
---
After [downloading the Veracode scan results](https://docs.veracode.com/r/c_download_results_Eclipse), they appear in the Results view in Eclipse.

To be able to see Veracode results, you must have the [Results API role](https://docs.veracode.com/r/c_API_roles). To mitigate flaws, you must have the [Mitigation API role](https://docs.veracode.com/r/c_API_roles). 

If you do not see the Results view in Eclipse, you can access it from:

-   **Window** \> **Show View** \> **Other** \> **Veracode Views** \> **Results**
-   **Window** \> **Open Perspective** \> **Other** \> **Veracode**

The Results view lists information about each flaw, including the CWE ID, category, module name, folder path, filename, function name, attack vector, line number, count, severity, exploitability, remediation effort, remediation status and mitigation status. To view additional columns or hide columns, click the down arrow in the upper-right corner of the Results view and hover over **Show Columns**.

When the Veracode results open in the Results view, you can double-click one of the entries to open the source file. Scroll the viewer window to highlight the flaw location if the source file is in an open Eclipse project in the current workspace.


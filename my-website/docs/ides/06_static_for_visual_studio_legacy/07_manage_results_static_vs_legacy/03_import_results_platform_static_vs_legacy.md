---
"ft:title": "Import Scan Results from the Veracode Platform into Visual Studio (Legacy)"
"ft:prettyUrl": "t_vs_import_results"
---
You can download and import Veracode results from the Veracode Platform and view them in your IDE. You can also [download and import results with the Results API](https://docs.veracode.com/r/t_vs_download_results).

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites for Veracode Static for Visual Studio](https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio).
- You have [downloaded the scan results](https://docs.veracode.com/r/t_vs_download_results).
- For Visual Studio 2019, you have [configured a rendering option](https://docs.veracode.com/r/t_vs_config_2019_results). If you do not configure this option, the scan results might not display in Visual Studio.

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, from the left navigation menu, click **Results**.

2.  Click **Download Report** and select **Detailed XML Export (XML)** from the dropdown menu.

3.  Click **Download**. The report downloads as a ZIP file with the XML document and the associated XSD schema.

4.  In Visual Studio, select **Veracode Static** \> **View Results**.

5.  Click **Browse**. Then, select the XML results file to open.

6.  Click **Open**.

    The scan results open in the Results window. In the Results window you can perform these tasks to review the results while working in your development project:

    -   Filter or search for discovered flaws.
    -   Double-click a flaw to open the source file, if the solution is open, and place your cursor on the line that contains the flaw.
    -   Right-click a flaw and select to view the related call stacks, mitigations, and other details.

<p font-size="13pt"><b>Next Steps</b></p>

[Mitigate Flaws from Within Visual Studio](https://docs.veracode.com/r/c_mitigate_VS)

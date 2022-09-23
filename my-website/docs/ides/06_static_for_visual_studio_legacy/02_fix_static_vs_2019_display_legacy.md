---
"ft:title": "Configure Visual Studio 2019 to Display Scan Results (Legacy)"
"ft:prettyUrl": "t_vs_config_2019_results"
---
If you are using Visual Studio 2019 with .NET Framework version 4.8, you must clear an option in Visual Studio to ensure the downloaded scan results display in the Results window. Otherwise, the Results window may be empty.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [prerequisites for Veracode Static for Visual Studio](https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio).

<p font-size="13pt"><b>Steps</b></p>

1.  In Visual Studio, open the Options window.

2.  Clear the **Optimize rendering for screens with different pixel densities** checkbox.

3.  Restart Visual Studio.

<p font-size="13pt"><b>Next Steps</b></p>

Perform one of these tasks to review scan results in Visual Studio:

-  [Import Scan Results into Visual Studio with the Results API](https://docs.veracode.com/r/t_vs_download_results)
-   [Import Scan Results from the Veracode Platform into Visual Studio](https://docs.veracode.com/r/t_vs_import_results)
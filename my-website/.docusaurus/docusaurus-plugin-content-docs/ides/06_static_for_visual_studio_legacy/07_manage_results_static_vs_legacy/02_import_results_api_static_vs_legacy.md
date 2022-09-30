---
"ft:title": "Import Scan Results into Visual Studio with the Results API (Legacy)"
"ft:prettyUrl": "t_vs_download_results"
---
You can download and import Veracode results from within your IDE using the [Results API](https://docs.veracode.com/r/c_results_main). You can [download and import the results from the Veracode Platform](https://docs.veracode.com/r/t_vs_import_results).

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites for Veracode Static for Visual Studio](https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio).
- Your account has the [Results API role](https://docs.veracode.com/r/c_API_roles).

<p font-size="13pt"><b>Steps</b></p>

1. Select **Extensions** > **Veracode** \> **Download Results**. If the Veracode menu is not visible, ensure you have correctly installed the plugin.

2. If prompted, enter your [Veracode API ID and key](https://docs.veracode.com/r/c_api_credentials3). Optionally, select the **Store API and key** checkbox, so that you only have to enter your credentials one time.

3. Click **Submit**.

4. In the Download Results window, select the required application, scan type, and specific scan. Then, click **Download**.

    The results download from Veracode into the Results view. By default, Veracode saves the results file to the `Downloads` directory on your local computer. For example, on Windows: `C:\Users\{username}\Downloads`. You can [change the default location on the Detailed Reports tab in the Option window](https://docs.veracode.com/r/c_vs_config).

5. Click **Apply** and **OK**.
---
"ft:title" : "Import Veracode Results into IntelliJ or Android Studio with the Results API"
"ft:prettyUrl" : "c_download_results_intellij"
---
You can download Veracode results from within your IDE using the [Results API](https://docs.veracode.com/r/c_results_main). You can also [download and import results from the Veracode Platform](https://docs.veracode.com/r/Download_Veracode_Results_for_IntelliJ_Using_the_Veracode_Platform).

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the [Results API role](https://docs.veracode.com/r/c_API_roles).

<p font-size="13pt"><b>Steps</b></p>

1.  Select **Veracode** \> **Download Results**. If the Veracode menu is not visible, ensure you have correctly installed the plugin.

2.  If prompted, enter your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). Optionally, select the **Store API and key** checkbox, so that you only have to enter your credentials one time.

3.  Click **Submit**.

4.  In the Download Results window, select the required application, scan type, specific scan. Then, click **Download**.

    The results download from Veracode into the Results view. By default, Veracode saves the results file to the `Downloads` directory on your local computer. For example, on Windows: `C:\Users\{username}\Downloads`.

5.  To change this default location, in your IDE, select **Veracode** \> **Options**. Then, change the path in the Location field.

6.  Click **Apply**, then **OK**.
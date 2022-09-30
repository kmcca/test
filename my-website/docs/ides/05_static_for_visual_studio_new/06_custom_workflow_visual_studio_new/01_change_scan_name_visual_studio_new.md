---
"ft:title": "Change the Scan Name in Visual Studio"
"ft:prettyUrl": "Change_the_Scan_Name_in_Visual_Studio_New"
---
You can rename a scan from the name Veracode assigned to it during scanning. For example, you might need to add a unique identifier to each scan name for tracking purposes.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> This topic is for the new Veracode Static for Visual Studio released April 2022. For the legacy versions of Veracode Static for Visual Studio, see <a href="https://docs.veracode.com/r/c_title_VS">Veracode Static for Visual Studio (Legacy)</a>.</p>

<p font-size="13pt"><b>Overview</b></p>

You perform this task in the [Custom Workflow](https://docs.veracode.com/r/Custom_Workflow_Tool_Window_in_Veracode_Static_for_Visual_Studio) window.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> After renaming a scan, you must start the scan from the Custom Workflow window to retain the custom name. If you start a scan outside the Custom Workflow window, such as from the top-level menu, or close the window, the scan name reverts to the dynamically-generated name that Veracode assigned to it. To revert to the previous scan name without exiting the Custom Workflow window, click <b>Sync</b>.</p>

<p font-size="13pt"><b>Steps</b></p>

1. In Visual Studio, select **Veracode Static Analysis** > **Advanced Options** > **Custom Workflow**.
2. In the Scan Name field, edit the scan name value. For example: `ID-4214-MyApp`

    In the Custom Workflow window, you can now run **Build + Package** or switch between sandboxes or the policy scan while retaining the custom name.

3. If you want to run a scan, click **Run Scan** in the Custom Workflow window to retain the custom name.
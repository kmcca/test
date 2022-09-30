---
"ft:title" : "Add the Veracode Azure DevOps Extension to an Azure DevOps or TFS Release Pipeline"
"ft:prettyUrl" : "t_TFS_config_release_pipe"
---
You can configure the Veracode Azure DevOps Extension to add the Veracode Upload and Scan task and the Veracode Flaw Importer task to a release pipeline in Azure DevOps or Team Foundation Server (TFS).

<p font-size="13pt"><b>Steps</b></p>

1. In your Azure DevOps or TFS project, select the **Release** tab.

2. Create a new release and enter the definition name.

3. On the Definition page, select the **Environment** tab and configure the [Veracode Upload and Scan](https://docs.veracode.com/r/t_TFS_config_build_pipe) or [Veracode Flaw Importer](https://docs.veracode.com/r/t_importflaws) tasks. If you want to view a summary report of scan results, you must add the Veracode Upload and Scan task.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> The build object is not available in the release pipeline. Therefore, if you intend to use the Veracode Upload and Scan task in the release pipeline, you must enter the scan name manually. If you do not enter it manually, the scan name variable does not convert to text and the build name appears as <code>$(build.buildNumber)</code>.</p>

5. Save the definition and select **Release** > **Create Release**.

6. For the Veracode Flaw Importer task, if you are using TFS, configure these variables:

    -   For TFS 2017 or higher, set `enabletfs` to `true`.
    -   For TFS 2015, configure these variables:

        - `enabletfs`: enter `true`.
        - `isTfs2015`: enter `true`.
        - `username`: enter your Windows username.
        - `password`: enter your Windows password.
        - `domain`: enter the Windows domain.

7. On the **Release** tab, select the release you just created.

8. For the Veracode Upload and Scan task, in the Environments section, select the environment that contains the task.

9. From the Actions menu, select **Deploy** to start the build in the release pipeline.

<p font-size="13pt"><b>Results</b></p>

After the scan is complete, in your build definition, you can select the **Veracode Scan Summary** tab to view the scan results.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
   <b>Note:</b> For Azure DevOps and TFS 2018 Update 2 or later, if you do not include the Veracode Upload and Scan task in your build definition, you do not see the <b>Veracode Scan Summary</b> tab in the build summary. For earlier versions of TFS, the <b>Veracode Scan Summary</b> tab shows a status message explaining why there are no results.</p>


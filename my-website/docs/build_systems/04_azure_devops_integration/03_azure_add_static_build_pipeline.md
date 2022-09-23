---
"ft:title" : "Add Veracode Static Analysis to Azure DevOps Pipelines"
"ft:prettyUrl" : "t_TFS_config_build_pipe"
---
You can use the Veracode Azure DevOps Extension to integrate Veracode Static Analysis into your Azure DevOps and Team Foundation Server \(TFS\) build pipelines.

<p font-size="13pt"><b>Before You Begin</b></p>

Before adding Veracode analysis to a build pipeline, you must meet these prerequisites:

- Generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). If your credentials contain variables, you must start each variable with a `$` and wrap the variable value in parentheses. For example, you enter the `id` variable as `$(Id)`.
- Before uploading an application, you must package it to include the required debug symbols, as described in the [Packaging Requirements](https://docs.veracode.com/r/compilation_packaging).
- If you want to upload multiple artifacts for scanning, you have prepared one or more ZIP archives:

    a. Add the artifacts to one or more ZIP archives.
 
    b. Ensure the ZIP archives are in the same upload file path location.
    
    c. Prepare the ZIP archives for uploading to Veracode using a separate build step or build steps in your pipeline.

If you have an ASP.NET application, see [Configure an Azure DevOps Build for ASP.NET Applications](https://docs.veracode.com/r/t_vsts_precompilation). You can also see this example .NET project that has a precompilation step: [https://github.com/veracode/verademo-dotnet/blob/main/azure-pipelines.yml](https://github.com/veracode/verademo-dotnet/blob/main/azure-pipelines.yml).

<p font-size="13pt"><b>Steps</b></p>

1. In your Azure DevOps project, select the **Tasks** tab and navigate to your build definition.

2. Click **Add a task...**.

3. Search the list for the `Veracode Upload and Scan` task. Then, click **Add** to add it to the build definition.

4. Select the **Veracode Upload and scan** task.

    The Veracode Upload and Scan window opens.

5. For Connection Details, select a connection source for connecting to Veracode:
    - **Service Connection**: select an existing service connection that uses your Veracode API credentials or click **New** to create a new service connection. For a new connection, in the New service connection window, by default, the Server URL field is populated with the URL for accessing Veracode. Enter your Veracode API credentials, a name for the service connection and, then, click **Save**. The new connection is selected in the Select Service Connection dropdown menu.
     - **Credentials**: enter your Veracode API credentials.
6. For Veracode Scan Settings, enter the name of the associated application profile, a unique scan name, and the filepath to the application artifact or the folder containing the artifacts to upload to Veracode.

    For a .NET application, if you have additional published projects from a solution, include them in the archive to upload and analyze. Add any JavaScript files to a separate ZIP archive according to the packaging instructions in the [Veracode Packaging Requirements](https://docs.veracode.com/r/compilation_packaging). Include only the file types for languages and platforms that Veracode can scan in a ZIP archive to improve uploading and scan speed. This is the Archive Files task Microsoft has available: [https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/archive-files?view=azure-devops](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/archive-files?view=azure-devops).

    If this is not an existing Veracode application, select the **Create Application Profile** checkbox in the Advanced Scan Settings section to have Veracode create an [application profile](https://docs.veracode.com/r/request_profile).

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> Application names in Azure DevOps are case-sensitive.</p>

7. For Advanced Scan Settings:
     -  If you are using a development sandbox, enter a sandbox name or click **Create Sandbox** to create one.
     -  In the Optional Arguments field, enter any [optional parameters](https://docs.veracode.com/r/c_wrapper_CL) to apply to the Upload and Scan action. For example, to configure module selection, use the [`uploadandscan`](https://docs.veracode.com/r/r_uploadandscan) composite actions to specify files to include and exclude in scanning. This example specifies to include all DLL files, exclude any EXE files, and to scan in a sandbox named `mysandbox`, which Veracode creates if the sandbox does not already exist:

    ```shell
    -include *.dll -exclude *.exe -createsandbox true -sandboxname mysandbox
    ```

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Do not enclose any of the values in single or double quotations.</p>

    You can [hide a proxy password](https://docs.veracode.com/r/t_hide_password) during the Upload and Scan action. If you are using the extension in a TFS installation behind a firewall and you require a proxy to reach the public internet, you can add these parameters to configure the proxy settings: `-phost`, `-pport`, `-puser`, and `-ppassword`.

    If the application profile does not exist, select the **Create Application Profile** checkbox to create it. You can select the **Fail build if Upload and Scan build step fails** checkbox to prevent the build from continuing if the Upload and Scan build step fails.

8. For Veracode Scan Results: select the **Import Results upon Scan Completion** checkbox to import the scan results. You can select the option under it to stop the build if the scan results indicate that the application has failed your security policy.

    Selecting either checkbox reserves an assigned build agent to wait until the scan has completed successfully and the scan results are available. With one or both checkboxes selected, you can enter the build agent wait time, in minutes, for failing the build if no scan results are available. The value range is `30` to `1440` (24 hours) and the default is `360` (6 hours). If you enter a value outside this range, the build fails.

    If neither checkbox is selected, the build agent uploads the binaries to Veracode and continues to the next build task in the task list.

9. Optionally, to add debugging to your pipeline, add a new variable and enter these values in the New variable window:

    -   Name: `system.debug`
    -   Value: `true`
 
10. If you want to use the Veracode Azure DevOps flaw import feature in your build definition, [configure the additional related build variables](https://docs.veracode.com/r/t_importflaws).

<p font-size="13pt"><b>Results</b></p>

After the scan is complete, in your build definition, you can select the **Veracode Scan Summary** tab to view the scan results.
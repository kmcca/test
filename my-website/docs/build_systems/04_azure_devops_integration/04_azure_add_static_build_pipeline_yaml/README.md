---
"ft:title" : "Use YAML to Add Veracode Static Analysis to Azure DevOps Pipelines"
"ft:prettyUrl" : "Use_YAML_to_Add_Veracode_Analysis_to_Azure_DevOps_Pipelines"
---
You can use YAML to add the Veracode Azure DevOps Extension and integrate Veracode Static Analysis into your Azure DevOps and Team Foundation Server \(TFS\) build pipelines.

<p font-size="13pt"><b>Before You Begin</b></p>

- Before uploading an application, you must package it to include the required debug symbols, as described in the [Packaging Guidance](https://docs.veracode.com/r/compilation_packaging).
- Generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). If your credentials contain variables, you must start each variable with a `$` and wrap the variable value in parentheses. For example, you enter the `id` variable as `$(Id)`.
- If you want to upload multiple artifacts for scanning, you have prepared one or more ZIP archives:

    a. Add the artifacts to one or more ZIP archives.

    b. Ensure the ZIP archives are in the same upload file path location.

    c. Prepare the ZIP archives for uploading to Veracode using a separate build step or build steps in your pipeline.

If you have an ASP.NET application, see [Configure an Azure DevOps Build for ASP.NET Applications](https://docs.veracode.com/r/t_vsts_precompilation).

<p font-size="13pt"><b>Steps</b></p>

1. In your Azure DevOps or TFS project, navigate to the YAML file for the pipeline in which to add the Veracode task.

2. Click **Show assistant**.

3. Search for `veracode`, then select the **Veracode Upload and Scan** task.

4. In the Veracode Upload and Scan window, in the Connection Details section, select a connection source for connecting to Veracode:
      
    - **Service Connection**: select an existing service connection that uses your Veracode API credentials or [create a new service connection](https://docs.veracode.com/r/Create_a_Service_Connection_in_Azure_DevOps).
    - **Credentials**: enter your Veracode API credentials.
     
5. In the Veracode Scan Settings section, enter the name of the associated application profile, a unique scan name, and the filepath to either the application artifact or the folder containing the artifacts to upload to Veracode.
    
    For a .NET application, if you have additional published projects from a solution, include them in the archive to upload and analyze. Add any JavaScript files to a separate ZIP archive according to the packaging instructions in the [Veracode Packaging Requirements](https://docs.veracode.com/r/compilation_packaging). Include only the file types for languages and platforms that Veracode can scan in a ZIP archive to improve uploading and scan speed. This is the Archive Files task Microsoft has available: [https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/archive-files?view=azure-devops](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/utility/archive-files?view=azure-devops).

    If this is not an existing Veracode application, select the **Create Application Profile** checkbox in the Advanced Scan Settings section to have Veracode create an [application profile](https://docs.veracode.com/r/request_profile).

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Application names in Azure DevOps are case-sensitive.</p>

7. In the Advanced Scan Settings section, if you are using a development sandbox, enter a sandbox name or click **Create Sandbox** to create one.
        
    In the Optional Arguments field, enter any [optional parameters](https://docs.veracode.com/r/c_wrapper_CL) to apply to the Upload and Scan action. For example, to configure module selection, use the [uploadandscan](https://docs.veracode.com/r/r_uploadandscan) composite actions to specify files to include and exclude in scanning. This example specifies to include all DLL files, exclude any EXE files, and to scan in a sandbox named `mysandbox`, which Veracode creates if the sandbox does not already exist:

    ```
    -include *.dll -exclude *.exe -createsandbox true -sandboxname mysandbox
    ```

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> Do not enclose any of the values in single or double quotations.</p>

    You can [hide a proxy password](https://docs.veracode.com/r/t_hide_password) during the Upload and Scan action. If you are using the extension in a TFS installation behind a firewall and you require a proxy to reach the public internet, you can add these parameters to configure the proxy settings: `-phost`, `-pport`, `-puser`, and `-ppassword`.

    If the application profile does not exist, select the **Create Application Profile** checkbox to create it. You can select the **Fail build if Upload and Scan build step fails** checkbox to prevent the build from continuing if the Upload and Scan build step fails.

8. In the Veracode Scan Results section, select the **Import Results upon Scan Completion** checkbox to import the scan results. You can select the option under it to stop the build if the scan results indicate that the application has failed your security policy.

    Selecting either checkbox reserves an assigned build agent to wait until the scan has completed successfully and the scan results are available. With one or both checkboxes selected, you can enter the build agent wait time, in minutes, for failing the build if no scan results are available. The value range is `30` to `1440` (24 hours) and the default is `360` (6 hours). If you enter a value outside this range, the build fails.

    If neither checkbox is selected, the build agent uploads the binaries to Veracode and continues to the next build task in the task list.

9. Click **Add** to add the Upload and Scan task to the YAML file in your build pipeline.

    This example shows a YAML file for building and scanning a .NET application. It specifies to access Veracode using a service connection. For descriptions of all YAML properties for the Upload and Scan task, see [Azure DevOps YAML Properties for Upload and Scan](https://docs.veracode.com/r/Azure_DevOps_YAML_Properties_for_Upload_and_Scan).

    ```yaml
    # .NET Desktop
    # Build and run tests for .NET Desktop or Windows classic desktop solutions.
    # Add steps that publish symbols, save build artifacts, and more:
    # https://docs.microsoft.com/azure/devops/pipelines/apps/windows/dot-net
    
    trigger:
    - master
    
    pool:
      vmImage: 'windows-latest'
    
    variables:
      solution: '**/*.sln'
      buildPlatform: 'Any CPU'
      buildConfiguration: 'Debug' # required as part of Veracode packaging for task: VSBuild@1
    
    steps:
    - task: NuGetToolInstaller@1
    
    - task: NuGetCommand@2
      inputs:
        restoreSolution: '$(solution)'
    
    - task: VSBuild@1
      inputs:
        solution: '$(solution)'
        platform: '$(buildPlatform)'
        configuration: '$(buildConfiguration)'
    
    - task: VSTest@2
      inputs:
        platform: '$(buildPlatform)'
        configuration: '$(buildConfiguration)'
    
    - task: DownloadPipelineArtifact@2
      inputs:
        patterns: '**/*.exe,**/*.dll,**/*.pdb' # ensures Veracode gets the PDB files for Static Analyisis
    
    # This task makes the pipeline build artifacts available in a known location for upload to Veracode
    - task: PublishPipelineArtifact@1
      inputs:
        targetPath: $(System.DefaultWorkingDirectory)/bin/Debug
        artifactName: Debug
        
    - task: Veracode@3
      inputs:
        ConnectionDetailsSelection: 'Endpoint' # access Veracode with service connection or Veracode API credentials
        AnalysisService: 'Veracode Service Account' # service connection name for accessing Veracode
        veracodeAppProfile: '$(system.teamProject)' # Veracode application profile to scan
        version: '$(build.buildNumber)' # name of the scan to run
        filepath: '$(System.DefaultWorkingDirectory)/bin/Debug' # filepath or folderpath of files to upload to Veracode
        createSandBox: false # true to scan of new development sandbox
        createProfile: true # false to enforce using existing profiles
        failBuildIfUploadAndScanBuildStepFails: false # true to fail build if Upload and Scan task fails to start
        importResults: true # required to view Veracode results in Azure DevOps
        failBuildOnPolicyFail: false # true to fail the build if application fails policy
        maximumWaitTime: '360' # wait time, in minutes, to fail the build if no scan results available
    ```

10. Optionally, to add debugging to your pipeline, add a new variable and enter these values in the New variable window:

     -   Name: `system.debug`
     -   Value: `true`

<p font-size="13pt"><b>Results</b></p>

After the scan is complete, in your build definition, you can select the **Veracode Scan Summary** tab to view the scan results.

<p font-size="13pt"><b>Next Steps</b></p>

If you want to use the Veracode Azure DevOps flaw import feature in your build definition, [configure the additional related build variables](https://docs.veracode.com/r/Use_YAML_to_Configure_Azure_DevOps_Pipelines_for_Importing_Flaws).

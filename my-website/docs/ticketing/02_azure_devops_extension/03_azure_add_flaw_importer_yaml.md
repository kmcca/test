---
"ft:title" : "Use YAML to Configure Azure DevOps Pipelines for Importing Flaws and Vulnerabilities"
"ft:prettyUrl" : "Use_YAML_to_Configure_Azure_DevOps_Pipelines_for_Importing_Flaws"
---
You can use YAML to add the Veracode Flaw Importer task to your Azure DevOps and Team Foundation Server \(TFS\) build pipelines. The task uses the Veracode Azure DevOps Extension to automatically import flaw and vulnerabilities as work items.

<p font-size="13pt"><b>Before You Begin</b></p>

Before you can import flaws or vulnerabilities into Azure DevOps, you must meet these prerequisites:

- Ensure these projects are in the same Azure DevOps organization or TFS team project collection:
    - The project to which the running release or build job belongs, where the Flaw Importer task is running
    - The project to which you want to import the flaws
- You have [installed the Veracode Azure DevOps Extension](https://docs.veracode.com/r/t_install_azure_devops_extension).
- You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). If your credentials contain variables, you must start each variable with a `$` and wrap the variable value in parentheses. For example, you enter the `id` variable as `$(Id)`.
- The Veracode Flaw Importer generates work items based on the Agile, Scrum, and CMMI process templates in Azure DevOps. You can customize the default fields in the process templates, such as changing the state names to match the names of your actual states and their transition values. When configuring the Flaw Importer you can specify the custom fields to add to work items when importing flaws. If you import flaws using custom process templates and you also want to add custom fields to generated work items, before specifying the custom fields ensure you have configured the [required predefined variables in your build or release configurations](https://docs.veracode.com/r/Use_Custom_Process_Templates_to_Import_Flaws_into_Azure_DevOps).
- To synchronize comments between work items and imported flaws or vulnerabilities, you must have Azure DevOps/TFS 2019 or later.

<p font-size="13pt"><b>Overview</b></p>

If you do not want to use YAML, see [Import Flaws and Vulnerabilities into Azure DevOps](https://docs.veracode.com/r/t_importflaws)

<p font-size="13pt"><b>Steps</b></p>

1. In your Azure DevOps or TFS project, navigate to the YAML file for the pipeline in which to add the Veracode task.

2. Click **Show assistant**.

3. Search for `veracode`. Then, select the **Veracode Flaw Importer** task.

4. In the Flaw Importer window, from the Connection Details section, select a connection source for connecting to Veracode:

    - **Service Connection**: select an existing service connection that uses your Veracode API credentials or click **New** to create a new service connection. For a new connection, in the New service connection window, by default, the Server URL is populated with the URL for accessing Veracode. Enter your Veracode API credentials, a name for the service connection and, then, click **Save**. The new connection is selected in the Select Service Connection dropdown menu.
    - **Credentials**: enter your Veracode API credentials. If you use variables for your credentials, you must start each variable with a `$` and wrap the variable value in parentheses. For example, for a variable named `id`, enter `$(Id)`.

5. In the Flaw Source section, enter the application name and sandbox name, if applicable, for which you want to import flaws from Veracode.

6. In the Work Item Settings section, from the Scan Type dropdown menu, select the scan type(s) from which to import flaws: Dynamic Analysis and Static Analysis, Software Compositions Analysis (SCA) only, or all three scan types.
7. From the Import dropdown menu, select the flaw type to import as work items:

    - **All Flaws**: includes mitigated and remediated flaws and vulnerabilities from all scans. During the import process, the extension changes the state of the work items for all mitigated and remediated findings to resolved or closed. After you fix or remediate the finding, during the next scan, its status changes to fixed or mitigated in the Detailed Report. During the next import, the related work items change to closed. This option imports all findings without any restrictions.
    - **All Unmitigated Flaws**: includes flaws and vulnerabilities from all scans.
    - **All Flaws Violating Policy**: includes all open flaws and vulnerabilities from all scans that affect policy.
    - **All Unmitigated Flaws Violating Policy**: includes open flaws and vulnerabilities from all scans that affect policy. The default.

    When generating new work items for imported findings, the extension also imports [mitigation and annotation comments](https://docs.veracode.com/r/improve_mitigation). If you add comments to a previously imported finding with work items, the extension does not import the new comments to work items during subsequent imports.

8. From the Work Item Type dropdown menu, select the work item type to generate for all imported flaws.

     <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Scrum process template does not support the Issue work item type. Also, the Veracode Flaw Importer task can only import flaws to customized work item types that do not contain required fields. If your customized work item types contain required fields, you must select different work item types that do not contain required fields, or the flaws fail to import.</p>

9. In the Area Path field, enter the path to the area where you want to group the work items. You can enter up to five levels in the path. To enter the area paths, use the format `<project_name>\<area_1>\<area_2>`. The value in `<project_name>` is the name of the project in the Build Pipeline or Release Pipeline task for which you want to import flaws.

10. Optionally, select the **Overwrite Area Path in Work Items on Import** checkbox to replace the area path in new and existing work items with the value in the Area Path field. If you clear this checkbox, existing work items retain their current area path.

11. In the Add Custom Tag field, enter a custom tag name to add user-defined tags to all work items generated from current build.

12. Select the **Add CWE as a Tag** checkbox to add a tag with the CWE number to all the work items that the current build generates.

13. Select the **Add Build ID as a Tag** checkbox to add a tag to each work item showing the build number of the build that contains the imported flaw.

14. Select the **Add Scan Name as a Tag** checkbox to add a tag to each work item showing the name of the scan that found the imported flaw.

15. In the Flaw Import Limit section, enter the maximum number of flaws to import at one time. The default is `1000`.

16. In the Custom Fields field, if you are using custom process templates with custom fields, you can specify the custom fields to add to new, but not existing, work items. Enter key-value pairs to specify each field name and value. Add each key-value pair, separated with a colon, on a new line.

    To add Agile-based custom fields for story points, priority, work estimate, and test system information, add these values:

    ```plaintext
    Microsoft.VSTS.Scheduling.StoryPoints:3
    Microsoft.VSTS.Common.Priority:1
    Microsoft.VSTS.Scheduling.OriginalEstimate:4
    Microsoft.VSTS.TCM.SystemInfo:My Test System
    ```

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Ensure these field names match the field names defined in Azure and that all values are valid for a given field type. If there are any mismatch or validation errors, you can only see these errors in the console after importing flaws.</p>

17. In the Advanced Scan Settings section, configure these options:

    - **Proxy Settings**: if you use a proxy to access Veracode, enter the proxy settings. For example:

        ```
        -phost abc.com - pport 5252 -puser proxyuser -ppassword proxypassword
        ```

        <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Do not enclose any of the values in single or double quotations.</p>

    - **Team Foundation Server Password**: do not change this value from the default of `$(password)`.
     
18. Click **Add** to add the Flaw Importer task to the YAML file in your build pipeline.

    This example shows a YAML file for building a .NET application. At the end of the file are the Veracode tasks for [Upload and Scan](https://docs.veracode.com/r/Use_YAML_to_Add_Veracode_Analysis_to_Azure_DevOps_Pipelines) and Flaw Importer. The file specifies to access Veracode using a service connection. For descriptions of all YAML properties for the Flaw Importer task, see [Azure DevOps YAML Properties for Flaw Importer](https://docs.veracode.com/r/Azure_DevOps_YAML_Properties_for_Flaw_Importer).

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
        patterns: '**/*.exe,**/*.dll,**/*.pdb' # ensures Veracode gets the PDB files for Static Analysis
    
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
    
    - task: Veracode Flaw Importer@3
      inputs:
        ConnectionDetailsSelection: 'Endpoint' # access Veracode with service connection or Veracode API credentials
        AnalysisService: 'Veracode Service Account' # service connection name for accessing Veracode
        veracodeAppProfile: '$(system.teamProject)' # Veracode application profile to scan
        sandboxName: 'MySandBox' # name of a development sandbox for sandbox scans
        scanType: 'Dynamic and Static Analysis' # import flaws from dynamic and static analysis scans
        importType: 'All Flaws' # import all flaws discovered during scan
        workItemType: 'Issue' # import all discovered flaws as Issue work item types
        area: '$(system.teamProject)' # area for grouping work items
        overwriteAreaPathInWorkItemsOnImport: 'true' # replace area path in all work items with value for 'area'
        addCustomTag: 'MyCustomTag' # add MyCustomTag to all work items for imported flaws
        addCweAsATag: true # add corresponding CWE ID to all work items for imported flaws
        foundInBuild: true # add build number to all work items for imported flaws
        addScanNameAsATag: true # add Veracode scan name to all work items for imported flaws
        flawImportLimit: '1000' # import a maximum of 1000 flaws at the same time
        customFields: # add these custom fields to work items for imported flaws
          Custom.Field.Name1:value
          Custom.Field.Name2:value
          Custom.Field.Name3:value
          Custom.Field.Name4:value
    ```

19. If you are using TFS, click the **Variables** tab and configure these variables. If using Azure DevOps, go directly to the next step.

    -   For TFS 2017 or higher, set `enabletfs` to `true`.
    -   For TFS 2015, configure these variables:

        - `enabletfs`: enter `true`.
        - `isTfs2015`: enter `true`.
        - `username`: enter your Windows username.
        - `password`: enter your Windows password.
        - `domain`: enter the Windows domain.

20. If you are using [customized process templates](https://docs.veracode.com/r/Use_Custom_Process_Templates_to_Import_Flaws_into_Azure_DevOps), configure these predefined variables on the **Variables** tab in your build or release configuration:

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The names of these predefined variables must match the variable names in your customized process templates.</p>

    - `enableCustomProcessTemplate`: enter `true` to enable.
    - `customWorkItemType`: enter one of these work item types:
        -   `Bug`
        -   `Epic`
        -   `Feature`
        -   `Issue`
        -   `Task`
        -   `Test Case`
    - `customPTActiveStatus`: enter the state for in progress or active work.
    - `customPTNewStatus`: enter the state for new or proposed work.
    - `customPTResolvedStatus`: enter the state for resolved work.
    - `customPTDesignStatus`: enter the state for work in design or test.
    - `customPTCloseStatus`: enter the state for completed work.

    You configure these variables for the work item type (WIT) of which you are creating work items in your build or release configuration. The variables ensure that flaws import correctly if the status of a work item changes. See the Azure DevOps documentation for information on the work item states.

    In your build or release configuration, on the **Variables** tab, configure these pipeline variables in the customized process template for the Bug work item:

    - `enableCustomProcessTemplate`: enter `true`
    - `customWorkItemType`: enter `Bug`
    - `customPTActiveStatus`: enter `Working`
    - `customPTNewStatus`: enter `Introducing`
    - `customPTResolvedStatus`: enter `Fixed`
    - `customPTCloseStatus`: enter `Closed`
     
21. Click **Save & queue** to save your configurations and add the build to your queue.

22. Optionally, to add debugging to your pipeline, add a new variable and enter these values in the New variable window:

    - Name: `system.debug`
    - Value: `true`

<p font-size="13pt"><b>Results</b></p>

After the Flaw Import task has completed successfully, the work items related to flaws or vulnerabilities in a given application appear in Azure DevOps or TFS. In Azure DevOps, you can search on the Work or Queries pages, for example, to find the work items you created.

<p font-size="13pt"><b>Next Steps</b></p>

You can use a variable to [prevent a password from appearing in a console log](https://docs.veracode.com/r/t_hide_password).
---
"ft:title": "Import Flaws and Vulnerabilities into Azure DevOps"
"ft:prettyUrl": "t_importflaws"
---
You can add the Veracode Flaw Importer task to your Azure DevOps and Team Foundation Server (TFS) build pipelines. The task uses the Veracode Azure DevOps Extension to automatically import flaws and vulnerabilities as work items.

<p font-size="13pt"><b>Before You Begin</b></p>

Before you can import flaws or vulnerabilities into Azure DevOps, you must meet these prerequisites:

- Ensure these projects are in the same Azure DevOps organization or TFS team project collection:
    - The project to which the running release or build job belongs, where the Flaw Importer task is running
    - The project to which you want to import the flaws or vulnerabilities
- You have [installed the Veracode Azure DevOps Extension](https://docs.veracode.com/r/t_install_azure_devops_extension).
- You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). If your credentials contain variables, you must start each variable with a `$` and wrap the variable value in parentheses. For example, you enter the `id` variable as `$(Id)`.
- The Veracode Flaw Importer generates work items based on the Agile, Scrum, and CMMI process templates in Azure DevOps. You can customize the default fields in the process templates, such as changing the state names to match the names of your actual states and their transition values. When configuring the Flaw Importer you can specify the custom fields to add to work items when importing flaws or vulnerabilities. If you use custom process templates and you also want to add custom fields to generated work items, before specifying the custom fields ensure you have configured the [required predefined variables in your build or release configurations](https://docs.veracode.com/r/Use_Custom_Process_Templates_to_Import_Flaws_into_Azure_DevOps).
- To synchronize comments between work items and imported flaws or vulnerabilities, you must have Azure DevOps/TFS 2019 or later.

<p font-size="13pt"><b>Overview</b></p>

You can also [Use YAML to Configure Azure DevOps Pipelines for Importing Flaws](https://docs.veracode.com/r/Use_YAML_to_Configure_Azure_DevOps_Pipelines_for_Importing_Flaws).

<p font-size="13pt"><b>Steps</b></p>

1. In your Azure DevOps or TFS project, go to your build definition.

2. Add Veracode Flaw Importer as a build task.

3. Click the **Import flaws** task to open the Veracode Flaw Importer window.

4. In the Flaw Importer window, from the Connection Details section, select a connection source for connecting to Veracode:

    - **Service Connection**: select an existing service connection that uses your Veracode API credentials or click **New** to create a new service connection. For a new connection, in the New service connection window, by default, the Server URL is populated with the URL for accessing Veracode. Enter your Veracode API credentials, a name for the service connection and, then, click **Save**. The new connection is selected in the Select Service Connection dropdown menu.
    - **Credentials**: enter your Veracode API credentials. If you use variables for your credentials, you must start each variable with a `$` and wrap the variable value in parentheses. For example, for a variable named `id`, enter `$(Id)`.

5. In the Flaw Source section, enter the application name and sandbox name, if applicable, for which you want to import flaws from Veracode.

6. In the Work Item Settings section, from the Scan Type dropdown menu, select the scan type(s) from which to import flaws or vulnerabilities: Dynamic Analysis and Static Analysis, Software Compositions Analysis (SCA) only, or all three scan types.  
7. From the Import dropdown menu, select the flaw type to import as work items:

    - **All Flaws**: includes mitigated and remediated flaws and vulnerabilities from all scans. During the import process, the extension changes the state of the work items for all mitigated and remediated flaws to resolved or closed. After you fix or remediate the flaw, during the next scan, its status changes to fixed or mitigated in the Detailed Report. During the next import, the related work items change to closed. This option imports all flaws without any restrictions.
    - **All Unmitigated Flaws**: includes flaws and vulnerabilities from all scans.
    - **All Flaws Violating Policy**: includes all open flaws and vulnerabilities from all scans that affect policy.
    - **All Unmitigated Flaws Violating Policy**: includes open flaws and vulnerabilities from all scans that affect policy. The default.

    When generating new work items for imported flaws, the extension also imports [mitigation and annotation comments](https://docs.veracode.com/r/improve_mitigation). If you add comments to a previously imported flaw with work items, the extension does not import the new comments to work items during subsequent imports.

8. From the Work Item Type dropdown menu, select the work item type to generate for all imported flaws.

     <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Scrum process template does not support the Issue work item type. Also, the Veracode Flaw Importer task can only import flaws to customized work item types that do not contain required fields. If your customized work item types contain required fields, you must select different work item types that do not contain required fields, or the flaws fail to import.</p>

9. In the Area Path field, enter the path to the area where you want to group the work items. You can enter up to five levels in the path. To enter the area paths, use the format `<project name>\<area 1>\<area 2>`. The value in `<project name>` is the name of the project in the Build Pipeline or Release Pipeline task for which you want to import flaws.

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

18. Optionally, to add debugging to your pipeline, add a new variable and enter these values in the New variable window:

    -   Name: `system.debug`
    -   Value: `true`

19. Click **Save & queue** to save your configurations and add the build to your queue.

<p font-size="13pt"><b>Results</b></p>

After the Flaw Import task has completed successfully, the work items related to flaws or vulnerabilities in a given application appear in Azure DevOps or TFS. In Azure DevOps, you can search on the Work or Queries pages, for example, to find the work items you created.
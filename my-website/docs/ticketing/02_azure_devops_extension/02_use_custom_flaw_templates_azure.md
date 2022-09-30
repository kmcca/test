---
"ft:title": "Use Custom Process Templates to Import Flaws and Vulnerabilities into Azure DevOps"
"ft:prettyUrl": "Use_Custom_Process_Templates_to_Import_Flaws_into_Azure_DevOps"
---
You can use custom process templates to automatically import flaws and vulnerabilities as work items into Azure DevOps or Team Foundation Server (TFS).

<p font-size="13pt"><b>Overview</b></p>

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> To ensure that flaws import successfully, if you want to add custom fields to the generated work items, you must configure these predefined variables before <a href="https://docs.veracode.com/r/t_vsts_flaw_importer">specifying the custom fields in the Veracode Flaw Importer</a>.</p>

<p font-size="13pt"><b>Steps</b></p>

1.  In your Azure project, configure these predefined variables on the **Variables** tab in your build or release configuration:

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> The names of these predefined variables must match the variable names in your customized process templates.</p>

    - `enableCustomProcessTemplate`: enter `true` to enable.
    - `customWorkItemType`: enter one of these work item types:

        - `Agile`
        - `Bug`
        - `Epic`
        - `Feature`
        - `Issue`
        - `Task`
        - `Test Case`

    - `customPTActiveStatus`: enter the state for in progress or active work.
    - `customPTNewStatus`: enter the state for new or proposed work.
    - `customPTResolvedStatus`: enter the state for resolved work.
    - `customPTDesignStatus`: enter the state for work in design or test.
    - `customPTCloseStatus`: enter the state for completed work.

    You configure these variables for the work item type (WIT) of which you are creating work items in your build or release configuration. The variables ensure that flaws import correctly if the status of a work item changes. See the Azure DevOps documentation for information on the work item states.

    For example, on the **States** tab, you might have a Bug work item with these state changes:

    - For Proposed: `Introducing`
    - For In Progress: `Working`
    - For Resolved: `Fixed`
    - For Completed: `Closed`

    In your build or release configuration, on the **Variables** tab, you configure these pipeline variables in the customized process template for the Bug work item:

    - `enableCustomProcessTemplate`: enter `true`
    - `customWorkItemType`: enter `Bug`
    - `customPTActiveStatus`: enter `Working`
    - `customPTNewStatus`: enter `Introducing`
    - `customPTResolvedStatus`: enter `Fixed`
    - `customPTCloseStatus`: enter `Closed`
 
2.  Optionally, to add debugging to your pipeline, add a new variable and enter these values in the New variable window:

    - Name: `system.debug`
    - Value: `true`
 
3.  Click **Save & queue** to save your configurations and add the build to your queue.

<p font-size="13pt"><b>Results</b></p>

After the flaw import task has completed successfully, the work items related to flaws in a given application appear in Azure DevOps or TFS. In Azure DevOps, you can search on the Work or Queries pages, for example, to find the work items you created.

<p font-size="13pt"><b>Next Steps</b></p>

You can use a variable to [prevent a password from appearing in a console log](https://docs.veracode.com/r/t_hide_password).
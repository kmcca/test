---
"ft:title": "Configure Findings Import Settings for Jira"
"ft:prettyUrl": "t_jira_findings_import"
---
You can configure the Veracode Integration for Jira to specify the findings identified during Veracode scanning to import into Jira.

<p font-size="13pt"><b>Before You Begin</b></p>

Before you can link imported findings to other issues, ensure the issue linking feature in Jira is activated: **Administration** > **Issues** > **Issue linking**.

<p font-size="13pt"><b>Overview</b></p>

You can configure the integration to import findings from the Veracode Platform into either a:

- Default project that you select from the provided dropdown menu in this procedure.
- Project that you have named in a custom field on the [Metadata page](https://docs.veracode.com/r/request_profile) of each Veracode application profile.

<p font-size="13pt"><b>Steps</b></p>

1. In Jira, select **Administration** > **Manage apps** > **Findings Import**.

2. In the Import section, select the types of findings to import. Other sections on this page become enabled or disabled depending on your selections.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If you select <b>Sandbox static findings</b> or <b>Sandbox SCA findings</b>, the corresponding options for importing sandbox findings are disabled.</p>

3. In the Filter Import By section, select which findings to import:

    - **All findings**: from all scans, including closed findings
    - **Only findings from the most recent scan**: all open findings that were found in the most recent scan
    - **All unmitigated findings**: from all scans, including closed findings
    - **Only unmitigated findings from most recent scan**: all open, unmitigated findings from most recent scan
    - **All findings that affect policy**: all open findings from all scans that affect policy
    - **All unmitigated findings that affect policy**: all unmitigated, open findings from all scans that affect policy

    During each import, the integration checks previously-imported findings to verify if it can close the findings. For example, if you select the import selection criteria **Only findings from the most recent scan** and the most recent scan resulted in a finding that was fixed, the integration closes the Jira issue for this particular finding.

4. Select to assign imported findings to a specific epic or link them to a related issue.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If you selected to import sandbox findings, these options are disabled.</p>

    - **Assign to Epic**: select to assign imported findings to a specific epic. Then, from the dropdown menu, select the Veracode custom field that contains the exact epic issue key. If you leave this custom field empty, your import results in an error. The integration assigns imported findings from every Veracode application with this exact epic issue key value in the same custom field. For example, you have added the same epic issue key value to Custom Field 5 in every application profile.
    - **Link to Issue**: select to link imported findings to a related issue. Then, from the dropdown menu, select the Veracode custom field that contains the exact issue key for the related issue to which to link imported findings. If you leave this custom field empty, your import results in an error. The integration links imported findings from every Veracode application with this exact issue key value in the same custom field. For example, you have added the same issue key value to Custom Field 7 in every application profile.

5. From the Import Static and Dynamic Findings As dropdown menu, select the issue type to apply to each imported static and dynamic finding.

    For SCA findings, the integration imports components as stories and imports vulnerabilities for those components as subtasks of the related stories.

6. In the Import Issues Into section, select the Jira project into which you want to import the security findings or select the Veracode custom field that maps to the appropriate Jira project.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You cannot enter custom metadata for sandbox scans of the application using the Veracode Platform. To enter custom metadata for sandbox scans, use the <a href="https://docs.veracode.com/r/c_sandbox_update_rest">Development Sandbox API</a>.</p>

7. In the Add Values To Issues section, select the labels, or enter a string for a custom label, to add to the issues for all imported findings. You can also select to assign the issues to the next fix version scheduled for your Jira project.

    For example, you can assign issues to the next fix version of your software build, add a custom label to help you triage or sort your findings, and add a label for the CWE that corresponds to the type of finding discovered during scanning.

8. If you selected to import sandbox findings, specify the Jira project into which to import findings, the labels to add to the issues during import, and whether to assign each issue to the next fix version.

9. In the Automated Issue Management section, select whether to automatically close findings mitigated in the Veracode Platform or manually update the status of mitigated findings.

10. In the JIRA User field, enter the username of the Jira user who can create and modify issues.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> This Jira user must have the necessary permissions for all Jira projects into which the integration imports findings.</p>

11. Click **Test JIRA User** to verify the Jira username.

12. Optionally, in the Override Description section, select the **Override the Jira Description field** checkbox.

13. Enter the text to add to the Description field in each issue or leave the text field blank. During the next findings import, the contents of this field replace any content in the issue Description field for each imported finding.

14. Click **Save** to save all import settings.

15. If Jira prompts you to perform a re-index, you can proceed with re-indexing. However, Veracode only recommends re-indexing when it is required.

<p font-size="13pt"><b>Results</b></p>

The Import Settings section reports any errors detected in your configuration. If there are no errors, the configuration is complete and you can proceed with importing findings using the Veracode Integration for Jira.

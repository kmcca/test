---
"ft:title": "Configure Mappings for Jira Cloud Fields"
"ft:prettyUrl": "t_jira_cloud_custom_mapping"
---
You can configure mappings between custom fields in the Veracode Platform and fields in Jira. The Veracode Integration for Jira uses these mappings to import specific information when importing findings as Jira issues.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to **Administration** \> **Apps** \> **Veracode Integration** \> **Field Mappings**.

2.  In the Veracode Integration Field Mapping window, in the Veracode Platform column, select from the dropdown menu the name of the Veracode custom field you want to map.

3.  In the Jira column, from the dropdown menu, select the Jira field you want to map to the Veracode field.

4.  Click **Add Mapping**.

5.  Repeat these steps until you have mapped all the desired fields.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Custom field names do not support commas (,) or colons (:).</p>

6.  To delete any mappings you do not want to keep, click **Remove**.

<p font-size="13pt"><b>Next Steps</b></p>

If you add any Veracode custom fields, you must add these fields to the associated [project screen in Jira Cloud](../06_jira_cloud_associate_fields_to_screens.md).

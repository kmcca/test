---
"ft:title": "Perform a Selective Finding Import in Jira Cloud"
"ft:prettyUrl": "t_jira_cloud_select_finding_import"
---
You can use the Veracode Integration for Jira Cloud to perform selective imports of specific findings from Veracode to Jira Cloud.

<p font-size="13pt"><b>Steps</b></p>

1. Go to **Jira settings** \> **Apps** \> **Veracode Integration** \> **Selective Import**.

2. In the Import Limit field, enter the maximum number of findings you want to import for any individual application.

3. If you want to override the general import limit for a particular application, select the **Override by Application** checkbox and select the [Veracode custom field](https://docs.veracode.com/r/t_add_metadata) that determines the import limit for the application.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If the Veracode custom field configuration is invalid, the integration ignores the override and applies the general import limit.</p>

5. Select the findings you want to import.

6. Click **Import to JIRA**.

---
"ft:title": "Schedule Automated Finding Import in Jira Cloud"
"ft:prettyUrl": "t_jira_cloud_auto_finding_import"
---
You can use the Veracode Integration for Jira Cloud to schedule automated imports of findings from Veracode to Jira Cloud.

<p font-size="13pt"><b>Steps</b></p>

1. Go to **Jira settings** > **Apps** > **Veracode Integration** > **Import Automation**.

2. Select the **Automate Flaw Import** checkbox.

3. Select an import frequency: **Hourly**, **Daily**, or **Weekly**.

4. If you selected **Daily**, select a time. If you selected **Weekly**, select a day and time.

5. In the Import Limit field, enter the maximum number of flaws you want to import at one time for any application. If you do not provide an import limit, the integration imports all flaws found in Veracode scans.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The integration imports findings in order of severity, with higher severity taking precedence, then in order of creation date, with earlier findings taking precedence.</p>

6. If you want to override the general import limit for a particular application, select the **Override by Application** checkbox and select the [Veracode custom field](https://docs.veracode.com/r/t_add_metadata) that determines the import limit for the application.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If the Veracode custom field configuration is invalid, the integration ignores the override and applies the general import limit.</p>

7. Click **Save**.
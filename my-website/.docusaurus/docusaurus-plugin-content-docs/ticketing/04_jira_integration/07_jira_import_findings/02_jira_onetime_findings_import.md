---
"ft:title": "Perform a One-Time Finding Import in Jira"
"ft:prettyUrl": "t_jira_onetime_finding_import"
---
You can use the Veracode Integration for Jira to perform one-time imports of findings from the Veracode Platform to Jira.

<p font-size="13pt"><b>Steps</b></p>

1. In Jira, select **Administration** > **Manage apps** > **One Time Import**.

2. In the Import Limit field, enter the maximum number of static findings you want to import for any application. Import limits do not apply to SCA findings. If you do not provide an import limit, the integration imports all findings found in Veracode scans.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> The integration imports findings in order of severity, with higher severity taking precedence, then in order of creation date, with earlier findings taking precedence.</p>

3. If you want to override the general import limit for a specific application:

    a.  Select the **Override by Application** checkbox.
   
    b.  Select the [Veracode custom field](https://docs.veracode.com/r/t_add_metadata) that determines the import limit for the application.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> If the Veracode custom field configuration is invalid, the integration ignores the override and applies the general import limit.</p>

5. Click **Import to JIRA**.

---
"ft:title": "Configure Mappings for Jira Cloud Priorities"
"ft:prettyUrl": "t_jira_cloud_config_sev_mapping"
---
You can map Veracode flaw severities to your customized priorities in Jira Cloud.

<p font-size="13pt"><b>Steps</b></p>

1.  Select **Administration** > **Manage apps** > **Severity Mappings**.

    The Veracode Integration Severity Mappings page opens.

2.  In the JIRA Priority column, select the name of the Jira priority to map to the corresponding Veracode severity.

3.  Repeat the previous step to map each severity to a priority.

4.  Click **Save** to save the mapping.

<p font-size="13pt"><b>Results</b></p>

If the mapping is valid, you see a success message. If the [mapping is invalid](README.md), you see an error message and the mapping fails to save.

<p font-size="13pt"><b>Next Steps</b></p>

You can now import security findings to Jira Cloud, which applies the mapping to new flaws.
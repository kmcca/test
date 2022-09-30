---
"ft:title": "Configure Mappings for Jira Priorities"
"ft:prettyUrl": "t_jira_config_sev_map"
---
You can map Veracode flaw severities to your customized priorities in Jira.

<p font-size="13pt"><b>Steps</b></p>

1.  In Jira, select **Administration** > **Manage apps** > **Severity Mappings**.

2.  On the Veracode Integration Severity Mappings page, go to the JIRA Priority column.

3.  Click a dropdown menu and select the name of the Jira priority you want to map to the corresponding Veracode severity.

4.  Repeat the previous step to map each severity to a priority.

5.  Click **Save** to save the mapping.

If the mapping is valid, you see a success message. If the [mapping is invalid](README.md), you see an error message and the mapping fails to save.

You can now import security findings to Jira, which applies the mapping to new flaws.

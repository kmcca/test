---
"ft:title": "Mapping Veracode Severities to Jira Priorities Example"
"ft:prettyUrl": "c_jira_sev_map_ex"
---
This section provides an example of using the Veracode Integration for Jira to map Veracode flaw severities in the Veracode Platform to priorities in Jira.

In this example, the Triage Flaws page in the Veracode Platform lists nine flaws with different severities: Very High, High, Medium, and Low.

![](../../images/jira_sev_map_flaws_example.png)

In the Jira system, the Priorities page lists the five default priorities, in order, with default names.

![](../../images/jira_sev_map_priorities.png)

In Jira, the Veracode Integration Severity Mappings page shows these mappings:

-   The Very High severity is mapped to the **High** priority, instead of the default **Highest** priority.
-   The High severity is mapped to the **Medium** priority, instead of the default **High** priority.
-   The Medium severity is mapped to the **Low** priority, instead of the default **Medium** priority.
-   The lower severities are all mapped to the **Low** priority.

![](../../images/jira_sev_map_page_example.png)

After you import the flaws from the Veracode Platform to Jira as issues, the issues show these assigned priorities:

-   The Very High severity flaw has a High priority.
-   The High severity flaw has a Medium priority.
-   All Medium severity flaws have a Low priority.
-   The Low severity flaw has a Lowest priority.

![](../../images/jira_sev_map_imported_flaws_example.png)

Clicking an issue ID link in Jira displays the Details view showing the priority value. In this example, issue SEV-858 for flaw ID 6, which has a High severity in the Veracode Platform, has a Medium priority in Jira.

![](../../images/jira_sev_map_issue_details_example.png)

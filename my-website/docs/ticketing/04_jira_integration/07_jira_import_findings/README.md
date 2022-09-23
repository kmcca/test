---
"ft:title": "Importing Findings into Jira"
"ft:prettyUrl": "c_jira_import_findings"
---
You can use the Veracode Integration for Jira to automate imports of findings into Jira. You can also perform one-time imports and selective imports of specific findings.

The Veracode Integration for Jira automatically sets the Priority field of an imported finding if that field is available and has default values. The integration uses this formula to set the priority based on the severity of the finding in the Veracode scan results:

-   If Severity = 5, the bug priority is set to Highest
-   If Severity = 4, the bug priority is set to High
-   If Severity = 3, the bug priority is set to Medium
-   If Severity <= 2, the bug priority is set to Lowest

After importing findings to Jira, you can see them assigned to the user.

The title and description of all imported sandbox findings are prefixed with the word Sandbox to differentiate them from regular policy scan findings.

When the integration creates a Jira issue for each finding, it also adds a comment to the finding in the Veracode Platform.
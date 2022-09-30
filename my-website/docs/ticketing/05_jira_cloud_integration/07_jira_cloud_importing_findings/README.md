---
"ft:title": "Importing Findings into Jira Cloud"
"ft:prettyUrl": "c_jira_cloud_import_findings"
---
The Veracode Integration for Jira Cloud enables you to do one-time imports, selective imports, and automated imports of security findings from Veracode scans.

The Veracode Integration for Jira Cloud automatically sets the Priority field of an imported flaw if that field is available and has default values. The integration uses this formula to set the priority based on the severity of the flaw in the Veracode scan results:

-   If Severity = 5, the bug priority is set to Highest
-   If Severity = 4, the bug priority is set to High
-   If Severity = 3, the bug priority is set to Medium
-   If Severity <= 2, the bug priority is set to Lowest

After importing findings, you can see them in Jira Cloud, assigned to the user.

The title and description of all imported sandbox findings are prefixed with the word Sandbox to differentiate them from regular policy scan findings.

When the integration creates a Jira issue for each finding, it also adds a comment to the finding in the Veracode Platform.
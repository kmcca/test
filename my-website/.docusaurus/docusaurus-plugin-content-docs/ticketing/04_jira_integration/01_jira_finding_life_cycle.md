---
"ft:title": "Understanding the Finding Life Cycle in Jira"
"ft:prettyUrl": "c_jira_finding_cycle"
---
The Veracode Integration for Jira and the Veracode Integration for Jira Cloud import findings to Jira or Jira Cloud as issues and maintain the status of those issues. The status is based on the configuration settings on the Administration page in Jira or Jira Cloud. The integration sometimes changes the status of issues and, consequently, adds a comment to the issue describing the reason for the action.

The integration considers each issue to be in one of three status types:

-   Resolved: considered to be done, but not verified or closed. The Jira status names are Resolved or In Review.
-   Closed: someone has verified the issue. The Jira status names are Closed, Done, or Complete.
-   Open: every other status.

If an issue is not resolved, the integration tries to transition it to Resolve, Resolve Issue, Complete Work, Close Issue, or Done. If someone reopens an issue, the integration tries to transition the status to Reopen, Reopen Issue, To Do, Queued for Action, Restart Progress, Start Progress, or Start Review.

In addition, the integration tries to change the status of issues in these situations:

-   The integration does not find a previously imported finding during a new scan and the corresponding issue is not Resolved or Closed. The integration resolves the issue as Cannot Reproduce.
-   The finding still exists, but, based on the import settings, the integration does not re-import it. You could manually resolve the corresponding issue as Won't Fix or Closed, for example.
-   The finding still exists and the integration re-imports it, but the corresponding issue is Resolved or Closed. The integration changes the corresponding issue to Reopen or Open.

To change the status of an issue, in Jira, you can search for and execute status transitions for the project of the issue. For each transition there is a list of transition names. To resolve an issue, you can select the Jira transition that matches one of the names on the list. Jira orders the list, searches transitions in the order shown, and uses the first allowed transition. Veracode recommends transitioning an issue to an imperfect status instead of not changing its status.

The reopen transitions comprise:

-   Reopen
-   Reopen Issue
-   Open
-   To Do
-   Queued for Action
-   Restart Progress
-   Start Progress
-   Start Review

The resolve transitions comprise:

-   Resolve
-   Resolve Issue
-   Complete Work
-   Close
-   Close Issue
-   Done
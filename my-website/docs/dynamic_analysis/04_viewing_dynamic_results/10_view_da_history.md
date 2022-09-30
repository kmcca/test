---
"ft:title" : "View Historical Details for a Dynamic Analysis"
"ft:prettyUrl" : "View_Historical_Details_for_a_Dynamic_Analysis"
---
You can view detailed information about all occurrences of a Dynamic Analysis, including scan results, in the Veracode Platform.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the Creator, Reviewer, or Security Lead [role](https://docs.veracode.com/r/c_role_permissions). Any member of the team associated with the Dynamic Analysis is able to view the analysis and its results.

<p font-size="13pt"><b>Overview</b></p>

You can use the historical information to understand when the analysis and scans, occurred, how often, the analysis duration, the schedule, if any, its current status, and whether it completed successfully. The past occurrences are read-only as they provide an historical record for the selected analysis. You can only change the most recent occurrence of an analysis.

You can also get the historical information with the [Dynamic Analysis REST API](https://docs.veracode.com/r/c_dynamic_intro).

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **Scans & Analysis** \> **Dynamic Analysis**.

    The All Dynamic Analyses page opens.

2. Locate the row for the Dynamic Analysis for which you want to view historical information.

3. From the Actions menu at the end of the row, select **View Analysis History** to open the Analysis History window.

    The Analysis History window shows a list of past occurrences for the selected analysis with this information:

    - Analysis Occurrence ID: unique ID for a specific scan occurrence.
    - Analysis Status: current [status](https://docs.veracode.com/r/c_was_statuses) for the scan.
    - Actual Start and Actual End: timestamp when the scan started and finished, whether manually or on a schedule.
    - Scheduled Start and Scheduled End: for a scheduled scan, the timestamp when a scan is scheduled to start and end. These times indicate when the scan is scheduled to run compared to the times when the scan actually started and ended.

4. Optionally, from the Filter by dropdown menu, you can select to show only scans with a specific status or to include or exclude [prescans](https://docs.veracode.com/r/t_was_prescan). Then, click **Apply** to filter the list.
5. In the Analysis Occurrence ID column, click a link to close the Analysis History window and open a read-only page with more detailed information about the selected occurrence.

    From the Analysis Actions dropdown menu, you can select **Configure Most Recent Analysis** to go to the Edit page for the most recent occurrence of the selected analysis. Any changes to the analysis configuration only apply to future analyses.

6. To view the historical scan results for the selected analysis, in the URLs List or API Specifications to Scan table, click a scan URL.

    The Scan Details page opens with read-only information about the selected scan occurrence. From the Scan Actions dropdown menu, you can select **Configure** to edit the scan configuration. Any changes to the scan configuration only apply to future scans.
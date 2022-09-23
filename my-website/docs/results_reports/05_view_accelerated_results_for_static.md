---
"ft:title" : "View Accelerated Results for Static Scans"
"ft:prettyUrl" : "t_incremental_results"
---
Veracode publishes static scan results incrementally by top-level module so that you can begin reviewing your results while the remainder of your application is scanned.

<p font-size="13pt"><b>Overview</b></p>
Top-level modules are the binaries identified during prescan verification that have entry points for external data. If the flaws are found in code shared across top-level modules, Veracode recommends that you wait for the entire application to scan to view results in the context of the entire application.

<p font-size="13pt"><b>Steps</b></p>

1. From the Applications page in the Veracode Platform, click the **View Partial Results** link, when available.

    Veracode also sends you an email stating that partial results are available when the first module with results is published. You must have one of these [roles](https://docs.veracode.com/r/c_role_permissions) to receive this email: Internal Reviewer, External Reviewer, Executive, Security Lead, Archer Reports, or Results API.

    The Triage Flaws view opens, where you can review any available results.

2. To view which modules have finished scanning:

     a. At the top of the Triage Flaws page, click the **% of modules scanned** link. A popup opens, where you can view the number of modules that have already scanned and the number of modules in the queue for the current scan.

     b. To view information about a specific module, search by module name, then click **Go**.

3. To view a set of results published at a certain time:

     a. From the **Search** drop-down, select **Publish Time**.

     b. For **Publish Times**, select the range of time you want to view.

     c. Click **Go**.



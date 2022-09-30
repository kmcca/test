---
"ft:title" : "Run an Unauthenticated Dynamic Analysis of a Web Application"
"ft:prettyUrl" : "c_was_use_case1"
---
You can use the basic steps in this use case to perform a simple, unauthenticated Dynamic Analysis of multiple URLs. When running an unauthenticated analysis, you do not provide login credentials for access to the target URLs.

<p font-size="13pt"><b>Before You Begin</b></p>

You have reviewed the [prerequisites](https://docs.veracode.com/r/c_was_prepare).

<p font-size="13pt"><b>Overview</b></p>

For details about Veracode API Scanning, see [create a Dynamic Analysis for scanning an API specification](https://docs.veracode.com/r/About_Veracode_API_Scanning).

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **Scans & Analysis** \> **Dynamic Analysis**.

    The All Dynamic Analyses page opens.

2. Click **Scan Web Applications**.

3. Enter a name for the Dynamic Analysis. Use a name that uniquely identifies the analysis within your organization. For example, use the scan name, the team, or business unit responsible for this application as the name of the Dynamic Analysis.

4. Enter the URLs using one of these methods:

    -   Upload a CSV file that contains a list of multiple URLs \(250 maximum\).

        Download the CSV template, enter all URLs and their respective credentials, save the file, and upload the saved file.

    -   Enter the URLs manually \(250 maximum\).

    As you enter the URLs, they appear in the URLs to Scan list.

5. In the Visibility Settings section, select who is able to see the results of the Dynamic Analysis. Visibility settings apply to all the URL scans in the analysis.

6. Optionally, in the Organization Information section, select the business unit associated with the applications you are scanning, and the name and email address of the person responsible for the applications.

7. In the Scanning Certification section, you must select the checkbox to confirm that your organization has the right to scan the URLs you have provided.

8. After you have created the Dynamic Analysis and entered the URLs to scan, you can optionally provide more configuration information for each URL. If your analysis has several URLs, use the search box to find the one you want to configure.

9. Click **Configure** at the bottom of the page.

10. Click the pencil icon ![](../images/pencil_icon.png) at the end of URL row to edit a specific URL configuration.

    There are several options you can change, such as the allowlist, blocklist, and user agent.

11. In the **Blocklist** tab of the URL-Specific Blocklist and Allowlist section, click **Exclude the following URLs** to create a blocklist.

    If you want to ensure that Veracode does not scan specific URLs, you can add them to the analysis blocklist by selecting the option **Exclude the following URLs**. Enter the filepath or directory path of the URLs you want to exclude from this analysis. If you enter a directory path, everything in that directory and its subdirectories are excluded. You must include the slash at the end of the URL for the analysis to consider it a directory instead of a file.

12. Add allowed host URLs in the **Allowlist** tab to ensure Veracode can scan the entire application.

    By default, the Dynamic Analysis scan engine scans all subdirectories under the top-level domain. Because Veracode does not automatically scan the subdomains, you can include them in the scope of the scan by specifying them in the **Allowlist** tab. You can also change the scope of the URL scan by excluding the URLs that contain HTTP or HTTPS.

    You can also change the scope of the scan by adding a subdirectory to a URL. For example, if you add `https://api.example.com/mydir/v1`, the subdirectory `/mydir/v1` in the subdomain `api` is now in scope. If you want to scan all subdirectories under `api`, omit the subdirectory and add `https://api.example.com`. Veracode recommends that you only add the specific subdirectories that you want to scan instead of adding the entire directory.

13. When you are ready to run the analysis, you can start it immediately or [schedule](https://docs.veracode.com/r/Scheduling_Dynamic_Analysis_Scans) it to run at a date up to 90 days in the future. By default, your Dynamic Analysis is not scheduled.

14. Go to the All Dynamic Analyses page, which lists all your scans and their statuses.

    You can review the schedule of any Dynamic Analysis by clicking the clock icon in the row for that Dynamic Analysis. The respective schedule opens, providing at-a-glance information.

16. From the Actions menu at the end of the row, click **View Analysis Results**.

    The results open in the Triage Flaws view of the selected Dynamic Analysis, listing all detected vulnerabilities.

17. You can link results from a Dynamic Analysis to an application profile to evaluate the results against policy, and see the results for all types of scans of the application aggregated in a single report.

    You can only link the results of one URL configuration to an application.

18. Select the **Dynamic Analysis Results** tab of the analysis summary page and select **Actions** \> **Link to Application**.

    The Link to Application window opens.

19. From the list of applications, select the application to which to link results. You cannot select an application that is already linked to a URL configuration.

20. Click **Save**.

<p font-size="13pt"><b>Next Steps</b></p>

- After linking an application to the scan results, you can review the results in the [Dynamic Analysis Coverage Report](https://docs.veracode.com/r/t_view_DA_linksreport).
- [View historical details for a Dynamic Analysis](https://docs.veracode.com/r/View_Historical_Details_for_a_Dynamic_Analysis).
---
"ft:title" : "Configure a Dynamic Analysis for an Internal Web Application"
"ft:prettyUrl" : "c_was_use_case3"
---
You can configure a Dynamic Analysis with Veracode Internal Scanning Management \(ISM\) to scan web applications hosted within a corporate firewall and inaccessible to the public internet.

<p font-size="13pt"><b>Before You Begin</b></p>

- You have reviewed the [prerequisites](https://docs.veracode.com/r/c_was_prepare).
- You have configured your ISM gateway and endpoint according to:
    - [Best Practices for Gateway Management](https://docs.veracode.com/r/c_gateway_best_practices)
    - [Best Practices for Endpoint Management](https://docs.veracode.com/r/c_endpoint_best_practices)

<p font-size="13pt"><b>Overview</b></p>

The steps in this use case configure a Dynamic Analysis for scanning using Veracode Internal Scanning Management with authentication. The URL is behind a firewall and is not externally accessible.
For more information, see [About Internal Scanning Management](https://docs.veracode.com/r/c_using_ism).

For details about Veracode API Scanning, see [create a Dynamic Analysis for scanning an API specification](https://docs.veracode.com/r/About_Veracode_API_Scanning).

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **Scans & Analysis** \> **Dynamic Analysis**.

    The All Dynamic Analyses page opens.

2. Click **Scan Web Applications**.

3. Enter a name for the Dynamic Analysis. Use a name that uniquely identifies the analysis within your organization. For example, use the scan name, the team, or business unit responsible for this application as the name of the Dynamic Analysis.

4. From the URLs/Applications dropdown menu, select **Enter URLs** and enter a single URL, such as `https://www.example.com`, and click **Add**.

5. In the Scanning Certification section, select the checkbox to confirm that your organization has the right to scan the URLs you provided.

6. Optionally, configure additional settings for each URL. If your analysis has several URLs, you can use the search field to find a specific URL.

7. Click **Configure** at the bottom of the page.

8. Click the pencil icon ![](../images/pencil_icon.png) at the end of URL row to edit a specific URL configuration.

9. In the **Blocklist** tab of the URL-Specific Blocklist and Allowlist section, click **Exclude the following URLs** to create a blocklist.

    If you want to ensure that Veracode does not scan specific URLs, you can add them to the analysis blocklist by selecting the option **Exclude the following URLs**. Enter the filepath or directory path of the URLs you want to exclude from this analysis. If you enter a directory path, everything in that directory and its subdirectories are excluded. You must include the slash at the end of the URL for the analysis to consider it a directory instead of a file.

10. Add allowed host URLs in the **Allowlist** tab to ensure Veracode can scan the entire application.

    By default, the Dynamic Analysis scans all subdirectories under the top-level domain. Because Veracode does not automatically scan the subdomains, you can include them in the scope of the scan by specifying them in the **Allowlist** tab. You can also change the scope of the URL scan by excluding the HTTP or HTTPS versions.

    You can also change the scope of the scan by adding a subdirectory to a URL. For example, if you add `https://api.example.com/mydir/v1`, the subdirectory `/mydir/v1` in the subdomain `api` is now in scope. If you want to scan all subdirectories under `api`, omit the subdirectory and add `https://api.example.com`. Veracode recommends that you only add the specific subdirectories that you want to scan instead of adding the entire directory.

11. Select and configure an [authentication method](https://docs.veracode.com/r/c_was_login_settings) for accessing your application.

12. Select the gateway associated with an endpoint that can access the URL. If you select a gateway that is not associated with an accessible endpoint or is not ready for scanning, the Dynamic Analysis fails.

13. Select an endpoint that can access the URL. If you select an endpoint that is not reachable by the URL or is not ready for scanning, the Dynamic Analysis fails. Endpoints are identified as Ready, Pending, or Offline.

14. When you are ready to run it, you can start your Dynamic Analysis immediately or [schedule](https://docs.veracode.com/r/Scheduling_Dynamic_Analysis_Scans) it to run at a date up to 60 days in the future. By default, your Dynamic Analysis is not scheduled.

15. Go to the All Dynamic Analyses page, which lists all your scans and their statuses.

16. From the Actions menu at the end of the row, click **View Analysis Results**.

    The results open in the Triage Flaws view of the selected Dynamic Analysis, listing all detected vulnerabilities.

17. You can link results from a Dynamic Analysis to an application profile to evaluate the results against policy, and see the results for all types of scans of the application aggregated in a single report.

18. Select the **Dynamic Analysis Results** tab of the analysis summary page and select **Actions** \> **Link to Application**.

    The Link to Application window opens.

19. From the list of applications, select the application to which to link scan results. You cannot select an application that is already linked to a URL configuration.

20. Click **Save**.

<p font-size="13pt"><b>Next Steps</b></p>

- After linking an application to the scan results, you can review the results in the [Dynamic Analysis Coverage Report](https://docs.veracode.com/r/t_view_DA_linksreport).
- [View historical details for a Dynamic Analysis](https://docs.veracode.com/r/View_Historical_Details_for_a_Dynamic_Analysis).
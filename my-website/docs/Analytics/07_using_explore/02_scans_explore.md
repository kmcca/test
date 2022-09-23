---
"ft:title" : "Scans Explore Data Dictionary"
"ft:prettyUrl" : "r_scans_explore"
---

The following definitions describe the dimensions and measures used on the scans explore in Veracode Analytics.

<p><span style="font-size: medium;">Applications Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Application Custom Fields|The metadata entered in application custom fields 1-25. Located from **Application** \> **Metadata** \> **Asset** \> **Custom Fields**.|
|Application ID|The unique numerical identifier associated with the application profile, provided by Veracode.|
|Application Name|The name of the application, created by the user when creating an application on the Veracode Platform.|
|Application Passed Policy \(Yes/No\)|Determines if the application did or did not pass policy compliance. Values are Yes or No.|
|Application Purpose|The business purpose of the application, located from the application metadata.|
|Application Rescanned \(Yes/No\)|Determines if the application was rescanned. Values are Yes or No.|
|Application Scanned \(Yes/No\)|Determines if the application was scanned. Values are Yes or No.|
|Archer Application Name|The application name where the data is published to Archer. Located from **Application** \> **Metadata** \> **Archer Name**.|
|Business Owner Email|The email address associated with the business owner of the application.|
|Business Owner Name|The first and last name of the user responsible for the application. Located from **Application** \> **Profile** \> **Organizational Information**.|
|Business Unit|The name of the business unit.|
|Created Date|The date the application was created.|
|Current Policy|The current policy associated with the application.|
|Current Policy Compliance|The application policy compliance based on the latest scan results.|
|Dynamic Scan Due Date|The date by which a dynamic scan must run, per the application policy. If the date is in the past, the due date was missed.|
|Dynamic Scan Frequency|The dynamic scan frequency, such as weekly, monthly, quarterly, that the policy determines for the application.|
|Industry|The type of industry for which the application is used. Located from **Application** \> **Metadata** \> **Industry**.|
|Initial Published Date|The earliest date that a scan for the application was published.|
|Latest Published Date|The most-recent date that a scan for the application was published.|
|License Account|Scans licensed by this account. For third-party applications, it is the account that paid for the scan. For SDLC applications, it is the same as the scanning account.|
|License Type|The type of license: SDLC license or Third-party license. Most applications are software delivery lifecycle \(SDLC\) license, third-party license type is not commonly used. Veracode offers you the ability to scan your software supplier partners through the Veracode Platform. Values are either SDLC for internal testing of first-party software or third-party for permitting a software supplier to test the code they are developing for the Veracode user.|
|Manual Penetration Test Due Date|The date by which a manual penetration test is required, per the application policy. If the date is in the past, the due date was missed.|
|Manual Penetration Test Frequency|The manual penetration test frequency, such as weekly, monthly, quarterly, that the policy determines for the application.|
|Number of Dynamic Scans|The number of dynamic scans of the application.|
|Number of Static Scans|The number of static scans of the application.|
|Requested a Consultation|Veracode offers the ability to schedule a consultation with application security consultants to better understand Veracode scanning and results. Values are No Readout Requested or Readout Requested based on if the application has had a consultation requested.|
|Scanning Account|The account where scans occurred. For software delivery lifecycle \(SDLC\) applications, it is the same as the licensed account. For third-party applications, it is the vendor account. Third-party applications are not commonly used.|
|Scanning Status|The scanning status for the application. Values are DynamicMP + SDLC, DynamicMP Only, No Published Policy Scans, and SDLC only.|
|Static Scan Due Date|The date by which a static scan must run, per the application policy. If the date is in the past, the due date was missed.|
|Static Scan Frequency|The static scan frequency, such as weekly, monthly, quarterly, that the policy determines for the application.|
|Tags List|The list of tags for the application that are added from the application metadata. Veracode allows users to provide a tag to organize their applications as part of the application metadata.|
|Web Application Flag|Determines if the application is a web application or not. This flag is set on the application metadata page.|

<p><span style="font-size: medium;">Applications Measures</span></p>

|Measure|Description|
|-------|-----------|
|Application Scan Counts|The total count of applications scanned, rescanned, and not scanned in the past 90 and 365 days.|
|Applications with Consultations|The count of applications for which security consultations have been requested.|
|Count|The count of distinct application IDs|
|Percentage of Applications with Consultation Requests|The percentage of applications for which a consultation call was requested.|

<p><span style="font-size: medium;">Scan Dimensions</span></p>

|Dimension|Description|
|---------|-----------|
|Analysis Type|The types of scans. Values are DynamicDS, DynamicMP - Scan Linked, Dynamic Analysis - Scan Linked, Manual Penetration Testing, or Static Analysis.|
|Dynamic Scan - Uses Logout Flag|Indicates whether or not the dynamic scan uses a logout.|
|Dynamic Scan Advanced Mode|Determines if the dynamic scan used advanced mode.|
|Dynamic Scan Duration - Hours|Dynamic scan duration in hours.|
|Dynamic Scan Duration Tier|Dynamic scan duration tiers.|
|Dynamic Script-Based Login Flag|Indicates if the script provided for this dynamic scan contains a login.|
|Dynamic Target URL|The URL provided in the dynamic scan configuration. The target URL scanned by the Veracode dynamic scan engine.|
|Dynamic Total Links Crawled|Determines the total number of links the dynamic scan engine crawled for each scan.|
|Dynamic VSA Flag|Determines if the scan was from a VSA \(Virtual Scan Appliance\) that enables dynamic application security testing behind your firewall through the installation of VM in a data center.|
|First Scan|Determines if the scan was or was not the first scan for the application. Values are Yes or No.|
|Is Most Recent Scan|Determines if the scan is or is not the most recent scan. Values are Yes or No.|
|Most Recent Scan by Type|Provides the ability to filter with a Yes or No to the most recent scan published in the application profile per scan type \(Static, Dynamic, or MPT\). This filter is only supported for policy scans.|
|Number of Flaws - General|Dimensions on specific flaw data such as number of new flaws, existing flaws, mitigated flaws, reopened flaws.|
|Number of Severity 0 \(Informational Flaws\)|The number of flaws that are S0 severity. You can filter on additional dimensions such as number of S0 flaws with proposed, rejected, and mitigated flaws.|
|Number of Severity 1 \(Very Low Flaws\)|The number of flaws that are S1 severity. You can filter on additional dimensions such as number of S1 flaws with proposed, rejected, and mitigated flaws.|
|Number of Severity 2 \(Low Flaws\)|The number of flaws that are S2 severity. You can filter on additional dimensions such as number of S2 flaws with proposed, rejected, and mitigated flaws.|
|Number of Severity 3 \(Medium Flaws\)|The number of flaws that are S3 severity. You can filter on additional dimensions such as number of S3 flaws with proposed, rejected, and mitigated flaws.|
|Number of Severity 4 \(High Flaws\)|The number of flaws that are S4 severity. You can filter on additional dimensions such as number of S4 flaws with proposed, rejected and mitigated flaws.|
|Number of Severity 5 \(Very High Flaws\)|The number of flaws that are S5 severity. You can filter on additional dimensions such as number of S5 flaws with proposed, rejected, and mitigated flaws.|
|Policy or Sandbox|Determines whether the scan was a policy scan or a sandbox scan.|
|Prescan Information|Information on specific prescan end and start times by Date, Month, Week, Quarter, Year. The usage of prescan dimensions is not common.|
|Prescan Submitted|The prescans that were submitted successfully. The usage of prescan dimensions is not common.|
|Promoted Scan \(Yes/No\)|The scan record was promoted from a sandbox context to the policy context.|
|Published \(Yes/No\)|Determines whether the scan was published or not published. Values are Yes or No.|
|Published Date|The date the scan was published. Use additional dimensions to filter on Date, Month, Week, Quarter, Time, or Year.|
|Sandbox \> Archived Sandbox Scan Data \(Yes /No\)|The flag to denote if Veracode archived the scan data and deleted the scan from view when the sandbox expired or when there were more than the maximum number of scans in the sandbox.|
|Sandbox \> Sandbox Auto-recreate \(Yes / No\)|When a sandbox is set to auto-recreate, Veracode automatically recreates it with the same name after the expiration date.|
|Sandbox \> Sandbox Name|The sandbox name for the scan.|
|Sandbox \> Sandbox Scan Archived Date|The date Veracode archived the sandbox scan data and deleted the scan from view due to sandbox expiration. Although the scan data is no longer available in the Triage Flaws page, the data remains available in Veracode Analytics and through data exports.|
|Scan ID|The identifier associated of the scan.|
|Scan Name|The scan name.|
|Scan Policy|The policy that was assigned to the application at the time of the scan.|
|Scan Policy Compliance|The status of whether or not the scan results passed or failed the policy that was assigned at the time of the scan.|
|Scan State|The current state of the scan. Values are Active or Deleted.|
|Submitted By API Account|Determines if the scan was or was not submitted by an API account. Values are API Account or Human Account.|
|Scan Published By|The user who published the scan.|
|Scan Submit Information|Dimensions on the user or API account who submitted the scan.|
|Scan Submitted By|The user who submitted the scan.|
|Scan Submitted Date|The date the scan was submitted.|
|Scan Time|The time it took for the scan to complete. Use the additional dimensions to filter on Hours, Minutes, Seconds.|
|Scan Time Bucket|The minutes of scan time grouped in different periods of time. Values are Less than 5 minutes, 5-10 minutes, 10-15 minutes, 15-30 minutes, 30-60 minutes, 1-4 hours, 4-16 hours, 16-40 hours, 40-96 hours, 96+ hours. This dimension is calculated from the scan submitted date to the scan published date. You can use this dimension to easily graph scan time data.|
|Score|The security quality score for the scan, including mitigations.|
|Score without Mitigations|The security quality score without mitigations.|
|SDLC Stage|The stage of the software delivery lifecycle for the application. This option is set in scan metadata.|
|Static Scan - General|Dimensions on specific static scan details such as lines of code scanned, prescan duration, and primary language scanned.|
|Static Scan - Analysis Size v1 MB|The size in MB of the submitted scan using the v1 method, including third-party libraries, depending on the language.|
|Static Scan - Analysis Size v2 MB|The size in MB of the submitted scan using the v2 method based on first-party code, depending on the language.|
|Static Scan - Language Group|The primary language of the scanned application.|
|Static Scan - Lines of Code|The number of lines of code in the static scan.|
|Static Scan - Primary Language|The primary programming language of the application that was scanned.|
|Static Scan Duration Tier|The minutes of scan time grouped by: less than 5 minutes, 5-10 minutes, 10-15 minutes, 15-30 minutes, 30-60 minutes, 1-4 hours, 4-16 hours, 16-40 hours, 40-96 hours, 96+ hours. This dimension is calculated from the scan submitted date to the scan published date. You can use this dimension to easily graph scan time data.|
|Total Scan Duration Tiers|The periods of time for how long it takes for a scan \(prescan time + scan time\) to complete. Values are 15 minutes, 30 minutes, 1 hour, 4 hours, 16 hours, 48 hours, or 3 days.|
|Veracode Level|The Veracode Level achieved for the scan. This dimension does not include mitigations.|
|Veracode Level with Mitigations|The Veracode Level achieved for the scan including mitigations.|

<p><span style="font-size: medium;">Scan Measures</span></p>

|Measure|Description|
|-------|-----------|
|Application Scan Counts|The measure of specific scan count details such as count of applications, count of non-rescanned applications, count of non-scanned applications.|
|Count of Applications - Past 365 Days|The number of applications that have been scanned in the past 365 days.|
|Count of Applications - Past 90 Days|The number of applications that have been scanned in the past 90 days.|
|Count of Applications Rescanned - Past 365 Days|The number of applications that have been rescanned in the past 365 days.|
|Count of Applications Scanned - Past 365 Days|The number of applications that have been scanned in the past 365 days.|
|Count of Applications Scanned - Past 90 Days|The number of applications that have been scanned in the past 90 days.|
|Count of Non-Scanned Applications|The number of applications that have not been scanned.|
|Count of Non-Rescanned Applications|The number of applications that have not been scanned more than once.|
|Count of Rescanned Applications.|The number of applications that have been rescanned.|
|Count of Rescanned Applications - Past 90 Days|The number of applications that have been rescanned in the past 90 days.|
|Count of Scanned Applications|The number of applications that have been scanned.|
|Average Dynamic Scan Duration - Hours|The average time in hours a dynamic scan takes to complete.|
|Average Dynamic Scan Duration - Minutes|The average time in minutes a dynamic scan takes to complete.|
|Average Dynamic Scan Duration - Seconds|The average time in seconds a dynamic scan takes to complete.|
|Average Flaws Per MB|The average flaws per MB found in the scan. Calculated by total number of static flaws divided by total analysis size.|
|Average Prescan Duration - Hours|The average time in hours a prescan takes to complete.|
|Average Prescan Duration - Minutes|The average time in minutes a prescan takes to complete.|
|Average Prescan Duration - Seconds|The average time in seconds a prescan takes to complete.|
|Average Static Scan Duration - Hours|The average time in hours a static scan takes to complete.|
|Average Static Scan Duration - Minutes|The average time in minutes a static scan takes to complete.|
|Average Static Scan Duration - Seconds|The average time in seconds a static scan takes to complete.|
|Average Total Scan Duration - Hours|The average time in hours a scan takes to complete.|
|Average Total Scan Duration - Minutes|The average time in minutes a scan takes to complete.|
|Average Total Scan Duration - Seconds|The average time in seconds a scan takes to complete.|
|Count of Dynamic URLs|The number of URLs associated with a dynamic scan.|
|Sandboxes with Scans|The number of sandboxes with scans.|
|Count of First Scans|The number of initial scans.|
|Count of Scans Submitted by API|The number of scans submitted by an API account.|
|Count of Scans Submitted by User Account|The number of scans submitted by a user account.|
|Largest Static Scan Size|The size \(MB\) of the largest scan across all the scans within the selected dimension, including all the sandbox scans.|
|Legacy Flaws Per MB|The flaws per MB found in the scan. This is a historical calculation from legacy analytics that is available for consistency but is not recommended for regular use due to the inclusion of multiple scan types and the method by which the calculation is done.|
|Median Dynamic Scan Duration - Hours|The central data point of hours it takes for a dynamic scan to complete.|
|Median Dynamic Scan Duration - Minutes|The central data point of minutes it takes for a dynamic scan to complete.|
|Median Dynamic Scan Duration - Seconds|The central data point of seconds it takes for a dynamic scan to complete.|
|Median Prescan Duration - Hours|The central data point of hours it takes for a prescan to complete.|
|Median Prescan Duration - Minutes|The central data point of minutes it takes for a prescan to complete.|
|Median Prescan Duration - Seconds|The central data point of seconds it takes for a prescan to complete.|
|Median Static Scan Duration - Hours|The central data point of hours it takes for a static scan to complete.|
|Median Static Scan Duration - Minutes|The central data point of minutes it takes for a static scan to complete.|
|Median Static Scan Duration - Seconds|The central data point of seconds it takes for a static scan to complete.|
|Median Total Scan Duration - Hours|The central data point of hours it takes for a scan to complete.|
|Median Total Scan Duration - Minutes|The central data point of minutes it takes for a scan to complete.|
|Median Total Scan Duration - Seconds|The central data point of seconds it takes for a scan to complete.|
|Percentage of Applications Without Rescans|The percentage of applications that only have one scan.|
|Percentage of Passed Scans|The percentage of scans that passed policy.|
|Scan Count|The total number of scans.|
|Scan Count - Past 365 Days|The total number of scans in the past 365 days.|
|Scan Count - Past 90 Days|The total number of scans in the past 90 days.|
|Scan Counts|The measures of specific scan type and policy scans such as dynamic, policy, rescanned, passed scans, sandbox scan counts.|
|Scan Counts Per Month|The number of scans that occur per month.|
|Scan Counts Per Week|The number of scans that occur per week.|
|Total Analysis Size|The total analysis size in MB of the scan.|
|Total Lines of Static Code|The total number of lines of static code scanned. This number is an estimate based on the information provided in the debug symbols of the scan.|
|Total Number of Flaws|The total number of flaws for the scan. Use the measures below to filter on specific flaw severity and status.|
|Total Number of Static Flaws|The total number of static flaws.|

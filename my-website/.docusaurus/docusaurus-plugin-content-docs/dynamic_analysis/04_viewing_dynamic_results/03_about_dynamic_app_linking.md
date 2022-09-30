---
"ft:title" : "About Dynamic Analysis Application Linking"
"ft:prettyUrl" : "About_Dynamic_Analysis_Application_Linking"
---
The Dynamic Analysis application linking feature allows you to link scan results to an application profile in the Veracode Platform.

You can [manually](https://docs.veracode.com/r/t_link_apps) or [automatically](https://docs.veracode.com/r/t_autolink_apps) link analysis results to an application. You can also use the [Dynamic Analysis REST API](https://docs.veracode.com/r/t_dynamic_linkAPI).

The application linking feature allows you to:

-  View the results of all types of scans aggregated in a single report.
-  [Access reports](https://docs.veracode.com/r/Understanding_the_DA_Coverage_Report) in the Veracode Platform to identify crawled and attacked links.
-  Save results from each subsequent scan without overriding the results of the previous scan.
-  Use the Veracode Platform to review the application policy evaluation.

Linking to a scan requires an existing application profile in the Veracode Platform.

Veracode recommends following these guidelines when linking Dynamic Analysis scans to a Veracode application profile:

**Application Profile Restrictions**

- By default, Dynamic Analysis does not automatically create applications during the linking process. If you want Veracode to create applications, use the respective [auto-linking option](https://docs.veracode.com/r/t_autolink_apps).
- You can link one URL to one application. This [manual step](https://docs.veracode.com/r/t_link_apps) requires you to map each URL to an existing application profile.

**Application Linking Prerequisites**

- Application linking succeeds only if a Dynamic Analysis request in an application profile is complete. Verify [the status](https://docs.veracode.com/r/t_was_check_status) of any Dynamic Analysis requests within the profile. If you have permission, delete an incomplete request before attempting to link the application. Incomplete statuses include:
 
    -   Prescan Complete
    -   Scan in Progress
    -   Prescan Failed
   
- You cannot link an application profile that contains an in-progress Dynamic Analysis. You must delete the in-progress Dynamic Analysis and unlink the application profile. You can then link another application profile.

**Scan Frequency**

Veracode recommends that you [configure recurring schedules](https://docs.veracode.com/r/t_was_recurring) to ensure that Veracode automatically links results to the application profiles for future scans.

   <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If you configure a recurring schedule but do not link the URLs to the application profiles, the next time the scan runs using that schedule, the new results override the previous results.</p>

**Application Profile Scan Actions**

Do not use any actions under the application profile menu for Dynamic Analysis scans linked to an application.
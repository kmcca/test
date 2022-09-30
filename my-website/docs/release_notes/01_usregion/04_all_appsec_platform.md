---
"ft:title" : "Veracode Application Security Platform Release Notes"
"ft:prettyUrl" : "c_all_platform"
---
## July 15, 2022

### CWE Top 25 Now Reflects 2022 Version

The [Auto-Update CWE Top 25 security standard](https://docs.veracode.com/r/CWEs_That_Violate_the_Auto_Update_CWE_Top_25_Standard) that you use in Veracode policies now reflects the 2022 CWE Top 25 list.

## June 28, 2022

### Updated Single Sign-On and Just-In-Time Provisioning

New [single sign-on (SSO) and Just-In-Time (JIT) provisioning capabilities](https://docs.veracode.com/r/about_saml_selfregister) in the Veracode Platform improve reliability and supportability and extend the roles that JIT provisioning supports. Before using this feature, you must [update your SSO settings in your identity provider](https://docs.veracode.com/r/Configuring_Your_Organization_Identity_Provider_for_SAML).

To begin the process of enabling these capabilities, contact Veracode Support.

## May 19, 2022

### The Issues Vulnerability Count Measure Changed

Issues Vulnerability Count now includes only issues where the Issue Type is a Vulnerability Issue. In the past, this measure included the count of Vulnerability, License, and Library issues. The calculation of Issues Vulnerability Count is still based on the filters you select.

-   Issues Issue Count: count of issues, regardless of type
-   Issues Vulnerability Count: count of vulnerability issues
-   Issues Libraries with Issues: total number of unique libraries with at least one issue

## May 10, 2022

### Sandbox Information Available in Unsubmitted Static Scans Data Export

[Veracode has added sandbox information to the Unsubmitted Static Scans data export](https://docs.veracode.com/r/t_data_exports) to make it easier to find the incomplete static scans for an application.

## May 6, 2022

### End of Support for Internet Explorer 11

Veracode will no longer support Microsoft Internet Explorer 11 after June 30, 2022. This change follows the [Microsoft updates to its support model for Internet Explorer](https://techcommunity.microsoft.com/t5/windows-it-pro-blog/internet-explorer-11-desktop-app-retirement-faq/ba-p/2366549). Veracode recommends that you switch to a [supported browser](https://docs.veracode.com/r/using_browser) to avoid issues.

### Official Support for Microsoft Edge

[The Veracode Docs are updated to confirm that Microsoft Edge is a supported browser](https://docs.veracode.com/r/using_browser).

## April 4, 2022

### Improved Team Management in the Veracode Platform

[Veracode has improved the usability of the team management options on the Administration page in the Veracode Platform](https://docs.veracode.com/r/admin_team).

## March 22, 2022

### View Applications by Policy Evaluation Date

You can now view the date and time of the most recent event that triggered a policy evaluation for an application in a new field in the [Applications REST API](https://docs.veracode.com/r/c_apps_intro) and the [Applications list](https://docs.veracode.com/r/using_applist) in the Veracode Platform. You can use this field to search for applications that have had new scans or approved mitigations since the listed date.

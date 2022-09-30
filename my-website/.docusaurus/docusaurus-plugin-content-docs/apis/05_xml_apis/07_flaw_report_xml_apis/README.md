---
"ft:title": "Flaw Report XML APIs"
"ft:prettyUrl": "c_about_flawreport"
---
The Flaw Report API has two calls that enable you to generate and download a summarized history of all findings for one, several, or all applications.

Veracode provides this API to simplify the process of identifying the current status, such as new, fixed, open, or reopened, of all the findings for a given application by returning one record per each finding discovered in the application history. The new calls are designed for integrating with external dashboards for vulnerability management.

<p><span style="font-size: medium;">Prerequisites</span></p>

-   An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Archer Report API role.
-   [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
-   Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).
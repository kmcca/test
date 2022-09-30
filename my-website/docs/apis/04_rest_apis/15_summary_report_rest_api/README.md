---
"ft:title": "Summary Report REST APIs"
"ft:prettyUrl": "c_rest_summary_report_intro"
---
You can use the Veracode Summary Report API to get a Summary Report of the overall security quality of your application without sharing the details of the discovered findings.

You can use the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro) to get more detailed findings information, such as the list of findings, their location, and remediation guidance.

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

Before you can use this API, you must have one of these [account](https://docs.veracode.com/r/c_about_veracode_accounts) types:

-   An API service account with the Results API [role](https://docs.veracode.com/r/c_API_roles_details)
-   A user account with the Reviewer or Security Lead [role](https://docs.veracode.com/r/c_role_permissions)

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Summary Report API Specification</span></p>

The Summary Report API specification is available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-summary_report_api/v2).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The scan type field in past results from this API may contain values for deprecated Dynamic Analysis products. All new scans return a <code>DynamicScanType</code> type of <code>DA</code>.</p>
---
"ft:title": "Findings REST APIs"
"ft:prettyUrl": "c_findings_v2_intro"
---
The Veracode Findings API enables you to access information about open and mitigated findings associated with applications and development sandboxes.

This API supports Static Analysis, Dynamic Analysis, Manual Penetration Testing, and Software Composition Analysis findings.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You cannot get SCA findings in combination with other finding types.</p>

The Findings API simplifies common reporting scenarios, such as obtaining the latest data for each application and accessing historical state-change information on findings.

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

Before you can use all the endpoints of the Findings API, you must have one of these [account](https://docs.veracode.com/r/c_about_veracode_accounts) types:

-   An API service account with the Results API [role](https://docs.veracode.com/r/c_API_roles_details)
-   A user account with the Reviewer or Security Lead [role](https://docs.veracode.com/r/c_role_permissions)

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Findings API Specification</span></p>

The Findings API specification is available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-findings_api_specification/2.0).
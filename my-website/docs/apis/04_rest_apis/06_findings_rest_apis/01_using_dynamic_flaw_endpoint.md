---
"ft:title": "Using the Dynamic Flaw Information Endpoint"
"ft:prettyUrl": "c_rest_dynamic_flaw_intro"
---
You can use the `dynamic_flaw_info` endpoint of the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro) to get additional information on a single flaw discovered during a [Dynamic Analysis](https://docs.veracode.com/r/c_was_intro).

<p><span style="font-size: medium;">Permissions and Authentication</span></p>


Before you can use all the endpoints of the Findings API, you must have one of these account types:

-   An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Results API [role](https://docs.veracode.com/r/c_API_roles_details)
-   A [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Reviewer or Security Lead [role](https://docs.veracode.com/r/c_role_permissions)

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Dynamic Flaw API Specification</span></p>

The `dynamic_flaw_info` endpoint uses the Dynamic Flaw API specification available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-dynamic_flaw_api/v2).
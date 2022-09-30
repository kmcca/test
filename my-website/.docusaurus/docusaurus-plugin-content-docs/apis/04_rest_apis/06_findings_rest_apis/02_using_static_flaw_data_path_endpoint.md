---
"ft:title": "Using the Static Flaw Information Endpoint"
"ft:prettyUrl": "c_rest_static_finding_data_path_intro"
---
You can use the `static_flaw_info` endpoint of the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro) to get additional information about a single finding discovered during a static analysis.

The `static_flaw_info` endpoint returns this information:

-   Name of the scanned module
-   Filepath to the file that contains the finding
-   Name of the function that contains the finding
-   Code line numbers where the finding exists
-   Attack vectors associated with the request
-   Calls in the associated call stack

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

Before you can use all the endpoints of the Findings API, you must have one of these account types:

-   An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Results API [role](https://docs.veracode.com/r/c_API_roles_details)
-   A [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Reviewer or Security Lead [role](https://docs.veracode.com/r/c_role_permissions)

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Static Finding Data Path API Specification</span></p>

The `static_flaw_info` endpoint uses the Static Finding Data Path API specification available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-static_finding_data_path_api/v2).


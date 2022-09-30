---
"ft:title": "Policy REST APIs"
"ft:prettyUrl": "c_policy_rest_api"
---
You can use the Veracode Policy API to create, update, delete, and read policies. You can also use this API to evaluate an application or a development sandbox against any policy.

This API allows you to assess an application or sandbox against any policy, even one not currently assigned to the application. The response from the policy evaluation shows you why the application is passing or failing policy, including scan frequency requirements and findings that are past their grace period due date.

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

Before you can use this API to create or update a policy, you must have one of these [account](https://docs.veracode.com/r/c_about_veracode_accounts) types:

-   An API service account with the Policy Administrator [role](https://docs.veracode.com/r/c_API_roles_details)
-   A user account with the Policy Administrator [role](https://docs.veracode.com/r/c_role_permissions)

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Policy API Specification</span></p>

The Policy API specification is available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-policy_api_specification/1.0).



---
"ft:title": "Identity REST APIs"
"ft:prettyUrl": "c_identity_intro"
---
You can use the Veracode Identity API to manage the administrative configuration for your organization that is in the Veracode Platform.

The API provides endpoints for managing users, teams, and business units, using the create, update, read, and delete actions on their respective objects. This capability includes managing API service accounts. You can use the API credentials endpoint to get information about [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) expiration, revoke API credentials, or renew your API credentials.

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

Before you can use all endpoints of the Identity REST APIs, you must have one of these [account](https://docs.veracode.com/r/c_about_veracode_accounts) types:

-   An API service account with the Admin API [role](https://docs.veracode.com/r/c_API_roles_details).
-   A user account with the Administrator [role](https://docs.veracode.com/r/c_role_permissions).

All other API service account and user account roles can access these endpoints:

- `/user/self`
- `/user/api_credentials`

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Identity APIs Specification</span></p>

The Identity APIs specification is available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-identity_api/1.0).
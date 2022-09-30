---
"ft:title": "Annotations REST APIs"
"ft:prettyUrl": "c_rest_annotations_intro"
---
You can use the Veracode Annotations API to annotate findings, including adding comments and proposing, accepting, and rejecting mitigations.

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

Before you can use this API, you must have one of these [account](https://docs.veracode.com/r/c_about_veracode_accounts) types:

- An API service account with the Results API [role](https://docs.veracode.com/r/c_API_roles_details)
- A user account with the Reviewer, Security Lead, or Mitigation Approver [role](https://docs.veracode.com/r/c_role_permissions)

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Annotations API Specification</span></p>

The Annotations API specification is available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-annotations_api/2.0).

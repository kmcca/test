---
"ft:title": "Applications REST APIs"
"ft:prettyUrl": "c_apps_intro"
---
You can use the Veracode Applications API to quickly access information about your Veracode applications.

The Applications API endpoint provides access to all the applications in your portfolio, as well as application-related data, such as sandboxes and policy evaluations. You can use the Applications API with other REST APIs to simplify common reporting and dashboarding scenarios, enabling you to get the latest data for each application with a single call. You can also access historical state-change information on findings and use HMAC authentication to improve API security.

You can combine queries in your commands using `&` to perform multiple actions at the same time. For example:

```shell
http --auth-type=veracode_hmac "https://api.veracode.com/appsec/v1/applications?policy_compliance=DID_NOT_PASS&modified_after=2020-02-28"
```

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

You must have an [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) or a [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Creator Security Lead [role](https://docs.veracode.com/r/c_role_permissions).

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Applications API Specification</span></p>

The Applications API specification is available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-applications_api_specification/1.0).

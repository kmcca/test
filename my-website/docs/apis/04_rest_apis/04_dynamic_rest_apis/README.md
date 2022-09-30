---
"ft:title": "Dynamic Analysis REST APIs"
"ft:prettyUrl": "c_dynamic_intro"
---
You can use the Veracode Dynamic Analysis REST API to automate major dynamic scanning tasks.

This API enables you to programmatically initiate dynamic scanning with the flexibility necessary for incorporating this type of security scanning into your Software Development Life Cycle.

The API endpoints perform these tasks:

-   Create analyses with URL scans
-   Configure analyses and URL scans
-   Schedule and run analyses
-   Link analyses to Veracode application profiles

After completing a dynamic analysis scan, you can use the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro) to get information on a discovered flaw.

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

To be able to use the Veracode Dynamic Analysis REST API, you must have one of these [account](https://docs.veracode.com/r/c_about_veracode_accounts) types:

-   An API service account with the Upload and Scan API [role](https://docs.veracode.com/r/c_API_roles_details).
-   A user account with the Security Lead, Creator, or Submitter [role](https://docs.veracode.com/r/c_role_permissions).

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Dynamic Analysis API Specification</span></p>

The Dynamic Analysis API specification is available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-web_application_scanning_configuration_service_api/1.0).

<p><span style="font-size: medium;">Authentication Errors</span></p>

To see authentication errors for the Dynamic Analysis REST API, run:

```shell
http --auth-type=veracode_hmac GET https://api.veracode.com/was/configservice/v1/code_groups/errorcode
```
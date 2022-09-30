---
"ft:title": "Healthcheck REST APIs"
"ft:prettyUrl": "c_healthcheck_intro"
---
You can use the Healthcheck API to perform a simple test for verifying authenticated connectivity to Veracode.

The Healthcheck API provides this lightweight endpoint: `/healthcheck/status`

You use the endpoint to verify that Veracode services are available and responding to authentication events, instead of using other API calls that can potentially return large volumes of data.

<p><span style="font-size: medium;">Authentication</span></p>

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Healthcheck API Specification</span></p>

The Healthcheck API specification is available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-healthcheck_api_specification/1.0).
---
"ft:title": "SCA Agent REST APIs"
"ft:prettyUrl": "c_sourceclear_intro"
---
You can use the Veracode SCA Agent REST API to programmatically extract high-level workspace information on specific Agent-Based Scanning workspaces or all workspaces to which you have access. You can also filter your workspaces on library, vulnerability, and license.

<p><span style="font-size: medium;">Permissions and Authentication</span></p>

Before you can use this API, you must have a [user account](https://docs.veracode.com/r/c_about_veracode_accounts).

This API uses API ID/key credentials and HMAC authentication to provide improved security. Before you can send requests, you must complete these configurations:

- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac)

Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> There are two host URLs for the Veracode SCA Agent API. If you use SourceClear API credentials, the host URL is <code>api.sourceclear.io</code>. If you use Veracode API credentials, the host URL is <code>api.veracode.com/srcclr</code>.</p>

<p><span style="font-size: medium;">Required HTTP Headers</span></p>

The Veracode SCA Agent API requires that you set these HTTP headers in the REST requests:

-   `accept-encoding: gzip`
-   `user-agent`: a value of your choice. Veracode recommends a company name, email domain, or application name.

<p><span style="font-size: medium;">Veracode SCA Agent API Specification</span></p>

The Veracode SCA Agent API specification is available from [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-sca_agent_api_specification/3.0).
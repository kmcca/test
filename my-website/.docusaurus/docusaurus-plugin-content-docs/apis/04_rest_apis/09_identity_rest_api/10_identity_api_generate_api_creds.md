---
"ft:title": "Generating API Credentials with the Identity API"
"ft:prettyUrl": "c_identity_gen_creds"
---
This use case scenario provides the Identity REST API command for generating new [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).

Use this command to generate new API credentials for your account:

```shell
http --auth-type=veracode_hmac --json POST "https://api.veracode.com/api/authn/v2/api_credentials"
```

This command revokes your current API credentials and returns the API ID and API key for your new credentials.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You must include the <code>--json</code> parameter to force the command to send the <code>Content-Type: application/json</code> in the HTTP header.</p>
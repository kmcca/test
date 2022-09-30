---
"ft:title": "Revoking API Credentials with the Identity API"
"ft:prettyUrl": "c_identity_revoke_creds"
---
This use case scenario provides the Identity REST API command for revoking [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). The credentials expire immediately after you revoke them. You can no longer use them to access Veracode.

You can use the [Veracode Platform](https://docs.veracode.com/r/t_create_api_creds) or [Veracode Identity APIs](https://docs.veracode.com/r/c_identity_gen_creds) to generate new API credentials.

Use this command to revoke the Veracode API credentials for a specific API ID:

```shell
http --auth-type=veracode_hmac --json DELETE "https://api.veracode.com/api/authn/v2/api_credentials/{apiCredsId}"
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You must include the <code>--json</code> parameter to force the command to send the <code>Content-Type: application/json</code> in the HTTP header.</p>

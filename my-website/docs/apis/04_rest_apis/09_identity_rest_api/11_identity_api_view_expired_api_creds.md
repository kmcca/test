---
"ft:title": "Viewing API Credentials Expiration with the Identity API"
"ft:prettyUrl": "c_identity_creds_expire"
---
This use case scenario provides the Identity REST API commands for viewing the expiration date for [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).

Use this command to view the expiration date and time for your API credentials:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/api_credentials"
```

Use this command to view credentials expiration information for a specific API ID:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/api_credentials/{apiCredsId}"
```
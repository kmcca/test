---
"ft:title": "Updating a User with the Identity API"
"ft:prettyUrl": "c_identity_update_user"
---
This use case scenario provides the Identity REST API command and payload for updating a Veracode user. The command applies to both [user accounts and API service accounts](https://docs.veracode.com/r/c_about_veracode_accounts).

Use this command to update an existing account:

```shell
http --auth-type=veracode_hmac PUT "https://api.veracode.com/api/authn/v2/users/{userId}?partial=true" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
 "ip_restricted": true,
 "allowed_ip_addresses": ["72.22.163.41"]
}
```
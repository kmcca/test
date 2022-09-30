---
"ft:title": "Deleting a User with the Identity API"
"ft:prettyUrl": "c_identity_delete"
---
This use case scenario provides the Identity REST API command for deleting a Veracode user. The command applies to both [user accounts and API service accounts](https://docs.veracode.com/r/c_about_veracode_accounts).

Use this command to delete an account:

```shell
http --auth_type=veracode_hmac DELETE "https://api.veracode.com/api/authn/v2/users/{userId}"
```

`userId` is the numeric ID, separated with hyphens, for the target account. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`.

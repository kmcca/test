---
"ft:title": "Updating a User to Require Multifactor Authentication with the Identity API"
"ft:prettyUrl": "Updating_a_User_to_Require_Multifactor_Authentication_with_the_Identity_API"
---
This use case scenario provides the Identity REST API command and payload for updating a Veracode user to require them to [set up multifactor authentication](https://docs.veracode.com/r/t_configure_mfa) the next time they log in to the Veracode Platform.

Use this command to update an existing account:

```shell
http --auth-type=veracode_hmac PUT "https://api.veracode.com/api/authn/v2/users/{userId}?partial=true" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "pin_required": true
}
```
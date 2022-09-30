---
"ft:title": "Filtering Users with the Identity API"
"ft:prettyUrl": "Filtering_Users_with_the_Identity_API"
---
This use case scenario provides the Identity REST API commands for filtering users. These commands apply to both [user accounts and API service accounts](https://docs.veracode.com/r/c_about_veracode_accounts).

Use this command to filter users by [role](https://docs.veracode.com/r/c_API_roles_details):

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users/search?role_id={role_guid}"
```

Use this command to filter users by user type:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users/search?user_type={user_type}"
```

Use this command to filter users by login status:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users/search?login_status={login_status}"
```

Use this command to filter users by SAML status:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users/search?saml_user=true"
```

Use this command to filter users by team:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users/search?team_id={team_guid}"
```

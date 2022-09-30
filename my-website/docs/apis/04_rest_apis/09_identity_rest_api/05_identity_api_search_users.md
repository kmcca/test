---
"ft:title": "Searching for Users with the Identity API"
"ft:prettyUrl": "c_identity_search_users"
---
This use case scenario provides the Identity REST API commands for searching for users. These commands apply to both [user accounts and API service accounts](https://docs.veracode.com/r/c_about_veracode_accounts).

Use this command to search for users by username:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users?user_name={user_name}"
```

You must specify the full username. The command does not support matching partial usernames.

Use this command to search for users by email address:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users?email_address={email_address},{email_address}"
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> In each email address, you must specify the <code>@</code> character using URL encoding or the command fails. For example, <code>user%40domain.com</code>. Use a comma-separated list to specify multiple addresses.</p>

Use this command to search for users using with partial terms:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users/search?search_term={search_term}"
```

You can search for partial strings of the username, first name, last name, or email address. You can combine this call with other search parameters.

Use this command to search for users by API ID:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users/search?api_id={api_id}"
```

You must specify the exact API ID. You can combine this call with other search parameters.

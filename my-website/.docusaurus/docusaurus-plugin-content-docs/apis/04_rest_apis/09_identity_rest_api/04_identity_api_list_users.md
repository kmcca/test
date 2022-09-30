---
"ft:title": "Listing Users with the Identity API"
"ft:prettyUrl": "c_identity_list_users"
---
This use case scenario provides the Identity REST API commands for listing users. These commands apply to both [user accounts and API service accounts](https://docs.veracode.com/r/c_about_veracode_accounts).

Use this command to list all users:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users"
```

By default, the output results show up to 20 users per page. To page through the list, you can re-run the command with `?page=1`, `?page=2`, and so on, appended to the end.

Use this command to increase the page size from the maximum of `20` and list more users in the output results:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users?page={page number}&size={page size}"
```

For example, set `page=0&size=50` to increase the size of page `0` to `50`.

Use this command to list only users whose accounts are enabled:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/users?enabled=true"
```

You can set `enabled=false` to list only users whose accounts are disabled.

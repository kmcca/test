---
"ft:title": "Listing All Roles in an Organization with the Identity API"
"ft:prettyUrl": "Listing_All_Roles_in_an_Organization_with_the_Identity_API"
---
This use case scenario provides the Identity REST API commands for listing all the roles in an organization. These commands apply to both [user accounts and API service accounts](https://docs.veracode.com/r/c_about_veracode_accounts).

Use this command to list all [roles](https://docs.veracode.com/r/c_role_permissions) in an organization:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/roles/search?role_id={role_id}"
```
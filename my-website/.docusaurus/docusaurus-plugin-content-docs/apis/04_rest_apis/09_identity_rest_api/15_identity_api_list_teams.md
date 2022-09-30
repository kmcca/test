---
"ft:title": "Listing Teams with the Identity API"
"ft:prettyUrl": "c_identity_list_teams"
---
These use case scenarios provide the Identity REST API commands for listing all [teams](https://docs.veracode.com/r/admin_team) of which you are a member and all teams in your organization.

Use this command to view a list of all teams of which you are a member:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/teams"
```

You can also [view information about a specific team](https://docs.veracode.com/r/c_identity_team_info).

Use this command to view a list of all teams in your organization:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/teams?all_for_org=true"
```
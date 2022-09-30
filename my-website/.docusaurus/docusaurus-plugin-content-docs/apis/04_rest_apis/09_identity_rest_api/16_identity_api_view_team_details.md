---
"ft:title": "Viewing Team Details with the Identity API"
"ft:prettyUrl": "c_identity_team_info"
---
This use case scenario provides the Identity REST API command for viewing information about a specific [team](https://docs.veracode.com/r/admin_team) in your organization.

The command output includes information about any users who are linked to the team.

Use this command to view information about a specific team:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/teams/{teamId}"
```

`teamId` is the numeric ID, separated with hyphens, for the target team. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`.
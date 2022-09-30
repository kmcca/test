---
"ft:title": "Deleting a Team with the Identity API"
"ft:prettyUrl": "c_identity_delete_team"
---
This use case scenario provides the Identity REST API command for deleting a [team](https://docs.veracode.com/r/admin_team).

Use this command to delete a team:

```shell
http --auth-type=veracode_hmac DELETE "https://api.veracode.com/api/authn/v2/teams/{teamId}"
```

`teamId` is the numeric ID, separated with hyphens, for the target object. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`.

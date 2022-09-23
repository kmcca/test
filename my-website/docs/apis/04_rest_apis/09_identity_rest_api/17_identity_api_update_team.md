---
"ft:title": "Updating a Team with the Identity API"
"ft:prettyUrl": "c_identity_update_team"
---
This use case scenario provides the Identity REST API command and payload for changing the name of a [team](https://docs.veracode.com/r/admin_team).

Use this command to change the name of a team:

```shell
http --auth-type=veracode_hmac PUT "https://api.veracode.com/api/authn/v2/teams/{teamId}?partial=true" < input.json
```

`teamId` is the numeric ID, separated with hyphens, for the target team. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`.

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "team_name": "Physical Penetration Testing"
}
```
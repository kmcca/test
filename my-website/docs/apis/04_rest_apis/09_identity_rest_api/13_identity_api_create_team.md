---
"ft:title": "Creating a Team with the Identity API"
"ft:prettyUrl": "c_identity_create_team"
---
This use case scenario provides the Identity REST API command for creating a [team](https://docs.veracode.com/r/admin_team).

Use this command to create a team:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/api/authn/v2/teams" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "team_name": "Physical Penetration Testing"
}
```

---
"ft:title": "Adding Users to a Team with the Identity API"
"ft:prettyUrl": "c_identity_add_users_team"
---
This use case scenario provides the Identity REST API command and payload for adding one or more users to a [team](https://docs.veracode.com/r/admin_team).

Use this command to add users to a team:

```shell
http --auth-type=veracode_hmac PUT "https://api.veracode.com/api/authn/v2/teams/{teamId}?partial=true&incremental=true" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "team_name": "Red Team Testing",
  "users": [
    {
      "user_name": "jack_doe@example.com"
    },
    {
      "user_name": "jill_doe@example.com"
    }
  ]
}
```

You can specify `user_id` or `user_name`.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You must set <code>incremental=true</code> or the command overwrites the list of users instead of adding them to the specified team.</p>
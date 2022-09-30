---
"ft:title": "Adding a Team to a Business Unit with the Identity API"
"ft:prettyUrl": "c_identity_add_team_bu"
---
This use case scenario provides the Identity REST API command and payload for adding a [team]([team](https://docs.veracode.com/r/admin_team)) to a [business unit](https://docs.veracode.com/r/t_add_business_unit).

Use this command to add a team to a business unit:

```shell
http --auth-type=veracode_hmac PUT "https://api.veracode.com/api/authn/v2/business_units/{businessUnitId}?partial=true&incremental=true" < input.json
```

`businessUnitId` is the numeric ID, separated with hyphens, for the target business unit. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`.

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "teams": [
    {
      "team_id": "d56ebdfd-6797-4566-96a1-67455975b6a4"
    }
  ]
}
```
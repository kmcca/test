---
"ft:title": "Updating a Business Unit with the Identity API"
"ft:prettyUrl": "c_identity_update_bu"
---
This use case scenario provides the Identity REST API command for updating a [business unit](https://docs.veracode.com/r/t_add_business_unit).

Use this command to update a business unit:

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You must set <code>partial=true</code> or the command overwrites all existing business units.</p>

```shell
http --auth-type=veracode_hmac PUT "https://api.veracode.com/api/authn/v2/business_units/{businessUnitId}?partial=true" < input.json
```

`businessUnitId` is the numeric ID, separated with hyphens, for the target business unit. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`.

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "bu_name": "My Business Unit"
}
```

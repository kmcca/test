---
"ft:title": "Deleting a Business Unit with the Identity API"
"ft:prettyUrl": "c_identity_delete_bu"
---
This use case scenario provides the Identity REST API command for deleting a [business unit](https://docs.veracode.com/r/t_add_business_unit).

Use this command to delete a business unit:

```shell
http --auth-type=veracode_hmac DELETE "https://api.veracode.com/api/authn/v2/business_units/{businessUnitId}"
```

`businessUnitId` is the numeric ID, separated with hyphens, for the target business unit. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`.
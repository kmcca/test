---
"ft:title": "Viewing Business Unit Details with the Identity API"
"ft:prettyUrl": "c_identity_bu_info"
---
This use case scenario provides the Identity REST API command for viewing information about a specific [business unit](https://docs.veracode.com/r/t_add_business_unit).

The output results include information about any teams that are linked to the specified business unit.

Use this command to view details about a specific business unit:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/business_units/{businessUnitId}"
```

`businessUnitId` is the numeric ID, separated with hyphens, for the target business unit. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`. 

You can also [list all business units](https://docs.veracode.com/r/c_identity_list_bu).
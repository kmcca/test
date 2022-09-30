---
"ft:title": "Listing Business Units with the Identity API"
"ft:prettyUrl": "c_identity_list_bu"
---
This use case scenario provides the Identity REST API command for listing all [business units](https://docs.veracode.com/r/t_add_business_unit) for an organization.

Use this command to list all business units for an organization:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/api/authn/v2/business_units"
```

You can also [view details about a specific business unit](https://docs.veracode.com/r/c_identity_bu_info).
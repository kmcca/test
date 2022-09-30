---
"ft:title": "Creating a Business Unit with the Identity API"
"ft:prettyUrl": "c_identity_create_bu"
---
This use case scenario provides the Identity REST API command and payload for creating a [business unit](https://docs.veracode.com/r/t_add_business_unit).

Use this command to create a business unit:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/api/authn/v2/business_units" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "bu_name": "Business Unit Five"
}
```

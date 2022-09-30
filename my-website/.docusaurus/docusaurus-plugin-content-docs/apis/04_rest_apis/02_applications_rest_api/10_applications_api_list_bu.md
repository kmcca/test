---
"ft:title": "Listing Applications by Business Unit with the REST API"
"ft:prettyUrl": "r_applications_bu"
---
Use this command to return the list of applications to which a specific business unit is assigned:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications?business_unit={name}"
```

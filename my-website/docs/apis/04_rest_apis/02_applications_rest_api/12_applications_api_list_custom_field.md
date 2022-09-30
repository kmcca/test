---
"ft:title": "Listing Applications by Custom Field Value with the REST API"
"ft:prettyUrl": "r_applications_custom_field"
---
Use this command to return the list of applications that have a specific value for a specific custom field:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications?custom_field_names={field_name}&custom_field_values={custom_field_value}"
```

To identify applications with any value for a specific custom field, enter the URL-encoded wildcard value `%25` for `custom_field_values`.

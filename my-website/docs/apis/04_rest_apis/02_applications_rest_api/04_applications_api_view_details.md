---
"ft:title": "Viewing Application Details with the REST API"
"ft:prettyUrl": "r_applications_info"
---
Use this command to return the details of a specific application by the application name:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications/?name={name}"
```

Use this command to return the details of a specific application by the application ID:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications?legacy_id={applicationGuid}"
```

This call returns information based on the `app_id` parameter of the [Veracode XML APIs](https://docs.veracode.com/r/r_getappinfo). The Veracode REST APIs use the application GUID.

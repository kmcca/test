---
"ft:title": "Updating a Development Sandbox with the REST API"
"ft:prettyUrl": "c_sandbox_update_rest"
---
Use this command to update a [sandbox](https://docs.veracode.com/r/c_about_sandbox):

```shell
http --auth-type=veracode_hmac PUT "https://api.veracode.com/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}" < input.json
```

You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info) or [development sandbox](https://docs.veracode.com/r/r_applications_sandboxes).

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "custom_fields": [
    {
      "name": "Custom 1",
      "value": "test again"
    }
  ],
  "name": "Sandbox 2.5",
  "auto_create": true
}
```

The [custom field](https://docs.veracode.com/r/t_create_custom_metadata) name must be in the range of `Custom 1` to `Custom 5`.
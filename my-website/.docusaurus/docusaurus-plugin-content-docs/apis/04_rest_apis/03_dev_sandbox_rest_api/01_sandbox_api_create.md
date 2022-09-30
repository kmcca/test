---
"ft:title": "Creating a Development Sandbox with the REST API"
"ft:prettyUrl": "c_sandbox_create_rest"
---
<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>To avoid command failures, ensure your application has not reached the maximum number of sandboxes. In the Veracode Platform, on the Sandboxes page for an application, check the value for Sandboxes Remaining.</p>

Use this command to create a [sandbox](https://docs.veracode.com/r/c_about_sandbox):

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v1/applications/{applicationGuid}/sandboxes" < input.json
```

You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info) or [development sandbox](https://docs.veracode.com/r/r_applications_sandboxes).

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "name": "Sandbox 2"
}
```

Use this command to create a sandbox with a [custom field](https://docs.veracode.com/r/t_create_custom_metadata) and enable the [auto-recreate](https://docs.veracode.com/r/c_about_sandbox) option:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v1/applications/{applicationGuid}/sandboxes" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
    "custom_fields": [
      {
        "name": "Custom 1",
        "value": "test"
      }
    ],
    "name": "Sandbox 2",
    "auto_recreate": true
}
```

The custom field name must be in the range of `Custom 1`–`Custom 5`.
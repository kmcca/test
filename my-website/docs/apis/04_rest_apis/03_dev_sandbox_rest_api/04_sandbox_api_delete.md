---
"ft:title": "Deleting a Development Sandbox with the REST API"
"ft:prettyUrl": "c_sandbox_delete_rest"
---
Use this command to delete the specified [sandbox](https://docs.veracode.com/r/c_about_sandbox):

```shell
http --auth-type=veracode_hmac DELETE "https://api.veracode.com/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}"
```

You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info) or [development sandbox](https://docs.veracode.com/r/r_applications_sandboxes).
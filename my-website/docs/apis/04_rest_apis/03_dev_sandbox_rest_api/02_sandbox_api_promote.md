---
"ft:title": "Promoting a Development Sandbox Scan with the REST API"
"ft:prettyUrl": "c_sandbox_create_rest"
---
Use this command to [promote](https://docs.veracode.com/r/t_promote_sandbox) the latest scan for the specified sandbox:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}/promote"
```

You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info) or [development sandbox](https://docs.veracode.com/r/r_applications_sandboxes).

Use this command to promote a specific sandbox scan:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}/promote?build_id={build_id}"
```

`build_id` is optional. You can obtain it from a [Summary Report](https://docs.veracode.com/r/t_download_summary_report) or with the [getbuildinfo.do](https://docs.veracode.com/r/r_getbuildinfo) call.

Use this command to promote and delete the latest scan for the specified sandbox:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v1/applications/{applicationGuid}/sandboxes/{sandboxGuid}/promote?delete_on_promote=true"
```

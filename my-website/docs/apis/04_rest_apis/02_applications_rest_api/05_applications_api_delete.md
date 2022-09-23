---
"ft:title": "Deleting an Application with the REST API"
"ft:prettyUrl": "r_applications_delete"
---
Use this command to delete an application:

```shell
http --auth-type=veracode_hmac DELETE "https://api.veracode.com/appsec/v1/applications/{applicationGuid}"
```

A GUID is the numeric ID, separated with hyphens, for the target application. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`.

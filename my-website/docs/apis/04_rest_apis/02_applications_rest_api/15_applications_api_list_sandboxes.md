---
"ft:title": "Listing Sandboxes for an Application with the REST API"
"ft:prettyUrl": "r_applications_sandboxes"
---
Use this command to return the list of sandboxes that belong to a specific application:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications/{applicationGuid}/sandboxes"
```

`applicationGuid` is the numeric ID, separated with hyphens, for the target application. For example: `7336556f-9ef2-4a1c-b536-be8608822db6`.

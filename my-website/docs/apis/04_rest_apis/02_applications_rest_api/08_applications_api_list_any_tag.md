---
"ft:title": "Listing Applications that Have a Tag with the REST API"
"ft:prettyUrl": "r_applications_any_tag"
---
Use this command to return the list of applications that have a tag:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications?tag=%25"
```

`%25` is the URL-encoded wildcard value.
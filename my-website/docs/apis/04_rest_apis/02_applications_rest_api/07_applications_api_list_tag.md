---
"ft:title": "Listing Applications by Tag with the REST API"
"ft:prettyUrl": "r_applications_tag"
---
Use this command to return a list of applications that have a specific tag:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications?tag={tag}"
```
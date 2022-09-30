---
"ft:title": "Listing Applications with the REST API"
"ft:prettyUrl": "r_applications_list"
---
Use this command to return a list of applications with `50` applications on each page:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications/?page=0&size=50"
```

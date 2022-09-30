---
"ft:title": "Listing Applications by Scan Type with the REST API"
"ft:prettyUrl": "r_applications_scan_type"
---
Use this command to return the list of applications that have results from a specific scan type:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications?scan_type={scan_type}"
```

The valid `scan_type` values are `STATIC`, `DYNAMIC`, `MANUAL`, and `SCA`.

---
"ft:title": "Listing Applications by Compliance Status with the REST API"
"ft:prettyUrl": "r_applications_compliance"
---
Use this command to return the list of applications that have a specific policy compliance status:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications?policy_compliance={compliance_status}"
```

The valid `policy_compliance` values are `PASSED`, `DID_NOT_PASS`, and `NOT_ASSESSED`.
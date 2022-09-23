---
"ft:title": "Listing Applications by Last Modified Date with the REST API"
"ft:prettyUrl": "r_applications_modified_date"
---
Use this command to return the list of applications modified after a specific date:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications/?modified_after=2020-02-28"
```

Enter the date in `YYYY-MM-DD` format.

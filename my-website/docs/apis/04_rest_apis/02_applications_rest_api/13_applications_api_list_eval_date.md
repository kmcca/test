---
"ft:title": "Listing Applications by Last Policy Evaluation Date with the REST API"
"ft:prettyUrl": "Listing_Applications_by_Last_Policy_Evaluation_Date_with_the_Applications_API"
---
You can use the Applications REST API for listing the applications that have had an event that triggered a policy evaluation after a specific date. The events that trigger policy evaluations are scans, approved mitigations, and policy changes.

Use this command to return the list of applications with a policy evaluation after a specific date:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v1/applications?policy_compliance_checked_after={datetime}"
```

Enter the `datetime` in `yyyy-mm-ddThh:mm:ss.000Z` format.

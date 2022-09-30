---
"ft:title": "Creating a Policy with the REST API"
"ft:prettyUrl": "t_create_policy"
---
Use this command to create a [policy](https://docs.veracode.com/r/c_appsec_policies):

```shell
http --auth-type=veracode_hmac POST “https://api.veracode.com/appsec/v1/policies” < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "name": "TestPolicy",
  "type": "BLACKLIST",
  "description": "Policy to test create endpoint in end-to-end testing",
  "vendor_policy": false,
  "finding_rules": [
    {
      "type": "MAX_SEVERITY",
      "scan_type": [
        "DYNAMIC",
        "MANUAL",
        "STATIC"
      ],
      "value": "3"
    }
  ],
  "scan_type": [
    "SCA"
  ],
  "value": "14212"
}      
```

The example payload specifies to create a policy with two [policy rules](https://docs.veracode.com/r/c_policy_rules):

-   `MAX_SEVERITY` rule that specifies to apply a [finding-severity rating](https://docs.veracode.com/r/review_severity_exploitability) of `3` to all dynamic analysis, manual testing, and static analysis scans.
-   `BLACKLIST` rule that specifies to apply the [blocklist](https://docs.veracode.com/r/c_blocklist) for the organization, based on the organization ID, to all SCA scans.

[Policy API Rules Properties](https://docs.veracode.com/r/Policy_API_Rules_Properties) describes each of the rule properties.

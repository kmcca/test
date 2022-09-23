---
"ft:title": "Updating a Policy with the REST API"
"ft:prettyUrl": "t_update_policy"
---
Use this command to update a [policy](https://docs.veracode.com/r/c_appsec_policies):

```shell
http --auth-type=veracode_hmac PUT “https://api.veracode.com/appsec/v1/policies/{policyGuid}” < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "name": "TestPolicy",
  "type": "BLACKLIST",
  "description": "Policy to test updating endpoint in end-to-end testing",
  "vendor_policy": false,
  "finding_rules": [
    {
      "type": "MAX_SEVERITY",
      "scan_type": [
        "DYNAMIC",
        "MANUAL",
        "STATIC"
      ],
      "value": "4"
    }
  ],
  "scan_type": [
    "SCA"
  ],
  "value": "14212"
}
```

The example payload specifies to update an [existing policy](01_policy_api_create.md) with a new name and to change the [finding-severity rating](../Review_Results/review_severity_exploitability.md) of the `MAX_SEVERITY` rule to `4`. [Policy API Rules Properties](04_policy_api_rules_properties.md) describes each of the rule properties.

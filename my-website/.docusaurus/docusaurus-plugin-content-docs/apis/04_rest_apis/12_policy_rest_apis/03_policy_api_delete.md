---
"ft:title": "Deleting a Policy with the REST API"
"ft:prettyUrl": "c_delete_policy"
---
Use this command to delete a [policy](https://docs.veracode.com/r/c_appsec_policies) and replace it with another policy for the affected applications:

```shell
http --auth-type=veracode_hmac DELETE “https://api.veracode.com/appsec/v1/policies/{policyGuid}?replacement_GUID={replacement_GUID}”   
```

Use this command to delete a policy and replace it with a default policy for the affected applications:

```shell
http --auth-type=veracode_hmac DELETE “https://api.veracode.com/appsec/v1/policies/{policyGuid}?replace_with_default_policy=true”
```

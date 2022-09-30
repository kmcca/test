---
"ft:title": "Creating an Application with the REST API"
"ft:prettyUrl": "r_applications_create"
---
Use this command to create an application:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v1/applications" < input.json
```

To define only the required fields in the application, include a payload like this example:

```json
{
  "profile": {
    "name": "Applications REST API Example",
    "business_unit": {
      "guid": "08w93dm6-b5gf-4259-a895-39e7d933956k"
    },
    "policies": [
      {
        "guid": "1wg6dc84-76kk-5467-a5t2-c5885277jf1p"
      }
    ],
    "business_criticality": "HIGH"
  }
}     
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you have the Creator <a href="https://docs.veracode.com/r/c_role_permissions">role</a>, but not the Security Lead role, the payload must include the <code><a href="https://docs.veracode.com/r/r_applications_create_assign_team">teams</a></code> property.</p>

To define all possible fields in the application, include a payload like this example:

```json
{
  "profile": {
    "name": "Applications REST API Example",
    "business_unit": {
      "guid": "08w93dm6-b5gf-4259-a895-39e7d933956k"
    },
    "policies": [
      {
        "guid": "1wg6dc84-76kk-5467-a5t2-c5885277jf1p"
      }
    ],
    "business_criticality": "HIGH"
  }
}
```

You can get the `guid` value for the `business_unit` property from the [Identity API](https://docs.veracode.com/r/c_identity_intro) and get the `guid` value for the `policies` property from the [Policy API](https://docs.veracode.com/r/c_policy_rest_api).

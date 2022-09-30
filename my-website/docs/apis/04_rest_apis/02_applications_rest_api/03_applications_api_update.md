---
"ft:title": "Updating an Application with the REST API"
"ft:prettyUrl": "r_applications_update"
---
Use this command to update an application:

```shell
http --auth-type=veracode_hmac PUT "https://api.veracode.com/appsec/v1/applications/{guid}" < input.json
```

Include a payload that defines the updated properties. For example:

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> When updating applications with this API, all properties are required.</p>

```json
{
  "profile": {
    "name": "Applications REST API 9.5",
    "tags": "demo, restapi",
    "business_unit": {
      "guid": "{business_unit_guid}"
    },
    "business_owners": [],
    "archer_app_name": null,
    "policies": [
      {
        "guid": "{policy_guid}",
        "is_default": true
      }
    ],
    "teams": [
      {
        "guid": "{team_guid}"
      }
    ],
    "custom_fields": [
      {
        "name": "my_custom_field",
        "value": "my_custom_value"
      }
    ],
    "description": null,
    "business_criticality": "HIGH"
  }
}
```

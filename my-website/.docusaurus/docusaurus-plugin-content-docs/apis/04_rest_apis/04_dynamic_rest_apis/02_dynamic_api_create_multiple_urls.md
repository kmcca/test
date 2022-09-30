---
"ft:title": "Create a Dynamic Analysis of Multiple URLs with the REST API"
"ft:prettyUrl": "t_dynamic_multiple"
---
You can use the Dynamic Analysis API to create an analysis of multiple URLs with visibility, organization, and schedule restrictions.

<p font-size="13pt"><b>Steps</b></p>

1.  Log in to the Veracode Platform.

2.  Go to `https://ui.analysiscenter.veracode.com/api/authn/business_units?sort=name&size=500` to obtain the ID of the business unit that owns the Dynamic Analysis.

3.  Enter values for the `schedule`, `visibility`, and `org_info` properties in the JSON file.

4.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json
    ```

This is an example of a Dynamic Analysis for multiple URLs. This analysis runs on a specific day for three days, is owned by business unit `12345`, and is only visible to users in the business unit who have the Security Lead [role](https://docs.veracode.com/r/c_role_permissions):

```json
 {
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "https://www.example.com/one/"
        }
      }
    },
    {
      "scan_config_request": {
        "target_url": {
          "url": "https://www.example.com/two/"
        }
      }
    }
  ],
  "schedule": {
    "start_date": "2020-09-26T02:00+00:00",
    "duration": {
      "length": 3,
      "unit": "DAY"
    }
  },
  "visibility": {
    "setup_type": "SEC_LEADS_ONLY",
    "team_identifiers": []
  },
  "org_info": {
    "business_unit_id": "12345",
    "owner": "Test Development Team",
    "email": "user@example.com"
  }
}       
```
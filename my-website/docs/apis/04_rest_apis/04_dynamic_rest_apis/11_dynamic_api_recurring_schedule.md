---
"ft:title": "Create a Dynamic Analysis with a Recurring Schedule Using the REST API"
"ft:prettyUrl": "t_dynamic_recur"
---
You can use the Dynamic Analysis API to create an analysis that runs on a recurring schedule.

<p font-size="13pt"><b>Steps</b></p>

1.  Enter values for the `scan_config_request`, `schedule`, and `scan_recurrence_schedule` properties in the JSON file.

2.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json
    ```

This is an example of the code to add to your call when you want to make your schedule a recurring event:

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com"
        }
      }
    }
  ],
  "schedule": {
    "now": true,
    "duration": {
      "length": 1,
      "unit": "DAY"
    },
    "end_date": "",
    "scan_recurrence_schedule": {
      "recurrence_type": "WEEKLY",
      "schedule_end_after": 2,
      "recurrence_interval": 1,
      "day_of_week": "FRIDAY"
    }
  }
}
```
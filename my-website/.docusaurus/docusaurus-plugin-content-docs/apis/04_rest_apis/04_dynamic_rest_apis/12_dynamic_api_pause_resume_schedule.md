---
"ft:title": "Create a Dynamic Analysis with a Pause and Resume Schedule Using the REST API"
"ft:prettyUrl": "t_dynamic_pause"
---
You can use the Dynamic Analysis API to create an analysis that pauses and resumes scanning at specific times.

<p font-size="13pt"><b>Steps</b></p>

1.  Enter values for the `scan_config_request`, `schedule`, and `scan_blackout_schedule` properties in the JSON file.

2.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json
    ```

This is an example of a Dynamic Analysis that contains a pause and resume time frame between 9:00pm and 11:00pm:

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
    "start_date": "2019-09-27T16:49:00-04:00",
    "duration": {
      "length": 1,
      "unit": "DAY"
    },
    "scan_blackout_schedule": {
      "blackout_type": "THESE_HOURS",
      "blackout_start_time": "21:00",
      "blackout_end_time": "23:00",
      "blackout_days": null
    }
  }
}
```
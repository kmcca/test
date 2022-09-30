---
"ft:title": "Edit the Schedule of a Dynamic Analysis with the REST API"
"ft:prettyUrl": "t_dynamic_edit_schedule"
---
You can use the Dynamic Analysis API to update the schedule of an analysis.

<p font-size="13pt"><b>Steps</b></p>

1.  Add the new schedule to the `schedule` property in the JSON file.

2.  Run this command to get a list of analyses by name:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/analyses/"
    ```

3.  Run this command, where `name` is the name of the analysis you want to edit:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/analyses?name={name}"
    ```

4.  Obtain the `analysis_id` of the analysis you want to edit.

5.  Run this command to update the schedule:

    ```shell
    http --auth-type=veracode_hmac PUT "https://api.veracode.com/was/configservice/v1/analyses/{analysis_id}?method=PATCH" < input.json
    ```
The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "schedule": {
    "start_date": "2020-09-26T02:00+00:00",
    "duration": {
      "length": 3,
      "unit": "DAY"
    }
  }
}
```
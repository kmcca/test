---
"ft:title": "Link Dynamic Analysis Results to an Application with the REST API"
"ft:prettyUrl": "t_dynamic_linkAPI"
---
You can use the Dynamic Analysis API to [link analysis scan results](https://docs.veracode.com/r/About_Dynamic_Analysis_Application_Linking) to a Veracode application profile. 

<p font-size="13pt"><b>Overview</b></p>

Linking results allows you to aggregate all scan types of the target URL into a single report and also evaluate the results against policy.

<p font-size="13pt"><b>Steps</b></p>

1.  Run this command to get a list of [application profiles](https://docs.veracode.com/r/request_profile) by name:

    ```shell
    http --auth-type=veracode_hmac GET "https://api.veracode.com/was/configservice/v1/platform_applications"
    ```

    You can also get application details by making a GET call to the [Applications API](https://docs.veracode.com/r/r_applications_info).

2.  Locate the application UUID and add the UUID to the `linked_platform_app_uuid` property in your JSON file.

3.  Run this command to create an analysis that links the results to the specified UUID for your application:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json
    ```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "linked_platform_app_uuid": "abcd1234-e6d0-475d-ac70-abff5388fa75",
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com/",
          "http_and_https": true,
          "directory_restriction_type": "DIRECTORY_AND_SUBDIRECTORY"
        }
      }
    }
  ],
  "schedule": {
    "now": true,
    "duration": {
      "length": 1,
      "unit": "DAY"
    }
  }
}         
```

In this example, `linked_platform_app_uuid` specifies the UUID of the application profile to link to the scan results. `target_url` specifies the URL configuration for the target web application you want to scan.
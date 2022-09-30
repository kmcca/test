---
"ft:title": "Configure a Dynamic Analysis for Internal Scanning with the REST API"
"ft:prettyUrl": "t_dynamic_ISM"
---
You can use the Dynamic Analysis API to configure an analysis to run with [Veracode Internal Scanning Management (ISM)](https://docs.veracode.com/r/c_using_ism).

<p font-size="13pt"><b>Steps</b></p>

1.  Log in to the Veracode Platform.

2.  Go to `https://ui.analysiscenter.veracode.com/mvsa/admin/gateways?depth=1`.

3.  Obtain these values:

    - Gateway ID by looking for the `ref_id` corresponding to the gateway name
    - Endpoint ID by looking for the `token` corresponding to the gateway name

4.  Add the gateway ID and endpoint ID to the JSON file.

5.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json
    ```

This is an example of a Dynamic Analysis configured for ISM:

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com/",
          "http_and_https": true,
          "directory_restriction_type": "DIRECTORY_AND_SUBDIRECTORY"
        }
      },
      "internal_scan_configuration": {
        "enabled": true,
        "gateway_id": "12345678-85b2-4fe2-a633-425418f6a5ef",
        "endpoint_id": "1234abcd-cecc-43e8-a658-6b3447c3e52a"
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
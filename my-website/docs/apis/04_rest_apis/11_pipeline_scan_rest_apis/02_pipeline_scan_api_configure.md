---
"ft:title": "Configuring a Pipeline Scan with the REST API"
"ft:prettyUrl": "Configuring_a_Pipeline_Scan_with_the_REST_API"
---
Use this command to configure a Pipeline Scan:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/pipeline_scan/v1/scans" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "binary_name": "verademo.war",
  "binary_size": 6577398,
  "binary_hash": "48c96bf1ff8b47316683c99376b67b455f0e4a2d9705323fa3bcbe71afe350c7",
  "project_name": "verademo",
  "project_uri": "https://github.com/veracode/verademo", 
  "dev_stage": "DEVELOPMENT"
}   
```

The Pipeline Scan requires `binary_name`, `binary_size`, and `binary_hash`.

Property descriptions are available in the [Veracode Pipeline Scan API Specification](https://app.swaggerhub.com/apis/Veracode/veracode-pipeline_scan_api_specification/v1).

This example shows sample results from the command.

```json
{
  "_links": {
    "root": {
      "href": "/"
    },
    "self": {
      "href": "/scans"
    },
    "help": {
      "href": "https://docs.veracode.com/reader/tS9CaFwL4_lbIEWWomsJoA/ovfZGgu96UINQxIuTqRDwg"
    },
    "create": {
      "href": "/scans"
    },
    "details": {
      "href": "/scans/2138d64e-56b1-4d8b-a9c8-489ef38fd0a2"
    },
    "upload": {
      "href": "/scans/2138d64e-56b1-4d8b-a9c8-489ef38fd0a2/segments/0"
    },
    "cancel": {
      "href": "/scans/2138d64e-56b1-4d8b-a9c8-489ef38fd0a2"
    }
  },
  "scan_id": "2138d64e-56b1-4d8b-a9c8-489ef38fd0a2",
  "scan_status": "UPLOADING",
  "api_version": 1,
  "app_id": null,
  "project_name": "verademo",
  "project_uri": "https://github.com/veracode/verademo",
  "project_ref": null,
  "commit_hash": null,
  "dev_stage": "DEVELOPMENT",
  "binary_name": "verademo.war",
  "binary_size": 6577398,
  "binary_hash": "48c96bf1ff8b47316683c99376b67b455f0e4a2d9705323fa3bcbe71afe350c7",
  "binary_segments_expected": 3,
  "binary_segments_uploaded": 0,
  "scan_timeout": null,
  "scan_duration": null,
  "results_size": null,
  "message": null,
  "created": "2021-02-02T21:29:51.180433",
  "changed": "2021-02-02T21:29:52.564409"
} 
```

The results provide values required for other operations, including:

-   The `scan_id`, which you provide in other Pipeline Scan API commands.
-   The `binary_segments_expected` value, which you supply when [uploading file segments](https://docs.veracode.com/r/Uploading_File_Segments_to_a_Pipeline_Scan).


---
"ft:title": "Setting Pipeline Scan Timeouts with the REST API"
"ft:prettyUrl": "Using_Pipeline_Scan_Timeouts_with_the_REST_API"
---
Use this command to set a timeout for a Pipeline Scan:

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
  "dev_stage": "DEVELOPMENT",
  "scan_timeout": 32
}
```

The `scan_timeout` is an integer value that specifies the timeout period in minutes. The minimum value is `0` and the maximum is `60`.
---
"ft:title": "Uploading File Segments to a Pipeline Scan"
"ft:prettyUrl": "Uploading_File_Segments_to_a_Pipeline_Scan"
---
This use case scenario provides the Pipeline Scan REST API command for uploading file segments.

Use this command to upload [file segments](https://docs.veracode.com/r/Dividing_Files_into_Segments_for_a_Pipeline_Scan) to a Pipeline Scan:

```shell
http --auth-type=veracode_hmac -f PUT "https://api.veracode.com/pipeline_scan/v1/scans/{scan_id}/segments/0" file@{filename}
```

Repeat this command for each segment, incrementing the number after `/segments/` and specifying the next fragment, for example:

-   `/segments/1` and `xab`
-   `/segments/2` and `xac`
---
"ft:title": "Dividing Files into Segments for a Pipeline Scan"
"ft:prettyUrl": "Dividing_Files_into_Segments_for_a_Pipeline_Scan"
---
To prepare for uploading application files to a Pipeline Scan, you can divide the files into smaller segments.

Use this command to divide the file into segments on MacOS and Linux:

```shell
split -n {binary_segments_expected} {filename} 
```

To determine the approximate size for each segment, divide the `binary_size` value by the `binary_segments_expected` value. Property descriptions are available in the [Veracode Pipeline Scan API Specification](https://app.swaggerhub.com/apis/Veracode/veracode-pipeline_scan_api_specification/v1).

This command creates output files named with three letters starting with `xaa`. For example, `xaa`, `xab`, and `xac`. The command creates the output files in the same directory as the original file.

Use this command to divide the file into segments on Windows:

```shell
Split-File {full_path_to_file}\{filename} {binary_size}/{binary_segments_expected}
```

This command uses the Open Source PowerShell function [Split-File, available on GitHub](https://github.com/MScholtes/TechNet-Gallery/tree/master/Split-File). This command creates files named `file{nn}.dat`. For example, `file01.dat`, `file02.dat`, and `file03.dat`.

You can parse the response values for `{binary_size}` and `{binary_segments_expected}` to create the Pipeline Scan request.

Use this command to get the file size:

```shell
(Get-Item {filename}).length
```


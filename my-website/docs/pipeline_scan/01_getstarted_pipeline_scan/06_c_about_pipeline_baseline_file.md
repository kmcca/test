---
"ft:title" : "Using a Pipeline Scan Baseline File"
"ft:prettyUrl" : "Using_a_Pipeline_Scan_Baseline_File"
---
The Pipeline Scan provides the ability to set a baseline of known security findings. It stores these findings in a JSON file called the baseline or baseline file. The Pipeline Scan can compare discovered findings against the baseline file to identify new findings.

During scanning, the Pipeline Scan ignores the findings in a baseline file and only uses the file to identify new findings. For a CI/CD workflow, you can decide whether any new findings outside of your baseline are important enough to "break the build". Then, your team can determine a [mitigation strategy](https://docs.veracode.com/r/improve_mitigation) for addressing these findings before moving the code to the next phase in your development pipeline.

By default, after each scan, the Pipeline Scan saves the scan results to a `results.json` file. Because results.json is a standard JSON file, which you can safely rename, containing all the findings information from your scan results, you can set this file as the baseline for the scanned application.

For example, you can run the Pipeline Scan at the command line with the <code>[--baseline_file](04_r_pipeline_scan_commands.md)</code> parameter and the name of your JSON file. The Pipeline Scan scans against that JSON file to report on any new findings.

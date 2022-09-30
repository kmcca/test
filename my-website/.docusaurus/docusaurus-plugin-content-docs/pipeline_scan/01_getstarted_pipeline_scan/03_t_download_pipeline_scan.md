---
"ft:title" : "Obtain the Pipeline Scan Files"
"ft:prettyUrl" : "t_download_pipeline_scan"
---
You can obtain the latest version of the Pipeline Scan as a ZIP archive from Veracode or as a container image from Docker Hub.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to one of these locations:

    - [Docker Hub](https://hub.docker.com/u/veracode) to use a Docker image.
    - [Veracode Downloads](https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip) to download a ZIP archive.

2.  If you downloaded the ZIP archive, extract the contents to a local directory.

    The ZIP archive contains the `pipeline-scan.jar`, which includes all dependencies except the required Java 8 compatible JRE, and a README with detailed [code examples](05_r_pipeline_scan_examples.md). You add the full path to `pipeline-scan.jar` in your pipeline scripts for running a Pipeline Scan. The provided script examples include steps to both download and extract the ZIP as part of the Pipeline Scan job.

<p font-size="13pt"><b>Next Steps</b></p>

Run Pipeline Scans [from the command line](04_t_run_first_pipeline_scans_desktop.md) or [in your development pipeline](05_t_run_pipeline_scan.md).

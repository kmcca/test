---
"ft:title" : "Pipeline Scan Example for Using a Baseline File with GitHub Actions"
"ft:prettyUrl" : "Pipeline_Scan_Example_for_Using_a_Baseline_File_with_GitHub_Actions"
---
This YAML code example shows how to generate and use a baseline file in a GitHub Actions workflow.

The Pipeline Scan evaluates only flaws that differ from those stored in the [baseline file](01_getstarted_pipeline_scan/06_c_about_pipeline_baseline_file.md) to determine pass or fail criteria. You can use a baseline file to evaluate security risk on only new changes to your application. The Pipeline Scan uses a single pipeline for the build and security scan, then stores the baseline file as an artifact each time a job runs. You can modify this example so that you can run the Pipeline Scan as its own pipeline that another job can trigger. Depending on your build configuration, you may want to store results in a separate globally-accessible location, such as a shared directory.

```yaml

name: pipeline-scan

on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        run: gradle clean build
  baseline:
    runs-on: ubuntu-latest
    steps:
      - name: Set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Download the Pipeline Scanner
        uses: wei/curl@master
        with:
          args: -O https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip
      - name: Unzip the Pipeline Scanner
        run: unzip pipeline-scan-LATEST.zip
      - name: Create Baseline
        run: java -Dpipeline.debug=true -jar pipeline-scan.jar --veracode_api_id "${{secrets.VERACODE_API_ID}}" --veracode_api_key "${{secrets.VERACODE_API_KEY}}" --file "example.jar" --json_output_file="baseline.json" || true
      - name: Upload Baseline
        uses: actions/upload-artifact@v1
        with:
          name: baseline
          path: baseline.json
  baseline-scan:
    runs-on: ubuntu-latest
    needs: baseline
    steps:
      - name: Set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
      - name: Download the Pipeline Scanner
        uses: wei/curl@master
        with:
          args: -O https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip
      - name: Unzip the Pipeline Scanner
        run: unzip pipeline-scan-LATEST.zip
      - name: download baseline
        uses: actions/download-artifact@v1
        with:
          name: baseline
      - name: Scan with baseline
        run: java -Dpipeline.debug=true -jar pipeline-scan.jar --veracode_api_id "${{secrets.VERACODE_API_ID}}" --veracode_api_key "${{secrets.VERACODE_API_KEY}}" --file "example.jar" --baseline_file "baseline/baseline.json"

```

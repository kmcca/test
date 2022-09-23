---
"ft:title" : "Pipeline Scan Example for Using Maven with GitHub Actions"
"ft:prettyUrl" : "Pipeline_Scan_Example_for_Using_Maven_with_GitHub_Actions"
---
This example YAML code shows how to add a Pipeline Scan as a build stage in a GitHub Actions build pipeline with Maven.

```yaml

name: pipeline-scan

on: push

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: build
        run: maven clean verify
  pipeline-scan:
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
      - name: Run Pipeline Scanner
        run: java -Dpipeline.debug=true -jar pipeline-scan.jar --veracode_api_id "${{secrets.VERACODE_API_ID}}" --veracode_api_key "${{secrets.VERACODE_API_KEY}}" --file "example.jar" --fail_on_severity="Very High, High"
```

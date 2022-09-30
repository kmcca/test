---
"ft:title" : "Pipeline Scan Example for Using a Baseline File with Azure DevOps"
"ft:prettyUrl" : "Pipeline_Scan_Example_for_Using_a_Baseline_File_with_Azure_Devops"
---
This YAML code example shows how to generate and use a baseline file in an Azure DevOps build pipeline.

The Pipeline Scan evaluates only flaws that differ from those stored in the [baseline file](07_c_about_pipeline_baseline_file.md) to determine pass or fail criteria. You can use a baseline file to evaluate security risk on only new changes to your application. The Pipeline Scan uses a single pipeline for the build and security scan, then stores the baseline file as an artifact each time a job runs. You can modify this example so that you can run the Pipeline Scan as its own pipeline that another job can trigger. Depending on your build configuration, you may want to store results in a separate globally-accessible location, such as a shared directory.

<p font-size="13pt"><b>Create a Baseline File</b></p>

```yaml

# Create a baseline file.
trigger:
  - master
pool:
  vmImage: "ubuntu-latest"
steps:
  - task: Gradle@2
    inputs:
      workingDirectory: ""
      gradleWrapperFile: "gradlew"
      gradleOptions: "-Xmx3072m"
      javaHomeOption: "JDKVersion"
      jdkVersionOption: "1.8"
      jdkArchitectureOption: "x64"
      publishJUnitResults: true
      testResultsFiles: "**/TEST-*.xml"
      tasks: "build"
  - script: |
      curl -O -L https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip
    displayName: "Download Pipeline Scan"
  - task: ExtractFiles@1
    inputs:
      archiveFilePatterns: "pipeline-scan-LATEST.zip"
      destinationFolder: "pipeline"
      cleanDestinationFolder: false
  - script: |
      java -jar pipeline\pipeline-scan.jar --veracode_api_id "$(VERACODE_API_ID)" --veracode_api_key "$(VERACODE_API_KEY)" --file "example.jar" --json_output_file="baseline.json" || true
      # Pipeline Scan command. VERACODE_API_ID and VERACODE_API_KEY must reference your API credentials.
      # "--json_output_file" saves scan results as a JSON file that you can use as a baseline file.
    env:
      VERACODE_API_ID: $(VERACODE_API_ID)
      VERACODE_API_KEY: $(VERACODE_API_KEY)
    displayName: "Run Pipeline Scan"
  - publish: $(System.DefaultWorkingDirectory)/baseline.json
    artifact: baseline

```

<p font-size="13pt"><b>Apply Baseline File and Fail Build for New Flaws</b></p>

```yaml

# Apply baseline file and fail build for new flaws.
trigger:
  - master
pool:
  vmImage: "ubuntu-latest"
steps:
  - script: |
      curl -O -L https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip
    displayName: "Download Pipeline Scan"
  - task: ExtractFiles@1
    inputs:
      archiveFilePatterns: "pipeline-scan-LATEST.zip"
      destinationFolder: "pipeline"
      cleanDestinationFolder: false
  - task: DownloadPipelineArtifact@2
    inputs:
      source: specific
      project: "test"
      pipeline: 2
      artifact: baseline
  - script: |
      java -jar pipeline\pipeline-scan.jar --veracode_api_id "$(VERACODE_API_ID)" --veracode_api_key "$(VERACODE_API_KEY)" --file "example.jar" --baseline_file "../baseline.json"
      # VERACODE_API_ID and VERACODE_API_KEY must reference your API credentials.
      # "--baseline_file" specifies the baseline of known flaws for the specified application file.
      # This example command breaks the build for new flaws not listed in the specified baseline file. 
    env:
      VERACODE_API_ID: $(VERACODE_API_ID)
      VERACODE_API_KEY: $(VERACODE_API_KEY)
    displayName: "Run Pipeline Scan"

```

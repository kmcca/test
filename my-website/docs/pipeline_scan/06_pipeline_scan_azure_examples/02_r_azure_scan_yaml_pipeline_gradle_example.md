---
"ft:title" : "Pipeline Scan Example for Using Gradle with Azure DevOps"
"ft:prettyUrl" : "Pipeline_Scan_Example_for_Using_Gradle_with_Azure_DevOps"
---
This example YAML code shows how to add a Pipeline Scan as a build stage in an Azure DevOps build pipeline that uses Gradle.

```yaml

trigger:
  - master
pool:
  vmImage: "ubuntu-latest"
steps:
  - task: Maven@3
    displayName: Build with Maven
    inputs:
      mavenPomFile: "app/pom.xml"
      mavenOptions: "-Xmx3072m"
      javaHomeOption: "JDKVersion"
      jdkVersionOption: "1.8"
      jdkArchitectureOption: "x64"
      publishJUnitResults: true
      testResultsFiles: "**/surefire-reports/TEST-*.xml"
      goals: "package"
  - task: Bash@3
    displayName: Veracode Pipeline Scan
    inputs:
      targetType: "inline"
      script: |
        curl -sSO https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip
        unzip -o pipeline-scan-LATEST.zip
        java -jar pipeline-scan.jar -vid $(VERACODE_API_ID) -vkey $(VERACODE_API_KEY) -f /home/vsts/work/1/s/app/target/verademo.war || true
      # VERACODE_API_ID and VERACODE_API_KEY environment variables must reference your API credentials.
      # "|| true" specifies to continue build if Pipeline Scan discovers flaws.
      # To fail the build for new flaws not listed in a baseline file, add an existing baseline file with "-bf <baseline filename>" and remove "|| true".
  - publish: $(System.DefaultWorkingDirectory)/results.json # Save the scan results as a file named results.json.
    artifact: VeracodeBaseline

```

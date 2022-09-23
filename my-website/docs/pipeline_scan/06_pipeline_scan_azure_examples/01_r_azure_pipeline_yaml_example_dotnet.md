---
"ft:title" : "Pipeline Scan Example for an ASP.NET Application in Azure DevOps"
"ft:prettyUrl" : "Pipeline_Scan_Example_for_an_ASPNET_Application_in_Azure_DevOps"
---
This example YAML code shows how to add a Pipeline Scan as a build stage in an Azure DevOps build pipeline for an ASP.NET application on Windows.

```yaml

trigger:
  - main

pool:
  vmImage: "windows-latest"

variables:
  solution: "**/*.sln"
  buildPlatform: "Any CPU"
  buildConfiguration: "Release"

steps:
  - task: NuGetToolInstaller@1

  - task: NuGetCommand@2
    inputs:
      restoreSolution: "$(solution)"

  - task: VSBuild@1
    inputs:
      solution: "$(solution)"
      msbuildArgs: '/p:DeployOnBuild=true /p:WebPublishMethod=Package /p:PackageAsSingleFile=true /p:SkipInvalidConfigurations=true /p:PackageLocation="$(build.artifactStagingDirectory)"'
      platform: "$(buildPlatform)"
      configuration: "$(buildConfiguration)"

  - task: CmdLine@2
    displayName: Veracode Pipeline Scan
    inputs:
      script: |
        curl -sSO https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip
        unzip -o pipeline-scan-LATEST.zip
        java -jar pipeline-scan.jar -vid $(VERACODE_API_ID) -vkey $(VERACODE_API_KEY) -f $(build.artifactstagingdirectory)\Verademo-dotnet.zip || true
      # VERACODE_API_ID and VERACODE_API_KEY environment variables must reference your API credentials.
      # "|| true" specifies to continue build if Pipeline Scan discovers flaws.
      # To fail the build for new flaws not listed in a baseline file, add an existing baseline file with "-bf <baseline filename>" and remove "|| true".

  - task: PublishBuildArtifacts@1
    displayName: Create Build Artifact for Veracode Pipeline Scan Results
    inputs:
      PathtoPublish: "results.json"
      ArtifactName: "Build"
      publishLocation: "Container"
```
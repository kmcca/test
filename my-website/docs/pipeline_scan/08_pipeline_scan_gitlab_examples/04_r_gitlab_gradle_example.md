---
"ft:title" : "Pipeline Scan Example for Using GitLab and Gradle with Automatic Issue Generation"
"ft:prettyUrl" : "Pipeline_Scan_Example_for_Using_GitLab_and_Gradle_with_Automatic_Issue_Generation"
---
This example YAML code shows how to add a Pipeline Scan and automatic issue generation as a build stage in a GitLab build pipeline using Gradle.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"> <b>Note:</b> Before you can use the <code>--gl_issue_generation</code> parameter in a Pipeline Scan, you must <a href="https://docs.veracode.com/r/Set_a_GitLab_Access_Token">create a GitLab access token</a>. If you want to use this parameter when scanning Java applications, you must also <a href="https://docs.veracode.com/r/Set_Environment_Variables_for_GitLab_Base_Directories">configure environment variables to set GitLab base directories</a>. You can use any GitLab subscription to generate GitLab issues.</p>

This structure in the GitLab CI performs a self-test and sets the `$VERACODE_API_*` variables in the CI/CD settings.

```yaml

# image must have JDK8+, gradle, curl, unzip
image: <image-with-above-requirements>

stages:
  - build
  - scan

build_job:
  stage: build
  artifacts:
    name: ${CI_PROJECT_NAME}_${CI_COMMIT_REF_NAME}_${CI_COMMIT_SHA}_build
    paths:
      - build/
    expire_in: 1 week
  script: gradle clean build

pipeline scan:
  stage: scan
  dependencies:
    - build_job
  artifacts:
    name: ${CI_PROJECT_NAME}_${CI_COMMIT_REF_NAME}_${CI_COMMIT_SHA}_pipeline-results
    paths:
      - results.json
    expire_in: 1 week
    when: always
  script:
    - curl -O https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip
    - unzip pipeline-scan-LATEST.zip pipeline-scan.jar
    - java -jar pipeline-scan.jar
      --veracode_api_id "${VERACODE_API_ID}"
      --veracode_api_key "${VERACODE_API_SECRET}"
      --file "build/libs/sample.jar"
      --fail_on_severity="Very High, High"
      --fail_on_cwe="80"
      --baseline_file "${CI_BASELINE_PATH}"
      --timeout "${CI_TIMEOUT}"
      --project_name "${CI_PROJECT_PATH}"
      --project_url "${CI_REPOSITORY_URL}"
      --project_ref "${CI_COMMIT_REF_NAME}"
      --gl_issue_generation true

```

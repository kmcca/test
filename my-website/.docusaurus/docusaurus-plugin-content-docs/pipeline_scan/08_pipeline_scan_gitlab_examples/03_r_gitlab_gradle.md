---
"ft:title" : "Pipeline Scan Example for Using Gradle with GitLab"
"ft:prettyUrl" : "Pipeline_Scan_Example_for_Using_Gradle_with_GitLab"
---
This example YAML code shows how to add a Pipeline Scan as a build stage in a GitLab Actions build pipeline using Gradle.

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

```

---
"ft:title" : "Pipeline Scan Example for Using a Baseline File with GitLab"
"ft:prettyUrl" : "Pipeline_Scan_Example_for_Using_a_Baseline_File_with_GitLab"
---
This YAML code example shows how to generate, store, and use a baseline file in a GitLab build pipeline.

The Pipeline Scan evaluates only flaws that differ from those stored in the [baseline file](01_getstarted_pipeline_scan/06_c_about_pipeline_baseline_file.md) to determine pass or fail criteria. You can use a baseline file to evaluate security risk on only new changes to your application. The Pipeline Scan uses a single pipeline for the build and security scan, then stores the baseline file as an artifact each time a job runs. You can modify this example so that you can run the Pipeline Scan as its own pipeline that another job can trigger. Depending on your build configuration, you may want to store results in a separate globally-accessible location, such as a shared directory.

```yaml

# image must have JDK8+, gradle, curl, unzip
image: <image-with-above-requirements>

stages:
  - build
  - scan
  - store

build_job:
  stage: build
  artifacts:
    name: ${CI_PROJECT_NAME}_${CI_COMMIT_REF_NAME}_${CI_COMMIT_SHA}_build
    paths:
      - build/
    expire_in: 1 week
  script: gradle clean build

Scan:
  stage: scan
  only:
    - master
  dependencies:
    - build_job
  artifacts:
    name: ${CI_PROJECT_NAME}_${CI_COMMIT_REF_NAME}_${CI_COMMIT_SHA}_pipeline-results
    paths:
      - baseline.json
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
      --json_output_file="baseline.json"
      --timeout "${CI_TIMEOUT}"
      --project_name "${CI_PROJECT_PATH}"
      --project_url "${CI_REPOSITORY_URL}"
      --project_ref "${CI_COMMIT_REF_NAME}"

Store Baseline:
  # Job will only run on master, if requested.
  # Will restore the above baseline artifact so it can be pulled down in other stages
  stage: store
  before_script:
  only:
    - master
  when: manual
  script:
    - echo "Storing results.json as baseline.json"
  artifacts:
    name: baseline
    paths:
      - baseline.json # If you want to keep this longer than the GitLab default - press store in the web UI

Baseline Scan:
  # Job will run anywhere, except master. Will pull the baseline file and use it in the scan, if available
  dependencies:
    - Scan
  except:
    - master
  stage: scan
  script:
    - git clean -dfx
    - "curl -O https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip"
    - unzip pipeline-scan-LATEST.zip pipeline-scan.jar
    - '[[ ! -f baseline.json ]] &&  curl --location "$CI_PROJECT_URL/-/jobs/artifacts/$CI_COMMIT_REF_NAME/raw/baseline.json?job=Store%20Baseline" -o baseline.json'
    - java -jar pipeline-scan.jar --veracode_api_id "${VERACODE_KEY}" --veracode_api_key "${VERACODE_SECRET}" --file "<file_to_scan>" --project_name "${CI_PROJECT_PATH}" --project_url "${CI_PROJECT_URL}" --project_ref "${CI_COMMIT_REF_NAME}" --baseline_file baseline.json -jf results.json

```

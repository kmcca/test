---
"ft:title" : "Pipeline Scan Example for Using a Baseline File with Jenkins"
"ft:prettyUrl" : "Pipeline_Scan_Example_for_Using_a_Baseline_File_with_Jenkins"
---
This example Groovy code shows how you can add a Pipeline Scan that uses a baseline file to a Jenkins build pipeline.

The Pipeline Scan evaluates only flaws that differ from those stored in the [baseline file](01_getstarted_pipeline_scan/06_c_about_pipeline_baseline_file.md)  to determine pass or fail criteria. You can use a baseline file to evaluate security risk on only new changes to your application. The Pipeline Scan uses a single pipeline for the build and security scan, then stores the baseline file as an artifact each time a job runs. You can modify this example so that you can run the Pipeline Scan as its own pipeline that another job can trigger. Depending on your build configuration, you may want to store results in a separate globally-accessible location, such as a shared directory.

```groovy

pipeline {
    agent { label <'any-with-jdk8-maven-curl-unzip'> }
    stages {
        stage('Clone Repo') {
            steps {
                git url: "$GIT_URL", branch: "$GIT_BRANCH", credentialsId: 'ae020d0c-c99b-4a6c-9663-7a2e0290648c'
            }
        }
        stage('Gradle Build') {
            steps {
                sh './gradlew clean build'
            }
        }
        stage('Veracode Pipeline Scan') {
            steps {
                // Copy baseline from previous build
                copyArtifacts(projectName: "$JOB_NAME", selector: lastSuccessful(stable: true), filter: 'baseline.json', target: '.', optional: true)
                script {
                    ref = sh(script: 'git rev-parse HEAD', returnStdout: true).trim()
                    baseline = ''
                    if (fileExists('baseline.json')) {
                        baseline = '--baseline_file baseline.json'
                    }
                }

                // Download and submit Pipeline Scan
                sh 'curl -O https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip'
                sh 'unzip pipeline-scan-LATEST.zip pipeline-scan.jar'
                sh """
                    java -jar pipeline-scan.jar \
                        --veracode_api_id "${env.VERACODE_API_KEY_ID}" \
                        --veracode_api_key "${env.VERACODE_API_KEY_SECRET}" \
                        --jf results.json \
                        --timeout "$timeout" \
                        --file "build/libs/sample.jar" \
                        --project_name "$JOB_NAME" \
                        --project_url "$GIT_URL" \
                        --project_ref "$ref" 
                        $baseline
                """
            }
        }
        stage('Store Baseline') {
            steps {
                script {
                    try {
                        input(message: 'Store results as baseline for future scans?', ok: 'Yes')
                        sh 'cp baseline.json build-baseline.json'
                        sh 'cp results.json baseline.json'
                    } catch (err) {

                    }
                }
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: "*.json", fingerprint: true, allowEmptyArchive: true
            deleteDir()
        }
    }
}
```

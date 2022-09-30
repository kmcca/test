---
"ft:title" : "Configure an AWS CodeBuild Project for Veracode Static Analysis"
"ft:prettyUrl" : "t_aws_config_codebuild_static"
---
You configure a new or existing build project in AWS CodeBuild that includes the Veracode Java API wrapper, your Veracode API credentials, and the Veracode API commands to call for performing static analysis. You add the build project to a pipeline stage in CodePipeline for analyzing the build output from your application build stage.

<p font-size="13pt"><b>Before You Begin</b></p>

-   You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
-   Your Veracode API credentials are stored securely using AWS System Manager Parameter Store or the AWS Secrets Manager.
-   If you are performing static analysis using a [Veracode development sandbox](https://docs.veracode.com/r/c_about_sandbox), you have configured the sandbox you want to use.
-   You have compiled and packaged your application source files according to the [Veracode Packaging Requirements](https://docs.veracode.com/r/compilation_packaging).
-   You have access to the [Veracode Java API wrapper Docker image](https://docs.veracode.com/r/t_working_with_java_wrapper).

<p font-size="13pt"><b>Overview</b></p>

This procedure applies to both new and existing build projects. For a new project, you complete each section on the Create build project page, then click **Create build project** to save the configuration and build the project. For an existing project, you edit each pre-configured section on a separate page, then click **Update** after completing your edits.

<p font-size="13pt"><b>Steps</b></p>

1.  In AWS, create or edit a build project to use for static analysis.

2.  In the build project, configure the Project configuration and Source sections for your development environment.

3.  In the Environment section, under Environment image, reference the [Veracode Java API wrapper Docker image](https://docs.veracode.com/r/t_working_with_java_wrapper).

4.  Expand **Additional configuration**.

5.  In the Environment variables section, add environment variables for the API ID and API key for your Veracode API credentials.

    For example, you could enter a `VID` variable for the API ID and a `VKEY` variable for the API key. The values specify the location of the actual API ID and API key. If your credentials are stored in the AWS System Manager Parameter Store, select the **Parameter** type for both variables. If your credentials are stored in AWS Secrets Manager, set the type to **Secrets Manager**.

6.  In the Buildspec section, enter the [Java API wrapper commands](https://docs.veracode.com/r/c_wrapper_CL). For example:

    ```shell
    java -jar /opt/veracode/api-wrapper.jar -action uploadandscan -vid $VID -vkey $VKEY -appname verademo-java -createprofile false -version $(date +%Y-%m-%d-%H:%M) -filepath target/verademo.war -sandboxname aws-codebuild -createsandbox true
    ```
    This example command references the API wrapper JAR file, which is contained in a `veracode` directory in the Docker image, and calls the [uploadandscan](https://docs.veracode.com/r/r_uploadandscan) call in a development sandbox. The values for the `-vid` and `-vkey` parameters are the `VID` and `VKEY` environment variable names defined in the Environment variables section.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> To ensure your Veracode API credentials are stored securely, Veracode recommends that you do not store them in the build specification as plain text.</p>

7.  Optionally, in the Logs section, select to upload the build logs to CloudWatch or S3. The logs include build output for the API wrapper, which you can view in the build history for troubleshooting purposes.

8.  Build your project to ensure it is configured correctly.

9.  Review the build log and resolve any build errors.

<p font-size="13pt"><b>Next Steps</b></p>

Add this build project to a [new or existing stage in a new or existing pipeline](https://docs.veracode.com/r/t_aws_config_codepipeline_static). In the pipeline, the stage to which you add this build project must run after the stage that builds your application.
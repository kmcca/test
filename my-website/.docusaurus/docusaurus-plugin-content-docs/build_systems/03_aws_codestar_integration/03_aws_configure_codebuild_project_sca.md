---
"ft:title" : "Configure an AWS CodeBuild Project for SCA"
"ft:prettyUrl" : "t_aws_config_codebuild_sca"
---
You configure a new or existing build project in AWS CodeBuild project that performs Veracode Software Composition Analysis \(SCA\) agent-based scans. You add the build project to a pipeline stage in CodePipeline to analyze the build output from your application build stage.

<p font-size="13pt"><b>Before You Begin</b></p>

-   You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
-   You have [configured agent-based scanning](https://docs.veracode.com/r/c_SC_platform).
-   You have generated your [agent-based scanning API token](https://docs.veracode.com/r/Integrating_Veracode_SCA_with_Atlassian_Bamboo). Your token is stored securely as an environment variable in AWS System Manager Parameter Store or AWS Secrets Manager.
-   You have compiled and packaged your application source files according to the [Veracode Packaging Requirements.](https://docs.veracode.com/r/compilation_packaging).

<p font-size="13pt"><b>Overview</b></p>

This procedure applies to both new and existing build projects. For a new project, you complete each section on the Create build project page and, then, click **Create build project** to save the configuration and build the project. For an existing project, you edit each pre-configured section on a separate page and, then, click **Update** after completing your edits.

<p font-size="13pt"><b>Steps</b></p>

1. In AWS, create or edit a build project to use for SCA.

2. In the build project, configure the Project configuration, Source, and Environment sections for your development environment.

    Veracode recommends that the environment settings in this build project match the environment settings in the build project for building your application. For example, if you use a specific Docker image for your build project, reference that same image in this section.

3. In the Environment section, expand **Additional configuration**.

4. In the Environment variables section, add this environment variable to specify your agent-based scanning API token:

    a. Name: enter `SRCCLR_API_TOKEN`.
 
    b. Value: enter your authentication token. For example, the location, name, or variable.

    c. Type: select **Parameter**.

5. Click **Add environment variable** to add additional [environment variables required for accessing your source code management (SCM) system](https://docs.veracode.com/r/Integrating_Veracode_SCA_with_Atlassian_Bamboo).

6. In the Buildspec section, add these commands to specify the `SRCCLR_SCM_REV` variable and to run SCA:

    ```
    phases:
      build:
        commands:
          - export SRCCLR_SCM_REV="${CODEBUILD_RESOLVED_SOURCE_VERSION}"
          - curl -sSL https://download.sourceclear.com/ci.sh | sh
    
    ```

    The value of the `SRCCLR_SCM_REV` variable points to the commit ID of the application version checked out in CodePipeline during each build. Because the value is dynamic, instead of static, you must specify it in the build specification. Also, if you add this build project and the [build project for static analysis](https://docs.veracode.com/r/t_aws_config_codebuild_static) to the same build stage, the `SRCCLR_SCM_REV` variable ensures that both projects can run concurrently.

7. Save or update the build project.

8. Build your project to ensure it is configured correctly.

9. Review the build log to identify any build errors.

<p font-size="13pt"><b>Next Steps</b></p>

-   Add this build project to a [new or existing stage in a new or existing pipeline](https://docs.veracode.com/r/t_aws_config_codepipeline_static). In the pipeline, the stage to which you add this build project must run after the stage that builds your application.
-   Optionally, in the Veracode Platform, configure a [custom rule](https://docs.veracode.com/r/c_sc_policies_custom) to fail the build if the application fails to pass the Veracode analysis stage.
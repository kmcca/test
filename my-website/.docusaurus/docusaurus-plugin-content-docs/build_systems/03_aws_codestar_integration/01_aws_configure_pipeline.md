---
"ft:title" : "Configure an AWS Pipeline for Veracode Security Scanning"
"ft:prettyUrl" : "t_aws_config_codepipeline_static"
---
You configure a new or existing pipeline in AWS CodePipeline that includes a build stage for performing Veracode Static Analysis and Veracode Software Composition Analysis (SCA) agent-based scans of your application build output. These analyses can run in the same stage or different stages, but you must place them in the pipeline after the application build stage.

<p font-size="13pt"><b>Overview</b></p>

This procedure applies to a new or existing pipeline in AWS CodePipeline. For a new pipeline, you complete each section on the Create new pipeline page, then click **Next** to proceed and save the configuration. For an existing pipeline, you edit each pre-configured section, including actions, on a separate page, then click **Done** to save the configuration.

<p font-size="13pt"><b>Steps</b></p>

1. In AWS, configure a new or existing pipeline. If you use an existing pipeline, ensure the pipeline has a stage for building the application you want to scan.

2. Add a stage with an action that specifies the location of your application source to include in the build.

3. Add a stage with an action that builds the application. In the Output artifacts field, enter a name for the compiled build output. You specify this value in the next stage for Veracode security scanning.

4. Configure a stage with an action for performing Veracode security scanning.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> The Veracode security scanning stage scans the build output from the stage that builds the application. You must ensure that you place the Veracode security scanning stage after the application build stage.</p> 

    These fields require specific values:

    - Input artifacts: specify the value from the Output artifacts field in the previous stage for building the application.
    - Project name: specify the name of your [static analysis build project](https://docs.veracode.com/r/t_aws_config_codebuild_static) or [SCA build project](https://docs.veracode.com/r/t_aws_config_codebuild_sca). If you have not created a build project, or the project is not available from the dropdown menu, click **Create project**. If you want to add both projects to the same stage, add a separate action for each build project.
    - Output artifacts: leave this field empty. The build projects for Veracode scanning do not generate output artifacts. You can view the scan results in the Veracode Platform.

<p font-size="13pt"><b>Task Results</b></p>

After completing this task, you have a pipeline containing three build stages. For example:

- Source stage: contains an action that specifies the GitHub repository where the application source code is stored.
- Build stage: contains an action that specifies an AWS CodeBuild project for building the application. It uses the required build configuration and the name for the output artifacts.
- Security stage: contains two actions for scanning the build output:
    - An action that specifies the name of an AWS CodeBuild project for performing static analysis.
    - An action that specifies the name of an AWS CodeBuild project for performing SCA agent-based scan.

<p font-size="13pt"><b>Next Steps</b></p>

[Review the scan results in the Veracode Platform.](https://docs.veracode.com/r/review_results)
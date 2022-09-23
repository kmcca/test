---
"ft:title" : "Integrating Veracode SCA with Developer Tools"
"ft:prettyUrl" : "Integrating_Veracode_SCA_with_Developer_Tools"
---

You can integrate Veracode Software Composition Analysis with several CI/CD and ticketing tools.

In addition to the listed integrations, you can implement Veracode SCA in any CI tool [through scripting](https://docs.veracode.com/r/c_sc_ci_script).

For the detailed lists of supported tools and languages, see [About Supported Languages and Tools for Agent-Based Scans](https://docs.veracode.com/r/c_sc_supported_lang) and [Understanding Language Support for Veracode SCA Upload Scans](https://docs.veracode.com/r/c_sca_upload_support).

## CI/CD Systems

**Atlassian Bamboo**

You can create a Veracode SCA agent that scans your repositories as an automated task in your Atlassian Bamboo pipeline. See the [configuration instructions](https://docs.veracode.com/r/t_sc_bamboo_token) for more information.

**AWS CodeStar**

[Veracode for AWS CodeStar](https://docs.veracode.com/r/c_aws_codestar_about) allows you to configure automated agent-based scan commands in your AWS CodeBuild projects. You, then, add the build project to a pipeline stage in CodePipeline to analyze the build output from your application build stage and return Veracode SCA findings. See [Configure an AWS CodeBuild Project for SCA](https://docs.veracode.com/r/t_aws_config_codebuild_sca) for more information.

**Azure DevOps**

You can [create a Veracode SCA agent for PowerShell](https://docs.veracode.com/r/Install_the_Veracode_SCA_Agent_with_PowerShell), then configure agent-based scanning as a PowerShell task in Azure DevOps.

The open-source [Veracode Community Software Composition Analysis \(SCA\) Azure DevOps Extension](https://github.com/MetLife/VeracodeCommunitySCA) integrates agent-based scans of your repositories as an automated task into your Azure DevOps pipeline.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> This extension is not officially supported by Veracode.
</p>

**Bitbucket**

You can create a Veracode SCA agent that scans your repositories as an automated task in your Bitbucket pipeline. See the [configuration instructions](https://docs.veracode.com/r/t_sc_bitbucket_token) for more information.

**CircleCI**

You can create a Veracode SCA agent that scans your repositories as an automated task in your CircleCI pipeline. See the [configuration instructions](https://docs.veracode.com/r/t_sc_ci_token) for more information.

This [`config.yml file`](https://github.com/buzzcode/NodeGoat/blob/master/.circleci/config.yml) includes a sample command for running an agent-based scan in a CircleCI pipeline.

**CodeShip Basic**

You can create a Veracode SCA agent that scans your repositories as an automated task in your CodeShip Basic pipeline. See the [configuration instructions](https://docs.veracode.com/r/t_sc_codeship_token) for more information.

**CodeShip Pro**

You can create a Veracode SCA agent that scans your repositories as an automated task in your CodeShip Pro pipeline. See the [configuration instructions](https://docs.veracode.com/r/t_sc_codeship_token) for more information.

**GitLab**

You can create a Veracode SCA agent that scans your repositories as an automated task in your GitLab pipeline. See the [configuration instructions](https://docs.veracode.com/r/Create_Your_Agent_Based_Scanning_Authentication_Token_for_GitLab_CI) for more information.

**Gradle**

You can create a Veracode SCA agent that automates the scanning of your Gradle repositories. See the [configuration instructions](https://docs.veracode.com/r/t_sc_gradle) for more information.

**Jenkins**

You can create a Veracode SCA agent that scans your repositories as an automated task in your Jenkins pipeline. See the [configuration instructions](https://docs.veracode.com/r/c_sc_jenkins_prereq) for more information.

The [Veracode Jenkins Plugin](https://docs.veracode.com/r/c_about_jenkins) automates the upload and scan tasks of your Jenkins build pipeline and returns Veracode SCA findings as part of a Veracode Static Analysis.

**Maven**

You can create a Veracode SCA agent that automates the scanning of your Maven repositories. See the [configuration instructions](https://docs.veracode.com/r/t_sc_maven) for more information.

**Travis CI**

You can create a Veracode SCA agent that scans your repositories as an automated task in your Travis CI pipeline. See the [configuration instructions](https://docs.veracode.com/r/t_sc_travis_token) for more information.

## Ticketing Systems

**Jira**

You can create a Jira integration that allows you to generate tickets in Jira for findings from agent-based scans performed on the command line or as part of a pipeline. See the [configuration instructions](https://docs.veracode.com/r/c_sc_jenkins_prereq) for more information.

The [Veracode Integration for Jira](https://docs.veracode.com/r/c_jira_about) manages the import of security findings from Veracode and creates issues in Jira for Veracode SCA findings imported from a Veracode Static Analysis.

**Jira Cloud**

You can create a Jira Cloud integration that automatically generates tickets in Jira Cloud for agent-based scan findings performed on the command line or as part of a pipeline. See the [configuration instructions](https://docs.veracode.com/r/Create_an_Agent_Based_Scanning_Integration_for_Jira_Cloud) for more information.

The [Veracode Integration for Jira Cloud](https://docs.veracode.com/r/c_jira_cloud_about) manages the import of security findings from Veracode and creates issues in Jira for Veracode SCA findings imported from a Veracode Static Analysis.

**GitHub**

You can create a GitHub integration that generates issues in GitHub for agent-based scan findings performed on the command line or as part of a pipeline. See the [configuration instructions](https://docs.veracode.com/r/Create_an_Agent_Based_Scanning_Integration_for_GitHub) for more information.


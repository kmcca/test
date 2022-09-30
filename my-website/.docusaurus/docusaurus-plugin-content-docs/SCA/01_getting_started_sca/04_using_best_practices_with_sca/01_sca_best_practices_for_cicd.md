---
"ft:title" : "Veracode SCA Best Practices for Automated CI/CD"
"ft:prettyUrl" : "Veracode_SCA_Best_Practices_for_Automated_CICD"
---

Veracode recommends that you follow these best practices to effectively implement Veracode Software Composition Analysis in your automated CI/CD projects.

## Use the Appropriate Type of Agent for Your Workflow

If you want to create a standardized pipeline configuration that applies to multiple workspaces, activate an organization agent. If your development team primarily works in a single workspace, activate a workspace agent. See [About Veracode SCA Agent Management](https://docs.veracode.com/r/c_sc_agent_management).

## Select the Appropriate Default Branch for Your Projects

The [default branch for a project](https://docs.veracode.com/r/c_sc_default_branch) determines the data that displays in the Veracode Platform, the data that Veracode adds to linked applications, and the branch in which Veracode automatically creates issues for newly released vulnerabilities.

## Link Your Projects to an Application Profile

You can [link the projects](https://docs.veracode.com/r/Link_SCA_Projects_to_Applications) you create for Veracode Software Composition Analysis agent-based scans to your Veracode Platform application profiles to enable a unified view of your results for all Veracode scans. You must perform an upload scan to allow Veracode to evaluate the policy status of third-party libraries included in an application profile through a linked project.

## Prioritize Addressing Vulnerable Methods

Projects that use a vulnerable method are calling the specific piece of code that causes a library to be vulnerable, which makes the project particularly vulnerable to attack.

## Search the Veracode Vulnerability Database Before Using a Library

The [Veracode Vulnerability Database](https://docs.veracode.com/r/Explore_the_Veracode_Vulnerability_Database) provides extensive details of the security impact of including open-source libraries in your code.

## Use the REST APIs to View Scan Results

To access immediate, high-level finding details about your agent-based scan workspaces, use the [SCA Agent REST API](https://docs.veracode.com/r/c_sourceclear_intro). For more detailed information about your Veracode SCA findings, link your project to an application profile and use the [Findings REST API](https://docs.veracode.com/r/c_findings_v2_intro).

## Use Agent-Based Scans with Pipeline Scan

[Pipeline Scan](https://docs.veracode.com/r/c_about_pipeline_scan) provides fast feedback on findings introduced on new commits to first-party code. Like Veracode SCA agent-based scans, Pipeline Scan directly embeds into team development pipelines.

## Use Fewer than 100 Projects in a Single Workspace

There is no limit to the number of projects in a workspace, but Veracode recommends using fewer than 100 to avoid causing performance delays. You can create new workspaces with the [SCA Agent REST API](https://docs.veracode.com/r/c_sourceclear_intro) or [in the Veracode Platform](https://docs.veracode.com/r/Create_a_Veracode_SCA_Workspace).

## Troubleshoot Scan Issues from the Command Line

If you encounter errors with the Veracode Software Composition Analysis agent in your pipeline, you can troubleshoot by [scanning locally in your command-line interface](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent). To save time in troubleshooting, include the `--quick` parameter in the [scan command](https://docs.veracode.com/r/Veracode_SCA_Agent_Commands).


---
"ft:title" : "Understanding Deployment Options for Agent-Based Scanning"
"ft:prettyUrl" : "Understanding_Deployment_Options_for_Agent_Based_Scanning"
---

Veracode Software Composition Analysis agent-based scanning is a set of technologies that helps teams use open-source safely while building secure software. The solution integrates transparently into the existing software development process with minimal change or impact. The agent-based scanning platform has a number of options to choose from and each option is designed for specific use cases. A typical deployment consists of a combination of these options, which you can choose to fit your team structure, team process, and existing toolchain.

<p><span style="font-size: medium;">Agent-Based Scanning Web Platforms</span></p>

**Veracode Platform**

In the Veracode Platform, you can analyze the various issues that agent-based scans identify. User accounts in the Veracode Platform are tied to the accounts of their organization.

**Veracode Vulnerability Database**

The Veracode Vulnerability Database is a resource for you to explore the massive Veracode database of open-source libraries along with the growing list of vulnerabilities discovered and curated by Veracode researchers. You can perform searches for specific libraries or vulnerabilities to find details. For more information, see [About the Veracode Vulnerability Database](https://docs.veracode.com/r/About_the_Veracode_Vulnerability_Database).

<p><span style="font-size: medium;">Command-Line Interface</span></p>

The Veracode SCA agent-based scanning command-line interface (CLI) is a tool designed for you to run from your desktop. You can install and run the CLI on [Mac OSX](http://www.apple.com/osx/) or [Linux](https://www.linux.com/), with installation and updates using the [HomeBrew](http://brew.sh/) system on Apple, and [as a downloadable installer](https://docs.veracode.com/r/t_sc_cli_agent) for other operating systems. The CLI is designed for users who want to test their source code locally before pushing it to a continuous integration or continuous delivery platform, or who want to scan their code manually. The CLI reports basic results to standard output, or optionally in JSON format, and generates detailed and customizable results in the Veracode Platform.

In general, if you can build or package a project with default options, the CLI can complete its analysis. If your software has a complex build process or requires advanced configuration, the CLI may not be able to complete its analysis. For example, the CLI may not complete an analysis if it requires access to private repositories and environmental settings to scan. The CLI is a one-time analysis tool that does not automatically re-run when you change source code or rebuild software. You can point the CLI at a Git URL or local Git-based folder on the file system, which then performs a shallow clone of the repository located at the URL, runs a scan, and deletes the cloned repository from your local file system.

-   [Using the Veracode SCA Command-Line Agent](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent)
-   [Using the Veracode SCA Agent](https://docs.veracode.com/r/c_sc_agent_usage)
-   [Using Scan Directives for Agent-Based Scanning](https://docs.veracode.com/r/c_sc_scan_directives)

<p><span style="font-size: medium;">Plugins for Build and Package Managers</span></p>

Veracode SCA agent-based scanning provides plugins for [Maven](https://maven.apache.org/) and [Gradle](https://gradle.org/). These plugins are designed to be run from within the continuous integration or continuous delivery pipeline of your team, or alternatively on local builds on a developer desktop. These plugins typically install and run automatically each time a build job is executed, inheriting directly from the build definition files stored in the team source code management system.

Plugins for build and package managers are designed for teams and individual developers who are familiar with making configuration changes and want full control over their software build process. When used centrally as part of the continuous integration pipeline, the plugins allow teams to check the security quality of their open-source code every time you build code. When used locally, the plugins allow developers to check their local copy of their software for defects before committing changes to the team.

Build and package management plugins must be added to each project implicitly.

-   [Set Up the Maven Plugin](https://docs.veracode.com/r/t_sc_maven)
-   [Set Up the Gradle Plugin](https://docs.veracode.com/r/t_sc_gradle)

<p><span style="font-size: medium;">Plugins for Continuous Integration Servers</span></p>

The continuous integration (CI) server agent runs on your network and plugs into your continuous integration server. Veracode SCA agent-based scanning provides a single cURL command, which pulls down the latest version of the agent and performs a scan for any CI software within a Linux-based environment.

The plugin for CI servers inherits the advantages and disadvantages of the plugins for build and package managers with the added advantage that they report directly into the same reporting and alerting system that already exists in the CI server. There are numerous configuration options for the CI agent, as it uses the same code base as the CLI agent.

-   [Using the Agent-Based Scanning CI Script](https://docs.veracode.com/r/c_sc_ci_script)
-   [Using Scan Directives for Agent-Based Scanning](https://docs.veracode.com/r/c_sc_scan_directives)
-   [Circle CI Installation Instructions](https://docs.veracode.com/r/t_sc_ci_token)
-   [GitLab CI Installation Instructions](https://docs.veracode.com/r/Create_Your_Agent_Based_Scanning_Authentication_Token_for_GitLab_CI)
-   [Travis CI Installation Instructions](https://docs.veracode.com/r/t_sc_travis_token)
-   [Codeship Installation Instructions](https://docs.veracode.com/r/t_sc_codeship_token)
-   [Bitbucket Pipelines Installation Instructions](https://docs.veracode.com/r/t_sc_bitbucket_token)
-   [Atlassian Bamboo Installation Instructions](https://docs.veracode.com/r/t_sc_bamboo_token)
-   [Jenkins Installation Instructions](https://docs.veracode.com/r/c_sc_jenkins_prereq)



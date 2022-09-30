---
"ft:title" : "Scala SCA Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_scala"
---

You can find vulnerabilities in your Scala applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on Scala repositories using the [agent-based scanning command-line interface](https://docs.veracode.com/r/c_sc_agent_usage) or the [CI integrations](https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects).

For packaging instructions for Veracode Static Analysis and Veracode SCA upload scans, see [Packaging Scala Applications](https://docs.veracode.com/r/compilation_scala).

<p font-size="13pt"><b>Before You Begin</b></p>

Scanning a repository which utilizes Scala and SBT requires the ability to assemble the project dependencies within the environment in which you scan the project. This includes these requirements:

- Meet the [requirements for the Veracode SCA agent](https://docs.veracode.com/r/c_sc_agent_usage).
- Have access to the Scala repository.
- Include `build.sbt` in the projects root folder.
- Build the project with SBT version 0.13.16 or later. If you are overriding the version in the `project build.properties` file, ensure the version is set to 0.13.16 or later.
- For Coursier and SBT, be able to successfully run `sbt clean compile` from the root of the project where you perform scans.


<p font-size="13pt"><b>Overview</b></p>

You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA [repositories](https://github.com/srcclr):

```
git clone https://github.com/srcclr/example-sbt  
```


<p font-size="13pt"><b>Steps</b></p>

1. Run the scan command with the [Veracode SCA CLI agent](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent) pointed to the directory of the Scala repository. For example:

    ```
    srcclr scan path/to/{project_folder}
    ```
    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> To scan code repositories hosted in Git, use the <code>--url</code> argument <a href="https://docs.veracode.com/r/Veracode_SCA_Agent_Commands">with the CLI agent</a>.
    </p>

    To view more verbose output during the scan process, you can add the `--loud` argument:

    ```
    srcclr scan path/to/{project_folder} --loud
    ```

<p font-size="13pt"><b>Results</b></p>

The Veracode SCA agent uses the native package managers to identify the dependencies and their versions in your project. When the agent evaluates the open-source libraries in use, it produces a summary of the scan results. This summary includes counts for total libraries used, vulnerable libraries, percentage of third-party code, and a list of the vulnerabilities found.

<p font-size="13pt"><b>Next Steps</b></p>

After completing the scan, you can [view the results](https://docs.veracode.com/r/Viewing_Agent_Based_Scan_Results).

---
"ft:title" : "Run an Agent-Based Scan for Gradle"
"ft:prettyUrl" : "Run_an_Agent_Based_Scan_for_Gradle"
---


<p font-size="13pt"><b>Before You Begin</b></p>

- Meet the [requirements for the Veracode SCA agent](https://docs.veracode.com/r/c_sc_agent_usage).
- Have access to the Gradle repository.
- Use Gradle version 2.13 or later.
- Have the Gradle executable installed in your path or include the `gradlew` wrapper file in the project repository.
- Include the `build.gradle` file in the directory where you perform the scan.
- In `~/.gradle/gradle.properties`, ensure you properly set up any Nexus servers or authentications to successfully compile code.
- Be able to run the `gradle dependencies` command from the root of the project where you perform the scan.

The Veracode SCA agent runs a specific command to identify the dependencies and their versions in your project. You can run this command before scanning to test that the agent can build the project:

```
./gradlew projects classes
```

<p font-size="13pt"><b>Overview</b></p>

You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA [repositories](https://github.com/srcclr):

```
git clone https://github.com/srcclr/example-java-gradle
```

After you add a `srcclr.yml` file to the directory where you point the Veracode SCA agent, you can specify [scan directives](https://docs.veracode.com/r/c_sc_scan_directives) for scanning your Gradle code. [Some scan directives](https://docs.veracode.com/r/Java_Scan_Directives) are specific to Gradle projects.


<p font-size="13pt"><b>Steps</b></p>

1. Run the scan command with the [Veracode SCA CLI agent](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent) pointed to the directory of the Gradle repository. For example:

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

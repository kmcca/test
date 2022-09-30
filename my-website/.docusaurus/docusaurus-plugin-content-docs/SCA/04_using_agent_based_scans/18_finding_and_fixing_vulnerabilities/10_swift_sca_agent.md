---
"ft:title" : "Swift SCA Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_swift"
---

You can find vulnerabilities in your Swift applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on Swift repositories using the [agent-based scanning command-line interface](https://docs.veracode.com/r/c_sc_agent_usage) or the [CI integrations](https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects).

Veracode SCA agent-based scanning supports scanning Swift repositories managed with CocoaPods. It does not support the Swift package manager.

For packaging instructions for Veracode Static Analysis and Veracode SCA upload scans, see [Packaging iOS and tvOS Applications](https://docs.veracode.com/r/compilation_ios).

<p font-size="13pt"><b>Before You Begin</b></p>

Scanning a repository that uses Swift and the CocoaPods package manager requires you to assemble the project dependencies within the environment in which you scan the project. Your environment must:

- Meet the [requirements](https://docs.veracode.com/r/c_sc_agent_usage) for the Veracode SCA agent
- Have access to the Swift repository
- Have a `podfile.lock` file present in the Swift repository
  - If `podfile.lock` does not exist in the project root where you perform scans, you must be able to run the `pod install` command from the project root.

<p font-size="13pt"><b>Overview</b></p>

You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA [repositories](https://github.com/srcclr):

```
git clone https://github.com/srcclr/example-swift-cocoapods
```


<p font-size="13pt"><b>Steps</b></p>

1. Run the scan command with the [Veracode SCA CLI agent](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent) pointed to the directory of the Swift repository. For example:

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


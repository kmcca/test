---
"ft:title" : "C/C++ SCA Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_ccpp"
---


You can find vulnerabilities in your C/C++ applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on C/C++ repositories using the [agent-based scanning command-line interface](https://docs.veracode.com/r/c_sc_agent_usage) or the [CI integrations](https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects).

For packaging instructions for Veracode Static Analysis, see [Packaging C/C++ Applications on Linux and Solaris](https://docs.veracode.com/r/compilation_nix) or [Packaging C/C++ Applications on Windows](https://docs.veracode.com/r/compilation_winccpp).

Veracode SCA agent-based scanning support for native Linux C/C++ libraries is limited to scans of projects compiled with the Make build tool that you complete with the Linux CLI agent or a CI integration. If you use Windows or MacOS, you must have Docker installed to enable [container scanning](https://docs.veracode.com/r/c_sc_container_scan).

Agent-based scans can identify additional C/C++ libraries if they appear in [supported package managers](https://docs.veracode.com/r/c_sc_supported_lang). See the list of native Linux C/C++ [libraries](https://www.sourceclear.com/vulnerability-database/search#query=type:library%20language:cpp) and [vulnerabilities](https://www.sourceclear.com/vulnerability-database/search#query=type:vulnerability%20language:cpp) that Veracode SCA monitors.

<p font-size="13pt"><b>Before You Begin</b></p>

Scanning a repository that uses Swift and the CocoaPods package manager requires you to assemble the project dependencies within the environment in which you scan the project. Your environment must:

- Meet the [requirements](https://docs.veracode.com/r/c_sc_agent_usage) for the Veracode SCA agent
- Have access to the Swift repository
- Have SO files present in the C/C++ repository
- If using Windows or MacOS, have Docker installed

Additionally, your project must include a makefile that has:

-   One of these filenames: `GNUmakefile`, `makefile`, or `Makefile`. Veracode SCA searches for these filenames, in this listed order, and identifies the first one it finds to be the project makefile.
-   One of these strings: `gcc`, `g++`, `clang`, `CMAKE`, or `CMake`.
-   A clean target. Veracode SCA uses the clean target to collect findings. To configure a custom clean target for agent-based scanning, add this argument to your project as an environment
    variable:

    ```
    SRCCLR_MAKE_CLEAN_TARGET='{custom_clean_target_name}'
    ```

-   A first target. Veracode SCA uses the first target to build the project and to rebuild the project after it collects findings. To configure a custom first target for agent-based scanning, add this argument to your project as an
    environment variable:

    ```
    SRCCLR_MAKE_BUILD_TARGET='{custom_build_target_name}'
    ```

<p font-size="13pt"><b>Overview</b></p>

You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA [repositories](https://github.com/srcclr):

```
git clone https://github.com/srcclr/example-cpp-makefile
```


<p font-size="13pt"><b>Steps</b></p>

1. Run the scan command with the [Veracode SCA CLI agent](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent) pointed to the directory of the C/C++ repository. For example:

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


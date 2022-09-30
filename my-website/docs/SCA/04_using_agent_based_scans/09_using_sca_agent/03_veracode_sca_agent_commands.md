---
"ft:title" : "Veracode SCA Agent Commands"
"ft:prettyUrl" : "Veracode_SCA_Agent_Commands"
---


This section lists the primary commands you can use with the Veracode Software Composition Analysis (SCA) agent, as well as arguments you can add to alter the functionality of each command.

**`activate`**

Description: activates your Veracode SCA agent with an initialization token and installs an `agent.yml` file to a directory of your choosing.

Example: `$ srcclr activate`

You can activate multiple agents on a single machine. In the instance where you are activating a second agent, you will be asked to enter a profile name. This allows the user to identify the agent key with which they are scanning. A suggestion for a profile name is the name of the Workspace associated with the agent.

**`scan`**

Description: performs a scan of a supported code repository, outputting vulnerability information for libraries in usage and optionally uploads information to the Veracode Platform. When scanning with an organization-level agent, append a workspace flag and slug after the scan command.

Syntax: you must perform the `scan` command in the correct syntax for your command tool:

-   CLI:
    -   Workspace agent:

        ```
        $ srcclr scan --url https://github.com/srcclr/test-java-maven --{parameter-1} --{parameter-2}
        ```

    -   Organization-level agent:

        ```
        $ srcclr scan --url https://github.com/srcclr/test-java-maven --ws={workspace slug} --{parameter-1} --{parameter-2}
        ```

-   cURL:
    -   Workspace agent:

        ```
        curl -sSL https://download.sourceclear.com/ci.sh | sh -s scan --{parameter-1} --{parameter-2}
        ```

    -   Organization-level agent:

        ```
        curl -sSL https://download.sourceclear.com/ci.sh | sh -s scan --ws={workspace slug} --{parameter-1} --{parameter-2}
        ```


Options:

- `--ws=`: scan using an organization-level agent into a specific workspace. For more information, see [About Veracode SCA Agent Management](https://docs.veracode.com/r/c_sc_agent_management).
- `--json`: output the scan results in JSON format. Add `={filepath}` to send the pure JSON output to a specific file. See [Scan Exports](https://docs.veracode.com/r/c_sc_agent_json) for details on output.
    -   Example: `$ srcclr scan --json=/my/project`
- `--no-graphs`: do not include dependency graphs in the JSON output.
- `--allow-dirty`: allow scans on repositories which contain differences that are not committed to the project.
- `--install-first`: run the install target of your project before analyzing.
- `--unmatched`: show coordinates for all unmatched libraries. Unmatched libraries are typically proprietary and unreleased versions of libraries.
- `--skip-compile`: Java only. Do not compile the project before analyzing.
- `--loud`: show raw build output.
- `--no-upload`: prevent scan results from being uploaded to the Veracode Platform.
- `--do-not-collect`: specify which information to not collect from git commit logs. Only supports the default value, `emails`.
- `--quick`: perform a quick scan which does not require build tools. A lockfile is required.
- `--uri-as-name`: use the exact source code management (SCM) URI as the project name.  
- `--uri-as-name`: use the exact source code management (SCM) URI as the project name.  
- `--url`: specify a remote Git URL to scan.
- `--recursive`: perform a recursive scan on a directory structure.
- `--ref`: use with `--url` to specify a branch or tag name to scan the specified branch or tag.

    - Example:

        ```
        $ srcclr scan --url https://github.com/srcclr/test-java-maven --ref
                  1.0.0
        ```

- `--scan-collectors`: specify which build types to scan, rather than scanning all discovered build systems by default. Configuration options are: 
   
    - `pip`
    - `pipenv`
    - `maven`
    - `gradle`
    - `npm`
    - `gem`
    - `ant`
    - `bower`
    - `jar`
    - `yarn`
    - `cocoapods`
    - `sbt`
    - `"sbt coursier"`
    - `"go get"`
    - `"go mod"`
    - `godep`
    - `dep`
    - `govendor`
    - `glide`
    - `trash`
    - `composer`
    - `MSBuildDotNet`
    - `makefile`
    - `dll`

    When you use `--scan-collectors` with the `--quick` option, the configuration options are:
   
    - `"bower quickscan"`
    - `"composer quickscan"`
    - `"dll quickscan"`
    - `"gemfile.lock quickscan"`
    - `"glide quickscan"`
    - `"godeps quickscan"`
    - `"dep quickscan"`
    - `"go mod quickscan"`
    - `"govendor quickscan"`
    - `"jar quickscan"`
    - `"npm quickscan"`
    - `"node_modules quickscan"`
    - `"pipfile.lock quickscan"`
    - `"podfile.lock quickscan"`
    - `"trash quickscan"`
    - `"yarn quickscan"`
    - `"sofile quickscan"`

    - Example:

          ```
          $ srcclr scan /my/project --scan-collectors “maven,
                gradle”
          ```

- `--skip-collectors`: specify which build types to skip during the scan, rather than scanning all discovered build systems by default. Configuration options are: `pip`, `maven`, `gradle`, `npm`, `gem`, `ant`, `bower`, `jar`, `yarn`, `cocoapods`, `sbt`, `"go get"`, `godep`, `govendor`, `glide`, `ivy`, `trash`, `composer`, `MSBuildDotNet`.


    - `pip`
    - `pipenv`
    - `maven`
    - `gradle`
    - `npm`
    - `gem`
    - `ant`
    - `bower`
    - `jar`
    - `yarn`
    - `cocoapods`
    - `sbt`
    - `"sbt coursier"`
    - `"go get"`
    - `"go mod"`
    - `godep`
    - `dep`
    - `govendor`
    - `glide`
    - `trash`
    - `composer`
    - `MSBuildDotNet`
    - `makefile`
    - `dll`
    - `sofile`

    When you use `--skip-collectors` with the `--quick` option, the configuration options are:
   
    - `"bower quickscan"`
    - `"composer quickscan"`
    - `"dll quickscan"`
    - `"gemfile.lock quickscan"`
    - `"glide quickscan"`
    - `"godeps quickscan"`
    - `"dep quickscan"`
    - `"go mod quickscan"`
    - `"govendor quickscan"`
    - `"jar quickscan"`
    - `"npm quickscan"`
    - `"node_modules quickscan"`
    - `"pipfile.lock quickscan"`
    - `"podfile.lock quickscan"`
    - `"trash quickscan"`
    - `"yarn quickscan"`
    - `"sofile quickscan"`

    - Example:

          ```
          $ srcclr scan /my/project --skip-collectors "ant, pip"
          ```

- `--skip-vms`: specify whether to skip vulnerable methods analysis in your repository scan.

    -   Example: `$ srcclr scan /my/project --skip-vms`

- `--scan-analyzers`: for container scans, specify which build types to scan, instead of scanning all discovered build tools. Configuration options are: `yum`, `alpine`, `gem`, `pip2`, `pip3`, `npm`.

    -   Example:

        ```
        $ srcclr scan /my/project --scan-analyzers “yum, alpine”
        ```

- `--skip-analyzers`: for container scans, specify which build types to skip during the scan, instead of scanning all discovered build tools. Configuration options are: `yum`, `alpine`, `gem`, `pip2`, `pip3`, `npm`.
    -   Example:

        ```
        $ srcclr scan /my/project --skip-analyzers “yum, alpine”
        ```

The Veracode SCA agent also supports scans that include per-scan directives known as scan directives. You can specify scan directives on a per-project basis by placing a `srcclr.yml` file at the root of the scan.

Here is an example of a `srcclr.yml`:

```
    scope: testCompile
    gradle_location: ../gradlew
    gradle_tasks: clean classes
    skip_collectors: gem
```
This example indicates that we only wish to include dependencies that are in the `testCompile` scope, or a scope from which `testCompile` inherits. It specifies that the `gradlew` file exists in the parent folder, and that we should execute using the `clean` and `classes` tasks. Last, it specifies that even though a Gemfile might exist in the repository directory, the agent should skip that particular build system. For details on all the scan directives, see [Using Scan Directives for Agent-Based Scanning](https://docs.veracode.com/r/c_sc_scan_directives).

**`debug`**

Description: enables the debug mode on the Veracode SCA agent. This outputs additional information for identifying issues encountered when scanning.

Example: `$ srcclr scan --debug`

**`test`**

Description: test the environment in which the agent is installed and verify that all requirements for completing a scan for the specified package manager are present.

Options:

-   `--ant`: perform an ANT-based test clone and scan operation.
-   `--bower`: perform a BOWER-based test clone and scan operation.
-   `--cocoapods`: perform a COCOAPODS-based test clone and scan operation.
-   `--composer`: perform a COMPOSER-based test clone and scan operation.
-   `--gem`: perform a GEM-based test clone and scan operation.
-   `--glide`: perform a GLIDE-based test clone and scan operation.
-   `--go`: perform a GO GET-based test clone and scan operation.
-   `--godep`: perform a GODEP-based test clone and scan operation.
-   `--govendor`: perform a GOVENDOR-based test clone and scan operation.
-   `--gradle`: perform a GRADLE-based test clone and scan operation.
-   `--ivy`: perform a IVY-based test clone and scan operation.
-   `--maven`: perform a MAVEN-based test clone and scan operation.
-   `--npm`: perform a NPM-based test clone and scan operation.
-   `--pip`: perform a PIP-based test clone and scan operation.
-   `--sbt`: perform a SBT-based test clone and scan operation.
-   `--trash`: perform a TRASH-based test clone and scan operation.
-   `--yarn`: perform a YARN-based test clone and scan operation.
-   `--nuget`: perform a NUGET-based test clone and scan operation.

Example: `$ srcclr test --npm`

**`config`**

Description: allows the user to list values from their `agent.yml` file.

Options:

-   `--get`: display a single configuration value
-   `--list`: display the configuration in its entirety

Example: `$ srcclr config --list`

**`lookup`**

Description: use the agent to look up the release and vulnerability information found in the SCA Vulnerability Database for a single library.

Options:

-   `--json`: required. Output the lookup results in JSON format. This is the only available output format of the `lookup` verb. See [About Veracode SCA Agent JSON Schema](https://docs.veracode.com/r/c_sc_agent_json) for details on output.
-   `--coord1`: the primary library name in all cases except for `type=maven`, where the first coordinate identifies the `groupId` in Maven nomenclature. The case sensitivity of the `coord1` depends on whether the underlying registry distinguishes packages by case. PyPI, for example, is not case-sensitive while Maven is case-sensitive. In the case of Go libraries, `coord1` should be the domain and top-level package name. For example: `github.com/docker/docker`
-   `--coord2`: optional, but required for Maven. If you include `type=maven`, this specifies the `artifactId` of the library to lookup.
-   `--platform`: optional. Specify the target platform of a library located in the registry, such as `freebsd` or `py3`, depending on the package and registry used.
-   `--type`: the type of registry that contains the library one is going to specify using the `coord` options. Acceptable values are displayed in lookup `--help` and are as follows:

    -   `gem` to identify a Ruby Gem dependency as one would find on `rubygems.org`
    -   `maven` to identify a Maven dependency as one would find on `repo.maven.apache.org`
    -   `npm` to identify a JavaScript dependency as one would find on `npmjs.com`
    -   `pypi` to identify a Python dependency as one would find on `pypi.python.org`
    -   `cocoapods` to identify a CocoaPods dependency as one would find on `cocoapods.org`
    -   `go` to identify a Go dependency as one would find on the common Go repositories such as `github.com`, `bitbucket.org`, `gopkg.in`, `golang.org`
    -   `packagist` to identify a PHP dependency as one would find on `packgist.org`
    -   `nuget` to identify a .NET dependency as one would find on `nuget.org`
-   `--version` - The version number, as specified in the registry that you identify with the `--type` parameter, of the library to lookup. For Go, the `version` can be:

    -   A release tag in the library repository
    -   A prefix of a commit hash of at least seven digits
    -   In `v0.0.0-{datetime}-{hash}` format

Example:

```
$ srcclr lookup --type=maven --coord1=org.springframework --coord2=spring-core \
                --version=4.1.0.RELEASE --json

```

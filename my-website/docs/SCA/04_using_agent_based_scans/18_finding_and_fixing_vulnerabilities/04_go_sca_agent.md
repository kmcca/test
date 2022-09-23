---
"ft:title" : "Go SCA Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_go"
---

You can find vulnerabilities in your Go applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on Glide, go get, Go modules, Godep, Govendor, and Trash repositories using the [agent-based scanning command-line interface](https://docs.veracode.com/r/c_sc_agent_usage) or the [CI integrations](https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects).

For packaging instructions for Veracode Static Analysis and Veracode SCA upload scans, see [Packaging Go Applications](https://docs.veracode.com/r/compilation_go).

<p font-size="13pt"><b>Before You Begin</b></p>

Scanning a repository that uses Go and one of its build or package managers requires the ability to assemble the project dependencies within the environment in which you scan the project. This includes these requirements:

- Meet the [requirements for the Veracode SCA agent](https://docs.veracode.com/r/c_sc_agent_usage).
- Have access to the Go repository.
- Use Go version 1.5 or later.
- Ensure that the project can build in the environment where the agent performs scans.
- Ensure that the `GOROOT` and `GOPATH` environment variables are set to the correct directories, and that the bin subdirectory of `GOROOT` is included in the PATH environment variable. For example, if `GOROOT` is set to `/usr/local/go`, you should include `/usr/local/go/bin` in your PATH. See the [Go documentation](https://golang.org/doc/code.html) for more information on configuring Go projects.
- If you use Godep, Govendor, Glide, or Trash, ensure the package manager is installed.
- For these tools, meet the specified requirement:
    -   Glide: include the `Glide.lock` file
    -   Go get: use Go version 1.5–1.15
    -   Go modules: run the `'go list -m all'` command
    -   Godep: include the `Godeps/Godeps.json` file
    -   Golangdep: include the `Gopkg.lock` file
    -   Govendor: include the `vendor/vendor.json` file
    -   Trash: include the `vendor.conf` file

If you set `FORCE_GO_INSTALL` to `true` as a [scan directive](https://docs.veracode.com/r/c_sc_scan_directives) or [environment variable](https://docs.veracode.com/r/Veracode_SCA_Agent_Environment_Variables) or use the `--url` argument, the Veracode SCA agent runs specific commands to identify the dependencies and their versions in your project. You can run these commands before scanning to test that the agent can build the project:

- Glide: `glide install`
- Go get: `go get -d ./...`
- Godep: `godep restore`
- Govendor: `govendor sync`
- Trash: `trash`


<p font-size="13pt"><b>Overview</b></p>

You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA [repositories](https://github.com/srcclr):

- Glide: `git clone https://github.com/srcclr/example-go-glide`
- Go Get: `git clone https://github.com/srcclr/example-go-goget`
- Go Modules: `git clone https://github.com/srcclr/example-go-modules`
- Godep: `git clone https://github.com/srcclr/example-go-godep`
- Govendor: `git clone https://github.com/srcclr/example-go-govendor`
- Trash: `git clone https://github.com/srcclr/example-go-trash`

After you add a `srcclr.yml` file to the directory where you point the Veracode SCA agent, you can specify [scan directives](https://docs.veracode.com/r/c_sc_scan_directives) for scanning your .NET code. [Some scan directives](https://docs.veracode.com/r/Go_Scan_Directives) are specific to Go projects.


<p font-size="13pt"><b>Steps</b></p>

1. Run the scan command with the [Veracode SCA CLI agent](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent) pointed to the directory of the Go repository. For example:

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

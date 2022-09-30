---
"ft:title" : "Using the Agent-Based Scanning CI Script"
"ft:prettyUrl" : "c_sc_ci_script"
---

You can add commands and environment variables to the script in your continuous integration tool to customize your Veracode Software Composition Analysis agent-based scans.

For all CI scripts, you must set the `SRCCLR_API_TOKEN` environment variable to successfully authenticate for scanning.

<p><span style="font-size: medium;">Custom Veracode SCA Agent Commands</span></p>

The default functionality of the CI script used in the `curl -sSL https://download.sourceclear.com/ci.sh | sh` command is to run the `srcclr scan` agent command in the current directory. Users can optionally specify their own custom command by appending `-s -- {agent_commands}` to the curl command. These examples use customized agent-based scanning commands with the CI script:

The CLI equivalent of:

```
srcclr test --maven
```

```

curl -sSL  https://download.sourceclear.com/ci.sh | sh -s -- test --maven
```

The CLI equivalent of:

```
srcclr scan --url https://github.com/srcclr/example-ruby --no-upload
```

```
curl -sSL  https://download.sourceclear.com/ci.sh | sh -s -- scan --url https://github.com/srcclr/example-ruby --no-upload
```

<p><span style="font-size: medium;">Environment Variables</span></p>

You can use these environment variables in the scanning environment to enable various features when scanning in your development pipeline with this shell command: `curl -sSL https://download.sourceclear.com/ci.sh | sh`.

**DEBUG**

Description: When enabled, provides more verbose output during the scan. The default is `0`, which disables the variable.

Possible Values: `0` to disable, `1` to enable

Example:


```
curl -sSL  https://download.sourceclear.com/ci.sh | DEBUG=1 sh
```

OR

```
export DEBUG=1
curl -sSL  https://download.sourceclear.com/ci.sh | sh
```

**NOCACHE**

Description: When enabled, the Veracode SCA agent is not cached when the curl command is run. The default is `0`, which disables the variable.

Possible Values: `0` to disable, `1` to enable

Example:

```
curl -sSL  https://download.sourceclear.com/ci.sh | NOCACHE=1 sh
```

OR

```
export NOCACHE=1
curl -sSL  https://download.sourceclear.com/ci.sh | sh
```

**CACHE_DIR**

Description: Allows the user to specify which directory location to store the Veracode SCA agent. The default value for this is the `/tmp` directory.

Example:

```
curl -sSL  https://download.sourceclear.com/ci.sh | CACHE_DIR="/home/applications" sh
```

OR

```
export CACHE_DIR="/home/applications"
curl -sSL  https://download.sourceclear.com/ci.sh | sh
```

**NOSCAN**

Description: When enabled, the Veracode SCA agent does not perform a scan on the repository. The default is `0`, which disables the variable.

Possible Values: `0` to disable, `1` to enable

Example:

```
curl -sSL  https://download.sourceclear.com/ci.sh | NOSCAN=1 sh
```

OR

```
export NOSCAN=1
curl -sSL  https://download.sourceclear.com/ci.sh | sh
```

**SCAN_DIR**

Description: Allows the user to specify which directory location to scan. The default value for is the directory from which the curl command runs.

Example:

```
curl -sSL  https://download.sourceclear.com/ci.sh | SCAN_DIR="./path/to/dir" sh
```

OR

```
export SCAN_DIR="./path/to/dir"
curl -sSL  https://download.sourceclear.com/ci.sh | sh
```

**SRCCLR_CI_JSON**

Description: When enabled, the Veracode SCA agent outputs the scan results in JSON format. The default is `0`, which disables the variable.

Possible Values: `0` to disable, `1` to enable

Example:

```
curl -sSL  https://download.sourceclear.com/ci.sh | SRCCLR_CI_JSON=1 sh
```

OR

```
export SRCCLR_CI_JSON=1
curl -sSL  https://download.sourceclear.com/ci.sh | sh
```

**CUSTOM_JRE_DIR**

Description: Allows the user to specify which JRE to use for the Veracode SCA agent. The default functionality for agent-based scanning is to provide supported JREs for both Debian-based and OS X operating systems. Specifying this value enables other operating systems to utilize agent-based scanning.

Example:

```
curl -sSL  https://download.sourceclear.com/ci.sh | CUSTOM_JRE_DIR=/opt/jdk/jre/lib/amd64 sh
```

OR

```
export CUSTOM_JRE_DIR=/opt/jdk/jre/lib/amd64
curl -sSL  https://download.sourceclear.com/ci.sh | sh
```


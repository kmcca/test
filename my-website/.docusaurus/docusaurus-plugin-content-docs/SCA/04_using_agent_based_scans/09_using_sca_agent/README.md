---
"author": ["Kevin McCarthy"]
"ft:lang": "en-US"
"ft:title" : "Using the Veracode SCA Agent"
"ft:prettyUrl" : "c_sc_agent_usage"
"media_dir": "images/"
---
<p><span style="font-size: medium;">Requirements</span></p>

Scanning a repository that uses Java and one of its build or package managers requires the ability to build the code within the environment in which you scan the project. Your environment must meet these requirements:

-   One of these operating systems:
    -   macOS
    -   Windows 7 or later with Powershell 3 or later
    -   64-bit Linux. Veracode Software Composition Analysis agent-based scanning supports these Linux distributions:
        -   Alpine 3.11 or later
        -   Debian 9 or later
        -   Ubuntu 18.04 or later
        -   Fedora 19 or later
        -   RHEL/CentOS 7 or later
-   Outbound connections to these URLs:
    -   https://api.sourceclear.io
    -   https://download.sourceclear.com
    -   https://sca.analysiscenter.veracode.com
-   Git 1.9.3 or later
-   If your code repository is not a [Git-based](https://git-scm.com/) repository, you need to set up the appropriate environment variables as described in [Use the Agent with an SCM Other than Git](https://docs.veracode.com/r/c_sc_scm).
-   Scanning with the [agent-based scanning command-line interface](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent) requires Java 1.8 or higher.
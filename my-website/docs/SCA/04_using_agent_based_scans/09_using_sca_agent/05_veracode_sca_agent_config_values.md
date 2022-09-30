---
"ft:title" : "Veracode SCA Agent Configuration Values"
"ft:prettyUrl" : "Veracode_SCA_Agent_Configuration_Values"
---

You configure these key names for agent-based scanning in the `agent.yml` file, which is created when you activate the Veracode Software Composition Analysis (SCA) agent.

-   `agentAuthorization` - (Required) Bearer token used to authenticate agent-based scanning API calls.

-   `maxErrorLines` - The maximum number of lines of build error messages that the CLI transmits to the agent-based scanning API when reporting a build failure.

-   `proxyType` - One of the strings `HTTP` or `SOCKS` which will indicate the kind of proxy the Agent should use when connecting to `proxyHost` and `proxyPort`.

-   `proxyHost` - The IP or hostname that the Agent should use for proxy communication.

-   `proxyPort` - The integer value of the port on the IP or hostname specified in `proxyHost`.

-   `proxyUsername` - The username that the agent uses to authenticate against the proxy specified by `proxyHost` and `proxyPort`.

-   `proxyPassword` - The password that the agent uses to authenticate against the proxy specified by `proxyHost` and `proxyPort`.

-   `skipVersionCheck` - A boolean which determines whether the agent attempts to check for the latest version.

-   `scmType` - One of the following supported source code management systems: `GITHUB`, `GITHUBENTERPRISE`, `GIT`, `STASH`

-   `scmToken` - A GitHub or GitHub Enterprise API token which may also be used to clone private repos

-   `scmUrl` - The endpoint used to communicate with the API of your source code management system.

-   `scmUsername` - Used to authenticate the `scmUrl` above.

-   `scmPassword` - Password associated with the `scmUsername`
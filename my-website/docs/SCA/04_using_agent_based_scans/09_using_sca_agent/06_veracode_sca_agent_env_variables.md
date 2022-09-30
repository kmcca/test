---
"ft:title" : "Veracode SCA Agent Environment Variables"
"ft:prettyUrl" : "Veracode_SCA_Agent_Environment_Variables"
---

The Veracode Software Composition Analysis (SCA) agent can read from these environment variables instead of variables set in the `agent.yml` file.

-   `SRCCLR_API_TOKEN` - Provides an alternate means of supplying the `agentAuthorization` token required to use the agent-based scanning API. If present, this variable supersedes the configuration file.

-   `JAVA_OPTS` - Permits altering the behavio, or system properties, of the underlying Java runtime system that is used by the `srcclr` command.

-   `VIRTUALENV_PYTHON` - Specifies which Python interpreter version virtualenv uses when creating a virtual Python environment. The default value is the interpreter version used to install virtualenv on your machine.
-   `SRCCLR_CONFIG` - Provides an explicit means of specifying the agent-based scanning configuration file location. If this variable is populated, the program will use that path in addition to the system and user locations, but is still subject to override by the `--config` command line flag. If it is populated but points to an invalid path, the program halts in error.

-   `https_proxy` or `http_proxy` - If you set either of these values and they contain a URL that points to a proxy which speaks the HTTP proxy protocol, the agent uses them for outbound HTTP requests, just as curl and git behave. Also like the other programs, the agent accepts inline credentials in the URL, such as `http://myUser:S3cr3t@proxy.example.com`. If the URL does not contain an explicit port, the traditional ports for the protocol of the URL are implicitly inserted: `80` for `http://` and `443` for `https://`. Unlike those other programs, the agent accepts either environment variable name (`https_proxy` or `http_proxy`) and uses that proxy information for all HTTP requests. Be aware that proxy values in any configuration file provided to the agent, the default location or values provided by `–config` supersede any proxy specification in these environment variables.

You can also use [scan directives](https://docs.veracode.com/r/c_sc_scan_directives) as environment variables in your CI configuration by adding `SRCCLR_` before the directive name and changing the directive name to be all uppercase. For example:

```
export SRCCLR_SCAN_COLLECTORS=pip
```
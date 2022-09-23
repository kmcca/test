---
"ft:title" : "Enable Agent-Based Scanning Behind a Proxy"
"ft:prettyUrl" : "t_sc_agent_proxy"
---

If you use the Veracode Software Composition Analysis agent with a CI tool that is behind a proxy, you must establish communication between the agent and your proxy server.

<p font-size="13pt"><b>Before You Begin</b></p>

If your proxy performs TLS interception, you must provide the certificate chain to the agent.

<p font-size="13pt"><b>Steps</b></p>

1.  To make the Java virtual machine (JVM) aware of the root certificate, run the appropriate command for your operating system:

    -   Linux or Mac:

        ```
        export SRCCLR_SSL_CERT_FILE="/path to certificate file/"
        ```

    -   Windows PowerShell:

        ```
        $env:SRCCLR_SSL_CERT_FILE='/path to certificate file/'
        ```

2.  To make the agent aware of the proxy, make one of these configurations:

    -   Set the `https_proxy` [environment variable](https://docs.veracode.com/r/Veracode_SCA_Agent_Environment_Variables) containing a URL that points to the proxy server. For example:
        -   Linux or Mac:

            ```
            export https_proxy="http://127.0.0.1:8080"
            ```

        -   Windows Powershell:

            ```
            $env:https_proxy='http://127.0.0.1:8080'
            ```

    -   Set the [agent configuration values](https://docs.veracode.com/r/Veracode_SCA_Agent_Configuration_Values) relevant to proxy identification and authentication, such as `proxyHost` and `proxyPort`, in `~.srcclragent.yml` or in another YML configuration file defined with the [`--config=` option](https://docs.veracode.com/r/Veracode_SCA_Agent_Commands).

        For example, include `proxyHost: 127.0.0.1` and `proxyPort: 8080` in `~/.srcclr/agent.yml`.

3.  To complete the connection, run the appropriate command to establish communication between the agent and the proxy server. For example:

    -   Linux or Mac:

        ```
        curl -sSL https://download.sourceclear.com/ci.sh | env DEBUG=1 SRCCLR_SSL_CERT_FILE="/path to certificate file/" bash -s scan --skip-collectors "ant,npm"
        ```

    -   Windows PowerShell:

        ```
        $Client = New-Object -TypeName System.Net.WebClient
        $Client.Proxy.Credentials = [System.Net.CredentialCache]::DefaultNetworkCredentials
        $Script = $Client.DownloadString('https://download.sourceclear.com/ci.ps1')
        Invoke-Command -ScriptBlock ([scriptblock]::Create($Script)) -ArgumentList @('scan', '--skip-collectors', 'ant,npm')
        ```

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>If you do not use the `https_proxy` environment variable or set `proxyHost` and `proxyPort` in `~/.srcclr/agent.yml`, you must include `'--config=/path to configuration file/'` in this command.
</p>



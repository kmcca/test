---
"ft:title" : "ISM Endpoint Release History"
"ft:prettyUrl" : "c_ism_endpoint_history"
---

View the list of changes included in the latest versions of the Veracode Internal Scanning Management endpoint.

If you are logged in to the Veracode Platform, you can [download the installer](https://docs.veracode.com/r/c_endpoint_installer) to update your endpoint to the latest version.

<p><span style="font-size: medium;">22.1.10 - Released on January 25, 2022</span></p>

-   Endpoint upgraded to Log4j 2.17.1 to address security findings.
-   Improved thread management for connection stability.
-   Advanced memory usage diagnostics.

<p><span style="font-size: medium;">21.12.13 - Released on December 21, 2021</span></p>

-   Endpoint upgraded to Log4j 2.17 to address known vulnerabilities CVE-2021-44228 and CVE-2021-45046.
-   Additional libraries upgraded to address security findings.

<p><span style="font-size: medium;">20.8.5 - Released on August 10, 2020</span></p>

-   Endpoint now supports not resolving the hostname when accessing the ISM gateway via proxy. This support enables you to only allow the gateway hostname for outbound HTTPS calls.
-   Endpoint now supports not resolving the hostname when accessing scanned URLs via proxy. This support simplifies proxy configuration if you do not want to access external sites, such as Okta, during the scan.
-   Improved interface for configuring a proxy for the endpoint installer.
-   Endpoint installer supports configuring hostname resolution properties.
-   Java WebSocket library for the endpoint upgraded to version 1.5.1.
-   Endpoint supports specifying non-default network interface via endpoint properties, including the option to see a list of available network interfaces.
-   Endpoint process name on Linux includes a Veracode identifier.
-   Improved endpoint logging.

<p><span style="font-size: medium;">20.3.5 - Released on March 9, 2020</span></p>

-   Endpoint installer supports client-side Java and 32-bit Java.
-   Endpoint installer supports proxy gateway-only property.
-   Endpoint supports running diagnostics through a DSE tunnel.
-   Endpoint supports new advanced diagnostics options.
-   Consolidated direct diagnostic options and diagnostics options that run through a DSE tunnel.
-   The ISM service from the Windows installer runs under the less privileged LocalService account instead of LocalSystem.
-   Proxy configuration in the installer no longer requires web access to `veracode.com`.
-   Resolved issue with property merge in the endpoint installer.
-   Improved endpoint memory management and `out of memory` protection.


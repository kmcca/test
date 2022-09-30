---
"ft:title" : "Manually Install an Endpoint"
"ft:prettyUrl" : "t_configure_endpoint_manual"
---

If you are running your endpoint on a machine other than Windows or Linux, or you choose not to use the ISM endpoint installer, you can manually install the endpoint.

<p font-size="13pt"><b>Overview</b></p>

These steps continue from either [step 6 of Configure Internal Scanning](https://docs.veracode.com/r/t_configure_gateway) or [step 6 of Add Endpoint to Gateway](https://docs.veracode.com/r/t_create_endpoint). Refer to those sections for the previous steps of this process.

<p font-size="13pt"><b>Steps</b></p>

1.  Click **Download** to download the ZIP file containing the endpoint.

2.  Move the ZIP file to a machine behind your firewall with access to your internal applications.

3.  Extract the ZIP file.

4.  Start the endpoint JAR file from the command line with the appropriate commands for your proxy configuration. You can also copy these commands from the Set Up Your Environment screen:

    -   If you are not using a web proxy to access the internet:

        ```
        java -jar Veracode_ISM_Endpoint_[yourendpointname].jar
        ```

    -   If you are using an unauthenticated web proxy:

        ```
        java -Dhttps.proxyHost=[your_proxy_host] -Dhttps.proxyPort=[your_proxy_port] -jar Veracode_ISM_Endpoint_[yourendpointname].jar 
        ```

    -   If you are using an authenticated web proxy, launch the endpoint:

        ```
        java -Dhttps.proxyHost=[your_proxy_host] -Dhttps.proxyPort=[your_proxy_port] -jar Veracode_ISM_Endpoint_[yourendpointname].jar --authenticate
        ```

        After launching the endpoint for an authenticated web proxy, run the endpoint:

        ```
        java -Dhttps.proxyHost=[your_proxy_host] -Dhttps.proxyPort=[your_proxy_port] -jar Veracode_ISM_Endpoint_[yourendpointname].jar
        ```

5.  Click **Close**.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> Ensure you deploy the endpoint to a location accessible to the applications you want to scan. If the applications cannot access the endpoint, the Dynamic Analysis scans for those applications fail.
    </p>

    The gateway and endpoint you created now appear on the Internal Scanning Management page.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If the endpoint fails to connect to the gateway, your organization may need to add the gateway IP address or domain name to your allowlist. The IP address and domain are visible from the Internal Scanning Management page and the gateway page.
</p>

<p font-size="13pt"><b>Results</b></p>

The gateway may have a status of Initializing for a few minutes after you create it. The endpoint has a status of Pending until you successfully deploy it. When you successfully deploy the endpoint, it has a status of Ready.

<p font-size="13pt"><b>Next Steps</b></p>

After you have created the gateway, started the endpoint, and tested the gateway connection, you can [configure a Veracode Dynamic Analysis](https://docs.veracode.com/r/c_was_configure) for internal scanning.

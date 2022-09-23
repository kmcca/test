---
"ft:title" : "Configure Internal Scanning"
"ft:prettyUrl" : "t_configure_gateway"
---

Your Veracode Internal Scanning Management \(ISM\) configuration consists of a gateway that is the access point to the Veracode cloud and endpoints, which connect Veracode to your internal applications.

<p font-size="13pt"><b>Before You Begin</b></p>

Before you install an endpoint on a machine, verify that the machine can reach the URLs you want to scan. Open the URLs in a web browser and, if the machine cannot connect to the URLs, ask your IT administrator to enable the connection.

<p font-size="13pt"><b>Overview</b></p>

Veracode recommends that you create only one gateway.

<p font-size="13pt"><b>Steps</b></p>

1.  From the gear icon menu ![](images/gear_icon_platform.png) at the top of the Veracode Platform, click **Internal Scanning Management**.

2.  Click **Configure Internal Scanning**.

3.  Enter the name and description of the gateway. Then, click **Next**.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> ISM only supports ASCII characters, not UTF-8, for the names and descriptions of gateways and endpoints.
</p> 

4. Enter the name and description of the endpoint you want to connect to this gateway.

5. Select the platform of the machine running the endpoint. If you do not use Windows or Linux, select **Other** to perform a manual endpoint installation.

    If you select **Other**, go directly to [Manually Install an Endpoint](https://docs.veracode.com/r/t_configure_endpoint_manual).

6. Click **Next**.

7. Complete these steps to start the installer:

    a.  Click **Download** to download the ZIP file containing the installer.

    b.  Click **Copy** in the text box in step 2.3 to copy your endpoint key to your clipboard.

    c.  Move the downloaded ZIP file to a machine behind your firewall with access to your internal applications.

    d.  Extract the ZIP file.

    e.  Open the installer file.

     - For Windows machines, the filename is `veracode_ism_install.bat`.
     - For Linux machines, the filename is `veracode_ism_install.sh`
         <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
         <b>Note:</b> If you have insufficient permissions to create the service, run the file as an administrator. If you are using a Linux machine without a GUI wrapper, Veracode recommends you open the installer with this command: <code>sudo -s ./veracode_ism_install.sh</code>
         </p>

8. After you launch the installer, complete these steps to install the endpoint:

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> For Linux machines without a GUI wrapper, opening the installer prompts you to provide the information listed in these steps on the command line.
    </p>

    a.  Read the terms of use for the endpoint, select the checkbox, and click **Next**.

    b.  Verify the installation folder and Java home are correct or select your preferred folders and click **Next**.
    
    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
   <b>Note:</b> If the installer cannot automatically detect the Java home, you must specify it.
    </p>

    c.  If you use a proxy, select **Manual configuration**.

    d.  If you select **Manual configuration**:
       
      - Enter your proxy hostname and port number.
      - If you want to use the proxy only for communication between the endpoint and gateway:
        - Select **For gateway connection**.
        -   If you want the proxy to resolve the gateway hostname, which means you need to allow only the gateway hostname, clear the **Let endpoint resolve hostname for gateway** checkbox. If you do not clear it, you must include the hostname and IP address of the gateway in your allowlist.
      - If you want to use the proxy for communication between the endpoint and gateway and between the endpoint and the URLs you scan:
        - Select **For gateway and URL connections**.
        - If you want the proxy to resolve the gateway or URL hostnames, which means you need to allow only the hostname for the gateway and the URLs you scan, clear the **Let endpoint resolve hostname for gateway** or **Let endpoint resolve hostname for URLs** checkboxes. If you do not clear them, you must include the hostname and IP address of the gateway and URLs in your allowlist.
      - If the proxy requires authentication, select **Authentication Required** and, then, enter your proxy credentials.
    
    e. Click **Next**.

    f. Paste the endpoint key you copied in step 7 and click **Next**.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
         <b>Note:</b> If you did not copy the endpoint key, go to the gateway page in the Veracode Platform, click the Actions menu for this endpoint, and select <b>Copy Endpoint Key</b>.
         </p>

    g.  When the key validates, click **Install**.

    h.  Click **Close**.

    The gateway and endpoint you created now appear on the Internal Scanning Management page.

    The gateway may have a status of Initializing for a few minutes after you create it. The endpoint has a status of Pending until you successfully deploy it. When you successfully deploy the endpoint, it has a status of Ready.


<p font-size="13pt"><b>Next Steps</b></p>

If the endpoint fails to connect to the gateway, your organization may need to add the gateway IP address or domain name to your allowlist. The IP address and domain are visible from the Internal Scanning Management page and the gateway page.

After you have created the gateway, started the endpoint, and tested the gateway connection, you can configure a [Veracode Dynamic Analysis](https://docs.veracode.com/r/c_was_configure) for internal scanning.

<p font-size="13pt"><b>Related Concepts</b></p>

[Troubleshooting ISM](https://docs.veracode.com/r/c_troubleshooting_endpoints)


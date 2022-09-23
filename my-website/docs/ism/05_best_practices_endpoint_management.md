---
"ft:title" : "Best Practices for Endpoint Management"
"ft:prettyUrl" : "c_endpoint_best_practices"
---

Veracode recommends that you comply with these best practices for managing your endpoints to make the most effective use of Veracode Internal Scanning Management (ISM).

<p><span style="font-size: medium;">Install one endpoint in each network in which you want to scan applications.</span></p>

Veracode recommends that you [install one endpoint](https://docs.veracode.com/r/t_create_endpoint) in each network in which you scan your internal applications. For example, if you have applications deployed in multiple data centers, you install a unique endpoint for each data center.

Each endpoint is capable of supporting at least 30 concurrent scans, though a strong network connection and powerful server can improve this capability. If you reach or approach the limit to the capability of your endpoint machine, a `LOG.info` message about thread limits or an `OutOfMemoryError` message about Java memory may appear in the [endpoint logs](https://docs.veracode.com/r/t_view_endpoint_logs).

Scans wait in a queue only when you reach your [Dynamic Analysis scan capacity](https://docs.veracode.com/r/Dynamic_Analysis_Scan_Capacity).

<p><span style="font-size: medium;">Install endpoints with the endpoint installer.</span></p>

On Windows and Linux, the endpoint installer simplifies the installation process and creates a service that continuously runs the endpoint.

<p><span style="font-size: medium;">For manual installations, run endpoints as a service.</span></p>

If you manually install an endpoint, configure your machine to run the endpoint as a service.

<p><span style="font-size: medium;">Install endpoints close to the target applications.</span></p>

To minimize network latency, install your endpoints in close proximity to the applications you plan to use the endpoint to scan.

<p><span style="font-size: medium;">Do not try to install the same endpoint in multiple networks.</span></p>

You encounter an error if you attempt to run the same endpoint in more than one network. Create a new endpoint for each network in which you scan internal applications.

<p><span style="font-size: medium;">If an endpoint goes offline, restart it.</span></p>
   
- Windows machines: Open the Services application from the Windows start menu, find the Veracode_ISM service, and click **Start the service** or **Restart the service**.
- Linux machines: From the command line, enter `service Veracode_ISM status` to get the status of the ISM service. If it is running, enter `service Veracode_ISM stop` to stop it. When it has stopped, enter `service Veracode_ISM start` to start it.
- Manual installations: [Restart the endpoint JAR file from the command line](https://docs.veracode.com/r/t_configure_endpoint_manual).

If the endpoint does not come back online, contact Veracode Technical Support.

<p><span style="font-size: medium;">Monitor emails you receive from Veracode about your endpoints.</span></p>

Veracode sends an [email](https://docs.veracode.com/r/c_ism_notifications) notifying you when an endpoint goes offline and comes back online. In cases where an inconsistent network connection causes your endpoint to become unstable, repeatedly switching between online and offline, you receive a single email alerting you of the instability. After you receive the endpoint instability email, Veracode suspends notifications about the endpoint for 24 hours to avoid sending redundant email alerts.

You can also monitor the status of your endpoints on the gateway page of the Veracode Platform.


---
"ft:title" : "Best Practices for Gateway Management"
"ft:prettyUrl" : "c_gateway_best_practices"
---

Veracode recommends that you comply with these best practices for managing your gateway to make the most effective use of Veracode Internal Scanning Management (ISM).

<p><span style="font-size: medium;">Add all of your endpoints to the same gateway.</span></p>

A single gateway is sufficient for connecting all of your endpoints to the Veracode cloud for scanning. There are no performance benefits to using multiple gateways.

<p><span style="font-size: medium;">If the endpoint cannot connect to the gateway, allow the gateway IP address.</span></p>

If an endpoint fails to connect to your gateway after you [install the endpoint](https://docs.veracode.com/r/t_create_endpoint), your organization may need to add the gateway IP address to your allowlist.

<p><span style="font-size: medium;">Monitor emails you receive from Veracode about your gateway.</span></p>

Veracode sends an [email](https://docs.veracode.com/r/c_ism_notifications) notifying you if your gateway goes offline and comes back online. If you have Dynamic Analyses in progress when the gateway goes offline, you need to restart them when it comes back online.

You can also monitor the status of your gateway by opening ISM in the Veracode Platform.


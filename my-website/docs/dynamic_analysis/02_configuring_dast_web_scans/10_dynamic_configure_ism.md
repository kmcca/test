---
"ft:title" : "Configuring Internal Scanning of Web Applications"
"ft:prettyUrl" : "c_was_internal"
---
If you want to scan an internal application hosted behind a firewall, you need to select a gateway and endpoint that can reach it.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> To use Veracode Internal Scanning Management, you must have already <a href="https://docs.veracode.com/r/t_configure_gateway">configured an ISM gateway and endpoint</a>.</p>

In the Internal Scanning section of the Edit Configuration page, select a gateway and an endpoint.

**Gateway**

Select the gateway associated with an endpoint that can access the URL. If you select a gateway that is not associated with an accessible endpoint or is not ready for scanning, the Dynamic Analysis fails.

**Endpoint**

Select an endpoint that can access the URL. If you select an endpoint that is not reachable by the URL or is not ready for scanning, the Dynamic Analysis fails. The scan identifies the endpoints as `Ready`, `Pending`, or `Offline`.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> All of your configured gateways and endpoints are available for selection. If you do not know which gateways and endpoints are reachable by the URL, work with your ISM administrators to identify them.</p>
---
"ft:title" : "ISM Notifications"
"ft:prettyUrl" : "c_ism_notifications"
---

Veracode sends email notifications for significant events that affect your Veracode Internal Scanning Management \(ISM\) gateway or endpoints.

This table lists the notifications that Veracode sends to the Security Leads of accounts using ISM.

|Event|Notification Content|
|-----|--------------------|
|Your gateway goes offline.|Due to a technical issue, your gateway and its associated endpoints are offline. Veracode Support Engineers are working to fix the issue. Veracode will send you an email when the gateway and endpoints return online. <br><br> URL scans using this gateway cannot complete while the gateway is offline.<br><br> View the status of the gateway in the Veracode Platform.|
|Your gateway comes back online.|If you had any Dynamic Analyses in progress when the gateway went offline, you need to restart them now. <br><br> View the status of the gateway in the Veracode Platform.|
|An endpoint goes offline.|URL scans using this endpoint cannot complete while the endpoint is offline. If you had any Dynamic Analyses in progress, you will need to restart them when the endpoint is back online. <br><br> View the status of your endpoints in the Veracode Platform.<br><br> To get your endpoint back online, view the troubleshooting guidance in the Veracode Help Center.|
|An endpoint comes back online.|If you had any Dynamic Analyses in progress when the endpoint went offline, you need to restart them now. <br><br> View the status of the endpoint in the Veracode Platform.|
|Your endpoint is unstable.|One of your Veracode Internal Scanning Management \(ISM\) endpoints is unstable, repeatedly switching between online and offline. <br><br>View the current status of your endpoint in the Veracode Platform. <br><br>This instability may impact any Dynamic Analyses that are in progress. <br><br>Check on the connection between your network and the machine running the endpoint. If the connection is consistent and the endpoint remains unstable, contact Veracode Technical Support at support@veracode.com. <br><br>Your notifications for this endpoint will resume if the endpoint status changes again after 24 hours.|


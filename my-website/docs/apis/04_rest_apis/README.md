---
"ft:title": "REST APIs"
"ft:prettyUrl": "c_rest_intro"
---
Veracode REST APIs enable you to access Veracode Platform data and functionality using normal REST API programming conventions.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>. Also, ensure you access the APIs with the <a href="https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs">domain for your region</a>.</p>

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The REST APIs do not provide all functionality available in the Veracode Platform, but equivalent functionality might be available with the <a href="https://docs.veracode.com/r/r_quick_ref">XML APIs</a>.</p>

<p><span style="font-size: medium;">Required HTTP Header</span></p>

When sending Veracode REST API requests, you must set `'Content-Type': 'application/json'` in the HTTP header.
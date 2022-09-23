---
"author": ["Mike Howes"]
"ft:originID": "about_apis"
"ft:title": "About the Veracode APIs"
"ft:prettyUrl": "c_gettingstarted"
---
The Veracode REST and XML APIs mirror the main tasks for scanning applications, reviewing results, mitigating findings, and administrating your organization in the Veracode Platform. Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs.

To understand how the APIs work, Veracode recommends that you familiarize yourself with the Veracode Platform workflow for scanning applications first, before beginning to use the APIs. You also should be familiar with how APIs function.

Veracode APIs are designed for members of a software development team responsible for performing security checks on software code. They enable developers who work in rapid build-and-test cycles to fully automate security verification for entire software portfolios, and to integrate with internal build and bug-tracking systems. Instead of manually using the Veracode Platform to go through the individual steps of configuring and submitting a scan request, then reviewing the results, you can integrate the API calls directly into your IDE and build system code to scan early and often.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>. Also, ensure you access the APIs with the <a href="https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs">domain for your region</a>.</p>

<p><span style="font-size: medium;">Veracode REST APIs</span></p>

The [REST APIs](https://docs.veracode.com/r/c_rest_intro) follow the OpenAPI industry standard specification. These APIs return JSON instead of XML, and require authentication using [HMAC](https://docs.veracode.com/r/c_enabling_hmac). The Veracode REST APIs require [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).

You can access Veracode REST APIs using a tool that supports Veracode HMAC authentication, including the [Java](https://docs.veracode.com/r/t_configure_java_library) or [Python](https://docs.veracode.com/r/t_install_api_authen) authentication libraries.

<p><span style="font-size: medium;">Veracode XML APIs</span></p>

The [XML APIs](https://docs.veracode.com/r/c_api_main) are web APIs, each having a defined set of HTTP request messages that return structured response messages in XML.
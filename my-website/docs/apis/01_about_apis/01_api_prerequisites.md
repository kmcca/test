---
"ft:title" : "General Guidelines for Veracode APIs"
"ft:prettyUrl" : "c_API_usage_guidelines"
---
The XML APIs, REST APIs, and API wrappers have specific prerequisites. but there are general guidelines that apply to all APIs.

* To access the Veracode APIs, you must have a [Veracode account](https://docs.veracode.com/r/c_about_veracode_accounts) with the required [roles](https://docs.veracode.com/r/c_role_permissions) and [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). See [Understanding API Access](https://docs.veracode.com/r/c_API_roles) and [Managing API Users](https://docs.veracode.com/r/admin_api).
* For the best experience when using the APIs and wrappers, Veracode strongly recommends that you review the [API Best Practices](https://docs.veracode.com/r/About_Veracode_API_Best_Practices).
* Veracode reserves the right to apply [API rate limiting](https://docs.veracode.com/r/About_API_Rate_Limiting) to any account that exceeds the allowed number of API requests within a specific period.
* You cannot use Veracode API credentials with cURL, but you can use them with the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).
* For instructions on using Veracode APIs with [Postman](https://www.postman.com/), see [https://github.com/veracode/veracode-postman](https://github.com/veracode/veracode-postman).
* To test the security of your API specifications, see [Getting Started with Veracode API Scanning](https://docs.veracode.com/r/About_Veracode_API_Scanning).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>. Also, ensure you access the APIs with the <a href="https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs">domain for your region</a>.</p>
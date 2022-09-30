---
"ft:title": "Dynamic XML APIs"
"ft:prettyUrl": "r_getdynamicflaws"
---
The `getdynamicflaws.do` call returns information on a specific flaw from a Dynamic Analysis.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is `GET /appsec/v2/applications/<guid>/findings/<id>/dynamic_flaw_info`. Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getdynamicflaws.do`

<p><span style="font-size: medium;">Permissions</span></p>

You need the [Results API role](https://docs.veracode.com/r/c_API_roles_details) to use this call.

<p><span style="font-size: medium;">Parameters</span></p>

|Name|Type|Description|
|:---|:---|:----------|
|`build_id`<br>**Required**|Integer|Application or sandbox build ID.|
|`flaw_id`<br>**Required**|Integer|Find flaw IDs on the [Triage Flaws page](https://docs.veracode.com/r/improve_mitigation) in the Veracode Platform or in the `issueid` fields returned by the [Detailed Report API](../03_results_xml_apis/03_detailedreport_do.md).|

To locate the parameters for `getdynamicflaws.do`:

1.  Call `getapplist.do` to locate the `app_id` for your application.
2.  Call `getbuildlist.do` with the `app_id` to locate the current `build_id` for your application.
3.  Call `detailedreport.do` with the `build_id` to locate a `flaw_id`.
4.  In the XML code of the detailed report, find the report section for the target flaw and then find the `issueid` element in that section. The `issueid` is the `flaw_id`.

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getdynamicflaws.do" "build_id==<build id>" "flaw_id==2"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getdynamicflaws.do` call returns the `dynamicfinding` XML document, which references the [dynamicfinding.xsd](https://analysiscenter.veracode.com/resource/4.0/dynamicfinding.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<dynamicfinding xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
         xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;dynamicfinding" 
         xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;dynamicfinding 
         https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;dynamicscaninfo.xsd" 
         app_id="<app id>" build_id="<build id>" flaw_id="2" engine_version="" cwe_id="402" 
         description="The security cookie does not have the &#x22;HttpOnly&#x22; attribute set. Using this attribute helps 
            to prevent client-side Javascript from accessing the cookie, thereby mitigating one of the most common XSS exploit 
            scenarios.&#xa;" remediation="Unless the application requires that cookies be accessible to Javascript code, set 
            the &#x22;HttpOnly&#x22; attribute when generating cookies.&#xa;" 
         parameter_type="" 
         parameter_name="" 
         parameter="Set-Cookie security HTTP response header" 
         original_arg="" 
         raw_response="HTTP&#x2f;1.1 302 Found&#xd;&#xa;Date&#x3a; Tue, 01 Oct 2019 20&#x3a;46&#x3a;15 GMT&#xd;&#xa;Server&#x3a; 
             Apache&#xd;&#xa;Set-Cookie&#x3a; PHPSESSID&#x3d;3696on897sncfp18jb800jnvfl&#x3b; path&#x3d;&#x2f;&#xd;&#xa;Expires&#x3a; 
             Thu, 19 Nov 1981 08&#x3a;52&#x3a;00 GMT&#xd;&#xa;Cache-Control&#x3a; no-store, no-cache, must-revalidate&#xd;&#xa;Pragma&#x3a; 
             no-cache&#xd;&#xa;Set-Cookie&#x3a; PHPSESSID&#x3d;3696on897sncfp18jb800jnvfl&#x3b; path&#x3d;&#x2f;&#xd;&#xa;Set-Cookie&#x3a; 
             security&#x3d;low&#xd;&#xa;Location&#x3a; login.php&#xd;&#xa;Keep-Alive&#x3a; timeout&#x3d;65, max&#x3d;100&#xd;&#xa;Connection&#x3a; 
             Keep-Alive&#xd;&#xa;Content-Type&#x3a; text&#x2f;html&#x3b; charset&#x3d;UTF-8&#xd;&#xa;Content-Length&#x3a; 0&#xd;&#xa;&#xd;&#xa;" 
             injected_arg="" referer_url="">
   <request host="www.example.com" port="80" secure="false" raw_request="GET &#x2f; HTTP&#x2f;1.1&#xd;&#xa;Host&#x3a; 
             www.example.com#xd;&#xa;User-Agent&#x3a; Mozilla&#x2f;5.0 &#x28;Windows NT 5.2&#x3b; WOW64&#x3b; rv&#x3a;21.0&#x29; 
             Gecko&#x2f;20100101 Firefox&#x2f;21.0&#x2f;Veracode Security Scan&#x2f;support&#x40;veracode.com&#xd;&#xa;Accept&#x3a; 
             &#x2a;&#x2f;&#x2a;&#xd;&#xa;Connection&#x3a; keep-alive&#xd;&#xa;Accept-Encoding&#x3a; identity&#xd;&#xa;Accept-Language&#x3a; 
             en-us,en&#x3b;q&#x3d;0.5&#xd;&#xa;Content-Length&#x3a; 0&#xd;&#xa;&#xd;&#xa;" method="GET" protocol="HTTP" 
             url="http&#x3a;&#x2f;&#x2f;dvwa.sa.veracode.io&#x2f;" path="&#x2f;" uri="&#x2f;" body="">
      <header name="Host" value="www.example.com"/>
      <header name="User-Agent" value="Mozilla&#x2f;5.0 &#x28;Windows NT 5.2&#x3b; WOW64&#x3b; rv&#x3a;21.0&#x29; Gecko&#x2f;20100101 
         Firefox&#x2f;21.0&#x2f;Veracode Security Scan&#x2f;support&#x40;veracode.com"/>
      <header name="Accept" value="&#x2a;&#x2f;&#x2a;"/>
      <header name="Connection" value="keep-alive"/>
      <header name="Accept-Encoding" value="identity"/>
      <header name="Accept-Language" value="en-us,en&#x3b;q&#x3d;0.5"/>
      <header name="Content-Length" value="0"/>
   </request>
</dynamicfinding>
```
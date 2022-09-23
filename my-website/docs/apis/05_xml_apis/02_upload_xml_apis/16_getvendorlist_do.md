---
"ft:title": "getvendorlist.do"
"ft:prettyUrl": "r_getvendorlist"
---
The `getvendorlist.do` call compiles a list of your organization vendors for third-party scans.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getvendorlist.do`

<p><span style="font-size: medium;">Parameters</span></p>

This call takes no parameters.

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getvendorlist.do"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getvendorlist.do` call returns the `vendorlist` XML document, which references the [vendorlist.xsd](https://analysiscenter.veracode.com/resource/2.0/vendorlist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<vendorlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;vendorlist" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;vendorlist 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;vendorlist.xsd" 
      account_id="<account id>">
   <vendor_id="<vendor id>" vendor_name="<vendor list>"/>
   <vendor_id="<vendor id>" vendor_name="<vendor list>"/>
   <vendor_id="<vendor id>" vendor_name="<vendor list>"/>
</vendorlist>
```


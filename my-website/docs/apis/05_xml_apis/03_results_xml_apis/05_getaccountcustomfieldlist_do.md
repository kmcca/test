---
"ft:title": "getaccountcustomfieldlist.do"
"ft:prettyUrl": "r_getaccountcustomfieldlist"
---
The `getaccountcustomfieldlist.do` call returns the ID and name of the available custom fields for your organization. You must have the Results API [role](https://docs.veracode.com/r/c_API_roles_details) to be able to use this API.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v1/custom_fields` using the [Applications API](https://docs.veracode.com/r/c_apps_intro). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getaccountcustomfieldlist.do
`
<p><span style="font-size: medium;">Parameters</span></p>

This call takes no parameters.

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getaccountcustomfieldlist.do"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getaccountcustomfieldlist.do` call returns the `accountcustomfieldlist` XML document, which references the [accountcustomfieldlist.xsd](https://analysiscenter.veracode.com/resource/accountcustomfieldlist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>
          
          <account_customfieldlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
          xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;accountcustomfieldlist" 
          xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;accountcustomfieldlist 
          https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;accountcustomfieldlist.xsd" 
          account_customfieldlist_version="1.0">
          <account_customfield id="132422" name="Custom 1"/>
          <account_customfield id="132423" name="Custom 2"/>
          <account_customfield id="132424" name="Custom 3"/>
          <account_customfield id="132425" name="Custom 4"/>
          <account_customfield id="132426" name="Custom 5"/>
          <account_customfield id="132427" name="Custom 6"/>
          <account_customfield id="132428" name="Custom 7"/>
          <account_customfield id="132429" name="Custom 8"/>
          <account_customfield id="132430" name="Custom 9"/>
          <account_customfield id="132431" name="Custom 10"/>
          </account_customfieldlist>
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> There is no equivalent API wrapper call for <code>getaccountcustomfieldlist.do</code>.</p>


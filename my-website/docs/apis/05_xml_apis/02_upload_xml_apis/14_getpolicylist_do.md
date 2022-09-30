---
"ft:title": "getpolicylist.do"
"ft:prettyUrl": "r_getpolicylist"
---
The `getpolicylist.do` call compiles a list of policies available to your account.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `/appsec/v1/policies` using the [Policy API](https://docs.veracode.com/r/c_policy_rest_api). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/getpolicylist.do`

<p><span style="font-size: medium;">Parameters</span></p>

This call takes no parameters.

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getpolicylist.do"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getpolicylist.do` call returns the `list` XML document, which references the [policylist.xsd](https://analysiscenter.veracode.com/resource/4.0/policylist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<policylist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;policylist" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;4.0&#x2f;policylist 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;4.0&#x2f;policylist.xsd" 
      account_id="<account id>">
   <policies names="Veracode Recommended Very High,Veracode Recommended High,Veracode Recommended Medium,
      Veracode Recommended Low,Veracode Recommended Very Low,Veracode Recommended Mobile Policy,
      Veracode Recommended Very High &#x2b; SCA,Veracode Recommended High &#x2b; SCA,Veracode Recommended Medium &#x2b; 
      SCA,Veracode Transitional Very High,Veracode Transitional High,Veracode Transitional Medium,Veracode Transitional Low,
      Veracode Transitional Very Low,PCI 3.2.1"/>
</policylist>
```

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version #>.jar -vid <VeracodeApiId> -vkey <VeracodeApiKey> -action getpolicylist
```

<p><span style="font-size: medium;">Java Results</span></p>

The `getpolicylist.do` call returns the `list` XML document, which references the [policylist.xsd](https://analysiscenter.veracode.com/resource/4.0/policylist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<policylist xmlns="https://analysiscenter.veracode.com/schema/4.0/policylist" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      account_id="<account_id> 
      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/4.0/policylist 
      https://analysiscenter.veracode.com/resource/4.0/policylist.xsd">
   <policies names="Veracode Recommended Very High,Veracode Recommended High,Veracode Recommended Medium,
      Veracode Recommended Low, Veracode Recommended Very Low,Veracode Recommended Mobile Policy,
      Veracode Recommended Very High + SCA,Veracode Recommended High + SCA,Veracode Recommended Medium + SCA,
      Veracode Transitional Very High,Veracode Transitional High,Veracode Transitional Medium,
      Veracode Transitional Low,Veracode Transitional Very Low,PCI 3.2"/>   
</policylist>
```


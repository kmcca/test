---
"ft:title": "deleteapp.do"
"ft:prettyUrl": "r_deleteapp"
---
The `deleteapp.do` call deletes an existing application in the portfolio.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `DELETE` to `/appsec/v1/applications` using the [Applications API](https://docs.veracode.com/r/r_applications_delete). Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/deleteapp.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Type    | Description     |
|:-------------------------|:--------|:----------------|
| `app_id`<br>**Required** | Integer | Application ID. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/deleteapp.do" "app_id==<application ID>"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `deleteapp.do` call returns the `deleteapp` XML document, which references the [deleteapp.xsd](https://analysiscenter.veracode.com/resource/deleteapp.xsd) schema file. You can use the XSD schema file to validate the XML data.

The return lists the remaining applications after the successful deletion.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<deleteapp xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
xmlns="https://analysiscenter.veracode.com/schema/deleteapp" 
xsi:schemaLocation="https://analysiscenter.veracode.com/schema/deleteapp 
https://analysiscenter.veracode.com/resource/deleteapp.xsd" account_id="18844">
  <result>success</result>
</deleteapp>
```


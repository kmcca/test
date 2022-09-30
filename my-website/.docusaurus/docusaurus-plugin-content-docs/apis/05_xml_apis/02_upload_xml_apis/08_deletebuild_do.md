---
"ft:title": "deletebuild.do"
"ft:prettyUrl": "r_deletebuild"
---
The `deletebuild.do` call deletes the most recent static build of an existing application in the portfolio.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/deletebuild.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Type    | Description                                                     |
|:-------------------------|:--------|:----------------------------------------------------------------|
| `app_id`<br>**Required** | Integer | Application ID.                                                 |
| `sandbox_id`             | Integer | The ID of the sandbox that contains the static build to delete. |

<p><span style="font-size: medium;">HTTPie Example</span></p>

The `deletebuild.do` call returns the `deletebuildresult` XML document, which references the [deletebuildresult.xsd](https://analysiscenter.veracode.com/resource/deletebuildresult.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<deletebuildresult xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
  xmlns="https://analysiscenter.veracode.com/schema/deletebuildresult" 
  xsi:schemaLocation="https://analysiscenter.veracode.com/schema/apiresult/deletebuildresult.xsd" 
  account_id="28823" app_id="61230">
    <result>success</result>
</deletebuildresult>

```


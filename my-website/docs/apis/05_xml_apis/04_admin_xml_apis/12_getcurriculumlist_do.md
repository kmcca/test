---
"ft:title": "getcurriculumlist.do"
"ft:prettyUrl": "r_getcurriculumlist"
---
The `getcurriculumlist.do` call returns a list of the Veracode eLearning curricula defined for your organization.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/getcurriculumlist.do`

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) requires the Admin API role to use this call. A [user account](https://docs.veracode.com/r/c_role_permissions) cannot use this call.

<p><span style="font-size: medium;">Parameters</span></p>

This call takes no parameters.

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o curriculumlist.xml "https://analysiscenter.veracode.com/api/3.0/getcurriculumlist.do"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getcurriculumlist.do` call returns the `curriculumlist` XML document, which references the [curriculumlist.xsd](https://analysiscenter.veracode.com/resource/3.0/curriculumlist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<curriculumlist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;curriculumlist&#x2f;3.0" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;curriculumlist&#x2f;3.0 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;curriculumlist.xsd" 
      curriculumlist_version="3.0" account_id="<account id>">
<curriculums curriculum_names="Beginner Curriculum"/>
```


---
"ft:title": "Flaw Report XML APIs Quick Reference"
"ft:prettyUrl": "Flaw_Report_XML_APIs_Quick_Reference"
---
This table lists the XML API calls for managing flaw reports. For more detailed information, see the topic for a specific call.

Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs.

| XML API Call | Description                                                       |  Optional Parameters| Scan Type |
|--------------|-------------------------------------------------------------------|----------------------|-----------|
|[`generateflawreport.do`](https://docs.veracode.com/r/r_generateflawreport)  | Returns `generateflawreport.xml`, which contains the token you need for downloading the finding report.| `token`, `scan_type`  | —                       |
| [`downloadflawreport.do`](https://docs.veracode.com/r/r_downloadflawreport)                 | Returns an XML report that lists all fixed and unfixed findings for the specified applications and/or scan type.| `app_id_list`, `scan_type`| —|
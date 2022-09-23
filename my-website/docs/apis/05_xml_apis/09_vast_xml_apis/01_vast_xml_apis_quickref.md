---
"ft:title": "VAST XML APIs Quick Reference"
"ft:prettyUrl": "VAST_XML_APIs_Quick_Reference"
---
This table lists the XML API calls for getting Vendor Application Security Testing (VAST) reports. For more detailed information, see the topic for a specific call.

Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs.

| XML API Call                                             | Description                                                                    | Required Parameters          | Optional Parameters | Scan Type | 
|----------------------------------------------------------|--------------------------------------------------------------------------------|------------------------------|---------------------|-----------|
| [`sharedreport.do`](02_sharedreport_do.md)               | Returns the details of a shared report.                                        | `app_id`, `shared_report_id` |                     | —         |
| [`sharedreportpdf.do`](03_sharedreportpdf_do.md)         | Returns the shared report as a PDF document.                                   | `app_id`, `shared_report_id` |                     | —         |
| [`getsharedreportinfo.do`](04_getsharedreportinfo_do.md) | Returns information about a specific shared report.                            | `app_id`                     | `shared_report_id`  | —         |
| [`getsharedreportlist.do`](05_getsharedreportlist_do.md) | Returns a list of published, shared reports that are linked to an application. | `app_id`                     |                     | —         |
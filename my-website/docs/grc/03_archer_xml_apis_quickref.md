---
"ft:title": "Archer XML APIs Quick Reference"
"ft:prettyUrl": "Archer_XML_APIs_Quick_Reference"
---
This table lists the XML API calls for getting Archer reports, which you can use for Governance, Risk, and Compliance (GRC). For more detailed information, see the topic for a specific call.

Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs.

| XML API Call                                                            | XML API Location                                                    | Required Parameters | Optional Parameters                                     | Scan Type               |
|-------------------------------------------------------------------------|---------------------------------------------------------------------|---------------------|---------------------------------------------------------|-------------------------|
| [archer.do](https://docs.veracode.com/r/r_archer_deprec)                | https://analysiscenter.veracode.com/api/archer.do                   |                     | `app_id`, `period`, `from_date`, `to_date`, `scan_type` | Static, Dynamic, Manual |
| [generatearcherreport.do](https://docs.veracode.com/r/r_generatearcher) | https://analysiscenter.veracode.com/api/2.0/generatearcherreport.do |                     | `app_id`, `period`, `from_date`, `to_date`, `scan_type` | Static, Dynamic, Manual |
| [downloadarcherreport.do](https://docs.veracode.com/r/r_downloadarcher) | https://analysiscenter.veracode.com/api/2.0/downloadarcherreport.do |                     | `token`                                                 | Static, Dynamic, Manual |
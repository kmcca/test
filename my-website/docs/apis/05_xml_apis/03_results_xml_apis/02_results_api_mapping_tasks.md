---
"ft:title": "Mapping Results XML API Tasks"
"ft:prettyUrl": "c_mapping_results"
---
The Results API automates scan submissions and report retrieval.

The REST API equivalents of many of these calls are available with the [Applications API](https://docs.veracode.com/r/c_apps_intro), the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro), and the [Summary Report API](https://docs.veracode.com/r/c_rest_summary_report_intro). 

Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs.

This table describes:

-   How the Results API works
-   When to use each API call
-   The XML or PDF file an API returns
-   How to map the API calls to the manual Veracode Platform processes

| Step | Using the Veracode Platform                                | Using the Results API                                 | Returns XML File                            |
|------|------------------------------------------------------------|-------------------------------------------------------|---------------------------------------------|
| 1    | Go to the Application Overview for the chosen application. | `getappbuilds.do`, `getapplist.do`, `getbuildlist.do` | `appbuilds.xml`, `applist.xml`, `buildlist.xml`   |
| 2    | View the Triage Flaws View online.                         | `detailedreport.do`, `getcallstacks.do`               | `detailedreport.xml`, `callstacks*.xml`        |
| 3    | View the Detailed Report online.                           | `detailedreportpdf.do`                                | `detailedreport*.pdf`                         |
| 4    | View the Summary Report online.                            | `summaryreportpdf.do`, `thirdpartyreportpdf.do`       | `summaryreport*.pdf`, `thirdpartyreport*.pdf` |


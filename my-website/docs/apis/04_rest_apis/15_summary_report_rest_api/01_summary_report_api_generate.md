---
"ft:title": "Generating a Summary Report with the REST API"
"ft:prettyUrl": "c_sum_report_gen_rest"
---
Use this command to generate a [Summary Report](https://docs.veracode.com/r/c_results_summaryresults1) for an application:

```shell
http --auth-type=veracode_hmac "https://api.veracode.com/appsec/v2/applications/{application_guid}/summary_report"
```

Use this command to generate a Summary Report for a [development sandbox](https://docs.veracode.com/r/c_about_sandbox):

```shell
http --auth-type=veracode_hmac "https://api.veracode.com/appsec/v2/applications/{application_guid}/summary_report?context={sandbox_guid}"

```

You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info) or [development sandbox](https://docs.veracode.com/r/r_applications_sandboxes).
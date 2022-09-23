---
"ft:title": "Results XML APIs"
"ft:prettyUrl": "c_results_main"
---
You can use the Veracode Results API to access your application assessment data from another application or a script.

The Veracode Results API is a basic HTTPS-based request API that uses simple HTTP calls. You can use any technology that supports making HTTP calls and parsing XML to access the API. For example, you can write a script to automatically download newly published analysis results into a bug tracking system. 

You can also use this API to retrieve information, in XML format, about these items:

-   Application profiles
-   Completed and in-progress builds
-   Detailed analysis results, which includes call stacks and findings information, or a summary of results, which does not include call stacks and findings information

To learn how to use the Results API, see [API Tutorial: How to Access Scan Results](11_xml_api_results_tutorial.md).

For performance reasons, this API automatically compresses the XML output, regardless of file size, in Gzip format. When accessing this API in production, Veracode strongly recommends that you use a user agent, such as HTTPie, which is the default, that supports Gzip. To test this API, you can use any tool that supports HTTP.

If you want to query tags in applications, you can add unique tags as metadata when creating your applications. You can then query your applications based on any of the metadata. Use [createapp.do](../02_upload_xml_apis/05_createapp_do.md) to create an application with metadata. 

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalents of many of these calls are available with the [Applications API](https://docs.veracode.com/r/c_apps_intro), the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro), and the [Summary Report API](https://docs.veracode.com/r/c_rest_summary_report_intro). Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Prerequisites</span></p>

Before using the Results API, you must meet these prerequisites:

- An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Results API [role](https://docs.veracode.com/r/c_API_roles_details) or a [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Reviewer or Security Lead [role](https://docs.veracode.com/r/c_role_permissions).
- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
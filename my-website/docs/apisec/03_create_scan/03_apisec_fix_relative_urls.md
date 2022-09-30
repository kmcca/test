---
"ft:title" : "Fixing Relative URLs for API Scanning"
"ft:prettyUrl" : "Fixing_Relative_URLs_for_API_Scanning"
---

API Scanning requires the absolute, or base, URL at which the API you want to scan is hosted. It checks for this URL when you upload an API specification to the Veracode Platform. If API Scanning cannot determine this URL from the uploaded specification, you see an error with a field to enter the fully-qualified URL. Enter the base URL for your API.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> HAR files do no support base URLs. If your specification does specify a base URL, the value you enter in the field overwrites the value in the specification.</p>

If you do not know the base URL for your API, contact the development team that provided the specification file.

After adding a base URL, Veracode treats the value as a `url` entry in the OpenAPI `servers` list, as explained in the <a href="https://swagger.io/docs/specification/api-host-and-base-path/" target="_blank">OpenAPI 3 Documentation</a>. Ensure your value includes any base path. For example, if an API has entry points under `/v1/pets`, it must also have that path in the absolute URL: `https://api.example/com/v1/pets`.

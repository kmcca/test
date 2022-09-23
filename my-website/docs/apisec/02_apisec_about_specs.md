---
"ft:title" : "About API Scanning and API Specifications"
"ft:prettyUrl" : "About_API_Scanning_and_API_Specifications"
---
Veracode API Scanning supports API specification files in OpenAPI 2.0 (Swagger), OpenAPI 3.0, and HTTP Archive (HAR) format. An OpenAPI specification must be valid YAML or JSON.

When you upload an API specification as an OpenAPI or HAR file, the scan engine processes the file to prepare it for analysis. The process involves converting OpenAPI files to HAR files and parsing the HAR files to extract the list of endpoints, the target API servers, and to generate the API call requests. If you upload a HAR file, it skips the conversion step. When [configuring a scan](https://docs.veracode.com/r/Configure_and_Run_an_API_Specification_Scan), you can select which endpoints from this list to include or exclude during scanning.

The scan engine periodically reprocesses the API specifications to ensure that they are up-to-date. Veracode recommends that you periodically review recurring scans to ensure that all endpoints are accurate. If the server-side logic for detecting eligible endpoints changes, you might need to update your scan configurations to include or exclude these rules.

After scheduling the analysis, you can download the HAR file of each scanned API specification from the Dynamic Analysis Scan Configuration page in the Veracode Platform. You can also re-upload a downloaded HAR file for scanning.

If you are new to API specifications, Veracode recommends that you learn more about the supported formats and file types, the differences between them, and the techniques and best practices for working with HAR files.

## OpenAPI 2.0 Conversion to HAR
When converting OpenAPI 2.0 specification files to HAR format, the scan engine first converts them to OpenAPI 3.0 using the official <a href="https://github.com/swagger-api/swagger-parser" target="_blank">OpenAPI Swagger Parser</a>. Because OpenAPI 3.0 supports multiple servers, if an OpenAPI 2.0 file specifies the API server array with the `host/basepath` property, during conversion, the scan engine treats this value as a single entry in the server array.

## OpenAPI 3.0 Conversion to HAR
When converting OpenAPI 3.0 specification files to HAR format, the scan engine enumerates the API endpoints and generates values for all associated properties. When generating property values, the scan engine retains any relevant schema data present in the specification to ensure that the values are valid. Veracode highly recommends that all properties in a specification include a detailed schema.

The scan engine uses the endpoints and properties to form HTTP requests, which it also stores in the HAR format. For certain values, particularly URL properties, the HAR files contain URLs that include the property names, typically enclosed in curly brackets ({,}). Corresponding values are encoded within the open-ended `comment` property present on the request within the HAR file. Other structures within the HAR format might use the `comment` property to encode schema information and other metadata that the scan engine can use during scanning. Because of these dependencies, prior to re-uploading a downloaded HAR file, Veracode highly recommends that you do not modify the `comment` property or any of the structures within the HAR file.

## HAR Conversion and Processing
Before scanning HAR files, the scan engine converts the HAR format to internal data structures. During the conversion, the scan engine resolves any URL properties to generate the final, fully-qualified URLs for each request, and then applies all property values.

If an API specification contains combinations of path tokens and hosts for the target API servers, these values can result in double-slashes (//) rather than single slashes during a API request. During conversion, the scan engine changes multiple repeating slashes into single slashes when generating the request URLs. To avoid potential errors during scanning, before uploading your specification, ensure all paths use the correct path format.

## About HTTP Support
API Scanning supports HTTP/1.1 and HTTP/1.0 traffic. If your API requires HTTP/2.0, you cannot use API Scanning. When creating the HAR file of a specification, the scan engine downcasts HTTP/2.0 API specifications to HTTP/1.1. If a HAR file defines HTTPS, the scan engine interprets the value of the `httpVersion` property to be HTTP/1.1.

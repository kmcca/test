---
"ft:title" : "About Veracode API Scanning"
"ft:prettyUrl" : "About_Veracode_API_Scanning"
---
You use API Scanning to perform a [Dynamic Analysis](https://docs.veracode.com/r/c_was_intro) of one or more API specifications. The analysis tests the security of the API endpoints in the specification and returns scan results with discovered security findings.

In the Veracode Platform, you create a new Dynamic Analysis and upload or select the API specification you want to analyze. An analysis can contain a maximum of 250 specifications.

If you want to try API Scanning, but you do not have an OpenAPI 3.0 or 2.0 specification, you can create an HTTP Archive (HAR) file using several free tools, such as <a href="https://toolbox.googleapps.com/apps/har_analyzer/" target="_blank">Chrome Developer Tools</a>. To reduce extraneous traffic, such as third-party traffic, you can select **Fetch/XHR** to apply filtering before exporting the HAR.

To learn more about API specification support and how API Scanning processes these files during analysis, see [About API Scanning and API Specifications](https://docs.veracode.com/r/About_API_Scanning_and_API_Specifications).

## About Licensing for API Scanning
API Scanning requires a Dynamic Analysis license. Veracode uses target URLs in your license to determine the number of API specifications you can scan. Each target URL equates to a unique API server defined in your specifications. When you upload a specification in the Veracode Platform, it imports the URLs of the defined API servers.

During a specification scan, Veracode detects the target API server and deducts it from the number of target URLs available in your license. If a specification has multiple servers defined, you can select the server you want to use when configuring the scan. If you scan a specification using a defined server and then scan that same specification using a different server, Veracode treats both servers as separate target URLs and deducts both target URLs from your license.

Ensure your Dynamic Analysis license has an adequate number of target URLs for the number of API specifications you want to scan. To obtain or change a Dynamic Analysis license, contact your Veracode sales representative.

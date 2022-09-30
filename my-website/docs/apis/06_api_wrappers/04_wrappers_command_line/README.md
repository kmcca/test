---
"ft:title": "Using the Veracode API Wrappers from the Command Line"
"ft:prettyUrl": "c_wrapper_CL"
---
The [Veracode XML APIs](https://docs.veracode.com/r/c_api_main) allow you to access Veracode and perform actions such as creating application profiles, uploading files, starting scans, and downloading reports. You can interact with the APIs programmatically or through a web browser.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter <code>app_id</code> in the API is <code>appid</code> in the wrapper and the parameter value <code>Very High</code> in the API is <code>VeryHigh</code> in the wrapper. The parameter <code>business_criticality</code> in the API is <code>criticality</code> in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.</p>

Like the Veracode APIs, the API wrappers allow you to access Veracode and perform different actions in a more simplified way that requires neither a web browser nor repetitive programming. When using the wrappers as a library, you no longer have to programmatically configure web requests and look up the URL or query string parameters of the functions you want to call. When using the wrappers as command-line applications, you can perform these actions, which require no programming knowledge:

* [Simple actions](https://docs.veracode.com/r/c_wrapper_simple_actions) correspond to a single call to one of the functions of the Veracode APIs.
* [Composite actions](https://docs.veracode.com/r/c_wrapper_composite_actions) correspond to calls to multiple functions of the Veracode APIs.
---
"ft:title": "Using the API Wrappers as a Library"
"ft:prettyUrl": "c_using_wrappers_AS"
---
You can use the Veracode API wrappers as a library, which enables you to call API functions without having to set up web requests and look up the required URL or query string parameters.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter <code>app_id</code> in the API is <code>appid</code> in the wrapper and the parameter value <code>Very High</code> in the API is <code>VeryHigh</code> in the wrapper. The parameter <code>business_criticality</code> in the API is <code>criticality</code> in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.</p>

-   [Referencing the API wrappers from Visual Studio](01_reference_csharp_wrapper_visual_studio.md)
-   [Referencing the API wrappers from Eclipse](02_reference_java_wrapper_eclipse.md)
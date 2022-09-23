---
"ft:title": "API Wrappers"
"ft:prettyUrl": "c_about_wrappers"
---
Veracode provides API wrappers for Java and C# to simplify the integration of the [XML APIs](https://docs.veracode.com/r/c_api_main).

API wrappers are language-specific kits or packages that wrap sets of XML API calls into easy-to-use functions. The wrapper programmatically calls multiple API calls without requiring user interaction, further automating projects.

Veracode provides API wrappers for these languages:

-   [C#](01_install_csharp_wrapper.md)
-   [Java](02_setup_java_wrapper/README.md)

The Veracode API wrappers are Veracode-developed CLI programs that can communicate with the Veracode XML APIs accelerating the integration of theVeracode XML APIs in your Software Development Life Cycle (SDLC). The CLI programs are available in both C# and Java versions. The wrapper manages the details of network connections, parameters, and interfaces so that you can focus on using the objects to integrate Veracode into your code. The content of the wrappers is commonly used as library or command-line tools. Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The Veracode XML APIs and the wrappers use a different syntax. For the wrappers, the parameter names omit the underscores, the parameter values omit spaces, and some parameters use different names. For example, the parameter <code>app_id</code> in the API is <code>appid</code> in the wrapper and the parameter value <code>Very High</code> in the API is <code>VeryHigh</code> in the wrapper. The parameter <code>business_criticality</code> in the API is <code>criticality</code> in the wrapper. The syntax is not interchangeable and using the wrong syntax causes your command to fail. To ensure you are using the correct syntax, see the documentation provided in the Help directory for each wrapper.</p>

For the best experience when using the APIs and wrappers, Veracode strongly recommends that you review the [API Best Practices](https://docs.veracode.com/r/About_Veracode_API_Best_Practices).

Veracode reserves the right to apply [API rate limiting](https://docs.veracode.com/r/About_API_Rate_Limiting) to any account that exceeds the allowed number of API requests within a specific period.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>. Also, ensure you access the APIs with the <a href="https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs">domain for your region</a>.</p>

<p><span style="font-size: medium;">Automating Analysis with Veracode Integrations</span></p>

If you are using the Veracode integrations to automate Veracode Static Analysis or Veracode Software Composition Analysis of your applications, you must follow certain guidelines to ensure that your automations run successfully.

Any first-party modules you [upload for static analysis](https://docs.veracode.com/r/c_request_modules_scan) or third-party components you [select for Veracode SCA upload scanning](https://docs.veracode.com/r/Selecting_Modules_for_Veracode_SCA_Upload_Scanning) must not have fatal or blocking errors. These errors prevent the analysis from starting and cause your automation to fail. Before running your automation, [perform a prescan verification](https://docs.veracode.com/r/c_request_modules_scan) to identify and resolve any errors in your modules and files.

For build and release management systems, each scan in the same automation must upload the same top-level modules. If the top-level modules change between scans, all scans in the automation pause automatically. Before you can restart the automation, you must [review the changed or added modules](https://docs.veracode.com/r/Viewing_Changes_Between_File_Uploads) to ensure that all uploads include the same top-level modules.
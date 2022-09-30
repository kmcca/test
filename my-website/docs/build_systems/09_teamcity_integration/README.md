---
"ft:title" : "Veracode TeamCity Plugin"
"ft:prettyUrl" : "c_about_teamcity"
---
You can use the Veracode TeamCity Plugin to integrate Veracode security scanning into your build process.

You can use the plugin to perform these tasks:

-   Synchronously scan and provide results.
-   Stop the build if the Veracode scan results violate the security policy.
-   Run a scan in a sandbox.
-   Create an application profile if one does not already exist.

<p><span style="font-size: medium;">Prerequisites</span></p>

- Before you can install and use the Veracode TeamCity Plugin, you must meet the software requirements listed on the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix).
- Before uploading an application, you must package it to include the required debug symbols, as described in the [Veracode Packaging Requirements](https://docs.veracode.com/r/compilation_packaging). For a .NET application, use [Veracode Static for Visual Studio](https://docs.veracode.com/r/c_title_VS) to prepare a build. To automate building a .NET application, you can precompile it with the Microsoft Build Engine (MSBuild).
- You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
- You have one of these [account types](https://docs.veracode.com/r/c_about_veracode_accounts):
    - A user account with these [roles](https://docs.veracode.com/r/c_role_permissions): 
     
        - Creator or Security Lead role to be able to create application profiles, and upload and scan applications.
        - Submitter role to create a new scan for an existing application and upload and scan these applications.
        - Reviewer role to check scan completion.
        
    - An API service account with these [API roles](https://docs.veracode.com/r/c_API_roles_details): 
        - Upload API to create application profiles, create sandboxes, and upload and scan applications.
        - Upload API - Submit Only to submit scans.
        - Results API to check scan completion.
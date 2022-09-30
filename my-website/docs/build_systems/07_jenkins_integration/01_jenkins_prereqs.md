---
"ft:title" : "Veracode Jenkins Plugin Prerequisites"
"ft:prettyUrl" : "c_using_jenkins"
---
Before you can install and use the Veracode Jenkins Plugin, you must meet these prerequisites and have a [Veracode account](https://docs.veracode.com/r/c_about_veracode_accounts) with the required roles.

Starting with version 20.6.10.0 of the Veracode Jenkins Plugin, Veracode distributes the plugin as open source under an MIT license. You can download the plugin source code from [GitHub](https://github.com/jenkinsci). On the [Jenkins Marketplace](https://plugins.jenkins.io/) and in the Jenkins Plugin Manager, the plugin name is Veracode Scans.

<p><span style="font-size: medium;">Prerequisites</span></p>

- Installed a supported version of Jenkins and Java listed in the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix). Although there are additional Veracode Jenkins plugins available from the Jenkins server list of available plugins, Veracode only supports the Veracode-developed plugin available here. 
- Installed any dependencies on the Jenkins server. The Veracode Jenkins Plugin has a dependency on numerous plugins including the Jenkins Structs plugin and Jenkins Symbol Annotation plugin, as do most default installations of Jenkins. Newer versions of Jenkins automatically resolve these dependencies at the time of installation. If this fails, you must manually install the dependencies.
- Jenkins server has Internet connectivity.
- You have packaged the application code you plan to upload to Veracode for scanning to include the required debug symbols, as described in the [Packaging Guidance](https://docs.veracode.com/r/compilation_packaging). If you have a .NET application, you can use the [Veracode Visual Studio Extension](https://docs.veracode.com/r/c_title_VS) to prepare your application. You can also automate the preparation of a .NET application by [precompiling it with MSBUILD](https://docs.veracode.com/r/c_title_VS).
- Generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) 

<p><span style="font-size: medium;">Permissions</span></p> 

You have one of these accounts:
    
   - A [user account](https://docs.veracode.com/r/c_role_permissions) with these roles: 
     - Creator or Security Lead role to be able to create application profiles, and upload and scan applications
     - Submitter role to create a new scan for an existing application and upload and scan these applications
     - Reviewer role to check scan completion
       
   - An [API service account](https://docs.veracode.com/r/c_API_roles_details) with these API roles:
     -   Upload API to create application profiles, create sandboxes, and upload and scan applications
     -   Upload API - Submit only to submit scans
     -   Results API to check scan completion
---
"ft:title" : "Troubleshooting Precompilation Errors"
"ft:prettyUrl" : "c_comp_troubleshoot"
---

This topic lists the known errors reported to Veracode Technical Support, and provides solutions. If you encounter an error not listed here, contact Veracode Technical Support.

The two most common problem areas are sometimes related to the MSBuild path value in the preferences window. While the default selection is correct in most cases, there might be scenarios where you need to manually set the MSBuild path to another value.

**Error**: `Blank MSBuild Directory Field`

Explanation and Solution:

This error occurs if Veracode cannot determine where any version of MSBuild is installed. This scenario occurs if a custom Visual Studio installation location was chosen when installing Visual Studio.

In this scenario, copy the path to the version of MSBuild you want to use which typically is the latest version installed on your machine or a version corresponding to the edition of Visual Studio you are using. You can use the paths listed above as a guide for where to find MSBuild in your custom path location. It is possible that the `C:\Program Files (x86)\` is not the same for a custom installation location, so anything at the end of the path should be the same.

**Error**: `Publish Fails with One or More Errors Referencing only supported on MSBuild {version} and above`

Explanation and Solution:

In this case, Veracode may have found MSBuild but not the correct version for your scenario. As described in the description of the `Blank MSBuild Directory Field` error, find the path to the MSBuild version you need for your solution and paste the path into the MSBuild Directory field.

**Project-Less Templates**

Explanation and Solution:

Project-less templates were introduced with Visual Studio 2005 and are most often associated with web forms applications but can also include WCF services and special dynamic data projects.

Because the new publish functionality relies on MSBuild, project-less templates require you to choose the Use legacy precompilation method. The reason for this is that the legacy precompilation method uses hard-coded parameters, so it does not require additional MSBuild support.

**Error: `It is an error to use a section registered as allowDefinition='MachineToApplication' beyond application level`**

Explanation and Solution:

Update to the latest version of Veracode Static for Visual Studio. Contact Veracode Technical Support if this does not resolve the problem.

**Error: `Cannot find the valid AspnetMergePath [path to the local project]`**

Explanation and Solution:

This error can occur when precompiling ASPX Forms or MVC Views for .NET on a build server that does not have Visual Studio installed, or the server has a non standard configuration, which can happen if you use dedicated build servers.

To resolve this error, you must introduce an additional MSBuild parameter that provides the location where the `aspnet_merge.exe` file is located. The path should be the correct path for the version of the .NET framework you use:

`/p:AspnetMergePath=<path_to_folder_where_aspnet_merge.exe_is_located>`

The `aspnet_merge.exe` is usually located in a folder below the path `C:\Program Files(x86)\Microsoft SDKs\Windows\vXX.XX\bin`.

**Visual Studio error: `cannot load type" when using Veracode Static for Visual Studio.`**

Explanation and Solution:

There are three possible reasons for this error:

-   It is possible that the type name that cannot be found is not part of the current Visual Studio project, although it is in your environment, such as the build configuration management file system. To solve this, locate the module that the undefined type or variable name is defined in and add it to the solution. Rebuild and precompile again.
-   The second possible reason is that there is a misconfigured setting or a build error. To solve this, try cleaning, rebuilding, and reviewing the project properties.  
-   The third possibility is that a specific Microsoft .NET system DLL is not loading. For example, if the `System.Data.Entity.Design` assembly is not loading, add the following to the `web.config` file for the application's .NET solution:`<add assembly="System.Data.Entity.Design, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089" />`

These are some of the common reasons. Contact Veracode Technical Support for more details, if necessary.

**Visual Studio error: `error ASPPARSE: 'Cannot create unknown type'`**

Explanation and Solution:

In the Solution Explorer, a project references an assembly but the type is not part of the actual configuration-managed references visible to the VS solution's projects. You must add the reference component to the project.

To rectify this issue, in the Solution Explorer window:

1.  Locate the project that contains the file with the error.
2.  Remove the reference to the Project that contains the unknown type.
3.  Right-click **References** \> **Add references**.
4.  Add a reference to the project and not to the `.dll` produced by the project.

**Visual Studio concurrent scenarios:**

<ul>
<li>Upload and Scan (Incomplete) shows in the Veracode menu and in the Solution Files section for the application.</li>
<li>One or more sample project name (NOT FOUND) messages appear.</li>
<li>Unable to select the checkbox containing this project name.</li>
</ul>

Explanation and Solution:

Veracode Static for Visual Studio ran `aspnet_compiler.exe`, which did not successfully build the ASP.NET project. Review the contents of the Visual Studio Output and Error List windows to identify the errors causing the project to not build successfully. Then, correct the errors and rebuild using the key for Veracode Static for Visual Studio.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode requires you to supply all the forms the application uses. If you do not submit precompiled forms, the scan might produce incomplete or incorrect results.</p>

See [Packaging ASP.NET Web Applications](https://docs.veracode.com/r/compilation_ASPnet)

**Visual Studio error:** `<YourProjectName>\Global.asax: error ASPPARSE: Could not load type 'SampleTypeName.Web.Global'`

Explanation and Solution:

Update to the latest version of Veracode Static for Visual Studio. Contact Veracode Technical Support if this solution does not resolve the problem.

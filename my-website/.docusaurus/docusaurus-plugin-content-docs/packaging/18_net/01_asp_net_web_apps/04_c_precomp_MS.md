---
"ft:title" : "Precompiling ASP.NET WebForms and MVC Views with MSBuild"
"ft:prettyUrl" : "c_precomp_MS"
---

You can precompile ASP.NET WebForms and MVC Views using the Publish feature in Visual Studio. You automate the precompilation using the MSBuild command-line tool.

To automate with MSBuild, use Visual Studio to precompile your ASP.NET application and generate the PUBXML file, which is created in your **Properties** \> **PublishProfiles** folder in your ASP.NET Web project.

This is an example PUBXML file. You can download this copy: [https://tools.veracode.com/integrations/Microsoft/VisualStudio/update/VeracodePrecompileProfile.zip](https://tools.veracode.com/integrations/Microsoft/VisualStudio/update/VeracodePrecompileProfile.zip)

This table describes the PUBXML file values:

|Element|Value|
|---|---|
|`WebPublishMethod`|Set to `FileSystem` to specify that the precompiled files are written to the local filesystem.|
|`PublishProvider`|Required. Set to `FileSystem` so that the precompiled files are written to the local filesystem.|
|`LastUsedBuildConfiguration`|Set to `Debug`. This value is set by the Publish option in Visual Studio to track the last Build Configuration that the Veracode Platform used last time. You should set this value to the Build Configuration you need to target.|
|`LastUsedPlatform`|Set to `Any CPU`. This value is set by the Publish option in Visual Studio to track the last used platform. This value should be set to the platform the user needs to target.|
|`SiteUrlToLaunchAfterPublish`|N/A|
|`LaunchSiteAfterPublish`|N/A|
|`ExcludeApp_Data`|Set this value to the requirements for your project.|
|`publishUrl`|**Required** This value is the filepath where Veracode writes the precompiled assemblies. This value is the location where you pick up the files to zip up and upload to the Veracode Platform.|
|`PrecompileBeforePublish`|**Required** Set to `True` to precompile the ASPX WebForms or the CSHTML views.|
|`DeleteExistingFiles`|If set to `True`, the output directory publishUrl is purged before Veracode writes output to it. Veracode recommends that you purge the output directory.|
|`EnableUpdateable`|**Required** Set to `False`, otherwise the CSHTML View/ASPX WebForm is still editable, which results in new compilation and use of the View or WebForm.|
|`DebugSymbols`|**Required** You must set this to `True` to retain the debug symbols.|
|`WDPMergeOption`|**Required** You must set this to `CreateSeparateAssembly`, which instructs the compiler to create an assembly for each page or view.|
|`UseFixedNames`|**Required** You must set this to `True`, which instructs the compiler to allow all the separately created assemblies to start with the same name.|
|`UseMerge`|If present, you must set this value to `False`, you do not want to merge any of the output.|

Run MSBuild, providing the appropriate arguments for the CSPROJECT file and these properties:

-   `OutPutPath`
-   `DeployOnBuild`
-   `PublishProfile`

    You can also specify the `PublishProfile` property as a name instead of a path to a file. Other switches may be needed, depending on your environment and/or requirements.


<p><span style="font-size: medium;">Using a VS Project File to Precompile Without a PUBXML Configuration File</span></p>

There is a way to precompile and package ASP.NET WebForms and MVC Views without the PUBXML file.

The following example uses a CSPROJ file to precompile, merge, and then package it in a deployment ZIP file:

```
msbuild ContosoUniversity.csproj /p:OutputPath=bin /p:DeployOnBuild=true
/p:PublishProvider="FileSystem" /p:PrecompileBeforePublish=true /p:EnableUpdateable=false
/p:DebugSymbols=true /p:WDPMergeOption="CreateSeparateAssembly"
/p:UseFixedNames=true
```

You can use the above example to build a web project if you substitute the `.csproj` name and use these specific parameters and values from the command line:

```
msbuild ContosoUniversity.csproj /p:OutputPath=bin /p:DeployOnBuild=true
/p:PrecompileBeforePublish=true /p:EnableUpdateable=false /p:DebugSymbols=true
/p:WDPMergeOption="CreateSeparateAssembly" /p:WebPublishMethod="FileSystem"
/p:UseMerge=false
```

The ZIP file contains all the assemblies needed to deploy the web application. You can also upload this ZIP file to the Veracode Platform. Based on the command line in the example above, the deployment package is in a subfolder under the output path: `bin\_PublishedWebsites\ContosoUniversity_Package\ContosoUniversity.zip`.

<p><span style="font-size: medium;">Using a Solution File to Precompile Without a PUBXML Configuration File</span></p>

To use MSBuild directly on a Visual Studio solution file that has multiple projects, you must precompile with debug, as required by Veracode. For example:

```
msbuild ContosoUniversity.sln /t:Rebuild /tv:14.0
/p:OutputPath=bin /p:DeployOnBuild=true /p:WebPublishMethod=FileSystem
/p:PrecompileBeforePublish=true /p:EnableUpdateable=false /p:DebugSymbols=true
/p:UseMerge=false /p:DeleteAppCodeCompiledFiles=True /p:DeleteExistingFiles=True
/p:WDPMergeOption=CreateSeparateAssembly /p:UseFixedNames=true
```

Change the `/t:` and `/tv:` parameters to specify the required targets and the version of Visual Studio you are using. For example,`/tv:14.0` is Visual Studio 2015 and `/tv:12.0` is Visual Studio 2013. The target version parameter `/tv:` is not required for Visual Studio 2017 or later.

<p><span style="font-size: medium;">Using the Veracode API Wrappers from the Command Line</span></p>

Use the [uploadandscan](https://docs.veracode.com/r/c_wrapper_composite_actions) action from the API wrapper to help automate uploading the .NET application to Veracode.

---
"author": ["Scott Jordan"]
"ft:originID": "compilation_net"
"ft:lang": "en-US"
"ft:title": ".NET Application Packaging"
"ft:prettyUrl": "compilation_net"
"media_dir": "images/"
---
Your .NET applications must meet specific packaging and compilation requirements before you can submit them for scanning.

<p><span style="font-size: medium;">Supported .NET Languages and Technologies</span></p>

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis \(SCA\) upload and scan, if licensed. For SCA agent-based scan requirements, see [Using Veracode SCA with Programming Languages](https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages).

|Language|Platform|Supported Versions|
|----|----|----|
|C#, VB.NET|.NET/Windows<br>.NET Core<br>.NET Standard<br>.NET Portable Class Library|.NET 2.0, 3.0, 3.5, 4.0, 4.5–4.8, 5.0, 6.0<br>.NET Core 3.1 and earlier<br>.NET Standard 2.0–2.1|
|C++/CLI| .NET/Windows<br>.NET Core<br>.NET Standard<br>.NET Portable Class Library |.NET 2.0, 3.0, 3.5, 4.0, 4.5–4.8 (CLR 2.0)|
|<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> <a href="https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning">Initial support</a> for .NET 6.0.</p>|

Because Veracode analyzes compiled .NET bytecode, Veracode may discover results in applications written in other .NET languages, but these are not tested or supported. Specifically, Veracode does not support .NET applications that target the Dynamic Language Runtime.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode does not support static analysis of Self-Contained Deployment (SCD) .NET Core applications.</p>

You must upload JavaScript or other TypeScript components separately per the [Packaging Instructions for JavaScript and TypeScript](https://docs.veracode.com/r/compilation_jscript) even when using an integration such as Veracode Static for Visual Studio or the Veracode Azure DevOps Extension.

<p><span style="font-size: medium;">Packaging Guidance for .NET</span></p>

Applications must be packaged as EXE, DLL, NUPKG, or ZIP files.

Veracode cannot analyze a 32-bit module that has 64-bit dependencies, or vice versa. If your application has this architecture, rebuild it to ensure that the parent module and its dependencies are all either 32-bit or 64-bit, but not mixed.

Veracode requires debug symbols \(PDB files\) to be included with the application to accurately report the filenames and line numbers for findings.

For web applications, Veracode requires the [precompiled forms for your application](#net).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you submit satellite assemblies for analysis, Veracode does not display a module for any of these assemblies that contain only resource files and no code.</p>

Although Veracode can analyze .NET applications compiled with optimizations, the line numbers that report flaws may be incorrect. The optimization process restructures the application without updating the debug information that provides the line numbers. For most actionable results with correct line numbers, submit the application with optimization disabled.

For both debug and non-debug builds, Veracode can scan .NET code that you have obfuscated with Dotfuscator Community Edition. Do not use code obfuscation tools other than Dotfuscator Community Edition. Using other code obfuscation tools may prevent the static binary scan from succeeding.

<p><span style="font-size: medium;">Preparing Your .NET Application Using Veracode Static for Visual Studio</span></p>

Veracode provides the Visual Studio extension [Veracode Static for Visual Studio](https://docs.veracode.com/r/c_title_VS), which you can use to compile .NET 2.0 or later applications. Veracode recommends you use the extension to submit the precompiled forms that Veracode requires to successfully complete the scan. If you are not using Veracode Static for Visual Studio, set the debug symbols as described in the [Preparing .NET 2.0 and Later Applications section](#net2).

<p><span style="font-size: medium;">NuGet Packaging</span></p>

Veracode supports analyzing .NET applications packaged in the standard NuGet NUPKG format.

Veracode extracts executables for analysis from the highest version of the frameworks located in the lib directory. Veracode extracts executables from frameworks in order of the highest precedence. Veracode recognizes this framework precedence order:

-   `netstandard`
-   `net6`
-   `net5`
-   `netcoreapp`
-   `net`
-   `portable-net`
-   `MonoAndroid`
-   `Xamarin.iOS`
-   `Xamarin.Mac`
-   `Xamarin.tvOS`
-   `uap`
-   `tizen`
-   All others

The precedence order is case-insensitive. Before making the comparison to known frameworks values, Veracode strips all dot characters \(.\) from the framework name.

Veracode extracts all JavaScript files from the archive and displays them as separate modules.

<p><span style="font-size: medium;">Preparing Applications Based on .NET Core, .NET 5, and .NET 6</span></p>

You can use the .NET CLI to compile an application based on .NET Core, .NET 5, or .NET 6 and publish the output to a single folder. These applications include ASP.NET Core, WinForms, WPF, and Console. After compiling the application, you can include the folder containing the published output in a ZIP archive and upload the archive to Veracode for analysis. When you compile an ASP.NET Core application, the output includes all required precompiled views, pages, and static content.

To compile and publish a .NET Core, .NET 5, or .NET 6 application, run this command:

```
dotnet publish -c Debug -o <OutputFolder>
```

The command produces a runtime-dependent deployment in the specified output folder. The results include the PDB symbols.

For more information about .NET Core application publishing, see [https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-publish).

<p><span style="font-size: medium;">Preparing .NET Applications Using MSBuild</span></p>

You can automate the preparation of .NET applications using MSBuild if there are no web forms in the application. As a post-build action, you can use this example, which uses Visual Studio 2015:

```
msbuild <solution> /t:Rebuild /tv:14.0
               /p:Configuration=Debug
               /p:OutputPath=bin
```

More MSBuild examples are available at msdn.microsoft.com.

<a name ="net2"></a>
<p><span style="font-size: medium;">Preparing .NET 2.0 and Later Applications</span></p>

If you are submitting a debug build, ensure that you compile the binary files with these settings:

1.  From **Build** \> **Configuration Manager**, select **Debug**.
2.  Set **Configuration** to **Debug**.

    Refer to [msdn.microsoft.com](https://msdn.microsoft.com/en-us/library/wx0123s5(v=vs.140).aspx) for setting specific versions of Visual Studio for the Debug settings.

<a name ="net"></a>
<p><span style="font-size: medium;">Preparing .NET Web Applications \(ASP.NET\)</span></p>

Veracode requires you to supply all the forms the application uses and all the dependencies in the compiled form, which are the DLL, EXE, and PDB files. These analysis requirements are different from the deployment requirements because the ASP.NET server can compile these forms dynamically after deployment. If you do not submit precompiled forms, the scan can produce incomplete or incorrect results. See [Packaging ASP.NET Web Applications](https://docs.veracode.com/r/compilation_ASPnet).

Veracode recommends using [Veracode Static for Visual Studio](https://docs.veracode.com/r/c_title_VS) to precompile your ASP.NET forms for submission.

<p><span style="font-size: medium;">Packaging .NET-Based Azure Functions</span></p>

To compile and publish a .NET-based application using Azure Functions, run this command:

```
dotnet publish -c Debug -o <OutputFolder>
```

The command produces a runtime-dependent deployment in the specified output folder. The results include the PDB symbols.

<p><span style="font-size: medium;">Packaging AWS Lambda Applications</span></p>

Veracode requires you to submit applications built for AWS Lambda according to the AWS Lambda Deployment Package formats. For information, see [https://docs.aws.amazon.com](https://docs.aws.amazon.com) and search for AWS Lambda Deployment Package in C\#.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode does not support the analysis of dependencies submitted as <a href="https://docs.veracode.com/r/c_lambda_layers">Lambda layers</a>. To analyze Lambda components deployed in layers, submit them as standard deployment packages, or consider repackaging the function to include layers components as part of the function package.</p>

<p><span style="font-size: medium;">Identifying Lambda Handlers for .NET Languages</span></p>

A .NET Core Lambda deployment package consists of a ZIP file of the compiled assembly of a function with all of its assembly dependencies. When you develop a Lambda function using .NET, the generated archive contains a list of Amazon dependencies. The archive usually includes `Amazon.Lambda.*`, `Amazon.Lambda.Core.dll`, and `Amazon.Lambda.Serialization.Json`.

The analysis of Lambda functions relies on the identification of Lambda Handler methods. Veracode uses this set of heuristics to identify methods that can be candidates for handler methods:

-   All the public methods with one input parameter of type `Amazon.Lambda.*Events`\(`Amazon.Lambda.S3Events`, `Amazon.Lambda.KinesisEvents`, `Amazon.Lambda.SimpleEmailEvents` , ...\)
-   All public methods with the `System.IO.Stream` input parameter and `System.IO.Stream` output type
-   All public methods containing one input parameter of a primitive type, or a `Collection` or `POCO` type without references from the same deployment package

<p><span style="font-size: medium;">Preparing SharePoint Applications</span></p>

Veracode supports analysis of provider- or SharePoint-hosted add-ins, but does not support analysis of SharePoint Web Parts.

When you submit SharePoint-hosted add-ins for analysis, extract the JavaScript and CSS files from the WSP file created as part of the SharePoint build process, and submit the JavaScript and CSS files as a separate ZIP file.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode does not support analysis of uncompiled ASPX files.</p>

<p><span style="font-size: medium;">Preparing C++/CLI \(C+ on .NET\) Applications</span></p>

1.  In **General settings**, set **Debug Information Format** to **Program Database**\(/Zi\).
2.  In **General** \> **Common Language Runtime Support**, set **Common Language Runtime**

    **Support** \(/clr\).

3.  In **Code Generation Settings**, set **Basic Runtime Checks** to **Default** \(/RTC1\) and **Buffer Security Check** to **No** \(/GS-\).
4.  In **Linker General Settings**, set **Enable Incremental Linking** to **No** \(/INCREMENTAL:NO\).
5.  In **Linker Debugging Settings**, select **Generate Debug Info** \(/DEBUG\).
6.  In **Linker** \> **Advanced** \> **CLR Image Type**, select **Force IJW Image** \(/CLRIMAGETYPE:IJW\).
7.  In **Compiler/Optimization Settings**, select **Disabled** \(/Od\).
8.  In **C/C++** \> **Precompiled Headers** \> **Create/Use Precompiled Headers**, select **Not Using Precompiled Headers**.
9.  Save the generated PDB file, which is a required dependency.

<a name ="netframeworks"></a>

<p><span style="font-size: medium;">Supported .NET Frameworks and Technologies</span></p>

|Framework/Technology|Supported Versions|
|----|----|
|ADO.NET|3.0, 3.5, 4.0, 4.5|
|ASP.NET|2.0, 3.0, 3.5, 4.0, 4.5–4.8|
|ASP.NET Core|3.1 and earlier|
|ASP.NET MVC|3.x, 4.x, 5.x|
|ASP.NET Web API|5.2.3 and earlier|
|Autofac|6.0|
|AWS SDK for .NET|3.x|
|Azure Functions|2.x, 3.x|
|Blazor Server|5.0 and earlier|
|Blazor WebAssembly|5.0 and earlier|
|Dapper|All|
|Entity|4.x–6.x, Core 2.1|
|Log4Net|2.0.8 and earlier|
|LINQ|3.5| 4.0, 4.5|
|Microsoft Enterprise Library||
|.NET Compact Framework|1.0, 2.0, 3.x|
|.NET Micro Framework|2.0, 3.0, 4.x|
|.NET Remoting|1.1, 2.0, 3.0, 3.5, 4.0|
|Newtonsoft Json.NET|6.0|
|NHibernate||
|Nlog|4.6.x and earlier|
|Npgsql|2.2.3 and earlier|
|Oracle Data Provider for .NET (ODP.NET)|12c Release 4|
|Serilog|2.9.x and earlier|
|SharePoint - Add-Ins only|2010–2013|
|Telerik|Web UI for ASP.NET| version Q2 2013|
|Universal Windows Platform|10.x|
|Unity Container|3|
|Windows Communication Foundation (WCF) Rich Internet Application (RIA) services||
|Windows Communication Foundation|3.0, 3.5, 4.0|
|Windows Identity Foundation|3.0, 3.5, 4.0, 4.5|
|Windows Phone|7.x, 8.x|

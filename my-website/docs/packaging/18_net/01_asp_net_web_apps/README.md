---
"author": ["Scott Jordan"]
"ft:originID": "compilation_ASPnet"
"ft:lang": "en-US"
"ft:title": "ASP.NET Application Packaging"
"ft:prettyUrl": "compilation_ASPnet"
"media_dir": "images/"
---
Your .NET web applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

To analyze ASP.NET applications, Veracode requires you to supply all the forms the application uses and all the dependencies in the compiled form, which are the DLL, EXE, and PDB files. These analysis requirements are different from the deployment requirements because the ASP.NET server may compile these forms dynamically after deployment. If you do not submit precompiled forms, the scan may produce incomplete or incorrect results.

If the `roslyn` directory is present in your application, Veracode recommends you remove it.

You can [prepare your ASP.NET application](https://docs.veracode.com/r/c_precomp_VS) using Veracode Static for Visual Studio. Alternatively, you can precompile in Visual Studio. In Visual Studio, you use either the publish or deployment feature directly on the web projects. Veracode recommends that you use [Veracode Static for Visual Studio](https://docs.veracode.com/r/compilation_ASPnet#netvs) because it supports both 32- and 64-bit architecture projects. It can also manage multiple web projects at the same time.

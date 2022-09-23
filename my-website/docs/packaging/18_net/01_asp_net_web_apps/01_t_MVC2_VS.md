---
"ft:title" : "Precompile ASP.NET Core MVC Views with Visual Studio 2017 or Later"
"ft:prettyUrl" : "t_MVC2_VS"
---
You can use Veracode Static for Visual Studio to precompile and publish your ASP.NET Core web applications.

This section explains how to use the file Publish functionality in Visual Studio 2017 or later to manually produce a precompiled views DLL file. You can also automate the precompilation using the [MSBuild command-line tool](https://docs.veracode.com/r/c_precomp_MS).

This procedure applies to precompiling an application using Visual Studio using ASP.NET Core MVC 2.0.

<p font-size="13pt"><b>Steps</b></p>

1.  From the **Solution Explorer**, right-click the web application project file and select **Publish...**.

2.  Verify the **Configuration** is set to **Debug**.

3.  From the **Publish** tab of your web application, create a folder, and click **Publish**.

    The output folder contains the application binaries in combination with the precompiled views.

4.  After precompiling the web application, zip the folder containing the published output, and upload it to the Veracode Platform by clicking **Add** in the Additional Files section.

5.  Scan the folder used for the precompilation file output.

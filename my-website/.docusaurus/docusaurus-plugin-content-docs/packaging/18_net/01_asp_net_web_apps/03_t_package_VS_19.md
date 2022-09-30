---
"ft:title" : "Publish ASP.NET Applications with Visual Studio 2019 or Later"
"ft:prettyUrl" : "Publish_ASP.NET_Applications_with_Visual_Studio_2019_or_Later"
---

You can use the native Microsoft Publish utility in Visual Studio 2019 to prepare binaries and publish them for a specific project. You can then upload the files to Veracode for scanning. This procedure is an alternative to using Veracode Static for Visual Studio.

<p font-size="13pt"><b>Overview</b></p>

This procedure applies to compiling an application with Visual Studio using ASP.NET Core MVC 2.0.

For information about Visual Studio, see [https://docs.microsoft.com/en-us/visualstudio/](https://docs.microsoft.com/en-us/visualstudio/).

<p font-size="13pt"><b>Steps</b></p>

1.  From the Visual Studio Solution Explorer, right-click the web application project file and select **Publish...**

    The Publish page opens, showing the current settings.

2.  Click **Show all settings**.

    The Publish All Settings page opens.

3.  Click the **Connection** tab.

4.  From the Publish method dropdown menu, select **File System**.

5.  Enter the filepath where you want to publish the web files and click **Next**.

6.  Click the **Settings** tab.

7.  In the Settings window, select the build configuration.

    Veracode recommends these settings:

    -   Configuration: **Debug**
    -   Deployment Mode: **Framework-Dependent**
    -   Target Runtime: **Portable**

8.  Under File Publish Options, select or clear the option **Delete all existing files prior to publish**. <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
  <b>Note:</b> When you select this option, Visual Studio deletes all existing files from the location you chose when you publish. This step makes it easier for you to find the most recent DLL to upload, however, because it deletes pre-existing files, be careful when deciding the publish location.</p>

9.  Click **Save**.

10. On the Publish page, click **Publish** to deploy the compiled files.

<p font-size="13pt"><b>Results</b></p>

You can now browse to the bin directory in the published web files folder and upload them to Veracode.

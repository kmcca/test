---
"ft:title" : "Precompiling ASP.NET Files with Visual Studio"
"ft:prettyUrl" : "c_precomp_VS"
---

This procedure is an alternative to compiling your ASP.NET applications using Veracode Static for Visual Studio.

<p font-size="13pt"><b>Overview</b></p>

You can use the native Microsoft Publish utility in Visual Studio to prepare binaries for a specific project in the Visual Studio solution. To precompile and deploy ASP.NET files for uploading to Veracode, you can use this procedure with Visual Studio 2005 and later.

<p font-size="13pt"><b>Steps</b></p>

1.  In the Visual Studio Solution Explorer, locate the web project you want to precompile.
2.  Right-click the project and select **Publish**.
3.  In the Profile page, click the dropdown profile menu and select **<New Profile...\>**.
4.  Enter a profile name and click **OK**.
5.  In the Connection page, from the Publish method dropdown menu, select **File System**.
6.  Enter the filepath where you want to publish the precompiled web files, and click **Next**.
7.  In the Settings page, from the Configuration dropdown menu, select the appropriate build configuration.
8.  Expand the File Publish Options menu, and select all three items.<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
  <b>Note:</b> The first item, when selected, deletes all existing files from the location you chose above. This step makes it easier for you to find the most recent DLL to upload, however, as it does delete pre-existing files, be careful when deciding the publish location.</p>

9.  Click the **Configure** link in the Precompile during publishing list item.

10. In the Advanced Precompile Settings popup:

    a.  Clear **Allow precompiled site to be updateable**.

    b.  Select **Emit debug information**.

    c.  Select **Do not merge. Create a separate assembly for each page and control**.

11. Click **OK**.
12. Click **Publish** to deploy the precompiled files.

You can now browse to the `bin` directory in the published precompiled web files folder and upload them to Veracode.

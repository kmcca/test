---
"ft:title": "Upload Files for Analysis Using Visual Studio (Legacy)"
"ft:prettyUrl": "c_uploading_build_VS"
---
After using Veracode Static for Visual Studio to create a Veracode build of your application, you can upload the build to a new or existing [application profile](https://docs.veracode.com/r/request_profile) in your Veracode portfolio.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [prerequisites for Veracode Static for Visual Studio](https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio).

<p font-size="13pt"><b>Steps</b></p>

1. In Visual Studio, select **Extensions** > **Veracode Static** \> **Upload and Scan**.

2. If prompted, enter your [Veracode API ID and key](https://docs.veracode.com/r/c_api_credentials3). Select the checkbox to store your credentials so that you only have to enter them once.

3. In the Upload and Scan window, from the Application dropdown menu, select the application for which you want to upload binaries. To add an application, click **Add Application** and enter the required information such as policy control and organization information.

4. Complete all the fields in the Add Application window and click **Save**.

    In the Upload and Scan window, the application you just added is preselected and the Create Scan window opens.

5. Click **Create Scan**.

6. In the Create Scan window, enter the name for the new scan and, optionally, the lifecycle stage.

7. Click **Create**.

8. In the Solution Files pane, select the solution files you want to upload.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> For web applications built on ASP.NET 3.0 Core and later, there is an executable that duplicates the artifacts included in the upload to the Veracode Platform. In your web application project, you must deselect the duplicate executable to exclude it from the upload, or you see an error and the Veracode Platform initiates a manual module selection.</p>

9. If necessary, select any files in the Additional Files section that you also want to scan. The files can include additional application components that are not built in the solution, such as compiled files from another solution or components built in another language.

10. Select **Upload**.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> You cannot upload binaries if Veracode is currently scanning an application. After the scan results are available, you can add more files.</p>

    Veracode expects the name of the uploaded file to be the same between scans of the same application. However, because filenames can change between builds of the same code, you can change the filename before uploading to keep the name consistent. If Veracode indicates that the filenames are not the same, click the New Filename column to rename the file, so that it matches the previous name for the same file.

11. When prompted to confirm, click **Yes** to continue the upload.

12. Click **Yes** to go directly to the Veracode prescan process after the upload completes. If you do not want the full scan to continue automatically, click **No**.

13. Click **Begin Prescan** at the top of the Upload Files table.

    Files you have previously uploaded to the selected scan already appear in the Uploaded Files section.

14. When the prescan is complete, click **View Prescan Results** at the top of the Upload Files table.

    Veracode notifies you when your scan is complete and results are available.

15. At the prompt, click **OK** to start the prescan of the files when the upload has completed. If you click **No**, you must click the **Start Prescan** link on the Upload and Scan page.

    After the prescan verification completes successfully, the scan begins automatically.

<p font-size="13pt"><b>Results</b></p>

If there is an error during prescan:

1. In the Upload and Scan window, click **View Prescan Results**.
2. In the Prescan Verification Results window, select the files you want to scan.
3. Select the modules that are independent components, which you need to scan in their entirety. Leave the checkboxes for third-party components or dependencies cleared.
4. Click **Yes** to start the scan.
 
If you encounter an error when uploading a build, in Visual Studio, in the Options window, select **Source Control** \> **Environment**. Then, verify that **Saving** and **Editing** are set to **Check out automatically**.
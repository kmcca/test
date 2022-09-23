---
"ft:title" : "Upload Binaries from Within Eclipse"
"ft:prettyUrl" : "c_Eclipse_upload"
---
You can upload binaries of your applications to Veracode from within Eclipse.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the [Upload and Scan API role](https://docs.veracode.com/r/c_API_roles) or [Submitter role](https://docs.veracode.com/r/c_role_permissions). To obtain detailed findings information in your scan results, the builder you use to package your code must generate debug symbol information.

<p font-size="13pt"><b>Steps</b></p>

1.  In Eclipse, select **Veracode** \> **Upload and Scan**.

2.  If prompted, enter your [Veracode API ID and key](https://docs.veracode.com/r/c_api_credentials3). Select the checkbox to store your credentials so that you only have to enter them once.

3.  In the Upload and Scan window, from the Application dropdown menu, select the application for which you want to upload binaries. To add an application, click **Add Application** and enter the required information such as policy control and organization information.

4.  After adding an application, go to the Upload and Scan window and select **Policy Scan** for Scan Type.

5.  Click **Create Scan**.

6.  In the Create Scan window, enter the name for the new scan and, optionally, the lifecycle stage.

7.  Click **Create**.

8.  In the Workspace Files table, use the browse icon ![](../../images/browse_icon.png) to select the files you want to upload from your current projects.

9.  Click **Add** to select any files not associated with a current project.

10. Select **Upload**.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> You cannot upload binaries if Veracode is currently scanning an application. After the scan results are available, you can add more files.</p>

    Veracode expects the name of the uploaded file to be the same between scans of the same application. However, because filenames can change between builds of the same code, you can change the filename before uploading to keep the name consistent. If Veracode indicates that the filenames are not the same, click the New Filename column to rename the file, so that it matches the previous name for the same file.

11. When prompted to confirm, click **Yes** to continue the upload.

12. Click **Yes** to go directly to the Veracode prescan process after the upload completes. If you do not want the full scan to continue automatically, click **No**.

13. Click **Begin Prescan** at the top of the Upload Files table.

    Files you have previously uploaded to the selected scan already appear in the Uploaded Files section.

14. To delete previously uploaded files, select the specific files and click **Delete**. You cannot delete files that Veracode is currently scanning until the scan results are available. The status of a scan always appears in the top bar of the window.

15. When the prescan is complete, click **View Prescan Results** at the top of the Upload Files table.

    Veracode notifies you when your scan is complete and results are available.
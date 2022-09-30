---
"ft:title" : "Use Sandboxes with Veracode Static for Eclipse"
"ft:prettyUrl" : "c_Eclipse_sandbox"
---
You can create a sandbox into which you upload your application files from within Eclipse. You can then scan your application from the sandbox.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the [Upload and Scan API role](https://docs.veracode.com/r/c_API_roles) or [Submitter role](https://docs.veracode.com/r/c_role_permissions). To obtain detailed findings information in your scan results, the builder you use to package your code must generate debug symbol information.

<p font-size="13pt"><b>Steps</b></p>

1.  In your IDE, select **Veracode** \> **Upload and Scan**.

2.  If prompted, enter your [Veracode API ID and key](https://docs.veracode.com/r/c_api_credentials3). Select **Store username and password** so that you only have to enter your credentials one time.

3.  From the Application dropdown menu, select an application.

4.  In the Scan Type field, select **Sandbox Scan**.

5.  Click **Create Sandbox** and enter a name for the sandbox.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> If you do not see the **Create Sandbox** button, contact Veracode Technical Support to enable this feature for your account.</p>

6.  In the Workspace Files table, click the browse icon ![](../../images/browse_icon.png) to select the files to upload from your current projects. Click **Add** to select any files not associated with a current project.

7.  Click **Upload** and, then, click **Yes** to confirm that you want to proceed with the upload.

8.  Click **Yes** to go directly to the Veracode prescan process after the upload completes. If you do not want the full scan to continue automatically, click **No**. Then, click **Begin Prescan** at the top of the Upload Files table.

9.  After the prescan completes, click **View Prescan Results** to review the results.


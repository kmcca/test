---
"ft:title" : "Debug Prescan Files in Error Status"
"ft:prettyUrl" : "Debug_Prescan_Files_in_Error_Status"
---
You can debug prescan files if your uploaded files are in error status.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have the [Upload and Scan API role](https://docs.veracode.com/r/c_API_roles) or [Submitter role](https://docs.veracode.com/r/c_role_permissions). To obtain detailed findings information in your scan results, the builder you use to package your code must generate debug symbol information.

<p font-size="13pt"><b>Steps</b></p>

1.  In your IDE, close the Prescan Verification Results window or click **No** at the bottom of the window.

2.  Go back to **Veracode** \> **Upload and Scan**.

3.  If necessary, delete problematic binary files that you have previously uploaded, re-upload properly compiled binary files, or upload missing dependencies.

4.  Click **Begin Prescan** in the top-right of the window.

    The prescan completes.

5. At the bottom of the window, click **Yes** to start the full scan.
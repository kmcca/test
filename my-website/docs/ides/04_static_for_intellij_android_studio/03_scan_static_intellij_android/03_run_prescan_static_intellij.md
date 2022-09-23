---
"ft:title" : "Run a Prescan from Within IntelliJ or Android Studio"
"ft:prettyUrl" : "c_intellij_prescan"
---
You can begin a prescan of your application binaries immediately after you upload all files to Veracode. Prescans send email notifications when they complete. You can also check for prescan results using the [`getprescanresults.do`](https://docs.veracode.com/r/r_getprescanresults) call.

<p font-size="13pt"><b>Before You Begin</b></p>

- You must have the [Upload and Scan API role](https://docs.veracode.com/r/c_API_roles) or [Submitter role](https://docs.veracode.com/r/c_role_permissions). To obtain detailed findings information in your scan results, the builder you use to package your code must generate debug symbol information.
- You have [uploaded your files to Veracode for scanning](https://docs.veracode.com/r/c_Eclipse_upload).

<p font-size="13pt"><b>Steps</b></p>

1.  Select **Yes** in the window that opens.

    Prescan results appear in the Prescan Verification Results window informing you if the prescan succeeded or failed.

2.  If the prescan succeeded, select the checkbox in the Scan? column and click **Yes** at the bottom of the window.
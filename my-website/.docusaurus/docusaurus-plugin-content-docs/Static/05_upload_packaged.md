---
"ft:title" : "Upload a Packaged Application"
"ft:prettyUrl" : "t_upload_packaged"
---
When uploading applications to Veracode for scanning, follow the Veracode packaging recommendations.

<p font-size="13pt"><b>Before You Begin</b></p>

Veracode enforces these limits for uploaded files:

|Upload Limit|Value|
|------------|-----|
|Largest individual file you can upload|2 GB|
|Total maximum size of all the uploaded files that Veracode can analyze in a single scan|5 GB|
|Total number of files that Veracode can analyze in a single scan|50,000 files|

If you have any problems uploading files, contact Veracode Technical Support.

Include any non-standard or third-party libraries needed to resolve references. Do not upload cross-platform files or upload applets, which Veracode does not scan. Veracode recommends that you create separate [application profiles](https://docs.veracode.com/r/request_profile) for each version of the application on the Veracode Platform and scan each profile separately.

<p font-size="13pt"><b>Steps</b></p>

1.  From the Upload Files page, click **Select Files**.

2.  Browse to the directory containing the compiled files or binaries, including their dependencies.

3.  Click **Upload**.

4.  Repeat this process until you have selected all the required files.

    To upload a collection of files, upload a ZIP, TAR, or TAR.GZ archive. You can also drag and drop one or more files to the Upload Files page.

5.  After uploading your files, click **Next** at the bottom of the page.

<p font-size="13pt"><b>Result</b></p>

After uploading your application for static analysis, Veracode performs a [prescan](https://docs.veracode.com/r/Understanding_Prescan_Verification) verification.

---
"ft:title": "XML API Tutorial: How to Scan an Application"
"ft:prettyUrl": "c_TUTOR_upload"
---
This tutorial steps you through using the [Upload XML API](https://docs.veracode.com/r/c_about_upload_API) to automate the scanning of an application using the HTTPie command-line tool. This guide uses standalone HTTP request calls, but you can combine them in an API wrapper to run multiple API calls.

<p font-size="13pt"><b>Prerequisites</b></p>

You must meet the [prerequisites for using the Upload API](https://docs.veracode.com/r/c_about_upload_API).

<p font-size="13pt"><b>Steps</b></p>

1.  If your application already exists, proceed to the next step. Run ths this command to create an application profile for the application you want to scan:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/createapp.do" "app_name==<your application name>" "business_criticality==<enter level>
    ```

    Where indicated, insert your application name and level of business criticality of the application. Refer to the [`createapp.do`](05_createapp_do.md) call for more information on these parameters. The returned `appinfo.xml` file contains the application ID number, which you need when using other calls.

2.  Enter this command to upload the file you want to scan:

    ```shell
    http --auth-type=veracode_hmac POST -f "https://analysiscenter.veracode.com/api/5.0/uploadfile.do" "app_id==<your application ID>" "file@<your path and filename>" "save_as==<new name for your app file>"
    ```

3.  Where indicated, insert your application ID, and filename. Optionally, use the `save_as` parameter to give your application file a new name on the Veracode Platform.

4.  For the `file` parameter, enter the `@` symbol first followed by the path and filename.

    Optionally, you can call [`createbuild.do`](06_createbuild_do.md) if you want to name the scan.

5.  Start the prescan of the uploaded file by entering:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/beginprescan.do" "app_id==<your application ID>"
    ```

    Where indicated, insert your application ID.

6. Check if the prescan completed by entering this request:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getbuildinfo.do" "app_id==<your application ID>"
    ```

    Where indicated, insert your application ID.

7.  Access the prescan results to know if it succeeded, allowing you to run the full scan. At this point you can add additional files using `uploadfile.do`, if necessary, but you can only do this if you have not set `auto_scan` to true as part of the `beginprescan.do` call. To start the scan, from the command line, enter:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getprescanresults.do" "app_id==<your application ID>"
    ```

    Where indicated, insert your application ID. The returned `prescanresults.xml` document contains the prescan details. For more information about the prescan results, go to [API Prescan Status Information](22_xml_api_prescan_status.md). For more information on build status messages, see [API Build Status Information](23_xml_api_buildinfo_table.md).

8.  If your prescan succeeds, start the full scan by entering:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/beginscan.do" "app_id==<your application ID>" -F "scan_all_top_level_modules==true"
    ```

    Where indicated, insert your application ID.

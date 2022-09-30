---
"ft:title": "XML API Tutorial: How to Use the Mitigation Calls"
"ft:prettyUrl": "c_TUTOR_mitigate"
---
This tutorial steps you through using the Mitigation and Comments API. This guide uses standalone HTTP request calls, but you can combine them in an API wrapper to process multiple API calls.

<p font-size="13pt"><b>Prerequisites</b></p>

Before you can access and use the APIs, your Veracode user account must have the [required permissions](https://docs.veracode.com/r/c_API_roles_details).

<p font-size="13pt"><b>Steps</b></p>

1.  To flag a flaw found in scan results as a false positive, from the command line, enter:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/updatemitigationinfo.do" "build_id==<your build ID>" "action==fp" "comment==<your comment text>" "flaw_id_list==<your flaw IDs>
    ```

    Where required, enter the build ID, which you can get from the `buildlist.xml` returned by the `[getbuildlist.do](r_getbuildlist.md)` call. Also, enter a comma-separated list of flaw IDs, which you find in the Triage Flaws page for that application in the Veracode Platform. You can also find the flaw IDs in the [detailedreport.xml](../03_results_xml_apis/04_detailedreportpdf_do.md) file.

2.  To create a list of builds of your chosen application, enter:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getbuildlist.do" "app_id==<your application ID>"
    ```

    Replace `your application ID` with the ID returned from `applist.xml` in the previous step. The returned `buildlist.xml` from this step contains the IDs of the builds for the application, such as:

    ```xml
    <buildlist>
          <build build_id="49894" version="5.0"/>
    </buildlist>
    ```

2.  To accept a flaw found in scan results, enter:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/updatemitigationinfo.do" "build_id==<your build id>" "action==accepted" "comment==<your comment text>" "flaw_id_list==<your flaw IDs>"
    ```

    Where required, enter the build ID and a comma-separated list of flaw IDs.
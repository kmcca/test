---
"ft:title": "API Tutorial: How to Access Scan Results"
"ft:prettyUrl": "t_TUTOR_results"
---
This tutorial provides basic step-by-step information on how to use the Veracode Results API to automate the retrieval of application scan results using the HTTPie command-line tool. This guide uses standalone HTTP request calls, but you can combine them in an API wrapper to process multiple API calls.

<p font-size="13pt"><b>Prerequisites</b></p>

Before you can access and use the APIs, your Veracode user account must have the [required permissions](https://docs.veracode.com/r/c_API_roles_details).

<p font-size="13pt"><b>Steps</b></p>

1.  From the command-line, request the list of applications in your portfolio by entering the following:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getapplist.do"
    ```

    The returned `applist.xml` returns a list of application IDs and names, such as `app app_id="18766"` `app_name="MyApp"`.

2.  Obtain the list of builds for your chosen application.

    -   For policy scan results, enter the following command, using the application ID returned in the previous step:

        ```shell
        http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getbuildlist.do" "app_id==<your application ID>"
        ```

        The returned `buildlist.xml` from this step contains the IDs of the builds for this application.

    -   For sandbox scan results, enter the following command to obtain the IDs for your sandboxes, using the application ID returned in the previous step:

        ```shell
        http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getsandboxlist.do" "app_id==<your application ID>"
        ```

        When you have the ID for the chosen sandbox, enter the following command to obtain the build IDs for that sandbox:

        ```shell
        http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/getbuildlist.do" "app_id==<your application ID>" "sandbox_id==<your sandbox ID>"
        ```

3.  To obtain the detailed report for your chosen build, enter:

    ```shell
    http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/5.0/detailedreport.do" "build_id==<the policy or sandbox build ID>
    ```

    Where indicated, insert the ID for the target application build or sandbox scan. Locate the build ID from the `buildlist.xml` or `sandboxlist.xml` returned in the previous step.



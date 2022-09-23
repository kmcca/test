---
"ft:title" : "About Pipeline Scan Prerequisites"
"ft:prettyUrl" : "About_Pipeline_Scan_Prerequisites"
---
Your environment must meet specific prerequisites before you can successfully upload your packaged application to Veracode and run Pipeline Scans.

- An active Veracode Static Analysis license.
- One of these [Veracode accounts](https://docs.veracode.com/r/c_about_veracode_accounts):

    -   A user account with these [user roles](https://docs.veracode.com/r/c_role_permissions):
        -   Creator or Security Lead to create application profiles and upload and scan applications.
        -   Submitter role to create a new scan for an existing application and upload and scan these applications.
    -   An API service account with these [API roles](https://docs.veracode.com/r/c_API_roles_details):
        -   Upload and Scan API to create application profiles and upload and scan applications.
        -   Upload API - Submit Only to submit scans.
    A Veracode account is limited to six Pipeline Scans per 60 seconds and each scan is limited to a maximum scan time of 60 minutes.

- You have generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). You can provide your credentials to the Pipeline Scan with the [command parameters](04_r_pipeline_scan_commands.md) or with a [Veracode API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file).
- You have installed Java 8 or later.
- You have access to a development or test pipeline to which you can add the Pipeline Scan. If you do not have access to a pipeline, you can [try running the Pipeline Scan from the command line](04_t_run_first_pipeline_scans_desktop.md).
- The application you want to scan:
 
    - Builds successfully.
    - Does not exceed the total file size limit of 200 MB.
    - Meets the [packaging requirements](https://docs.veracode.com/r/c_comp_quickref). The Pipeline Scan supports applications built on these languages:
        - .NET
        - Android
        - Cordova
        - Groovy
        - Java
        - JavaScript
        - Kotlin
        - PHP
        - Python
        - React Native
        - Scala
        - Titanium

          <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"> <b>Note:</b> You cannot use the Pipeline Scan if the source-code language for your application is not supported.</p>

- If you are using authenticated HTTPS proxy connections, you have configured the proxy settings using this format:

    ```java
    java -Dhttps.proxyHost=<myproxy> -Dhttps.proxyPort=<myport> -Dhttps.proxyUser=<myuser> -Dhttps.proxyPassword=<mypass>
    ```

---
"ft:title": "Upload XML APIs"
"ft:prettyUrl": "c_about_upload_API"
---
You can use the Veracode Upload API to create an application, upload binary modules, check prescan results, and submit a static scan request.

For example, you can call the Upload API from your build system to automatically send a new build to Veracode for analysis as soon as the build finishes.

The Veracode Upload API is a basic HTTPS-based request API that uses simple HTTP calls. For performance reasons, the Upload API automatically compresses large XML files using Gzip, if your requesting tool supports it. Veracode recommends that you use a user agent that supports Gzip to access the Upload API. To learn about how to use the Upload API, read the [tutorial](24_xml_api_upload_tutorial.md).

<p><span style="font-size: medium;">Prerequisites</span></p>

Before using the Upload API, you must meet these prerequisites:

-   An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Upload and Scan API role or a [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with one of these roles:
    -   If using the Visual Studio extensions, you need the [Upload and Scan API role](https://docs.veracode.com/r/c_API_roles_details) to add a new application.
    -   The [Creator role](https://docs.veracode.com/r/c_role_permissions) can create an application profile.
    -   The [Submitter role](https://docs.veracode.com/r/c_role_permissions) can submit a scan request.
    -   The [Security Lead role](https://docs.veracode.com/r/c_role_permissions) can perform all tasks.
-   [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
-   Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).
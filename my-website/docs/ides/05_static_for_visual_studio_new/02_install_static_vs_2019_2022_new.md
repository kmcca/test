---
"ft:title": "Install Veracode Static for Visual Studio"
"ft:prettyUrl": "Install_Veracode_Static_for_Visual_Studio_New"
---

 <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> This topic is for the new Veracode Static for Visual Studio released April 2022. For the legacy versions of Veracode Static for Visual Studio, see <a href="https://docs.veracode.com/r/c_title_VS">Veracode Static for Visual Studio (Legacy)</a>.</p>

You can install the extension from the Visual Studio Marketplace.

<p font-size="13pt"><b>Before You Begin</b></p>

- You must have [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) to access Veracode, and create an [API credentials file](https://docs.veracode.com/r/t_configure_credentials_windows) on Windows.
- You must have one of these account types:
 
    - A [user account](https://docs.veracode.com/r/c_role_permissions) with these roles:
        - Creator or Security Lead role to create builds of your applications with the necessary Veracode settings
        - Submitter role to upload scans to Veracode
        - Sandbox User role to create sandboxes to use with the extension
        - Reviewer role to check scan completion, propose mitigations, and import results to Visual Studio
        - Mitigation Approver role to approve mitigations
    - An [API service account](https://docs.veracode.com/r/c_API_roles) with these API roles:
        - Upload and Scan API to create application profiles, create sandboxes, and upload and scan applications
        - Upload API - Submit only to submit scans
        - Mitigation API to mitigate flaws found in applications
        - Results API to download, import, and view Veracode results

- If you have Veracode Static for Visual Studio 2015-2019 version 4.3 or earlier installed, you must uninstall it or update it to version 4.3 before installing this extension. You can run both version 4.3 and greater and this extension in the same IDE.

<p font-size="13pt"><b>Steps</b></p>

Download and install the extension from the Visual Studio Marketplace:

- [Visual Studio 2019](https://marketplace.visualstudio.com/items?itemName=Veracode.StaticForVs2019)
- [Visual Studio 2022](https://marketplace.visualstudio.com/items?itemName=Veracode.StaticForVs2022)
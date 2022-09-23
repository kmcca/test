---
"ft:title": "Prerequisites for Veracode Static for Visual Studio (Legacy)"
"ft:prettyUrl": "Permissioning_Veracode_Static_for_Visual_Studio"
---
Before you can use Veracode Static for Visual Studio, you must have:

- Installed a supported version of Visual Studio listed on the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix). If you have Visual Studio 2022 or 2019, there is a [new Veracode Static for Visual Studio](https://docs.veracode.com/r/About_Veracode_Static_for_Visual_Studio_New).
- Generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) and added them to an [API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file).
- One of these [account types](https://docs.veracode.com/r/c_about_veracode_accounts):
    
    - A user account with these [roles](https://docs.veracode.com/r/c_role_permissions):
        -   Creator or Security Lead role to create builds of your applications with the necessary Veracode settings
        -   Submitter role to upload scans to Veracode
        -   Sandbox User role to create sandboxes to use with the extension
        -   Reviewer role to check scan completion, propose mitigations, and import results to Visual Studio
        -   Mitigation Approver role to approve mitigations
    - An API service account with these [API roles](https://docs.veracode.com/r/c_API_roles):
        -   Upload and Scan API to create application profiles, create sandboxes, and upload and scan applications
        -   Upload API - Submit Only to submit scans
        -   Mitigation API to mitigate flaws found in applications
        -   Results API to download, import, and view Veracode results

    If you do not have an account with these roles, you receive access denial errors.
- If you are using Visual Studio 2019 with .NET Framework version 4.8, you must [disable an option in Visual Studio to ensure scan results display correctly in the IDE](https://docs.veracode.com/r/t_vs_config_2019_results).
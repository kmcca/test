---
"ft:title" : "Veracode Greenlight Prerequisites"
"ft:prettyUrl" : "Meet_Veracode_Greenlight_Prerequisites"
---
Before you can use Veracode Greenlight, you must have:

- Enabled the Veracode Greenlight feature. Contact Veracode Technical Support to enable this feature.
- Installed a supported IDE and any dependencies, such as Java, listed on the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix).
- Installed the Greenlight plugin for your IDE:
 
    - [Eclipse](https://docs.veracode.com/r/t_install_greenlight)
    - [IntelliJ or Android Studio](https://docs.veracode.com/r/t_install_GL_intellij)
    - [Visual Studio](https://docs.veracode.com/r/t_install_visualstudio)
    - [VS Code](https://docs.veracode.com/r/t_green_vs_code_install)
 
- A [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with the [Greenlight IDE User role](https://docs.veracode.com/r/c_role_permissions).
- Generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). Veracode recommends creating an [API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file) for storing your credentials outside the IDE. If you have an API credentials file, and your file and credentials are valid, the Greenlight plugin detects the file automatically and you can authenticate with Veracode.
- Connected your IDE to the public internet.
- If using a proxy, configured the required proxy settings for your IDE.
- Access to the source code you want to scan, the module containing the source code, and any dependency modules compile successfully. Non-minified code has not had unnecessary characters, such as white space, new lines, comments, and block delimiters removed.
- Confirmed your scan submissions are 1MB or smaller.
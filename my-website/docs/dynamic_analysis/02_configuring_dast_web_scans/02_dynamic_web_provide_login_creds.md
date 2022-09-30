---
"ft:title" : "Add Login Credentials to a Dynamic Analysis"
"ft:prettyUrl" : "t_was_login_creds"
---
You can add your login credentials to a Dynamic Analysis for accessing the web application or API specification at the specified URLs.

<p font-size="13pt"><b>Steps</b></p>

1. Log in to the Veracode Platform.

2. Select **Scans & Analysis** \> **Dynamic Analysis**.

3. Select **Scan Web Application**, **Scan API Specification**, or select an existing Dynamic Analysis you want to configure.
 
4. On the URL configuration page, in the Authentication section, select the **Required** option.

5. Auto-login is the default. Enter the username and password.

6. If your application requires [additional authentication](https://docs.veracode.com/r/c_was_login_settings), such as basic authentication \(browser-generated\) or a login script, select the checkbox for that option and enter the configuration settings.

7. For advanced use cases, you can use these combinations of authentication methods:

    - If you want to replace auto-login authentication with an explicit login script, record your login sequence script with Selenium IDE using [supported Selenium commands](https://docs.veracode.com/r/Selenium_Commands_Supported_in_Dynamic_Analysis). This is an advanced option that you only need to configure for complex sites on which auto-login fails.

        Save your JSON in the SIDE file format and upload it in the Login Script section. HTML file format is also supported, however, you must upload test suites in the SIDE file format. Optionally, you can also provide a logout script.

        <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If you do not use Selenium, the scripts may not work.</p>

    - You can use the combination of auto-login and basic authentication methods when your site uses both web page-based login \(auto-login\) and a browser-generated login \(basic authentication/NTLMv2\), but with different credentials for each method. This advanced use case is not typical. Veracode uses the username and password you enter for auto-login for web page-based login, and the username, password, and domain you provide for basic authentication is for browser-generated logins and NTLMv2.
    - Another advanced use case you can use is the combination of login-script and basic authentication methods.
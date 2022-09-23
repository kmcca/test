---
"ft:title": "Configure Multifactor Authentication for Your New User Account"
"ft:prettyUrl": "t_configure_mfa"
---
If your administrator configured your account to require multifactor authentication, you must set up your authentication method the first time you log in to the Veracode Platform.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have an [activated account](https://docs.veracode.com/r/t_activate_account) that requires multifactor authentication.

<p font-size="13pt"><b>Steps</b></p>

1.  Go to [https://analysiscenter.veracode.com](https://analysiscenter.veracode.com).

2.  Enter your username and password.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> Your username is most likely your email address.</p>

3.  Click **Log in**.

4.  Click **Setup** under your authentication method.

    You can use the **Google Authenticator** option for any TOTP-compliant authentication application, such as Duo Mobile.

5.  Complete the additional steps for your authentication method:

    - If you select **Okta Verify** or **Google Authenticator**, select your mobile device type and follow the authentication instructions.
    - If you select **Security Key or Biometric Authenticator**, click **Enroll** and, then, insert the USB key or initiate the built-in authenticator setup.

<p font-size="13pt"><b>Next Steps</b></p>

You must enter a code for the selected authentication method every time you [log in to the Veracode Platform](https://docs.veracode.com/r/t_log_in_platform).
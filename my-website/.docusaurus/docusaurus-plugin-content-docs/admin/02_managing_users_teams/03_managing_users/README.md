---
"author": ["Kevin McCarthy"]
"ft:title": "Managing Users"
"ft:prettyUrl": "admin_user"
---

This section explains user settings, user administration, and how to create new users of the Veracode Platform, Veracode APIs, and integrations.

To manage users, go to the Admin menu in the upper-right corner of the Veracode Platform. Then, select **Admin**. From the Administration page, click the **Users** tab.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You must have the Administrator  <a href="https://docs.veracode.com/r/c_role_permissions">role</a> to access the <b>Admin</b> link.
</p>

From the **Users** tab, you can:

-   [Create new users](https://docs.veracode.com/r/t_create_users)
-   [Update existing users](https://docs.veracode.com/r/t_manage_user)
-   [Reset a user password](https://docs.veracode.com/r/t_reset_password)
-   [View a user activity log](https://docs.veracode.com/r/t_activity_log)
-   [Remove a user](https://docs.veracode.com/r/t_remove_user)

<p><span style="font-size: medium;">About Veracode User Security</span></p>

Veracode offers four authentication methods to keep a user login secure:

-   [Strong passwords](https://docs.veracode.com/r/using_password): Required unless you are using SAML.
-   [Multifactor authentication](https://docs.veracode.com/r/t_configure_mfa): Optional. Administrators can configure a [user account](https://docs.veracode.com/r/c_about_veracode_accounts) to require the use of a second authentication factor for login.
-   [Single sign-on via SAML](https://docs.veracode.com/r/about_saml): Optional. Administrator can create a trust relationship between their organization's identity provider and Veracode, and configure individual users to authenticate via SAML.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You cannot combine this option with a Veracode-provided token.
</p>

-   Restricted IP ranges: Optional. [Administrators](https://docs.veracode.com/r/admin_api) can restrict the IP addresses or ranges from which the user is allowed to log into the Veracode Platform.

You can choose any of the optional methods, or combine them where appropriate, to keep the appropriate level of security on your data.

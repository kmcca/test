---
"ft:title" : "Configuring API Users in the Veracode Platform"
"ft:prettyUrl" : "admin_api"
---

You can configure two types of user accounts that can access the Veracode APIs: user accounts and API service accounts.

A [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with the required role permissions can access the [Results XML API](https://docs.veracode.com/r/c_results_main), [Upload XML API](https://docs.veracode.com/r/c_about_upload_API), and the [Mitigation and Comments XML API](https://docs.veracode.com/r/c_using_mitigat_API).

In addition, if you have the Administrator role, you can define users who can only access the Veracode APIs. These users are only able to log into the Veracode Platform to manage their Veracode account and [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). For all other tasks, these users must use the Veracode APIs.

<p font-size="13pt"><b>Steps</b></p>

1.  Click the gear icon ![](../../images/gear_icon_platform.png) in the upper-right corner of the Veracode Platform and, then, select **Admin**.
2.  On the **Users** tab, click **Add New User**.
3.  Enter a descriptive first and last name.
4.  Select the **Non-Human User** checkbox.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You cannot change an existing user account to an API service account. You must create a new user account and select the <b>Non-Human User</b> checkbox.
</p>

5.  Provide a valid email address for the API service account. Veracode uses this email address to send notifications about error messages, password expirations, and other automated success and error messages.
6.  Optionally, [define the IP range restrictions](https://docs.veracode.com/r/admin_ip) for the user.
7.  In the User Roles section, select the APIs that you want the API service account to access.
8.  Click **Save** to create and enable the user.

<p font-size="13pt"><b>Results</b></p>

After saving the account, the user receives an activation email. After activating the account, before the user can use the Veracode APIs, they must generate [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) and [enable HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac).

<p><span style="font-size: medium;">Troubleshooting</span></p>

If the IP range is set incorrectly, the API user is not able to log in. If you do not know the IP range for the API user, use the [Activity Log](https://docs.veracode.com/r/t_activity_log) to see the IP address from which the API user is attempting to log in, then grant access to that IP range.

<p><span style="font-size: medium;">Resetting Password for an API User</span></p>

The process for [requesting a password reset](https://docs.veracode.com/r/t_reset_password) is the same for user accounts and API service accounts.


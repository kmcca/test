---
"ft:title" : "Configure SAML Self-Registration (Legacy)"
"ft:prettyUrl" : "Configure_SAML_Self_Registration_Legacy"
---

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>  If you are using the new Single Sign-on and Just-In-Time Provisioning feature, see <a href="https://docs.veracode.com/r/Configure_SAML_Self_Registration">Configure JIT Provisioning</a>.
</p>

<p font-size="13pt"><b>Before You Begin</b></p>

-  [Enable SAML authentication](https://docs.veracode.com/r/about_saml).
-  Configure your identity provider to add the [required attributes](https://docs.veracode.com/r/about_saml_selfregister) to your assertion.
-  Add any optional attributes to the assertion that your identity provider can include.

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, click the gear icon ![](../../images/gear_icon_platform.png) in the top menu and select **Admin**.
2.  Click the **SAML** tab.
3.  Ensure you have provided the settings for [SAML single sign-on](https://docs.veracode.com/r/about_saml).
4.  Select **Enable Self Registration**.
5.  Choose if self-registered users require activation with these options:

   - Activation Required: an administrator must approve the self-registered user before the user can log in. The user is notified when their registration is approved.

       <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode plans to deprecate the <b>Activation Required</b> option and recommends that you do not use this option.
</p>

    - No Activation Required: when users self-register, they are directly logged in to the Veracode Platform.

6.  Choose how the Veracode Platform handles conflicts between data in the SAML assertion and data in the Veracode Platform with these options:

   - Use SAML Assertion Data: the Veracode Platform is updated with whatever data is in the SAML assertion. This setting allows the identity provider to automatically update fields that may change, such as email address, phone number, or last name.

   - Prefer Veracode User Data: the Veracode Platform ignores any changes of data in the SAML assertion.

7.  Choose which default attributes to set on individual users. Veracode requires that you either specify the default Veracode user role in the SAML attributes or the SAML assertion data. If you do not require activation for all newly registered users, set a default user role, otherwise the user cannot log in.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Some attributes may not be populated if they are not available. Additional SAML attributes include the user roles, which specify which scan types the user is allowed to perform.
</p>

8.  Click **Save**.

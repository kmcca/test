---
"ft:title" : "Configure JIT Provisioning"
"ft:prettyUrl" : "Configure_SAML_Self_Registration"
---

<p font-size="13pt"><b>Before You Begin</b></p>

-  [Enable SAML authentication](https://docs.veracode.com/r/about_saml).
-  Configure your identity provider to add the [required attributes](https://docs.veracode.com/r/about_saml_selfregister) to your assertion.
-  Add any optional attributes to the assertion that your identity provider (IdP) can include.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, click the gear icon ![](../../images/gear_icon_platform.png) in the top menu and select **Admin**.
2. Click the **JIT Provisioning** tab.

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You cannot make changes to this tab unless you have provided the settings on the <b>SAML</b> tab.
</p>

3. In Organization Settings, set **Configure default settings for Just-In-Time user provisioning** to **On**.
   1. In User Data Updates, choose how the Veracode Platform handles conflicts between data in the SAML assertion and data in the Veracode Platform with these options:

       - **Prefer Organization Identity Provider Data**: the IdP of the organization controls the configuration of the user. The Veracode Platform is updated with the data that is in the SAML assertion. This setting allows the IdP to automatically update fields that may change, such as email address, phone number, last name, roles, and team assignments.

         <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
         <b>Note:</b> After you set this option, you cannot update users with the Identity APIs because the identity provider controls all user information.
         </p>

       - **Prefer Veracode User Data**: the Veracode Platform ignores any changed data in the SAML assertion.

4. Choose which default attributes to set on individual users. Veracode requires that you either specify the default Veracode user role in the SAML attributes or the SAML assertion data. If you do not set a default user role, the user cannot log in.

5. Click **Save**.

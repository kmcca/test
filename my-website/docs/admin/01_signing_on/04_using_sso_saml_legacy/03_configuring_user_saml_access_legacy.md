---
"ft:title" : "Configure a User for SAML Access (Legacy)"
"ft:prettyUrl" : "Configure_a_User_for_SAML_Access_Legacy"
---

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>  If you are using the new Single Sign-on and Just-In-Time Provisioning feature, see <a href="https://docs.veracode.com/r/Configure_a_User_for_SAML_Access">Configure a User for SAML Access</a>.
</p>

Using SAML authentication requires that a user account has a user record in the Veracode Platform.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>  When you set the login type in the Veracode Platform to SAML, you cannot change it back to the password login type.
</p>

<p font-size="13pt"><b>Steps</b></p>

1.  [Create a new user](https://docs.veracode.com/r/admin_user) or [update an existing user](https://docs.veracode.com/r/t_manage_user) using the Administration page in the Veracode Platform, or the [Identity API](https://docs.veracode.com/r/c_identity_intro).
2.  Select **SAML** in the Login Type field, or set the `saml_user` property to `true` for the [Identity API](https://docs.veracode.com/r/c_identity_create_human).
3.  Set the SAML Subject field (`saml_subject` in the Identity API) to the value that the SAML assertion passed in to identify the user. This value is usually the user email address or corporate login ID.
4.  When creating a new user, you can also set the [user roles](https://docs.veracode.com/r/c_role_permissions) and allowed scan types.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you set a SAML assertion for a user who has the Team Admin role, you must also set the <a href="https://docs.veracode.com/r/about_saml_selfregister"><code>teamsmanaged</code> attribute</a>.
</p>
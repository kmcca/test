---
"author": ["Kevin McCarthy"]
"ft:title" : "Using SAML for Self-Registration (Legacy)"
"ft:prettyUrl" : "about_saml_selfregister_Legacy"
---

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>  If you are using the new Single Sign-on and Just-In-Time Provisioning feature, see <a href="https://docs.veracode.com/r/about_saml_selfregister">Using SAML for JIT Provisioning</a>.
</p>

You can use SAML self-registration to provision new users or update existing user records.

By using SAML self-registration, you can use a SAML assertion to provision a new user in the Veracode Platform. SAML self-registration eliminates the need for preliminary provisioning of users. If SAML self-registration is available, you can sign in to the Veracode Platform using SAML and have a login automatically created with default roles and privileges. You can choose to allow self-registered users to access the Veracode Platform immediately or require approval before they can access it.

SAML self-registration also allows you to update existing user records with fresh information from your identity provider. If there are changes to the first or last name of a user, phone number, or email address, your identity provider automatically propagates these values to Veracode without requiring administrator intervention.

SAML self-registration takes advantage of the SAML specification support for optional attributes in the SAML XML document. Veracode requires specific attributes for using SAML self-registration. You can add other attributes to populate additional data for new or existing records.

<p><span style="font-size: medium;">Required and Optional SAML Attributes</span></p>

Veracode recognizes these SAML attributes as containing information for SAML self-registration. The attributes `firstname`, `lastname`, and `email` are required. You can provide the other attributes to supply additional information about the user to Veracode. Veracode requires that you either specify the default Veracode user role in the SAML attributes, or you [choose to use SAML assertion data](#SAMassert), in which you must specify the Veracode user role.

| Attribute                     | Description                                                                                                                                                                                                                                                                       |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `firstname` <br>**Required**  | First name of the user.                                                                                                                                                                                                                                                           |
| `lastname`  <br>**Required**  | Last name of the user.                                                                                                                                                                                                                                                            |
| `email`      <br>**Required** | Email address of the user.                                                                                                                                                                                                                                                        |
| `roles`                       | Comma-separated list of valid [Veracode roles](https://docs.veracode.com/r/c_role_permissions). If not provided here, you must specify the default user roles using [SAML assertion data](https://docs.veracode.com/r/Configure_SAML_Self_Registration).                          |
| `teams`                       | Comma-separated list of teams to which the newly registered users are assigned. If you do not provide this information using the `teams` attribute, you must specify the default teams using [SAML assertion data](https://docs.veracode.com/r/Configure_SAML_Self_Registration). |
| `teamsmanaged`                | Comma-separated list of teams managed by the [team administrator](https://docs.veracode.com/r/c_role_permissions).                                                                                                                                                                |
| `hasiprestriction`            | Set to `TRUE` if the user is restricted to a certain IP range. Requires that you enter a value for `ipaddresslist`.                                                                                                                                                               |
| `ipaddresslist`               | The IP range to which the user is restricted for login.                                                                                                                                                                                                                           |
| `customone`                   | Custom Field One.                                                                                                                                                                                                                                                                 |
| `customtwo`                   | Custom Field Two.                                                                                                                                                                                                                                                                 |
| `customthree`                 | Custom Field Three.                                                                                                                                                                                                                                                               |
| `customfour`                  | Custom Field Four.                                                                                                                                                                                                                                                                |
| `customfive`                  | Custom Field Five.                                                                                                                                                                                                                                                                |

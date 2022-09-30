---
"author": ["Kevin McCarthy"]
"ft:title" : "Using SAML for JIT Provisioning"
"ft:prettyUrl" : "about_saml_selfregister"
---

You can use Just-In-Time (JIT) provisioning to provision new users or update existing user records.

By using JIT provisioning, you can use a SAML assertion to provision a new user in the Veracode Platform. JIT provisioning allows you to create Veracode users automatically the first time they attempt to access the Veracode Platform. If JIT provisioning is available, you can sign in to the Veracode Platform using SAML and have a login automatically created with default roles and privileges.

JIT provisioning also allows you to update existing user records with fresh information from your identity provider. If there are changes to the first or last name of a user, phone number, or email address, your identity provider automatically propagates these values to Veracode without requiring administrator intervention.

JIT provisioning takes advantage of the SAML specification support for optional attributes in the SAML XML document. Veracode requires specific attributes for using JIT provisioning. You can add other attributes to populate additional data for new or existing records.

<p><span style="font-size: medium;">Required and Optional SAML Attributes</span></p>

Veracode recognizes these SAML attributes as containing information for SAML self-registration. You provide these attributes to supply additional information about the user to Veracode. Veracode requires that you either specify the default Veracode user role in the SAML attributes, or you [choose to use SAML assertion data](https://docs.veracode.com/r/Configure_SAML_Self_Registration), in which you must specify the Veracode user role.

| Attribute                                           | Description                                                                                                                                                                                                                                                                       |
|-----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `firstname` <br>**Required**                        | First name of the user.                                                                                                                                                                                                                                                           |
| `lastname`  <br>**Required**                        | Last name of the user.                                                                                                                                                                                                                                                            |
| `email`      <br>**Required**                       | Email address of the user.                                                                                                                                                                                                                                                        |
| `subjectConfirmationRecipient`     <br>**Required** | The [target URL](https://docs.veracode.com/r/Configuring_Your_Organization_Identity_Provider_for_SAML).                                                                                                                                                                           |
| `roles`                                             | Comma-separated list of valid [Veracode roles](https://docs.veracode.com/r/c_role_permissions). If not provided here, you must specify the default user roles using [SAML assertion data](https://docs.veracode.com/r/Configure_SAML_Self_Registration).                          |
| `teams`                                             | Comma-separated list of teams to which the newly registered users are assigned. If you do not provide this information using the `teams` attribute, you must specify the default teams using [SAML assertion data](https://docs.veracode.com/r/Configure_SAML_Self_Registration). |
| `teamsmanaged`                                      | Comma-separated list of teams managed by the [team administrator](https://docs.veracode.com/r/c_role_permissions).                                                                                                                                                                |
| `hasiprestriction`                                  | Set to `TRUE` if the user is [restricted to a certain IP range](https://docs.veracode.com/r/admin_ip). Requires that you enter a value for `ipaddresslist`.                                                                                                                                                               |
| `ipaddresslist`                                     | The IP range to which the user is restricted for login.                                                                                                                                                                                                                           |
| `customone`                                         | Custom field one.                                                                                                                                                                                                                                                                 |
| `customtwo`                                         | Custom field two.                                                                                                                                                                                                                                                                 |
| `customthree`                                       | Custom field three.                                                                                                                                                                                                                                                               |
| `customfour`                                        | Custom field four.                                                                                                                                                                                                                                                                |
| `customfive`                                        | Custom field five.                                                                                                                                                                                                                                                                |
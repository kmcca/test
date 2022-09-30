---
"author": ["Kevin McCarthy"]
"ft:title" : "Using Single Sign-On with SAML (Legacy)"
"ft:prettyUrl" : "about_saml_legacy"
---

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>  If you are using the new Single Sign-on and Just-In-Time Provisioning feature, see <a href="https://docs.veracode.com/r/about_saml">Using Single Sign-On with SAML</a>.
</p>


You can enable users in your organization to use single sign-on and configure SAML access for users.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>  When you set the login type in the Veracode Platform to SAML, you cannot change it back to the password login type.
</p>

The Veracode Platform supports single sign-on (SSO) using the SAML 2.0 standard. To enable SAML on the Veracode Platform for your organization, you must request it in an email to Veracode Technical Support at support@veracode.com. After enabling their organization to use SSO with SAML, Veracode users with the Administrator role can [configure their organization account](https://docs.veracode.com/r/Configuring_Your_Organization_Account_for_SAML) and [user accounts](https://docs.veracode.com/r/Configure_a_User_for_SAML_Access) for single sign-on. Required information for [configuring the organization identity provider to work with Veracode](https://docs.veracode.com/r/Configuring_Your_Organization_Identity_Provider_for_SAML) is also provided.

After you enable SAML single sign-on, you can take advantage of other capabilities, such as [SAML-based user self-registration](https://docs.veracode.com/r/about_saml_selfregister).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> To prevent being completely locked out of Veracode if your SAML environment becomes inaccessible, Veracode recommends that your organization <a href="https://docs.veracode.com/r/t_create_users">creates at least one user with the Administrator role that logs in with a username and password</a>.
</p>

<p><span style="font-size: medium;">What is SAML?</span></p>

SAML (Security Assertion Markup Language) is an open standard for performing single sign-on across security domains, for example, from an organization to a cloud service such as Veracode. SSO with SAML usually works as follows:

1.  You click a link to Veracode on your corporate intranet site.
2.  Browser forwards a SAML assertion to Veracode. The assertion is a digitally-signed XML document that attests to your identity.
3.  Veracode checks the validity of the assertion by verifying the digital signature and the expiration date, then compares the information in the assertion to the list of users in the organization account.
4.  If the assertion is valid and you match a known Veracode user, you continue to the Veracode Platform.

Veracode has implemented the portions of the SAML standard that manage authentication. Veracode must still provision your account before you can use the service. The best way to automate provisioning for large numbers of users is to leverage the [Admin API](https://docs.veracode.com/r/c_identity_create_human).

For more information about SAML, see these websites:

-   [SAML \(Wikipedia topic\)](http://en.wikipedia.org/wiki/SAML)
-   [saml.xml.org](http://saml.xml.org/): open community site on SAML
---
"ft:title" : "Configuring Your Organization Account for SAML"
"ft:prettyUrl" : "Configuring_Your_Organization_Account_for_SAML"
---

Contact Veracode Technical Support to enable your organization account to use SAML for single sign-on. After enabling SAML for your organization, users with the Administrator [role](https://docs.veracode.com/r/c_role_permissions) for your organization see a **SAML** tab on the Administration page.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> When you change your SAML settings, make sure you delete the existing certificate and upload a new one before saving your changes.
</p>

The **SAML** tab contains four parameters, two of which are required:

**Issuer (required)**

Unique identifier of the identity provider that is passed in the assertion in the `Issuer` element of the assertion. The issuer in the assertion must match the value in the Veracode Platform to be valid for your organization.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The issuer automatically populates when your organization is activated for SAML. You cannot edit it after it is set.
</p>

**IdP Server URL (optional)**

URL of the identity provider server for your organization. The Veracode Platform attempts to redirect a SAML user to this URL upon timeout, if the URL is provided.

**Custom Error Page URL (optional)**

Enter a URL here to redirect your users to a custom error page in the event of an authentication error.

**Assertion Signing Certificate (required)**

Browse to and upload the certificate with which assertions are signed. You see the expiration date for the certificate after you upload it. Users cannot sign in after the certificate expires.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> When you change your SAML settings, make sure you delete the existing certificate and upload a new one before saving your changes.
</p>

Click **Save**.
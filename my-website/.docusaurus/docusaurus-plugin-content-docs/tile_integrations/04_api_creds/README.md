---
"ft:title": "Generating Veracode API Credentials"
"ft:prettyUrl": "c_api_credentials3"
---
[Veracode accounts](https://docs.veracode.com/r/c_about_veracode_accounts) use Veracode API credentials to access the [Veracode APIs](https://docs.veracode.com/r/c_gettingstarted) and some [integrations](https://docs.veracode.com/r/c_veracode_integrations). Authenticating users with API credentials provides improved security and session management for accessing the APIs.

You can generate Veracode API credentials for use with both [user accounts](https://docs.veracode.com/r/c_role_permissions) and [API service accounts](https://docs.veracode.com/r/c_API_roles_details). The credentials are comprised of an API ID and API key pair.

Using Veracode API credentials ensures the most secure communication between your client and Veracode when using the Veracode APIs. Security features include HMAC signatures to ensure the identity of the requester, a nonce to prevent replay attacks, and the ability to revoke credentials that may have become compromised.

After generating Veracode API credentials, you use these for logging in to the Veracode APIs and integrations without using a separate API service account. You can also use these credentials for single sign-on with SAML. You can only have one API ID and key pair at a time per Veracode user. If you generate new credentials, Veracode automatically revokes the previous credentials. An administrator can revoke user credentials at any time.

Veracode sends an email notifying you when your Veracode API credentials are expiring one week before the expiration date and another one the day before the expiration date.

To use Veracode API credentials, Veracode recommends you use the [Veracode API wrappers](https://docs.veracode.com/r/c_about_wrappers), [HTTPie with the appropriate Veracode Authentication Library](https://docs.veracode.com/r/c_httpie_tool), or one of the [Veracode IDE integrations](https://docs.veracode.com/r/c_ide_intro).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode does not support using cURL from the command line to access Veracode APIs.</p>
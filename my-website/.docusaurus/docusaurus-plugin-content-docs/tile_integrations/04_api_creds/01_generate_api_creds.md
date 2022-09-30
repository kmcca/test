---
"ft:title": "Generate Veracode API Credentials"
"ft:prettyUrl": "t_create_api_creds"
---
You must generate [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) before you can use the APIs and some integrations.

<p font-size="13pt"><b>Overview</b></p>

If you use single sign-on with SAML, you can use the ID and key credentials instead of having to use a separate Veracode Platform [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) to access the APIs.

You can also generate Veracode API credentials with the [Identity APIs](https://docs.veracode.com/r/c_identity_gen_creds).

<p font-size="13pt"><b>Steps</b></p>

1.  Log in to the Veracode Platform.

2.  From the user account dropdown menu, select **API Credentials**.

3.  Click **Generate API Credentials**.

4.  Copy the ID and secret key to a secure place. Veracode recommends storing your credentials in an [API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file).

<p font-size="13pt"><b>Results</b></p>

You can only see these credentials this one time. You have the choice of setting them as environment variables or putting them in a credentials file. When you leave this page you cannot review your current credentials. The creation of new credentials revokes any old credentials after 24 hours. You can always [revoke Veracode API credentials](https://docs.veracode.com/r/t_revoke_creds), if necessary. The credentials expire in one calendar year. If you want to extend the credentials beyond the expiration date, contact Veracode Technical Support at support@veracode.com.

After you create Veracode API credentials, you can use these credentials to automatically log in to Veracode APIs and plugins without using a separate [API service account](https://docs.veracode.com/r/c_API_roles) to be able to access the APIs.


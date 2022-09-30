---
"ft:title": "Admin XML APIs (Deprecated)"
"ft:prettyUrl": "c_about_admin_API_intro"
---
The Veracode Admin API enables you to automate administration tasks such as creating and managing users and teams in the Veracode Platform and obtaining reference information about your organization.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode has deprecated the Admin XML APIs for user and team management. End-of-support for these APIs is scheduled for June 30, 2023. You must update your automations to use the <a href="https://docs.veracode.com/r/c_identity_intro">Identity REST APIs</a>. Also, <a href="https://docs.veracode.com/r/Configure_SAML_Self_Registration">enabling the Single Sign-on and Just-in-Time Provisioning feature</a> automatically disables the Admin XML APIs for user management.</p>

For example, you can use a script to mass create users, mass assign users to teams, or deprovision many users at once. You can also use the Admin API to automatically connect Veracode to the directory for you your organization (LDAP or Active Directory), so that as changes occur in your directory, such as adding or terminating employees, those changes are automatically reflected in your user list in Veracode.

The Veracode Admin API is a basic HTTPS-based request API that uses simple HTTP calls and returns data in XML format. You can use any technology that supports making HTTP calls and parsing XML to access the API. For performance reasons, the Admin API automatically compresses large XML files using Gzip if your requesting tool supports it. You are strongly encouraged to use a user-agent that supports Gzip to access the Admin API. You can use any tool that supports HTTP to test the API.

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalents of these calls are available with the [Identity API](https://docs.veracode.com/r/c_identity_intro). Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Prerequisites</span></p>

-   An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Admin API role or a [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Administrator role
-   Generated [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3)
-   Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).


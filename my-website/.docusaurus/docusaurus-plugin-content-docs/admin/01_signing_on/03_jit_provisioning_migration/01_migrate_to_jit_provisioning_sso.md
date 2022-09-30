---
"ft:title" : "Migrate to JIT Provisioning for SSO"
"ft:prettyUrl" : "Migrate_to_JIT_Provisioning_for_SSO"
---

You must work with Veracode Support and your identity provider (IdP) to migrate your organization to the new Single Sign-on and Just-In-Time (JIT) Provisioning feature.

<p font-size="13pt"><b>Before You Begin</b></p>

- If your organization has any automation using the Admin APIs, update it to use the [Identity APIs](https://docs.veracode.com/r/c_identity_intro).
- Contact Veracode Support to activate the new **SAML** and **JIT Provisioning** tabs in your Veracode organization.
- Retrieve [the URLs for your organization](https://docs.veracode.com/r/Configuring_Your_Organization_Identity_Provider_for_SAML) from the SAML tab in the Veracode Platform.

<p font-size="13pt"><b>Steps</b></p>

1. Provide the URLs retrieved from the **SAML** tab to your identity provider (IdP) administrator, which is usually your IT organization.
2. Have your IdP administrator create a test service using the new URLs. Depending on your IdP service, this might manifest as a new tile with a name like Veracode Test.
3. Have multiple users click the test tile to validate that the configuration for single sign-on and JIT provisioning are correctly configured.
4. After testing is complete, promote the testing service settings to your production service.

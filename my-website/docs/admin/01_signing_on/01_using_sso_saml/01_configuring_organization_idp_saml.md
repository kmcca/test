---
"ft:title" : "Configuring Your Organization Identity Provider for SAML"
"ft:prettyUrl" : "Configuring_Your_Organization_Identity_Provider_for_SAML"
---

While identity provider technologies vary, most require some information about the Veracode Platform to know how to properly construct and forward the SAML assertion. This information should be configured in your identity provider (IdP):

**Relaystate URL**

`https://web.analysiscenter.veracode.com/login/#/saml`

**Audience  URL**

Provided on the SAML tab of the Administration screen on the Veracode Platform

**Target URL**

Provided on the SAML tab of the Administration screen on the Veracode Platform

**SAML version supported**

2.0

**SAML binding supported**

HTTP Post

**SAML profile supported**

IdP-initiated SSO

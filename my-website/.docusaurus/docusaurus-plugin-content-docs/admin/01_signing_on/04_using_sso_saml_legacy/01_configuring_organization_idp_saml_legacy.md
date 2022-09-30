---
"ft:title" : "Configuring Your Organization Identity Provider for SAML (Legacy)"
"ft:prettyUrl" : "Configuring_Your_Organization_Identity_Provider_for_SAML_Legacy"
---

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>  If you are using the new Single Sign-on and Just-In-Time Provisioning feature, see <a href="https://docs.veracode.com/r/Configuring_Your_Organization_Identity_Provider_for_SAML">Configuring Your Organization Identity Provider for SAML</a>.
</p>

While identity provider technologies vary, most require some information about the Veracode Platform to know how to properly construct and forward the SAML assertion. This information may be required by your identity provider:

**SAML Assertion Consumer Service (ACS) URL**

The [SAML ACS domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs)

**EntityID**

Unique identifier for the service provider. Veracode recommends using the SAML entity ID URL for your region:

| SAML Entity ID URL                         | Region                             |
|--------------------------------------------|------------------------------------|
| `https://analysiscenter.veracode.com/saml` | United States Region. The default. |
| `https://analysiscenter.veracode.eu/saml`  | European Region                    |
| `https://analysiscenter.veracode.us/saml`  | United States Federal Region       |

**SAML version supported**

2.0

**SAML binding supported**

HTTP Post

**SAML profile supported**

IdP initiated SSO

---
"ft:title": "Allowing Veracode Domains and IP Addresses"
"ft:prettyUrl": "IP_addresses"
---
If you block internet addresses in your organization, Veracode recommends that you allow Veracode domains and, in some limited cases, IP addresses to ensure there is no disruption in your ability to access Veracode features and products. If you have questions, contact support@veracode.com.

If your organization requires that you allow every domain and subdomain for your users to have access to Veracode, add these URLs and IP addresses to your allowlist to avoid disruption in service, based on the products you use:

**All Veracode products - Core user interface**

-   `https://analysiscenter.veracode.com`
-   `https://ui.analysiscenter.veracode.com`
-   `https://login.analysiscenter.veracode.com`
-   `https://web.analysiscenter.veracode.com`
-   `https://analytics2.veracode.com`

**All Veracode products - Documentation and assistance**

-   `https://docs.veracode.com`
-   `https://community.veracode.com`
-   `https://pendo.veracode.com`
-   `https://cdn.pendo.veracode.com`
-   `https://app.pendo.veracode.com`
-   `https://app.pendo.io`

    Veracode sends anonymized user data to a third-party telemetry service, as described in [About Telemetry](#telemetry).

**All Veracode products - APIs and integrations**

-   `https://analysiscenter.veracode.com`
-   `https://api.veracode.com`
-   `https://tools.veracode.com`
-   `https://downloads.veracode.com`
-   `https://hub.docker.com`

    The Veracode Platform and Veracode APIs are available from [region-specific domains](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs) that you also need to add to your allowlist.

**All Veracode products - Access from outside the United States**

-   `*.okta.com`
-   `*.mtls.okta.com`
-   `*.oktacdn.com`
-   `*.okta-emea.com`
-   `*.mtls.okta-emea.com`

**All Veracode products - IP address rules**

-   `162.159.128.36`
-  ` 162.159.129.36`

**Veracode Dynamic Analysis**

`34.195.146.191`

**Veracode Integration for Jira Cloud**

`https://jira-cloud-addon.integrations.veracode.com`

**Veracode eLearning**

`https://elearning.veracode.com`

**Veracode Manual Penetration Testing**

`pt.analysiscenter.veracode.com`

**Veracode Security Labs**
   
- `https://securitylabs.veracode.com`
- `https://*.vsl.dev`

**Veracode Software Composition Analysis**

-   `https://sca.analysiscenter.veracode.com`
-   `https://api.sourceclear.io`
-   `https://download.sourceclear.com`

## About Telemetry

Veracode sends anonymized user data to a third-party telemetry service to help Veracode measure and improve its products and support.

The anonymized user data includes:

-   A synthetic, unique user identifier
-   A synthetic, unique identifier for the user organization
-   The browser name and version
-   The last login date before the current session
-   The user roles

The user data does not include name, email, organization name, or any information about applications or findings.
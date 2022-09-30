---
"ft:title" : "Using the Archer API"
"ft:prettyUrl" : "c_about_archer"
---
The Archer dashboard is a platform for Governance, Risk, and Compliance \(GRC\) solutions. The Archer dashboard consumes XML data feeds to integrate data from a variety of sources into a unified view of enterprise-wide risk.

Veracode provides Archer feeds that include information about the applications in an account. For assessments of internally developed or maintained applications, a feed includes scores, a listing of all discovered flaws, and status information about the flaws \(new, open, fixed, or re-opened\). The feeds also include summary data, such as scores and top-risk categories, for third-party assessments.

After you generate a report, it is only available for you to download for 30 days. Each login account is limited to downloading the five most recently generated reports at a time.

  <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> RSA Archer does not support HMAC authentication, which prevents you from executing Veracode Archer API calls from within the RSA Archer interface. Veracode recommends that you write a small, external batch or shell script that calls the Archer APIs on a periodic schedule and writes the output to a fixed-name XML file. You must configure Archer to parse the XML file. Veracode provides an implementation guide to assist you with configuring the Veracode Platform with RSA Archer GRC. To obtain this guide, go to <a href="https://community.rsa.com" target="_blank">https://community.rsa.com</a> and search for `Veracode`. In the search results, click **Veracode Platform Integration**.</p>

<p font-size="13pt"><b>Before You Begin</b></p>

- You must have an [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Archer Report API [role](https://docs.veracode.com/r/c_API_roles_details).
- Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). 
- Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

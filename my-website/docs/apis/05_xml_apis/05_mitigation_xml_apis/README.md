---
"ft:title": "Mitigation and Comments XML APIs"
"ft:prettyUrl": "c_using_mitigat_API"
---
The Mitigation and Comments API enables you to integrate comments on findings and mitigation workflow tasks into IDEs and bug tracking systems.

You can mitigate a finding, accept or reject a mitigation action, or comment on a proposed mitigation. In addition, you can view all comments and mitigation actions any user has performed on a finding.

To learn about how to use the Mitigation and Comments API, see the [tutorial](04_xml_api_mitigation_tutorial.md).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalents of these calls are available with the [Annotations API](https://docs.veracode.com/r/c_rest_annotations_intro) and the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro). Veracode strongly recommends that you use the REST APIs. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Prerequisites</span></p>

- An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the Mitigation API role or a [user account](https://docs.veracode.com/r/c_about_veracode_accounts) with one of these roles:
    - Reviewer or Security Lead: to view all actions performed on a finding, to submit proposed mitigations, or to comment on proposed mitigations.
    - Mitigation Approver and either Reviewer or Security Lead: to accept or reject proposed mitigations.
- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
- Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).
---
"ft:title": "Generate a Software Bill of Materials (SBOM) for Application Profiles with the REST API"
"ft:prettyUrl": "Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API"
---
You can use the SCA Agent REST API to generate a software bill of materials (SBOM) based on your latest Veracode Software Composition Analysis upload scan results or agent-based scan results that you have linked to an application profile. The response includes an inventory of all components in your application in CycloneDX JSON format.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have:

- A Veracode account with an SCA-Scan subscription and the Security Lead [role](https://docs.veracode.com/r/c_role_permissions)
- [API credentials](https://docs.veracode.com/r/c_api_credentials3)
- [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac) enabled
- Completed at least one Veracode SCA scan in the last 13 months. The scan must be one of these scan types:
  
    - Policy scan 
    - Sandbox scan that you have promoted to a policy scan
    - Agent-based scan that you have [linked to the application](https://docs.veracode.com/r/Link_SCA_Projects_to_Applications) for which you are creating the SBOM.

<p font-size="13pt"><b>Steps</b></p>

1.  Use this command to return the application GUID from the [Applications API](https://docs.veracode.com/r/c_apps_intro):

    ```shell
    http --auth-type=veracode_hmac "https://api.veracode.com/appsec/v1/applications?name={applicationName}"
    ```

2.  Use this command to return the SBOM containing your SCA upload scan results:

    ```shell
    http --auth-type=veracode_hmac "https://api.veracode.com/srcclr/sbom/v1/targets/{applicationGuid}/cyclonedx?type=application"
    ```

    Set the `type` property to `application` to retrieve data from Veracode SCA policy scans or agent-based scans linked to your application profile. To generate an SBOM for agent-based scans, follow [these instructions](https://docs.veracode.com/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Agent_Based_Scans_with_the_REST_API).

Additional documentation is available on [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-sca_agent_api_specification/3.0).
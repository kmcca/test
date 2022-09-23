---
"ft:title": "Generate a Software Bill of Materials (SBOM) for Agent-Based Projects with the REST API"
"ft:prettyUrl": "Generate_a_Software_Bill_of_Materials_SBOM_for_Agent_Based_Scans_with_the_REST_API"
---
You can use the SCA Agent REST API to generate a software bill of materials (SBOM) based on your latest Veracode Software Composition Analysis agent-based scan results. The response includes an inventory of all components in your project in CycloneDX JSON format.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have:

-   [API credentials](https://docs.veracode.com/r/c_api_credentials3)
-   [HMAC authentication](https://docs.veracode.com/r/c_enabling_hmac) enabled
-   Completed at least one Veracode SCA agent-based scan in the last 13 months

<p font-size="13pt"><b>Steps</b></p>

1. Use this command to return the list of GUIDs for your workspaces:

    ```shell
    http --auth-type=veracode_hmac "https://api.veracode.com/srcclr/v3/workspaces"
    ```
    
2. Use this command to return the list of project GUIDs for the workspace:

    ```shell
    http --auth-type=veracode_hmac "https://api.veracode.com/srcclr/v3/workspaces/{workspaceGuid}/projects?type=agent"
    ```

3. Use this command to return the SBOM containing the SCA agent-based scan results for your project:

    ```shell
    http --auth-type=veracode_hmac "https://api.veracode.com/srcclr/sbom/v1/targets/{projectGuid}/cyclonedx?type=agent"
    ```

    Set the `type` property to `agent` to retrieve data from Veracode SCA agent-based scans. To generate an SBOM for upload scans or for agent-based scans linked to an application profile, follow [these instructions](https://docs.veracode.com/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API).

Additional documentation is available on [SwaggerHub](https://app.swaggerhub.com/apis/Veracode/veracode-sca_agent_api_specification/3.0).

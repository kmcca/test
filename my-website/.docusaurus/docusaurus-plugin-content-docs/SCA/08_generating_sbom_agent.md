---
"ft:title" : "Generating a Software Bill of Materials (SBOM) for Agent-Based Projects"
"ft:prettyUrl" : "Generating_a_Software_Bill_of_Materials_SBOM_for_Agent_Based_Scans"
---

You can use the [Veracode SCA Agent REST API](https://docs.veracode.com/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Agent_Based_Scans_with_the_REST_API) to generate a software bill of materials (SBOM) based on your latest Veracode Software Composition Analysis agent-based scan results.

The REST API generates an SBOM in [CycloneDX JSON format](https://cyclonedx.org/). It provides an inventory of all the components in your project and adds details about the relationships between the components. It also identifies which components are from third-party sources that make up the software supply chain.


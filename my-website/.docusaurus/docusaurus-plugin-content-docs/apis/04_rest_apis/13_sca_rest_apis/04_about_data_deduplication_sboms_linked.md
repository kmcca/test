---
"ft:title": "About Data Deduplication in SBOMs for Application Profiles with Linked Projects"
"ft:prettyUrl": "About_Data_Deduplication_in_SBOMs_for_Application_Profiles_with_Linked_Projects"
---

The Veracode SCA Agent REST API deduplicates data in the software bill of materials (SBOM) when results include findings from both upload scans and agent-based scans. This impacts application profiles that you have [linked to agent-based scanning projects](https://docs.veracode.com/r/Link_SCA_Projects_to_Applications).

To avoid generating duplicate data in [SBOMs for application profiles](https://docs.veracode.com/r/Generate_a_Software_Bill_of_Materials_SBOM_for_Upload_Scans_with_the_REST_API), Veracode displays the data in these ways:

- The `metadata` property shows the metadata of the application, not the linked projects. 
- The `components` property includes all unique components from the application and from all linked projects.
- The `dependencies` property includes all unique dependencies from the application and from all linked projects. 
- The `vulnerabilities` property includes all unique vulnerabilities from the application and from all linked projects. 
- If the same component exists in multiple projects, it includes all filepaths of each project. 
- If the same dependency exists in multiple projects, it includes all components on which it depends, collected from different projects in the `dependsOn` property. 
- If the same vulnerability exists in multiple projects, it includes all components affected by the vulnerability, collected from different projects in the `affects` property.

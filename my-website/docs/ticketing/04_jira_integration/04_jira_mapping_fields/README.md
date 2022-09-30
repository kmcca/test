---
"ft:title": "Mapping Veracode Fields to Jira Fields"
"ft:prettyUrl": "c_jira_mapping"
---
The Veracode Integration for Jira and the Veracode Integration for Jira Cloud can map data from custom fields in the Veracode Platform to fields in Jira or Jira Cloud issues. The integration can also map values from the Veracode Detailed XML Report.

To improve the import of Veracode findings into your Jira or Jira Cloud issues, you can map Custom Field 1 through Custom Field 10 in the Veracode Platform to standard or custom fields in Jira or Jira Cloud issues.

When importing findings to Jira or Jira Cloud, the integration imports the values from the mapped Veracode fields, including data from the Veracode Detailed XML Report, which you can download as `detailedreport.xml`. The integration has specific requirements for [data types in Veracode fields and field types in Jira and Jira Cloud](03_mapping_jira_data_types_fields_types.md).

After adding field mappings, during the findings import process, the integration:

- Applies the mappings.
- Updates the values in Jira or Jira Cloud fields with any changed values in Veracode fields.
- Overrides any default values in Jira or Jira Cloud fields with the values in Veracode fields.
- Logs a WARN message in the Jira or Jira Cloud logs to warn you about any invalid Veracode field value. The import process omits these values and continues uninterrupted.
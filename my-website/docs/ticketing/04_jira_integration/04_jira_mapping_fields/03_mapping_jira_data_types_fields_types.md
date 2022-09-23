---
"ft:title": "Mapping Jira Data Types and Field Types"
"ft:prettyUrl": "Mapping_Jira_Data_Types_and_Field_Types"
---
The Veracode Integration for Jira and the Veracode Integration for Jira Cloud support importing string, number, and date/time data types from Veracode fields to text, number, and date/time field types in Jira or Jira Cloud.

On the Veracode to Jira Field Mappings page, when you select a [Veracode custom field](https://docs.veracode.com/r/t_add_metadata) or Jira field, you see the supported data type or field type below your selection.

When adding a custom field in Jira or Jira Cloud, you select a field type. The integration supports these field types only:

-  **Date Time Picker**: if the value is in a Veracode custom field, which uses free-form text, the value must be in this format: `dd/MMM/yy HH:mm`. For example, `14/Jan/20 11:52`
-  **Number Field**: if the value is in a Veracode custom field, which uses free-form text, the value must be an integer or decimal.
-  **Select List (multiple choices)** and **Select List (single choice)**: if the values are in Veracode custom fields, ensure each value is enclosed in square brackets. For example:
    -   Custom 1: [value 1]
    -   Custom 2: [value 1][value 2][value 3]
-   **Text Field (multi-line)** and **Text Field (single line)**

If you select an unsupported field type, Jira and Jira Cloud accept it without error, but you cannot select it from the Veracode Platform dropdown menu on the Veracode to Jira Field Mappings page. For text fields only, if a Veracode custom field has a value of `-1`, the integration imports it as `[-1]`. All other negative values import to text fields without square brackets.
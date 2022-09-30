---
"ft:title" : "Veracode Integrations 2021 Release Notes"
"ft:prettyUrl" : "c_past_int"
---
View the list below for highlights of previous releases.

## December 10, 2021

### Veracode Integration for CA Agile Central/Rally Now End-of-Life

- The Veracode Integration for CA Agile Central/Rally is now end-of-life and no longer supported. The plugin and documentation are no longer available. To avoid potential security vulnerabilities, Veracode strongly recommends that you uninstall this integration. To integrate with other ticketing systems, visit the [Veracode Integrations Hub](https://community.veracode.com/s/integrations#ticketing).

## November 22, 2021

### Java API Wrapper Now Retries Requests

- Veracode Java API Wrapper version 21.11.9.0 updates the `maxretrycount` parameter to now retry requests that fail due to certain error conditions. Previously, this parameter polled for failed build status and only applied to the `uploadandscan` action.

## October 18, 2021

### Veracode Greenlight for IntelliJ Supports Additional IntelliJ IDEA Versions

- Veracode Greenlight for IntelliJ version 1.7.0 adds support for IntelliJ IDEA 2019.3–2021.2.3. If you are using IntelliJ IDEA 2020 or later, you must install JavaFX Runtime for Plugins.

## October 8, 2021

### Improved Veracode Greenlight for IntelliJ

- Veracode Greenlight for IntelliJ version 1.6.0 adds support for IntelliJ IDEA 2019.3–2021.1.3. If you are using IntelliJ IDEA 2020 or later, you must install JavaFX Runtime for Plugins.

## July 8, 2021

### New Video - Use the Jenkins Credentials Binding Plugin to Protect Your Veracode Credentials

This video shows you how to:

-   Use the Jenkins Credentials Binding plugin to bind your Veracode API credentials to environment variables
-   Generate a script containing the bound environment variables
-   Add this script to your Jenkins pipeline script

## June 23, 2021

### Veracode Integration for Jira Supports the Jira Select List Field Type for Multiple Choices

- The Veracode Integration for Jira version 3.30.0 adds support for the Select List \(multiple choices\) field type. You can use this field type to map data from Veracode custom fields or a Veracode Detailed XML report to standard or custom fields in Jira Server issues.

## May 18, 2021

### Veracode Integration for Jira Cloud Supports the Select List Field Types

- The Veracode Integration for Jira Cloud version 3.7.0 adds support for the Select List \(single choice\) and Select List \(multiple choices\) field types. You can use these field types to map data from Veracode custom fields or a Veracode Detailed XML report to standard or custom fields in Jira Cloud issues.

## April 30, 2021

### Veracode Azure DevOps Extension Has Renamed YAML Property and Improved Logging

Veracode Azure DevOps Extension version 3.5.0 includes these changes:

-   For YAML pipelines with the Flaw Importer task, Veracode renamed the `optargs` property to `proxySettings`. This new name more accurately identifies the valid values for this property. Ensure you update your pipelines with this new property name.
-   Added logs, with error messages, for invalid or missing values. The errors apply to both standard and YAML pipelines.

## April 22, 2021

### Java API Wrapper Adds Parameter for Deleting Incomplete Scans Automatically

Veracode Java API Wrapper version v21.2.7.5 includes these changes:

-   New `deleteincompletescan` parameter for automatically deleting scans that did not complete due to one or more errors.
-   Additional debug logs for troubleshooting upload and scan issues.

## April 20, 2021

### Veracode Integration for Jira Supports the Select List Field for a Single Choice

- The Veracode Integration for Jira version 3.29.0 adds support for the Select List \(single choice\) field type. You can use this field type to map data from Veracode custom fields or a Veracode Detailed XML report to standard or custom fields in Jira issues.

## March 24, 2021

### Veracode for VS Code Now Requires the JRE

- Veracode for VS Code version 1.4.0 introduces a change that requires you to install a current version of the Java Runtime Environment \(JRE\) and set your Java PATH.

## March 19, 2021

### New Video - Create and Manage API Service Accounts with the Identity API]

This video shows you how to:

-   Create an API service account
-   Create teams
-   Assign user roles and teams to API service accounts
-   Update an API service account

## February 23, 2021

### Updated Video - Working with Scan Results Using Veracode Static for Visual Studio

- This video shows you how to download, import, and view Veracode scan results using Veracode Static for Visual Studio. You can also learn how to mitigate findings discovered during the scan in Visual Studio.

### Veracode Jenkins Plugin No Longer Encrypts Non-Sensitive Data for Build Jobs

- Starting with Veracode Jenkins Plugin version 21.2.12.0, the plugin no longer encrypts non-sensitive data stored in the config.xml file for a build job. This change enables you to import jobs between Jenkins instances.

## February 5, 2021

### Updated Veracode Azure DevOps Extension

Veracode Azure DevOps Extension version 3.4.0 includes these updates:

-   Use YAML to add Veracode analysis to build pipelines.
-   Use YAML to import findings as work items into Azure DevOps.
-   Include mitigation and annotation comments when importing new findings as work items.
-   Set a timeout to fail a build if Veracode analysis does not complete within a specified time.

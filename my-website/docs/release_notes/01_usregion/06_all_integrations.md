---
"ft:title" : "Veracode Integrations Release Notes"
"ft:prettyUrl" : "c_all_int"
---
## September 13, 2022

### Java API Wrapper JavaDoc Update

In Veracode Java API Wrapper version 22.9.10.3 [the documentation available in the wrapper installation file](https://docs.veracode.com/r/t_working_with_java_wrapper) now describes the `Credentials` class.

## August 29, 2022

### Veracode Azure DevOps Extension Has Improved Flaw Importer Task

Veracode Azure DevOps Extension version 3.14.0 includes the following improvements to the Flaw Importer Task.

- Uses fewer calls to complete flaw imports.
- Fixes an issue where flaws without comments did not sync or close.
- Fixes an issue where development sandbox findings did not import.

## August 12, 2022

### Veracode TeamCity Plugin Now Supports Automatic Deletion of Incomplete Scans

Veracode TeamCity Plugin version 2.7.0 adds [configuration options for deleting incomplete scans](https://docs.veracode.com/r/c_config_teamcity_scan).

## August 9, 2022

### Veracode Integration for Jira Server Now Retries Downloading the Detailed XML Report   

Veracode Integration for Jira version 3.36.0 fixes an issue where the integration did not create tickets of imported flaws if it could not retrieve the Detailed XML Report. The integration now attempts to retrieve the Detailed XML Report during the next import cycle.

## July 27, 2022

### Updated C# API Wrapper

Veracode C# API wrapper version 22.8.8.5 includes these updates:

- Supports the [`-debug`](https://docs.veracode.com/r/r_wrapper_parameters) parameter.
- Fixes an issue to filter out Dynamic Analysis results.
- Adds transaction ID header to [uploadandscan](https://docs.veracode.com/r/r_uploadandscan).

## July 20, 2022

### Veracode Azure DevOps Extension Now Supports Importing SCA Vulnerabilities as Work Items

[Veracode Azure DevOps Extension version 3.13.0](https://docs.veracode.com/r/t_importflaws) updates the Flaw Importer task to support importing Software Composition Analysis (SCA) vulnerabilities as work items.

## July 14, 2022

### Veracode Jenkins Plugin Now Supports Automatic Deletion of Incomplete Scans

Veracode Jenkins Plugin version 22.6.18.0 adds [configuration options for deleting incomplete scans](https://docs.veracode.com/r/t_configure_jenkins).

## June 27, 2022

### Improved Finding Import Performance for Veracode Integration for Jira Server

Veracode Integration for Jira Server version 3.35.0 adds a new filter that only imports findings with new scan data, policy changes, or changes to applied mitigations since the last import.

## June 22, 2022

### Deprecation of Admin XML APIs

[Veracode has deprecated the Admin XML APIs](https://docs.veracode.com/r/c_about_admin_API_intro) for user and team management. End-of-support for these APIs is scheduled for June 30, 2023. Veracode recommends that you begin updating your automations to use the [Identity REST APIs](https://docs.veracode.com/r/c_identity_intro). Also, enabling the Single Sign-on and Just-in-Time Provisioning feature automatically disables the Admin XML APIs for user management. Before enabling this feature, ensure all of your automations are using the Identity APIs.

## June 8, 2022

### Updated Veracode Static for Visual Studio \(New\)

Veracode Static for Visual Studio \(New\) version 1.5.0 includes these changes:

-   [Change the scan name](https://docs.veracode.com/r/Change_the_Scan_Name_in_Visual_Studio_New) from the name that Veracode generates and assigns during scanning.
-   [Import and review XML scan results](https://docs.veracode.com/r/Import_Scan_Results_Into_Visual_Studio_New) from Veracode Detailed Reports.

## May 18, 2022

### Java API Wrapper Updates `-deleteincompletescan` Parameter with Backward Compatibility

[Java API Wrapper version 22.5.10.1 updates](https://docs.veracode.com/r/r_uploadandscan) the `-deleteincompletescan` parameter to be backward compatible with Java API wrapper versions earlier than 22.5.10.0, which released on May 4, 2022. After upgrading the wrapper, the parameter value automatically changes from boolean to an integer:

-   If set to `true`, the value changes to `1`.
-   If set to `false`, the value changes to `0`.

## May 4, 2022

### Java API Wrapper Has Improved `-deleteincompletescan` Parameter

[Java API Wrapper version 22.5.10.0 includes changes](https://docs.veracode.com/r/r_uploadandscan) to the `-deleteincompletescan` parameter for deleting incomplete scans when running the `uploadandscan` action. This parameter now accepts an integer value, rather than boolean, for deleting an incomplete scan based on the scan status.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b>  These changes are not backward compatible with the <code>-deleteincompletescan</code> parameter available in earlier versions of the Java API Wrapper. If you currently use this parameter, after upgrading the wrapper you must change the value from boolean to one of the accepted integer values.</p>

## April 15, 2022

### Introducing New Veracode Static Extensions for Visual Studio 2019 and 2022

[Veracode Static for Visual Studio version 1.4.0 is a new extension](https://docs.veracode.com/r/About_Veracode_Static_for_Visual_Studio_New) for adding Static Analysis to Visual Studio 2019 and 2022. The new extension for Visual Studio 2019 provides major improvements compared to our current legacy extension for version 2019, which Veracode continues to support.

The extensions include these features:

-   Improved user experience for developers.
-   Powerful Summary View grid for reviewing and managing findings.
-   Streamlined workflow for building, packaging, and scanning your code.
-   Support for policy and sandbox scans.

An extension for each Visual Studio version is available from the Visual Studio Marketplace.

## April 12, 2022

### Veracode Greenlight Now Supports the New Visual Studio 2019 and 2022

Veracode Greenlight for Visual Studio version 1.3.184.96 is a new extension for adding Greenlight scanning to the newer versions of Visual Studio 2019 and 2022. An extension for each Visual Studio version is available from the Visual Studio Marketplace.

## March 9, 2022

### Updated Azure DevOps Extension

[Veracode Azure DevOps Extension version 3.10.0 includes these changes](https://docs.veracode.com/r/c_VS_team_servs):

-   TFS 2017 is no longer supported.
-   TFS 2018 support now requires [Azure Pipeline Agent 2.196.2](https://github.com/Microsoft/azure-pipelines-agent/releases) or later.
-   Flaw Importer task can now import custom fields when using custom process templates.
-   Flaw Importer task can now overwrite the area path in work items when importing flaws.

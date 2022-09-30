---
"ft:title" : "Veracode Dynamic Analysis 2021 Release Notes"
"ft:prettyUrl" : "c_past_was"
---
View the list below for highlights of previous releases.

## December 21, 2021

### ISM Endpoint Upgraded to Log4j 2.17

- An updated Veracode Dynamic Analysis Internal Scanning Management \(ISM\) endpoint version is now available. Updates include an upgrade to Log4j 2.17 to address known vulnerabilities CVE-2021-44228 and CVE-2021-45046.

## November 18, 2021

### Introducing Veracode API Scanning

- Veracode API Scanning is a new scan type for performing a dynamic analysis of common API specification files. You can quickly test the security of your API endpoints and get results. As an extension of the existing Veracode Dynamic Analysis, API Scanning uses the same powerful dynamic analysis scan engine to identify vulnerabilities in both public and private APIs and provide remediation guidance. The remediation guidance helps you secure your APIs before integrating them into applications.

## November 10, 2021

### Dynamic Analysis Scan Engine Updated

The Veracode Dynamic Analysis scan engine has been upgraded, including:

-   Fixed logic in timing-based attacks to reduce the reporting of false positives.
-   Corrected authentication failures when using browser authentication.
-   The Dynamic Analysis engine is updated to use Chromium version 95.0.4638.69.

## October 7, 2021

### Dynamic Analysis Pause and Resume Temporarily Disabled

- Veracode has temporarily disabled the ability to pause or resume Dynamic Analysis scans to fix underlying architectural issues.

### Dynamic Analysis Engine Updated to New Chromium Version

- The Veracode Dynamic Analysis engine is updated to use Chromium version 94.0.4606.71.

## September 23, 2021

### Dynamic Analysis Engine Updated to New Chromium Version

- The Veracode Dynamic Analysis engine is updated to use Chromium version 93.0.4577.82.

## September 15, 2021

### Custom HTTP Headers

- Veracode Dynamic Analysis now supports custom HTTP headers as an authentication option when configuring a scan. You can configure one or more custom headers with specific names and values for each scan.

## August 23, 2021

### Dynamic Analysis Scan Engine Updated

The Veracode Dynamic Analysis scan engine has been upgraded, including:

-   Several stability improvements and crash fixes
-   Corrections for a few cases of over-reporting CSRF flaws
-   Security updates
-   Fix for missing some XSS flaws
-   Adjusted payloads for code-injection tests to reduce false negatives

## March 30, 2021

### Improved Coverage Report and Removed Show Password Option

Veracode Dynamic Analysis includes these changes:

-   Improved the Coverage Report to provide a summary view of both normal and attack traffic that Dynamic Analysis discovered during a scan.
-   Removed the **Show password** checkbox for all authentication methods from the Veracode Platform page on which you create a Dynamic Analysis. You must now re-enter your credentials after changing a Dynamic Analysis configuration.

## March 16, 2021

### Updated Engine and New Limit on Discovered Flaws

Veracode Dynamic Analysis includes these changes:

-   Updated the Dynamic Analysis engine to use Chromium version 88.0.4324.182.
-   Set a limit on the number of flaws that Dynamic Analysis can discover during each analysis. If an analysis discovers more than 1000 flaws, it now exits automatically. This scenario is rare and typically indicates an error.

## February 23, 2021

### Updated Video - Create and Run an Unauthenticated Dynamic Analysis

- This video shows you how to create, configure, and schedule an unauthenticated Dynamic Analysis.

## February 18, 2021

### Dynamic Analysis REST API Scan Engine Variables

- Veracode Dynamic Analysis has a new feature that allows you to centrally manage credentials for login scripts by using variable names and storing the values centrally via the Dynamic Analysis API. This feature enables you to update credentials without having to re-upload your login script, and gives you the ability to separate credentials from your login scripts by using variable names in the files instead of the actual values. In addition, this functionality eliminates having to access the Veracode Platform to access credentials.

## January 22, 2021

### Changes to Reporting of CWE-829

- The Veracode Dynamic Analysis engine is improved to no longer map findings concerning missing or misconfigured CSP headers to CWE-829 when responses have no body.

---
slug: dynamicAnalysisRN
title: Veracode Dynamic Analysis Release Notes
authors: endi
tags: [hello, docusaurus]
---

## October 18, 2022

### API Scanning Adds Support for Scriptable Request Modification

Veracode API Scanning adds a new option for using JavaScript to modify an HTTP request, at runtime, when authenticating with a remote host.


## October 5, 2022

### New Similarity Threshold for Web Applications

When configuring an analysis of a web application, you can now set a threshold for ignoring similar web pages during the analysis.


## September 7, 2022

### Dynamic Analysis Now Creates Screenshots for Consecutive Login Failures

The Veracode scan engine now creates a verification screenshot if it is unable to log in to a target application after 50 attempts. The screenshot image shows when and where in the scanning process the failed login attempts occurred. You can use this information for troubleshooting.


## August 2, 2022

### New Historical Details for Dynamic Analyses and Scans

You can now view detailed information about all past occurrences of both a dynamic analysis and its scans.


## May 18, 2022

### Re-Enabled Pause and Resume for Scheduled Analyses

When scheduling a Dynamic Analysis, you can now set it to pause and resume scanning at specific days and times. Veracode disabled this option on October 7, 2021.


## April 28, 2022

### New Status Messages for Partial Scan Results

Dynamic Analysis now provides status messages that indicate when Veracode is verifying partial results and when partial results are available for review. Partial results can occur when a scan stops prematurely due to:

- Errors during scanning
- Users stopping the scan early
- The scan exceeding its configured duration

## March 23, 2022

### API Scanning Adds Support for OpenID Connect to OAuth 2.0

Veracode API Scanning adds a new option to specify an OpenID Connect URL when configuring OAuth 2.0 authentication.


## March 10, 2022

### Dynamic Analysis Adds Support for Concurrent Browsers Running Dynamic Analysis Scans

Veracode Dynamic Analysis now supports concurrent browsers for running multiple Dynamic Analysis scans at the same time. When configuring a web application scan, you can specify up to 12 concurrent browsers.


## March 8, 2022

### API Scanning Adds OAuth 2.0 Authentication and Analysis History Options
Veracode API Scanning includes these changes:

- New option to configure OAuth 2.0 authentication for the API endpoints in your API specifications. You can select to use either the Client Credentials or Password Credentials grant type.
- New Associated Analysis field on the API Specification Details page for a given API specification. This field provides options for viewing, reconfiguring, and rerunning previous scans.

## March 3, 2022

### Dynamic Analysis Now Detects Log4j Vulnerability CWE-115
Veracode Dynamic Analysis can now detect Log4j vulnerability CWE-115 when scanning web applications or API specifications.


## February 4, 2022

### Updated Dynamic Analysis Scan Engine
The Dynamic Analysis scan engine includes these updates:

- Updated Chromium to version 98.0.4758.80
- Log4j security updates
- Improved connectivity when authenticating with Veracode
- Fix for insecure cookies that prevented flaw matching

## January 25, 2022

### ISM Endpoint Upgraded to Log4j 2.17.1

An updated Veracode Dynamic Analysis Internal Scanning Management (ISM) endpoint version is now available. Updates include an upgrade to Log4j 2.17.1 to address known vulnerability CVE-2021-44832 and improvements to connection stability and usage diagnostics.
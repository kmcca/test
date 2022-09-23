---
"ft:title" : "Veracode Static Analysis 2021 Release Notes"
"ft:prettyUrl" : "c_past_static"
---
View the list below for highlights of previous releases.

## December 20, 2021

### New Veracode Static Analysis Support for Languages and Frameworks

Veracode has improved static analysis by adding support for:

-   Azure Functions used in .NET
-   Thymeleaf templates for Spring Boot

### Veracode has improved static analysis by adding support for these new versions:

-   Initial support of .NET 6.0
-   Initial support of Android 12

## November 18, 2021

### New Veracode Static Analysis Support

Veracode has improved static analysis by adding:

-   Full support for JDK 17
-   Full support for ColdFusion 2016

## October 21, 2021

### New Veracode Static Analysis Support

- Veracode has improved static analysis by adding support for Apex 52.0.

### Improved Veracode Static Analysis Support

- Veracode has further improved its accuracy in its detection of hard-coded credentials in applications. You might see a decrease in false positives related to hard-coded credentials.

## September 28, 2021

### New Veracode Static Analysis Support

Veracode has improved static analysis by adding:

-   Initial support for iOS 15
-   Full support for .NET 5.0

### Improved Veracode Static Analysis Support

- Veracode has improved its detection of hard-coded passwords in applications. You might see an increase in findings related to hard-coded passwords.

## August 26, 2021

### New Support for GCC 10 on Red Hat Enterprise Linux 8

- Veracode has improved static analysis by adding support for the GCC 10 compiler on Red Hat Enterprise Linux.

### Improved Static Analysis Support

Veracode has made several improvements to static analysis, including:

-   Prevention of reporting hard-coded credentials for variables related to mock libraries
-   Prevention of reporting hard-coded credentials for nonsensitive data in JavaScript dictionaries
-   Improved recognition of password keywords in concatenated strings
-   Improved heuristics to identify potentially sensitive data

## July 22, 2021

### New Veracode Static Analysis Support

- Veracode has improved static analysis by adding support for Angular 12 applications.

### Improved Veracode Static Analysis Results

- Veracode has improved static analysis for Node.js 13 and 14 applications.

## June 16, 2021

### Pipeline Scan Supports Uploading Larger Files

- Veracode Pipeline Scan now supports the analysis of applications up to 200 MB.

## June 2, 2021

### New Veracode Static Analysis Support

Veracode has improved static analysis by adding support for these new technologies:

-   Initial Support of Java 16
-   tvOS

### Compatibility Updates for iOS and tvOS Application Packager

- Veracode has improved the mobile application packager used for preparing iOS and tvOS applications to support the latest versions of macOS. This update also includes several usability improvements based on user feedback.

### New Distribution Method for the Ruby Gem Packager

- Veracode began distributing the Gem file required for preparing Ruby on Rails applications. For the latest updates to the Gem file, retrieve the file from [rubygems.org](http://rubygems.org) using these Veracode instructions.

## May 3, 2021

### New Veracode Static Analysis Support

- Veracode has improved static analysis by adding support for AWS SDK for .NET.

### Improved Veracode Static Analysis Results

- Veracode has improved static analysis of Java applications by identifying additional security flaws related to deserialization vulnerabilities.

## April 6, 2021

### Improved Veracode Static Analysis Support for Android Applications

- Veracode has improved static analysis of Android applications by adding support for Android applications packaged as Android App Bundles \(AAB\).

## April 1, 2021

### Deprecated Support for Older Versions of Veracode Pipeline Scan

- On April 1 2021, Veracode will no longer support versions of pipeline-scan.jar that you have downloaded before September 2020. These versions are 20.9.1 and earlier. To identify the version of the pipeline-scan.jar that you are using, you can run it with the --version option at the command line.

- To transition to a supported version of the JAR file, replace the version that you are using with the latest one, which you can download here: [https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip](https://downloads.veracode.com/securityscan/pipeline-scan-LATEST.zip) Veracode also provides Pipeline Scan as a Docker image on ### Docker Hub](https://hub.docker.com/r/veracode/pipeline-scan).

- Updating to the latest version of pipeline-scan.jar ensures that you are working with the latest version of the Veracode software, which includes many new features and bug fixes.

## March 31, 2021

### New Veracode Static Analysis Support

- Veracode has improved static analysis by adding support for Blazor WebAssembly for.NET applications.

### Improved Veracode Static Analysis Results

- Veracode has improved static analysis of .NET Core 3.1 applications.

### Remediation Guidance Added to Pipeline Scan Results

- The Pipeline Scan results now include links to the [Veracode Knowledge Base](https://www.veracode.com/security), which provides suggestions for remediating issues.

## March 2, 2021

### New Veracode Static Analysis Support for Languages and Frameworks

Veracode has improved static analysis by adding support for these new versions of supported technologies:

-   Transact-SQL 15.x
-   Ember.js 3.x for JavaScript

Veracode has improved static analysis by adding initial support for these versions of supported technologies:

-   .NET 5
-   Kotlin 1.4
-   Groovy 3

### Improved Veracode Static Analysis Support for iOS

- Veracode has provided additional security checks for applications built using iOS 14. You may see additional findings for applications as a result of these improvements.

### Improved Results for Cryptography Findings for Java Applications

- Veracode has improved static analysis of Java applications by updating the list of acceptable cryptography algorithms.

## February 4, 2021

### New Veracode Static Analysis Support

Veracode has improved static analysis by adding support for these new technologies:

-   C++ applications built with GCC 9 on RedHat 8
-   Koa.js version 2.13
-   Hibernate framework version 5
-   Autofac framework. Static analysis of .NET applications that use Autofac may report additional findings as a result of these improvements.

### Improved Veracode Static Analysis Results

Veracode provides these improvements for supported technologies:

-   Additional security checks for applications built using functions specific to Android 10. You may see additional findings for applications as a result of these improvements.
-   Enhanced accuracy of scan results of PHP and Python applications. The scan results now provide more emphasis on custom first-party components rather than third-party libraries.

### Improved Prescan Warning Messages

- Veracode has improved warning messages to identify applications that do not meet Veracode packaging requirements.

- Veracode has also improved the accuracy of warning messages for several languages and file types by providing more descriptive error resolution recommendations.

### Improved Results Consistency for Java Applications

- Veracode has improved static analysis of Java web applications packaged as WAR and EAR files. Veracode provides more consistent results between subsequent scans and more accurately recognizes first-party components in the applications.

- You may notice a one-time change to scan results as a result of this improvement.

### Improved Results Accuracy Within JSP Files

- Veracode has improved static analysis of JSP applications to prevent static analysis from reporting duplicate flaws.

## January 12, 2021

### Compilation Guide Renamed

- To more accurately describe its contents, the Compilation Guide is now called Veracode Packaging Requirements.

## January 7, 2021

### Pipeline Scan Integration with Veracode Security Policies

- Veracode has improved the Pipeline Scan to support the use of policy rules defined in the Veracode Platform. This enhancement allows you to assess applications against consistent rules for pass or fail.

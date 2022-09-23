---
"ft:title" : "PHP Application Packaging"
"ft:prettyUrl" : "compilation_php"
---

Your PHP applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis \(SCA\) upload and scan, if licensed. For SCA agent-based scan requirements, see [Using Veracode SCA with Programming Languages](https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages).

<p><span style="font-size: medium;">Supported PHP Versions</span></p>

|Language|Supported Versions|
|----|----|
|PHP|5.2–7.4, 8.0, 8.1|
|<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> <a href="https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning">Initial support</a> for PHP 8.0 and 8.1.</p>|

<p><span style="font-size: medium;">Supported PHP Frameworks</span></p>

|Framework|Versions|
|----|----|
|Laravel|5.x|
|Zend|1, 2, 3|
|Symfony| 5.x, 6.x |
|<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> <a href="https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning">Initial support</a> for Symfony 6.x.</p>|

<p><span style="font-size: medium;">Template Engines</span></p>

|Name|Supported Versions|
|----|----|
|Smarty|2.6, 3.1|


<p><span style="font-size: medium;">Packaging Guidance</span></p>

Upload a compressed ZIP archive containing all PHP code and required dependencies to Veracode. If using Veracode Software Composition Analysis, include `composer.lock` in the root of your ZIP archive. To achieve the most accurate results, also include `composer.json`. Do not attempt to upload individual PHP files.

Veracode precompiles all PHP code uploaded to the Veracode Platform prior to analysis. The submitted PHP code must be able to compile. Otherwise, the prescan returns a compilation error.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Submitting third-party libraries for unsupported PHP frameworks may result in additional findings and longer analysis times.</p>

Veracode only attempts to compile files ending in these extensions:

-   PHP
-   MODULE
-   INC
-   HTML
-   HTM
-   PROFILE
-   INSTALL
-   ENGINE
-   THEME
-   PHP4
-   PHP5
-   PHP7
-   PHTML

<p><span style="font-size: medium;">Analysis Limitations</span></p>

Veracode PHP analysis does not interpret PHP configuration settings in PHP.INI, build options passed to PHP configure script, `ini_set`, `assert`, or HTTP server-specific configuration, which are options that you pass to PHP at runtime or specify in server configuration files. Veracode analysis makes these assumptions:

-   All applications are web applications.
-   stdout goes to an HTTP client.
-   `Register_globals` is set to OFF.
-   `register_argc_argv`, `always_populate_raw_post_data`, and `register_long_arrays` are ON.
-   All `magic_quotes` configuration options are OFF.

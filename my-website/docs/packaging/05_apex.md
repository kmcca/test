---
"ft:title" : "Apex Application Packaging"
"ft:prettyUrl" : "c_compilation_apex"
---

Your Apex applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

Veracode supports analyzing Apex and other application components that extend the Salesforce platform.

<p><span style="font-size: medium;">Supported Apex Versions</span></p>

|Language|Supported Versions|
|----|----|
|Apex|52.0 and earlier|


<p><span style="font-size: medium;">Supported Apex Libraries and Technologies</span></p>

|Framework/Technology|Supported Versions|
|----|---|
|Visualforce Pages|52.0 and earlier|
|Lightning Web Components|52.0 and earlier|
|Aura (Lightning) Components|52.0 and earlier|

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires source files for the Apex application.

<p><span style="font-size: medium;">Packaging Guidance</span></p>

Upload a ZIP archive containing these files to Veracode:

-   All Apex source code
-   Visualforce pages
-   Lightning component source, including any application pages, component files, HTML templates, and JavaScript code from Lightning web components

Files must be UTF-8 encoded.

Do not include third-party packages. Do not upload individual Apex source files.

Veracode only scans Apex files with these extensions:

-   APP
-   CLS
-   CMP
-   COMPONENT
-   EVT
-   PAGE
-   TGR
-   TRIGGER
-   VFP

<p><span style="font-size: medium;">Accessing Apex, Visualforce, and Lightning Components</span></p>

You can access the components of your Salesforce applications to prepare them for analysis in one of these ways:

-   Download source code files individually in the Developer Console
-   Use Salesforce extensions for Visual Studio Code
-   Use the Force.com IDE
-   Use the Salesforce Ant Migration tool

For assistance using any of these tools, see the [Salesforce documentation](https://help.salesforce.com/docs.).

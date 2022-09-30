---
"ft:title" : "Top-Level Modules"
"ft:prettyUrl" : "About_Top_Level_Modules"
---
When Veracode performs a prescan of an application, it identifies top-level modules and scans any dependencies.

A module represents a discrete component of the uploaded application that Veracode analyzes. A prescan of the application identifies top-level modules, which are the components identified that have [entry points](https://docs.veracode.com/r/errors_master) for external data. Entry points typically are modules that include first-party code. You can only select the top-level modules to scan.

Prescan validation can identify dependencies or supporting files in top-level modules. Veracode scans dependencies resulting from scanning the selected top-level modules that depend on them.

-   In Java, uploaded WAR and EAR files are always the top-level modules. Uploaded JAR files usually are top-level modules, except when they are dependencies of WAR or EAR files.
-   In .NET, the uploaded EXE files are usually the top-level modules. If they are not a dependency for another part of the application, uploaded DLL files can be top-level modules.
-   In C++, the uploaded main application is the top-level module.
-   In iOS, Ruby on Rails, PHP, and other supported languages, the top-level modules are the uploaded files.

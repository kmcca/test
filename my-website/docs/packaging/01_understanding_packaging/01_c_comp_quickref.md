---
"ft:title" : "Quick Reference for Packaging Requirements"
"ft:prettyUrl" : "c_comp_quickref"
---

Veracode provides compilation and packaging recommendations for popular languages and frameworks.

This list provides a high-level overview of the packaging requirements for some of the most popular supported languages:

**Java**

   Upload JAR, WAR, or EAR files with debug symbols.

**.NET**

   Generate a debug build, zip the built files, and upload the ZIP file.

- If the application contains ASP files, publish the website to a directory, zip the published directory, and upload the ZIP file.

- If the application contains TypeScript files, zip the source TypeScript files and upload them separately.

**JavaScript and TypeScript**

   Upload a ZIP file containing your source code. Do not include test code or built distribution files.

**PHP**

   Zip the application source files and upload the ZIP file. Include `composer.lock` in the root of your ZIP archive.

**Scala**

   Upload JAR files with debug symbols.

**Groovy**

   Upload JAR or WAR files with debug symbols.

**Kotlin**

   Upload JAR or WAR files with debug symbols.

**Apex**

   Zip the application source files and upload the ZIP file.

**PL/SQL**

   Zip the application source files and upload the ZIP file.

**Classic ASP**

   Zip the application source files and upload the ZIP file.

**Perl**

   Zip the application source files and upload the ZIP file.

**Python**

   Zip the application source files and upload the ZIP file. Include `Pipfile.lock` in the root of your ZIP archive.

**Android**

   Generate a debug build and package it as an APK file.

**Cordova**

   Upload a compiled APK or IPA file.

**React Native**

   Zip the application source files and upload the ZIP file, or upload a compiled APK or IPA file.

**Ionic**

   Zip the application source files and upload the ZIP file.

**C++ using Red Hat Linux**

   Upload a debug build compiled with the `-gdwarf-2 -g3 -O0 -fno-builtin` flags using GCC.

**Visual C++**

   Upload a debug build compiled with the `/Zi /Od /GS- /MTd /link /INCREMENTAL:NO /DEBUG:FULL` flags.

**COBOL**

   Extract source code files from mainframe systems as UTF-8 encoded text files, zip the extracted files, and upload the ZIP file.

**RPG**

   Extract source code files from mainframe systems as UTF-8 encoded text files, zip the extracted files, and upload the ZIP file.

**Virtual Basic 6**

   Zip the application source files and upload the ZIP file.

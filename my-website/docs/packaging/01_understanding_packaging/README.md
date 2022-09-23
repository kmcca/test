---
"author": ["Scott Jordan"]
"ft:originID": "compilation_packaging"
"ft:lang": "en-US"
"ft:title": "Veracode Packaging"
"ft:prettyUrl": "compilation_packaging"
"media_dir": "images/"
---
Veracode provides specific packaging recommendations for ensuring successful scans.

This document provides specific instructions for Veracode-supported languages and platforms. Additionally, review this general guidance that applies to all Veracode static scans.

<p><span style="font-size: medium;">Required Files</span></p>

The Veracode Platform requires an executable set of files to perform a static scan. Individual libraries or DLLs that support a main executable generally require the executable to perform an adequate scan. You must upload all executables. Where possible, upload first-party dependent libraries to improve the quality of the scan. Veracode notifies you of any missing dependencies before the scan begins. You have the opportunity to upload them.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> All dependent libraries are required for C/C++ applications.</p>

If you want source file and line number information for flaws, you must upload the debug symbols for the application, either PDB files for Windows binaries, or applications built including debug symbols according to the instructions in this document. You must upload debug symbols for C/C++ and iOS applications.

In general, for a successful upload of files to Veracode, follow these basic guidelines:

-   Only upload files with names consisting of printable, UTF-8 characters.
-   Only upload applications built using UTF-8 encoding.
-   Do not upload obfuscated binaries.
-   Do not upload installer packages, such as Linux RPM or Windows InstallShield.
-   Do not upload Classic ASP applications in the same scan with application code written in other languages.

<p><span style="font-size: medium;">Uploading Archives</span></p>

You can upload archives of multiple application files in these formats: ZIP, TAR, TAR.GZ, TGZ. The Veracode Platform expands the archive and lists all the executable files it finds inside. These rules apply to uploading archives:

1.  Do not upload a password-protected archive. The Veracode Platform securely encrypts all files that are uploaded. It is not necessary to password protect the archive, and the Veracode Platform is not be able to expand it if a password is present.
2.  Do not upload archives of archives. The Veracode Platform only expands the top level of archives and does not proceed if it finds additional archives inside \(except for JARs, EARs, and WARs\).
3.  When using tar to combine multiple files, use the `-h` option to ensure that tar archives the file that the symbolic link points to, rather than archiving the symbolic link.
4.  Veracode does not support the RAR archive format.

<p><span style="font-size: medium;">Data Retention</span></p>

When you upload your application files, Veracode uses [specific rules for retaining](https://docs.veracode.com/r/c_data_retention) user-provided and system-generated data.

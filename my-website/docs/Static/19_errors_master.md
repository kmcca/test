---
"ft:title" : "Resolving Prescan Warnings and Errors"
"ft:prettyUrl" : "errors_master"
---
During a static scan, you may receive warning or error messages about the uploaded files. Use the tips from Veracode to resolve these warnings or errors.

<p><span style="font-size: medium;">Identifying Errors and Warnings</span></p>

If the prescan operation encounters problems in your application, the Application page shows messages in the Status column.

Veracode shows error messages in red preceded by a red triangle ![](/images/triangle-icon.png).

Veracode displays warning messages in amber text preceded by the information icon ![](/images/info-icon.png).

Use these tips to resolve these warnings or errors.

<p><span style="font-size: medium;">Corrupt Headers</span></p>

The module appears to have corrupt headers, and may have been modified after compilation. Try to recompile the module.

<p><span style="font-size: medium;">Deprecated Platform</span></p>

The module is built with a platform, such as a compiler, that Veracode does not actively support. Results from the analysis of this module are not as accurate as results produced from supported platforms. Attempting to analyze this module may cause the analysis to fail. If it is a primary module, try to recompile the module for a supported platform. For example, a primary module may be an executable rather than a supporting library.

<p><span style="font-size: medium;">Incrementally Linked Libraries</span></p>

The module is built with incremental linking turned on. In some cases, this condition can impair the quality of the analysis and increase scan times. If possible, try to recompile the module without incremental linking.

<p><span style="font-size: medium;">JSP Compilation Errors</span></p>

Veracode cannot analyze JSP files that cannot be compiled. If you receive this message, verify that you include all files and classes on which the JSP files depend. Upload any missing files and classes.

[Java compilation instructions](https://docs.veracode.com/r/c_precomp_MS) provide additional guidance regarding JSP files.

<p><span style="font-size: medium;">Missing Debug Information</span></p>

If Veracode shows any modules as missing debug information, in red, you must recompile the associated binaries according to the [Veracode Packaging Requirements](https://docs.veracode.com/r/compilation_packaging) and upload them again. Veracode does not require debug information for every language. However, failing to include debug information may result in lower quality findings and increased scan times. Veracode also requires debug information to report the source file and line number for findings.

<p><span style="font-size: medium;">Missing Entry Point</span></p>

For a successful static scan, each application or executable module needs a starting point. For a C application, this entry point might be a `main()` function and for a web application, it might be one or more JSP or ASPX pages.

<p><span style="font-size: medium;">No Precompiled Files Located</span></p>

To analyze ASP.NET applications, Veracode requires you to precompile the dynamically generated pages, which are typically prepared at runtime by the application server. If you do not submit precompiled forms, the scan may produce incomplete or incorrect results. For more information, refer to [Packaging ASP.NET Web Applications](https://docs.veracode.com/r/compilation_ASPnet).

Veracode recommends that you use [Veracode Static for Visual Studio](https://docs.veracode.com/r/t_install_visual_studio_extension_2) to prepare your .NET application for uploading to Veracode.

<p><span style="font-size: medium;">Obfuscated or Optimized Code</span></p>

Veracode cannot analyze code compiled with optimizations, or code that has been obfuscated. Recompile the binaries without optimizations or obfuscation and resubmit.

<p><span style="font-size: medium;">Supporting Files Missing</span></p>

Carefully review the list of missing files shown as Not Found. Ensure that none of the files you want to analyze are missing. If you identify any missing supporting files, click **Add Files** and add the libraries containing the dependencies.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> For C/C++ applications, supporting files are required. If you do not upload the supporting files for a module, you cannot scan that module.</p>

<p><span style="font-size: medium;">Unsupported Architecture, Platform, or Compiler</span></p>

If any modules show an Unsupported Architecture, Platform, or Compiler message, in red, Veracode cannot analyze these modules. If you see this message, review the list of [supported platforms and compilers](https://docs.veracode.com/r/r_supported_table). If possible, try to recompile the binaries with a supported compiler or platform. For example, for a Linux binary, try compiling on a Red Hat platform. For a 64-bit Windows binary, try compiling for 32-bit.

<p><span style="font-size: medium;">Unsupported Frameworks (Non-Blocking)</span></p>

This message is informational only, which means that your scan proceeds even if your scan request is for an application that has one or more unsupported frameworks. After the scan of an unsupported framework, Veracode typically produces an incomplete list of the findings in the application. These findings are valid, but because the use of the unsupported frameworks can prevent Veracode from creating a complete model of the application before scanning, parts of the application were not scanned, which leads to an incomplete findings list.

<p><span style="font-size: medium;">Support Issue</span></p>

Veracode detected an issue with the submission that may impact results quality or scan performance. Expand the module details for more information about the specific issue. Veracode detects these common support issues:

**Mismatched PDB files**

Veracode could not load the debug information included for this module as they are not artifacts of the same compilation as the matching binary. Include the debug files you generated at the same time as the binary. You may need to perform a clean rebuild of the application.

**Parse Failure**

The source files indicated by this warning may contain syntax errors that prevent Veracode from analyzing them. Review the code to ensure it is syntactically correct for the language, that it is a supported dialect. Ensure that you include any required dependencies in the submission. Veracode cannot scan files with parse failures. Veracode excludes these files from analysis if you choose to proceed.

**Minified Files**

The JavaScript or TypeScript source files indicated by this warning are minified, obfuscated, or both. Upload only JavaScript or TypeScript source files without any post-processing. Veracode cannot scan minified files and excludes them from analysis.

**Uploaded Source Code Without Binaries**

The submission contains source code files, but no corresponding compiled binary. Veracode analyzes compiled binary executables, rather than source code. For specific formatting instructions, refer to the [Veracode Packaging Requirements.](https://docs.veracode.com/r/compilation_packaging)

**Web.xml Errors**

If you are uploading a Java web archive \(WAR\) for analysis, you may receive one of several messages regarding a missing, empty, or incorrect `WEB-INF/web.xml` filepath. As detailed in the packaging guidance for WAR, EAR, and JAR files in the [Java compilation instructions](https://docs.veracode.com/r/compilation_java), the WAR must contain a valid XML deployment descriptor. Review the instructions and resubmit with a correct `WEB-INF/web.xml` filepath.

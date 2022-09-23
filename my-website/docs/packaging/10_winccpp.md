---
"ft:title" : "C/C++ on Windows Application Packaging"
"ft:prettyUrl" : "compilation_winccpp"
---

Your C/C++ applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires all binary executables, all required libraries, and the complete debug information for the application.

<p><span style="font-size: medium;">Supported C/C++ on Windows Platforms and Compiler Versions</span></p>

|Language|Platform|Version|Compiler|
|----|----|----|----|
|C/C++ (32-bit/64-bit)|Windows|Windows Desktop Environments:<ul><li>Windows XP</li><li>Windows 7</li><li>Windows 10</li></ul>Windows Server Environments:<ul><li>Windows Server 2003</li><li>Windows Server 2008 R2</li><li>Windows Server 2016</li><li>Windows Server 2019</li></ul>|<ul><li>Visual C++ 7.0 for Visual Studio .NET 2002</li><li>Visual C++ 7.1 for Visual Studio .NET 2003</li><li>Visual C++ 8.0 for Visual Studio 2005</li><li>Visual C++ 9.0 for Visual Studio 2008</li><li>Visual C++ 10.0 for Visual Studio 2010</li><li>Visual C++ 11.0 for Visual Studio 2012</li><li>Visual C++ 12.0 for Visual Studio 2013</li><li>Visual C++ 14.0 for Visual Studio 2015</li><li>Visual C++ 14.1.x for Visual Studio 2017</li><li>Visual C++ 14.2.x for Visual Studio 2019</li></ul>|

<p><span style="font-size: medium;">Supported Architectures</span></p>

Veracode supports analyzing Windows C/C++ code compiled for the Intel IA32 and X86\_64 architectures. Veracode does not currently support analyzing Windows C/C++ code compiled for Itanium \(IA64\), Alpha, MIPS, PowerPC, ARM, or other microarchitectures.

<p><span style="font-size: medium;">Platform-specific Debug Settings</span></p>

You can automate these compilation settings by using the [Veracode Visual Studio Extension](https://docs.veracode.com/r/c_title_VS).

Ensure that you compile the binary files with these settings:

-   **Project Properties** \> **Configuration Properties** \> **C/C++** \> **General**

    Set Debug Information Format to Program Database using the `/Zi` option.

-   **Project Properties** \> **Configuration Properties** \> **C/C++** \> **Optimization**

    When possible, set Optimization to Disabled using the`/Od` option.

-   **Project Properties** \> **Configuration Properties** \> **C/C++** \> **Code Generation**
    -   Set Basic Runtime Checks to Default. On the command line, ensure that `/RTC` is not set.
    -   Set Runtime Library to Multi-threaded Debug or Multi-threaded Debug DLL using the `/MTd`, `/MDd`, or `/LDd` options.
    -   Set Buffer Security Check to No using the `/GS-` option.
-   **Project Properties** \> **Configuration Properties** \> **Linker** \> **General**

    Set Enable Incremental Linking to No using the `/INCREMENTAL:NO` options.

-   **Project Properties** \> **Configuration Properties** \> **Linker** \> **Debugging**

    Choose Generate Debug Information optimized for sharing and publishing using the `/DEBUG:FULL` option.

-   Retain the generated PDB file. It is a required dependency.

<p><span style="font-size: medium;">Building and Linking Applications Using the Command Line</span></p>

If you are building a Visual C++ application from the command line, Veracode requires that the `/Zi`, `/Od` and `/GS-` flags are set, the `/RTC` flag is not set, and a debug run-time library is selected, if you are explicitly specifying the `/M` or `/L` option. For example, `{{ /MDd, /MLd, /MTd, /LDd}}` when you compile. You must set the `/INCREMENTAL:NO` and `/DEBUG` flags when linking the application.

This example shows the command-line flags required to build an application for Veracode analysis.

```
cl.exe /Zi /Od /GS- /MTd /link /INCREMENTAL:NO /DEBUG:FULL
```

<p><span style="font-size: medium;">Optimized Code</span></p>

Although Veracode can analyze some Windows C/C++ binaries compiled with optimization, there could be some reduction of results quality. Specifically, Veracode strongly recommends these settings to analyze Windows binaries compiled with optimization:

-   MSVC7: analysis of optimized binaries built with MSVC 7 and earlier is unsupported
-   MSVC8: disable Frame Pointer Omission optimization with the `/Oy-` command-line flag
-   MSVC9: no specific issues

<p><span style="font-size: medium;">C/C++ Windows Application Profile</span></p>

-   You must package applications as EXE, DLL, or ZIP files.
-   Debug symbols are mandatory for main executables. Veracode strongly recommends that you also provide debug symbols for dependent libraries, when possible, to achieve higher-quality scan results.
-   Failure to upload debug symbols for Windows C/C++ applications prevents the scan from proceeding.
-   Failure to upload dependencies for Windows C/C++ applications results in a warning during prescan.

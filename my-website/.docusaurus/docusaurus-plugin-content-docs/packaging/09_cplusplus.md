---
"ft:title" : "C/C++ on Linux Application Packaging"
"ft:prettyUrl" : "compilation_nix"
---

Your C/C++ applications must meet specific compilation requirements before you can submit them for scanning.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires all binary executables, all required libraries, and the complete debug information for the application.

<p><span style="font-size: medium;">Supported C/C++ on Linux Platforms and Compiler Versions</span></p>

| Platform and Architecture | Version | GCC Compilers |
| --- | --- | --- |
| CentOS and Red Hat Enterprise Linux (x64) | 8   | 11.2, 10.2, 9.2, 8.3             |
|                                           | 7   | 8.3, 7.3, 6.3, 5.3, 4.9, 4.8 |
|                                           | 6   | 7.3, 6.3, 5.3, 4.9, 4.8, 4.4 |
|                                           | 5   | 4.9, 4.8, 4.7, 4.1               |
| CentOS and Red Hat Enterprise Linux (x86) | 5   | 4.9, 4.8, 4.2, 4.1               |
|                                           | 4   | 4.2, 4.1, 4.0, 3.4, 3.3        |
|                                           | 3   | 3.2                                    |
| openSUSE (x86)                            | 10  | 4.1, 4.5, 4.8, 4.9                       |
| openSUSE (x64)                            | 11  | 4.9, 4.8, 4.5                      |
| openSUSE (x86)                            | 11  | 4.9, 4.8, 4.5                      |

<p><span style="font-size: medium;">Supported Architectures</span></p>

Veracode supports analyzing C/C++ code compiled for the Intel IA32 and X86\_64 architectures. Veracode does not currently support analyzing C/C++ code compiled for Itanium \(IA64\), Alpha, MIPS, PowerPC, ARM, or other microarchitectures.

<p><span style="font-size: medium;">Platform-Specific Debug Settings</span></p>

Ensure that you compile the binary files with debug settings. Compile code with these options:

```
-gdwarf-2 -g3 -O0 -fno-builtin
```

Do not compile code with any of these options:

-   `-O`
-   `-mflat`
-   `-mno-faster-structs`
-   `-mimpure-text`
-   `-mcpu={ultrasparc or ultrasparc3}`
-   `-mtune={ultrasparc or ultrasparc3}`
-   `-mlittle-endian`
-   `-mcmodel`
-   `-mstack-bias`
-   `-p, -pg, -fprofile-<any>`

To reduce false positives, add these options with `<pre>` to the executables you do not use as a library:

- `-Wl,--version-script=veracode.expmap`
- A `veracode.expmap` with: `{global:main;local:*;};`

<p><span style="font-size: medium;">Packaging Guidance</span></p>

-   You must package applications as EXE, TAR, TAR.GZ, TGZ, or SO files.
-   Dwarf debug symbols are mandatory for main executables. Failure to upload debug symbols for Linux C/C++ applications prevents the scan from proceeding.
-   Failure to upload dependencies for Linux C/C++ applications results in a warning during prescan.

<p><span style="font-size: medium;">Compatibility Notes</span></p>

-   GCC 4.4 is only supported on:
    -   64-bit RedHat Enterprise Linux 5 and 6
    -   32-bit and 64-bit openSUSE 11
-   GCC 6 and 7 are only supported on 64-bit operating systems.
-   You must package applications as a TAR file \(extensions of TAR, TAR.GZ, TGZ\), ZIP file, or submit individual native binaries with the SO extension.

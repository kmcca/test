---
"ft:title" : "COBOL Application Packaging"
"ft:prettyUrl" : "c_compilation_cobol"
---

Your COBOL applications must meet specific requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires that you encode all COBOL source code files as UTF-8 text files, with the extension COB, CBL, COBOL, or PCO. Copy tables must have the CPY extension. Veracode does not support EBCDIC encoding.

Veracode recommends that you submit your COBOL source files as separate files in an archive. Do not concatenate COBOL into a single file for analysis.

Veracode does not require you to provide copybooks for scans. If available, copybooks provide increased scan coverage and accuracy. You must extract each program into its source file. Veracode ignores source files with unsupported extensions or text files without extensions.

Veracode does not support syntax split between the main program and the imported copybook. Veracode parses each file as an independent unit. If Veracode successfully parses the imported copybook, Veracode appends the syntax tree at the referencing node of the main program. You must comment out any incomplete statements in copybooks and the main program. You can still scan the main program if it is syntactically correct, even if the imported copybook is not resolved or fails to parse.

<p><span style="font-size: medium;">Supported COBOL Versions</span></p>

|Language|Dialects|Supported Versions|Notes|
|--------|--------|------------------|-----|
|COBOL|Enterprise COBOL for z/OS|3.1–6.2|CICS, DB2, and IMS DL/I embedded code inserted using EXEC statements are supported.|
|IBM ILE COBOL|7.0|
|MicroFocus COBOL \(Net Express\)|5.0| |
|AcuCOBOL-GT|10.3| |
|COBOL-85| | |
|SCOBOL| | |
|COBOL-2002| | |
|HP COBOL Tandem for TNS / TNS/R| | |
|COBOL/400| | |
|COBOL for OS/390| | |
|COBOL for OS/370| | |
|COBOL for MVS| | |
|OS/VS COBOL| | |
|VS COBOL II| | |

<p><span style="font-size: medium;">Code Extraction and Preparation</span></p>

Many COBOL mainframe systems store their source code in a database or libraries. To analyze this source code with Veracode, you must first extract the COBOL source code from the database into plain source files that Veracode can scan. These files must be discrete source files, instead of partitioned data sets or other proprietary extraction format.

The system management team with the necessary system administration privileges normally extracts the code from the host system. The extraction process follows the same process during data and system migration and for analysis in source code management systems such as Serena Changeman ZMF.

In the case of IBM iSeries, the code is organized into libraries, similar to directories, and source physical files. Multiple members contain the source code items. The extraction script typically uses system commands to extract code from libraries to system files that you can then transfer to an external system for upload to Veracode. Due to the mainframe security restrictions and implementation differences between different systems, Veracode recommends contacting your system management team to discuss the extraction process and scanning of COBOL programs.

You must compress all COBOL source files of the same application in a supported archive file format such as ZIP. When you upload COBOL source files to an application profile on the Veracode Platform, Veracode automatically recognizes these source files and correctly routes them for scanning.

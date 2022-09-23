---
"ft:title" : "RPG Application Packaging"
"ft:prettyUrl" : "compilation_rpg"
---

Your RPG applications must meet specific packaging requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires all RPG source code files to be UTF-8 encoded text files, with the RPG, RPG4, or RPGLE extension. You may include DDS files in the source file directory with these extensions:

-   PF: physical database file
-   LF: logical database file
-   DSPF: display file \(screen mask for interactive input\)
-   PRTF: printer file
-   ICF: program-to-program communication file

<p><span style="font-size: medium;">Supported RPG Versions</span></p>

|Language|Platform|Version|
|----|----|----|
|RPG|IBM iSeries, pSeries|RPG III, RPG IV, RPGLE|

<p><span style="font-size: medium;">Code Extraction and Preparation</span></p>

Windows and Linux systems keep source code in files. However, many RPG systems keep source code in a database or libraries. To transfer source code to Veracode for scanning, you must first extract the RPG source code from the database on a host system into source files that Veracode can scan.

You must extract each program into its own source file.

If you have system administration privileges, you can extract the code from the host system using tools such as IBM iAccess, iSeries Navigator, CPYTOIMPF, or CPYTOSTMF.

If you use the IBM iSeries tool, the code is organized into libraries, similar to directories, and source physical files with multiple members containing the source code items. The extraction script uses system commands to extract code from libraries to system files that you can transfer to an external system for upload to Veracode. Because of the mainframe security restrictions and implementation differences between different systems, Veracode recommends contacting your IT system management team to discuss the extraction process and scanning of RPG programs.

You must compress all RPG source files of the same application in a supported archive file format, such as ZIP. When you upload RPG source files to an application profile, Veracode automatically recognizes the files and correctly routes them for scanning.

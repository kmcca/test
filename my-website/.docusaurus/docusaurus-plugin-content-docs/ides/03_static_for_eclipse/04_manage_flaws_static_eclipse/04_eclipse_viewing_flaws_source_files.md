---
"ft:title" : "Viewing Flaws in Source Files from Within Eclipse"
"ft:prettyUrl" : "c_Eclipse_source"
---
If you have an open Eclipse project in the current workspace and that [project references a source file for a flaw](https://docs.veracode.com/r/Create_an_Eclipse_Project_with_References_to_Source_Files), Veracode Static for Eclipse can open that source file and go to the line containing the flaw.

If source files are available, but are not referenced in any Eclipse project, you can create an Eclipse project and add references to the directory containing the source files. The directory structure of the binaries uploaded to Veracode must match the directory structure of the local source files. Veracode Static for Eclipse can open the source file of the flaw and locate the line where the flaw occurs as long as:

-   The folder structure within the Eclipse project is consistent with the Folder Path value in the Results view.
-   The filename of the source file matches the File Name value in the Results view.
---
"ft:title" : "Matching Filenames in Static Scans"
"ft:prettyUrl" : "Matching_Filenames_in_Static_Scans"
---

The Veracode Platform attempts to match uploaded application files that appear to be related to a source file, but may have different build or version numbers. By matching these files, Veracode can track flaws across different builds without falsely reporting any new flaws because the name of the container changes between scans.

The matching scheme examines only the last characters of the filename preceding the file extension. Consider these sample files:

-   `myapp-123.dll`
-   `myapp-124.dll`

Veracode recognizes these files as different versions of the same file because they contain the same base name, `myapp`. Only the trailing numbers `123` and `124` at the end of the filename are different.

These filenames do not match the previous filenames because the final part of the names contain alphabetic characters:

-   `myapp-123-test.dll`
-   `myapp-124-test.dll`

In some circumstances, this filename matching scheme may encounter problems. You might upload files that appear to match and Veracode does not match them. Consider an application that has multiple, similar files in the build, such as:

-   `function-1.dll`
-   `function-2.dll`
-   `function-3.dll`

In this scenario, flaw matching can encounter problems between scans when Veracode matches them as versions of the same file although they are unrelated. Depending on which file the Veracode Platform finds first, the module listing for the scan identifies code added or removed because these files contain different code.

Veracode recommends that you append alphabetic characters to the end of the filename to avoid ending the filename with numerals.
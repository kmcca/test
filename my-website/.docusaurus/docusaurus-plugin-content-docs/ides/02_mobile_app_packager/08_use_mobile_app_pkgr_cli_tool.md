---
"ft:title" : "Package Applications with the Mobile Application Packager Command-Line Tool"
"ft:prettyUrl" : "t_xcode_cli_use"
---
You can use the Veracode Mobile Application Packager Command-Line Tool to compile and package XCWORKSPACE and XCODEPROJ files or package XCARCHIVE files from Xcode projects into ZIP files. The command-line tool compiles and packages files with the required structure for submission to Veracode in an automated environment.

<p font-size="13pt"><b>Steps</b></p>

1.  Open a command-line window.

2.  Enter a command with the appropriate [packaging action and configuration options](https://docs.veracode.com/r/r_xcode_packaging_options) for the file type you want to package:

    -   To compile and package your iOS application with the required Veracode settings, enter `vcxcodepkg -b=~{MyProjectFile}`. For example:

        ```
        vcxcodepkg -b=~/MyProject.xcodeproj --noui --logfile=~/Desktop/log.log
        ```

    -   If you have already compiled your application as an XCARCHIVE file, enter `vcxcodepkg -a=~{MyArchiveFile}` to package the file in the structure Veracode requires. For example:

        ```
        vcxcodepkg -a=~/MyArchive.xcarchive --verbose
        ```

    When the action completes, results are available at `~/Documents/MobileApplicationPackager/`.
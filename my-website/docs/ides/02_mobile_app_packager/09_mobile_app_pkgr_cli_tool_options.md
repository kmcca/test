---
"ft:title" : "Mobile Application Packager Command-Line Tool Packaging Options"
"ft:prettyUrl" : "r_xcode_packaging_options"
---
These tables describe the packaging actions available in the Veracode Mobile Application Packager Command-Line Tool.

## Packaging Actions

| Short Option | Long Option | Argument                                 | Description                                                                               |
|--------------|-------------|------------------------------------------|-------------------------------------------------------------------------------------------|
| `-a`         | `--archive` | Path to an XCARCHIVE file                | Builds a ZIP file from an XCARCHIVE file                                                  |
| `-b`         | `--build`   | Path to an XCODEPROJ or XCWORKSPACE file | Compiles an XCODEPROJ or XCWORKSPACE file and packages it as a ZIP file                   |
| `-h`         | `--help`    | None                                     | Displays a help message with information about the options available                      |
| `-v`         | `--version` | None                                     | Displays the version number of the Veracode Mobile Application Packager Command-Line Tool |

## Configuration Options

| Short Option | Long Option | Argument                                 | Description                                       |
|--------------|-------------|------------------------------------------|---------------------------------------------------|
| `-l`         | `--logfile` | Path to a file to output the log details | Logs all messages to a file at the specified path |
|              | `--noui`    | None                                     | Disables formatted text and progress bars         |
|              | `--nocolor` | None                                     | Disables color codes before printing              |
|              | `--verbose` | None                                     | Prints verbose information                        |

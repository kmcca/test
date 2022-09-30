---
"ft:title" : "Enable Debug Logs for Greenlight for Eclipse"
"ft:prettyUrl" : "Enable_Debug_Logs_for_Greenlight_for_Eclipse"
---
You can enable debug logs to get troubleshooting information for Veracode Greenlight. You can use this information to troubleshoot issues on your own or provide it to Veracode Technical Support.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).

<p font-size="13pt"><b>Steps</b></p>

1.  Search your computer for the `eclipse.ini` file. The file is usually next to your Eclipse IDE executable file you used to install Eclipse.

2.  Edit the `eclipse.ini` file and add this property: `-Dgreenlight.debug=true`.

3.  Save the file.

    A new `greenlight.log` file now logs your Greenlight actions. The file is located in:

    -   On Windows: `C:\users\username\AppData\Local\Temp\`
    -   On Linux: `/tmp`
    -   On macOS, run this command in your terminal: `open $TMPDIR`
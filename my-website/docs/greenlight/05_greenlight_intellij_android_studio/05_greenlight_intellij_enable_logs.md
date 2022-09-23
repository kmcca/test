---
"ft:title" : "Enable Greenlight Debug Logs for Android Studio or IntelliJ"
"ft:prettyUrl" : "Enable_Debug_Logs_for_Veracode_Greenlight"
---
You can enable debug logs to get troubleshooting information for Veracode Greenlight. You can use this information to troubleshoot issues on your own or provide it to Veracode Technical Support.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).

<p font-size="13pt"><b>Steps</b></p>

1.  In your IDE, click **Help** > **Edit Custom VM Options**.

    A `.vmoptions` file opens.

2.  In the `.vmoptions` file, add this property: `-Dgreenlight.debug=true`.

3.  Save the file.

    A new `greenlight.log` file now logs your Greenlight actions. The file is located in:

    -   On Windows: `C:\users\username\AppData\Local\Temp\`
    -   On Linux: `/tmp`
    -   On macOS, run this command in your terminal: `open $TMPDIR`
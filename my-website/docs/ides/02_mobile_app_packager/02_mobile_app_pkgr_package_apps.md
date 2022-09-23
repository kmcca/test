---
"ft:title" : "Package Applications with the Mobile Application Packager"
"ft:prettyUrl" : "t_xcode_integration"
---
Veracode requires that you package your application as a ZIP file that contains debug (dSYM) information for the application and any other information that is relevant to the new structure.

<p font-size="13pt"><b>Before You Begin</b></p>

Before you can use the Veracode Mobile Application Packager, you must have:

- macOS 10.14 or later
- Installed Xcode 9.x or later
- Installed Xcode Command-Line Tools
- Installed the [Veracode Mobile Application Packager](https://docs.veracode.com/r/t_install_xcode)
- [Compiled your iOS application](https://docs.veracode.com/r/compilation_ios)

<p font-size="13pt"><b>Overview</b></p>

As an alternative to using the Veracode Mobile Application Packager to package your application, you can follow the [iOS Packaging Guidance](https://docs.veracode.com/r/compilation_ios).

<p font-size="13pt"><b>Steps</b></p>

1.  Open your Xcode project.

2.  From the Xcode menu bar, select **Product** \> **Archive** to create an archive for that project.

3.  Open the Veracode Mobile Application Packager.

4.  Select an application from the Applications list.

5.  Select the archive you want to package and click **Create Package**.

    This action generates a ZIP file, which is available in `~/Documents/MobileApplicationPackager` or the custom location set in the preferences.

<p font-size="13pt"><b>Next Steps</b></p>

You can now upload your iOS application to Veracode for analysis. Review [Static Analysis](https://docs.veracode.com/r/request_main) for detailed instructions on submitting an application for analysis.
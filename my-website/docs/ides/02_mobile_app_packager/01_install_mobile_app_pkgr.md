---
"ft:title" : "Install the Mobile Application Packager"
"ft:prettyUrl" : "t_install_xcode"
---
You can download the Veracode Mobile Application Packager as a DMG file from Veracode and install it on macOS.

<p font-size="13pt"><b>Before You Begin</b></p>

Before installing the Veracode Mobile Application Packager, you must have:

- macOS 10.13.14 or later
- If you currently have version 1.x of the Veracode Mobile Application Packager installed, remove it by either:
    - Opening the `Applications` folder and deleting the `MobileApplicationPackager` folder.
    - Opening a command-line window and running this command:

        ```
        rm -r /Applications/MobileApplicationPackager.app
        ```

- Starting with version 2.1, the Veracode Mobile Application Packager and the CLI Tool use Swift 5. Veracode recommends that you install the Swift 5 runtimes from Apple. Go to [download.developer.apple.com](https://download.developer.apple.com/Developer_Tools/Swift_5_Runtime_Support_for_Command_Line_Tools/Swift_5_Runtime_Support_for_Command_Line_Tools.dmg) and search for Swift and Swift Packages. You must have a developer account to download these runtimes from Apple.

<p font-size="13pt"><b>Steps</b></p>

1.  Download the DMG installer file from [https://tools.veracode.com/integrations/xcode/com.veracode.mobileapplicationpackager.dmg](https://tools.veracode.com/integrations/xcode/com.veracode.mobileapplicationpackager.dmg).

2.  Double-click the DMG file.

3.  Drag the Veracode Mobile Application Packager to the `Applications` folder to complete the installation.

<p font-size="13pt"><b>Results</b></p>

After you launch the Veracode Mobile Application Packager, the ![](../images/01_icon.png) icon appears on the Dock. Click the icon to [use the packager](https://docs.veracode.com/r/t_xcode_integration) and prepare your application for analysis.
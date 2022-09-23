---
"ft:title" : "Automate the Installation of the Mobile Application Packager Command-Line Tool"
"ft:prettyUrl" : "Automate_the_Installation_of_the_Veracode_Mobile_Application_Packager_Command_Line_Tool"
---
You can use a script to simplify the installation process of the Veracode Mobile Application Packager Command-Line Tool.

Run this script to download and attach the DMG installer image:

   ```
   curl -O https://tools.veracode.com/integrations/xcode/com.veracode.mobileapplicationpackager.dmg
   hdiutil mount com.veracode.mobileapplicationpackager.dmg
   cd "/Volumes/Veracode Mobile Application Packager/Veracode Mobile Application Packager.app/Contents/SharedSupport"
   ./vcxcodepkg
   ```
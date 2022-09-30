---
"author": ["Scott Jordan"]
"ft:originID": "compilation_ios"
"ft:lang": "en-US"
"ft:title": "iOS and tvOS Application Packaging"
"ft:prettyUrl": "compilation_ios"
"media_dir": "images/"
---
The iOS and tvOS applications you develop using Swift and Objective-C must meet specific packaging and compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis \(SCA\) upload and scan, if licensed. For SCA agent-based scan requirements, see [Using Veracode SCA with Programming Languages](https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages).

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires all binary executables and all required libraries for the application.

This compilation guidance covers native iOS applications developed using Objective-C and Swift. For support for applications developed with JavaScript, refer to the compilation guidance for [PhoneGap](https://docs.veracode.com/r/compilation_phonegap), [Titanium](https://docs.veracode.com/r/compilation_titan), [Xamarin](https://docs.veracode.com/r/compilation_xamarin), and [React Native](https://docs.veracode.com/r/c_compilation_react).

<p><span style="font-size: medium;">Supported iOS Platforms and Compilers</span></p>

|Language|Platform|Version|IDE|
|----|----|----|----|
|Objective-C, C/C++, Swift 3.x, 4.x, 5.x compiled as bitcode|iOS|<br>iOS 11–15<br>watchOS 6–8<br>tvOS 14–15|Xcode 11.x–13.4.x|
|<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> <a href="https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning">Initial support</a> for watchOS 8 and tvOS 15.</p>|

These instructions provide specific guidance on how to use Xcode to configure the scan settings that Veracode uses to scan your iOS application. These instructions also explain how to use the Apple Xcode utility to compile iOS applications for Veracode using the command line. Veracode also supports analyzing applications compiled with the [PhoneGap](https://docs.veracode.com/r/compilation_phonegap), [Titanium](https://docs.veracode.com/r/compilation_titan), [Xamarin](https://docs.veracode.com/r/compilation_xamarin), and [React Native](https://docs.veracode.com/r/c_compilation_react) cross-platform development frameworks.

Veracode analyzes all components submitted with an iOS application, such as standalone frameworks, extensions, and watchOS extensions. After a prescan, you can select these components as separate modules.

Veracode can scan only iPhone, iPad, or Watch applications compiled with debug symbols. Providing debug scans of iOS application code enables Veracode to provide source file and line number information about the location of flaws found.

<p><span style="font-size: medium;">Compilation Guidance for iOS</span></p>

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode requires that all components of iOS applications support bitcode.</p>

Veracode offers a mobile application packager for Xcode. This mobile application packager includes a CLI tool that can help compile and package iOS applications built with Xcode 11.x or later. See the [instructions on installing and using the Veracode Mobile Application Packager Command-Line Tool](https://docs.veracode.com/r/t_xcode_cli_install).

These settings are necessary for Veracode to analyze your application. They do not affect any project-specific settings that your application may require.

<p font-size="13pt"><b>Steps</b></p>

1.  Launch Xcode, and select the Project and Signing Profile.
2.  In the Project Navigator, select the Project and its target to display the project editor.
3.  Go to **Build Settings** and select **All** instead of **Basic**.
4.  Go to **Build Settings** \> **Build Options** \> **Debug Information Format** and set the values to **DWARF with dSYM** file.
5.  Go to **Build Settings** \> **Build Options** \> **Enable Bitcode** and set the value to **Yes**.
6.  Select **Product** \> **Scheme** \> **Edit Scheme**, then, click **Archive**.
7.  For **Build Configuration**, select **Debug**.
8.  In the Xcode project editor, choose **Generic iOS Device** from the Scheme menu.
9.  Go to the **Product** menu option and select **Archive**.
10. After the archiving process completes, the Xcode Organizer shows your archive highlighted.
11. Right-click the project and choose **Show in Finder**.

Use `xcodebuild` with the parameters shown in this example command to compile your application from the command line:

```
xcodebuild archive -project MyApp.xcodeproj -scheme MyApp -destination generic/platform=iOS DEBUG_INFORMATION_FORMAT=dwarf-with-dsym ENABLE_BITCODE=YES
```

If you compile your application from the command line, you still must set the archive build configuration in the project scheme to **Debug**. To set the archive build configuration, go to **Product** \> **Scheme** \> **Edit Scheme** \> **Archive** \> **Build Configuration** \> and select **Debug**.

After you compile your application, you must package the archive according to the [packaging guidance](#iosguidance).

If you are using the Cocoapods dependency manager, you can add a snippet to the bottom of your podfile to automatically enable bitcode for your project dependencies.

1.  Add this snippet to your podfile:

    ```
    post_install do |installer|   
    installer.pods_project.targets.each do |target|       
    target.build_configurations.each do |config|         
    config.build_settings['ENABLE_BITCODE'] = 'YES'    
    end  
    end
    end
    ```

2.  Run this command in the terminal:

    ```
    > cd <project_home_dir> && pod install
    ```


<p><span style="font-size: medium;">Packaging Guidance</span></p>

<a name ="iosguidance"></a>
To submit your iOS application to the Veracode Platform, Veracode requires that you package your application by archiving the generated `.xcarchive` folder in ZIP format. You must manually create the package because Xcode does not bundle the debug information automatically in a portable format.

Veracode provides a mobile application packager for Xcode that can help package iOS applications built with Xcode 11.x or later. Veracode recommends you use this tool to prepare your application for analysis on the Veracode Platform. View the [instructions on installing and using the Veracode Mobile Application Packager](https://docs.veracode.com/r/t_install_xcode).

If you cannot package your application using the Veracode Mobile Application Packager, you can package your application manually using these instructions:

1.  Navigate to the Xcode archive that contains the compiled iOS application. The archive is usually located in `~/Library/Developer/Xcode/Archives`.
2.  To create a ZIP archive, highlight the `.xcarchive` folder, right-click the folder, and select **Compress**.
3.  Optionally, rename the resulting archive file. Ensure that you preserve the ZIP extension. You upload this file to the Veracode Platform.

You can then upload your iOS application to the Veracode Platform for analysis. See the instructions for [submitting an application for analysis](https://docs.veracode.com/r/Requesting_a_Static_Scan).

If you use Veracode Software Composition Analysis, you must also upload the `Podfile.lock` file, which is present before compilation, to the Veracode Platform. To upload your archives for analysis:

1.  Add the `Podfile.lock` file to the root of another ZIP archive separate from the one that includes the `.xcarchive` folder.
2.  Upload both this new archive and the archive that includes the `.xcarchive` folder to the Veracode Platform.

<p><span style="font-size: medium;">Legacy Packaging Instructions</span></p>

Veracode recommends using the [simpler method](#iosguidance) of creating a ZIP package, but also supports the Veracode-specific BCA packaging format that was previously required for iOS analysis. These instructions are for reference only.

To create a BCA package:

1.  Navigate to the Xcode archive that contains the compiled iOS application. The archive is usually located in: `~/Library/Developer/Xcode/Archives`.
2.  In macOS, right-click the archive and select **Show Package Contents**. <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you are working with this archive on a computer that does not have Xcode installed, navigate to the `archives` folder, and you have the ability to open the `xcarchive` file as a folder.</p>

3.  Expand the `Products` folder and select the `Applications` folder.
4.  Move the `Applications` folder out of the `Projects` folder, and place it in the parent directory.
5.  Rename the `Applications` folder to `Payload`.
6.  Delete the `Products` folder so that the final directory is structured similar to this example:

    If using Veracode Software Composition Analysis, after compiling the application, create a ZIP archive that contains the output BCA file of the compiled Objective-C or Swift application and the `Podfile.lock` file, which is present before compilation.

    Optionally, you can exclude the `SwiftSupport` or `SCMBlueprint` folders if they exist in the `Projects` folder.

7.  Create a ZIP archive containing the `Payload` folder. Highlight all items in the directory, right-click, and select **Compress**.

8.  Right-click the file `Archive.zip` and select **Get Info**.
9.  Under Name & Extension, rename the archive to <project title\>.bca.

10. When prompted, click **Use .bca** to change the extension.
11. Move the new `BCA` file to a new location on your computer. You upload this `BCA` file to the Veracode Platform.
12. You can now upload your iOS application to the Veracode Platform for analysis. For detailed instructions on submitting an application for analysis, see [Requesting a Static Scan](https://docs.veracode.com/r/Requesting_a_Static_Scan).

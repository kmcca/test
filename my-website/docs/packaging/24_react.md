---
"ft:title" : "React Native Application Packaging"
"ft:prettyUrl" : "c_compilation_react"
---

Your React Native applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode recommends that you submit your React Native application as an archive containing the source code. You can also submit your application as a compiled iOS archive \(IPA\) or a compiled Android package \(APK\).

<p><span style="font-size: medium;">Supported React Native Versions</span></p>

|Technology|Platform|Version|
|----|----|----|
|JavaScript/React Native|Android, iOS|0.50–0.6x|

<p><span style="font-size: medium;">Packaging Guidance</span></p>

When uploading a ZIP archive of the source code to Veracode, do not submit files that you built using webpack or other packaging mechanisms. Source files must be UTF-8 encoded.

To ensure that a source file has a consistent name that Veracode can use for analysis, Veracode recommends that you modify the configuration files you use for iOS or Android.

<p><span style="font-size: medium;">Configuration for iOS</span></p>

Add this line to the `react-native-xcode.sh` configuration file:

```

   --sourcemap-output "$BUNDLE_FILE.map"

```

Create a build using Xcode and ensure that it has the IPA file extension. Then, upload that file to Veracode for analysis.

<p><span style="font-size: medium;">Configuration for Android</span></p>

You must modify two components to produce a package for analysis, in this sequence:

1.  Modify the Gradle configuration file `build.gradle` to define the bundle name:

    ```

     project.ext.react = [
          bundleAssetName: "main.jsbundle",
    ]

    ```

2.  Edit the Android packager script `./node_modules/react-native/react.gradle` to add these modifications to the build script:

    ```
    def jsBundleMapFile = "${jsBundleFile}.map"
          "--sourcemap-output", jsBundleMapFile

    ```


After you make these modifications to the build scripts, use Gradle to create an APK file. Then, upload that file to Veracode for analysis.

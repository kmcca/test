---
"ft:title" : "Android Application Packaging"
"ft:prettyUrl" : "compilation_android"
---

Your Android applications must meet specific packaging and compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis \(SCA\) agent-based scanning. For SCA agent-based scan requirements, see [Using Veracode SCA with Programming Languages](https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages).

Veracode supports the scanning of Java and Kotlin applications compiled for Android. Veracode also supports these mobile frameworks:

-   [Appcelerator Titanium](https://docs.veracode.com/r/compilation_titan)
-   [Apache Cordova/Adobe PhoneGap](https://docs.veracode.com/r/compilation_phonegap)
-   [React Native](https://docs.veracode.com/r/c_compilation_react)
-   [Xamarin](https://docs.veracode.com/r/compilation_xamarin)

Veracode does not support other cross-platform development frameworks.

<p><span style="font-size: medium;">Supported Android JREs and Compilers</span></p>

|Language|Platform|Supported Versions|
|----|----|----|
|Jetpack|Android|All stable releases through January 2022|
|Java and Kotlin|Android|Android 2.2–12 (API Levels 8–31)|
|<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> <a href="https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning">Initial support</a> for Android 12 (API Level 31).</p>|

Veracode supports scanning Android applications written in Java and Kotlin and packaged as an Android Package \(APK\) or Android App Bundle \(AAB\).

Veracode can analyze Android application code with or without `debug` symbols. When you provide debug builds of Android application code, Veracode can provide source file and line number information about the location of findings.

For a successful scan, you cannot obfuscate the Android application.

<p><span style="font-size: medium;">Supported Android Frameworks</span></p>

Veracode supports and provides high-quality results for Android applications using these frameworks.

|Framework|Supported Versions|
|----|----|
|AWS Mobile SDK for Android|2.2.4|
|Parse Android SDK|1.9.4|
|ExoPlayer|2.x|

<p><span style="font-size: medium;">Compilation Guidance for Debug Builds</span></p>

1.  If you use Android Studio to develop your project:
    -   Select a debug build variant from the Build Variants menu. Verify that you set all submodules to **Debug**.
    -   Name the APK using this format: `<app_name>-<productFlavor>-debug.apk`
2.  To build with Android Studio on the command-line interface, use `gradlew` with the `assembleDebug` option.
3.  With the standard `javac` compiler, on the command line, add the `-g` option to obtain debug symbols, for example:

    ```
    javac -g foo.java
    ```

4.  If you are using ant to build the project, you must enable the `debug` property in the `javac` tasks, for example:

    ```
    <javac debug="on"> ... set of classes </javac>
    ```

5.  If you are developing the project with Eclipse, go to **Project** \> **Properties** and select the Java Compiler properties. Under Classfile Generation, select these options:
    -   **Add variable attributes to generated class files**
    -   **Add line number attributes to generated class files**
    -   **Add source file name to generated class files**

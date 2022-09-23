---
"ft:title" : "Titanium Application Packaging"
"ft:prettyUrl" : "compilation_titan"
---

Your Titanium applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires your Titanium application to be a compiled Android package \(APK\).

<p><span style="font-size: medium;">Supported Titanium Versions</span></p>

|Technology|Platform|Version|
|----|----|----|
|JavaScript/Titanium|Cross-Platform, compiled as Android|1.0 and later|

<p><span style="font-size: medium;">Packaging Guidance</span></p>

If you build your application using an older version of Titanium that supports Rhino compilation, disable JS compilation before building the APK. To disable JS compilation, set the `ti.android.compilejs` property to `false` in the `tiapp.xml` file.

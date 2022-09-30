---
"ft:title" : "PhoneGap/Cordova Application Packaging"
"ft:prettyUrl" : "compilation_phonegap"
---

Your PhoneGap/Cordova applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires your Adobe PhoneGap/Apache Cordova application to be a compiled iOS archive \(IPA\) or Android package \(APK\). Compiling your application in one of these formats produces a scannable module for the JavaScript and for the native component, which can be Android or iOS. Ensure that you select the JavaScript module, and, if you have native plugins, the native module.

If you have native plugins for both platforms, you can upload Android and iOS packages, but you should only select a single JavaScript module.

<p><span style="font-size: medium;">Supported PhoneGap/Cordova Versions</span></p>

|Technology|Platform|Version|
|----|----|----|
|JavaScript/PhoneGap|Android, iOS|1.0 and later|

<p><span style="font-size: medium;">Packaging Guidance</span></p>

Veracode strongly recommends that you submit applications that have not been processed with a JavaScript minifier or obfuscation tool. Minified JavaScript can increase the difficulty in reviewing flaw results because line-number information can become obscured.

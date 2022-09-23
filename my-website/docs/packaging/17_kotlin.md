---
"ft:title" : "Kotlin Application Packaging"
"ft:prettyUrl" : "c_compilation_kotlin"
---

Your Kotlin applications must meet specific packaging and compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis \(SCA\) upload and scan, if licensed. For SCA agent-based scan requirements, see [Using Veracode SCA with Programming Languages](https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages).

<p><span style="font-size: medium;">Supported Kotlin Versions</span></p>

|Language|Version|Compilers|
|----|----|----|
|Kotlin|1.6 and earlier|java, kotlinc|
|<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> <a href="https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning">Initial support</a> for Kotlin 1.4-1.6.</p>|

<p><span style="font-size: medium;">Compilation Instructions</span></p>

Kotlin applications often interoperate with Java components. See [Packaging Java Applications](https://docs.veracode.com/r/compilation_java) for more details about preparing Java applications. For more information about Java interoperability, see the [Kotlin documentation](https://kotlinlang.org/docs/).

You must compile and submit Kotlin applications as JAR or WAR files. Submit debug symbols for as much of the application as possible.

---
"ft:title" : "Groovy Application Packaging"
"ft:prettyUrl" : "c_compilation_groovy"
---

Your Groovy applications must meet specific packaging requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

<p><span style="font-size: medium;">Supported Groovy Versions</span></p>

|Language|Version|Compilers|Platform|
|----|----|----|----|
|Groovy|2.4–2.6, 3.0|groovyc 2.4–2.6, 3.0 targeted for JDK7+|JVM 1.6–1.9, 10–15|
|<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> <a href="https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning">Initial support</a> for Groovy 3.0.</p>|

<p><span style="font-size: medium;">Supported Groovy Frameworks</span></p>

|Framework|Supported Versions|
|----|----|
|Grails|3.2–3.3, 4.0|

<p><span style="font-size: medium;">Compilation Guidance</span></p>

You can compile Groovy applications using either:

-   The Grails command-line system
-   IDEs that wrap Groovy and Grails, such as IntelliJ or the Groovy/Grails Tool Suite \(GGTS\)

You must compile and submit Groovy applications as JAR or WAR files. Submit debug symbols for as much of the application as possible.

If you build your project using Ant, you must turn on the `debug` property in the `javac` tasks, for example:

```
<javac debug="on"> ... set of classes
     </javac>
```

<p><span style="font-size: medium;">Grails Command-Line Settings</span></p>

If you build your project with the Grails command line, change your current working directory to the Groovy application home directory. Run this command to produce the JAR or WAR file that you can upload to Veracode for analysis:

```
projectHome$ ./grailsw assemble
```

<p><span style="font-size: medium;">IntelliJ Settings</span></p>

If you build your project with IntelliJ IDEA, perform these actions in the IDE:

1.  **Build** \> **Rebuild Project**
2.  **Build** \> **Make Grails Web Archive**

    When the actions complete, the `build/libs/` folder of the project home directory displays the WAR file that you can upload to Veracode for analysis.

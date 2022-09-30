---
"ft:title" : "Troubleshooting Maven or Gradle Projects Scanned with Greenlight for Eclipse"
"ft:prettyUrl" : "c_eclipse_thirdparty"
---
Veracode Greenlight for Eclipse only supports Eclipse binaries, which means you may experience problems when scanning projects built with third-party build automation tools, such as Maven or Gradle. If you are compiling with Maven or Gradle, Veracode recommends that you use the Eclipse plugin for that build tool to import your files. 

After you import the project into Eclipse using the Maven or Gradle plugin, if you are still experiencing issues scanning your Eclipse project with Greenlight, try these actions:

- [Projects Built with Maven](https://docs.veracode.com/r/Troubleshooting_Eclipse_Project_Scans_Built_with_Maven)
- [Projects Built with Gradle](https://docs.veracode.com/r/Troubleshooting_Eclipse_Project_Scans_Built_with_Gradle)

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Any project must build successfully outside of Eclipse. If you have problems such as classpath or buildpath errors, Eclipse cannot build the files needed to submit a scan to Greenlight.</p>
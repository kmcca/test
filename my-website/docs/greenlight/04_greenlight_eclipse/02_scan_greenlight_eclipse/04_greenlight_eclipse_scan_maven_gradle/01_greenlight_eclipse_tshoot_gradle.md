---
"ft:title" : "Troubleshooting Eclipse Project Scans Built with Gradle"
"ft:prettyUrl" : "Troubleshooting_Eclipse_Project_Scans_Built_with_Gradle"
---
After you import the project into Eclipse using the Gradle plugin, if you are still experiencing issues scanning your Eclipse project with Veracode Greenlight, try using the Java plugin. For example, the `build.gradle` file must contain `apply plugin: 'java'`.

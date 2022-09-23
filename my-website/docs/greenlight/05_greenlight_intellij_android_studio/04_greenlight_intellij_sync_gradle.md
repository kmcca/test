---
"ft:title" : "Synchronize IntelliJ or Android Studio with Gradle Projects"
"ft:prettyUrl" : "c_intellij_thirdparty"
---
You can synchronize IntelliJ or Android Studio with Gradle project files to attempt to resolve build errors when using Veracode Greenlight for IntelliJ to scan Gradle projects built outside the IDE.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).

<p font-size="13pt"><b>Overview</b></p>

IntelliJ and Android Studio provide an option for generating module files that they can use to synchronize the IDE and Gradle project files during a build. See the IntelliJ or Android Studio documentation for details about these files.

<p font-size="13pt"><b>Steps</b></p>

1.  Locate the Gradle project file `build.gradle`.

2.  Add `apply plugin:"idea"` to `build.gradle`.

3.  In the IDE, select **File** > **Settings** > **Build, Execution, Deployment** > **Build Tools** > **Gradle**.

4.  Select **Generate \*.iml files for modules imported from Gradle** to generate these files during the next build:

    - `{project name}.ipr` for project configuration
    - `{project name}.iml` for module configuration
    - `{project name}.iws` for workspace configuration
     
5.  Click **OK**.
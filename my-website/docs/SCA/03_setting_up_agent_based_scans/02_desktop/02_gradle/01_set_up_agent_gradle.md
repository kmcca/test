---
"ft:title" : "Set Up the Agent-Based Scanning Gradle Plugin"
"ft:prettyUrl" : "t_sc_gradle"
---

The Veracode Software Composition Analysis agent-based scanning Gradle plugin allows you to automate the scanning of your Gradle repositories. You can upload the results of plugin scans to the Veracode Platform.

<p font-size="13pt"><b>Before You Begin</b></p>

If you do not have the latest version of the plugin, search for `SourceClear` in the [Gradle plugin portal](https://plugins.gradle.org) and follow the onscreen instructions.

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.

2.  Click the **Agent-Based Scan** tab.

3.  Select a workspace.

4.  Click **Agents** > **Actions** > **Create** > **Gradle**.

5.  Click **Create Agent & Generate Token**.

6.  Choose to either set your API token as an environment variable in the environment where you will build your Gradle repository, or add the token directly to the configuration within your `build.gradle` file:

    -   Run this command to set your environment variable:

        ```
        export SRCCLR_API_TOKEN={apiToken}
        ```

    -   Add this code to your `build.gradle` file:

        ```
                    //For Gradle 2.2.0 or higher
                                    ...
        
                                    plugins {
                                    id "com.srcclr.gradle" version "{Insert latest version}"
                                    }
        
                                    apply plugin: "srcclr"
        
                                    srcclr {
                                    apiToken = "{apiToken}" //Only required if environment variable is not set
                                    }
                                
        ```

        ```
                    //For Gradle before 2.2.0
                                    //Add gradle plugin location
                                    buildscript {
                                    repositories {
                                    maven {
                                    url "https://plugins.gradle.org/m2/"
                                    }
                                    }
                                    }
                                    //Add 'classpath("com.srcclr:gradle:{insert version number}")'  to your dependencies
        
                                    buildscript {
                                    ...
                                    dependencies {
                                    classpath "gradle.plugin.com.srcclr:gradle:<insert version number>"
                                    }
                                    }
        
                                    apply plugin: "srcclr"
        
                                    srcclr {
                                    apiToken = "{apiToken}" //Only required if environment variable is not set
                                    }
                                        
        ```

        <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> For multi-project Gradle builds, Veracode recommends you apply these changes only to the root `build.gradle` file to avoid potentially overriding scan results from the different projects. Do not apply the plugin in the `allprojects` or `subprojects` section of the build file.
</p>

7.  Optionally, add [additional configuration options](https://docs.veracode.com/r/Gradle_Plugin_Configurations).

8.  Save the `build.gradle` file.

    You can run the agent-based scanning plugin during your build by adding the `srcclr` argument to the `gradlew` command.

9.  To perform dependency resolution and build class files, which are the minimum requirements for vulnerable method analysis, run this command:

    ```
    ./gradlew srcclr
    ```

10. For larger builds, you can run this command:

    ```
    ./gradlew clean build srcclr
    ```



---
"ft:title" : "Integrate Veracode with Ant"
"ft:prettyUrl" : "Configure_Ant_Integration"
---
You can add the [Java API wrapper](https://docs.veracode.com/r/c_about_wrappers) to your Ant build server to integrate [Static Analysis](https://docs.veracode.com/r/c_static_overview) in your Ant build process. When using Ant to build Java applications, the API wrapper uploads your Java source code to Veracode for scanning.

<p font-size="13pt"><b>Before You Begin</b></p>

-   Created an [application profile](https://docs.veracode.com/r/request_profile) for each of the applications in your builds
-   Configured an [API service account](https://docs.veracode.com/r/admin_api)
-   Provided the IP address from which you are communicating with Veracode
-   Installed the [Veracode Java API wrapper](https://docs.veracode.com/r/t_working_with_java_wrapper) on your Ant build server

<p font-size="13pt"><b>Steps</b></p>

1. On your Ant build server, set the `JAVA_HOME` environment variable to your Java environment and set `ANT_HOME` to your Ant installation directory.
 
    For `ANT_HOME`, on Unix, add `${ANT_HOME}/bin`. On Windows, add `%ANT_HOME%/bin` to your `PATH`.

2. Run this command to verify these variables: `echo%[environment variable name]%`.

3. Create a Java project with an Ant build script in a `build.xml` file that cleans, compiles, and packages the Java source code.

    The API wrapper installation does not modify the pre-existing project files, such as the `build.xml` and other build files, but does assume the existing build files have target tasks called `clean` and `build`.
 
4. In the `build.xml` file, add these `<property>` and `<target>` elements, including the children elements, for calling the Java API wrapper:

    ```xml
    <property file="veracode.properties" prefix="veracode"/>
    <target name="Veracode-UploadAndScan" description="Turns on debug symbols,logging. Cleans, builds, uploads binaries. Starts scan">
        <!-- Log all output to veracode.log file -->
        <!-- Override the java compiler command and turn on debug setting -->
        <!-- Create a time-stamp value to use for the build id -->
        <!-- Call the Veracode Java wrapper to upload and scan -->
        <java jar="VeracodeJavaAPI.jar" fork="true">
          <arg line=" -action ${veracode.action} -vid ${veracode.vid} -vkey ${veracode.vkey} -criticality ${veracode.criticality} -createprofile ${veracode.createprofile} -version ${current.time} -appname ${veracode.appname} -filepath ${veracode.filepath}"/>
        </java>
    </target>
    ```
  
    This build script runs the Java API wrapper with parameters and values set in a `veracode.properties` file. The `<property>` element specifies the `veracode.properties` file. In the `<target>` element, the `<java>` element specifies the path to the Java API wrapper JAR file. The `<arg>` element specifies the [general parameters](https://docs.veracode.com/r/r_wrapper_parameters) and the parameters for [`uploadandscan`](https://docs.veracode.com/r/r_uploadandscan).

    You can log the scan results and save them as a LOG file. The integration automatically logs all steps in a `veracode.log` file and stores the file in the same location as your Java project.

7. Create a `veracode.properties` file to set the values for the parameters in the Ant script:

    ```
     # "action" holds the veracodeAPI commands. Refer the Java Wrapper as "java -jar VeracodeJavaAPI.jar -help" for full list of commands 
    action=UploadAndScan
    
    # The "createprofile" variable is used to specify whether a new application
    # profile should be created if one does not exist with the name represented
    # by the variable "appname". If createprofile=true and the application profile already
    # exists, the binaries will be uploaded to the existing profile.
    # It can be one of true or false, holds only Boolean data type. 
    createprofile=true
    
    # The business criticality can be set to one of "VeryHigh" (default), "High", "Medium", "Low",
    # or "VeryLow". Enclose the value in quotes if it includes spaces.
    # Value Data Type -> String
    criticality="VeryHigh"
    
    # This is the name of the application profile in the Veracode Platform that the
    # binaries will be uploaded to. It is case-sensitive and must match an existing
    # application profile name if createprofile=false.
    # Value Data Type -> String
    appname="??"
    
    # Path to the final packages binary (.JAR, .WAR, .ZIP, etc). Optionally, a
    # top-level folder can be specified and the script will upload all binaries in
    # that folder if not packaged. Escape backslashes using \\ and enclose value
    # in quotes if it includes spaces.
    # Multiple files can be assigned to file path separated by space
    
    # Path Data Type -> String(s)
    filepath="C:\\...\\...\\" "C:\\..\\"
    
    # The ID of the first and the second API (-api1 and -api2)
    # base64username is the Veracode Platform username encoded in Base64
    # base64password is the Veracode Platform password encoded in Base64
    # Data Type -> String
    base64username="??"
    base64password="??"
    
    # API ID and Key
    vid="??"
    vkey="??"
    
    # Optional proxy host, port and proxy credentials for the upload script to use.
    phost="??"
    pport="??"
    puser="??"
    ppass="??"  
    ```
---
"ft:title" : "Java Application Packaging"
"ft:prettyUrl" : "compilation_java"
---

Your Java applications must meet specific packaging and compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis \(SCA\) upload and scan, if licensed. For SCA agent-based scan requirements, see [Using Veracode SCA with Programming Languages](https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages).

<p><span style="font-size: medium;">Supported Java JREs and Compilers</span></p>

|Language|Platforms|Supported Versions|Compilers|
|----|----|----|----|
|Java|Java SE, Java EE, JSP|JRE 1.4–1.9, 10–17|JDK and OpenJDK 1.3–1.9<br>10–17<br>IBM JDK 1.7–1.8<br>Tomcat Jasper 7<br>WebLogic 12.x|

Veracode can analyze Java code with or without debug symbols. Providing debug builds of Java application code allows Veracode to provide source file and line number information about the location of findings found. For a successful scan, you cannot obfuscate Java applications.

You may mitigate certain findings in code compiled with an earlier compiler version when you run that code on a another runtime environment later. In such cases, the finding descriptions contain a note describing the version dependency.

<p><span style="font-size: medium;">Supported Java Frameworks</span></p>

|Framework/Technology|Supported Versions|Notes|
|----|----|----|
|Adobe Experience Manager|6.4 and earlier|Veracode supports compiled Java code for Sling Servlets, OSGi services, and AEM custom components, packaged as a JAR file.|
|Apache Axiom| | |
|Apache Axis|1.x| |
|Apache Axis2|1.6.2| |
|Apache Chemistry|1.1.0| |
|Apache Commons| |Includes:<br> Commons Attributes<br> Commons BeanUtils<br> Commons ClassScan<br> Commons CLI<br> Commons Codec<br> Commons Collections<br> Commons Collections4<br> Commons Crypto<br> Commons CSV<br> Commons Daemon<br> Commons DBCP<br> Commons DbUtils<br> Commons Discovery<br> Commons Email<br> Commons FileUpload-<br> Commons Lang-<br> Commons Lang 3<br> Commons Logging<br> Commons Net<br> Commons Performance<br> Commons Pool<br> Commons ThreadPool<br> Commons Text|
|Apache CXF|2.7.0|Veracode only supports the parts of CXF that expand JAX-WS.|
|Apache Jersey|2.x| |
|Apache Oro|2.x| |
|Apache Log4j|1.x, 2.x| |
|Apache Velocity|1.7|Veracode only supports the web rendering usage of the default Velocity servlet for binaries uploaded in a WAR file.|
|Apache Xerces|2.x| |
|Apache XMLBeans|2.x| |
|AWS SDK for Java|1.11, 2.0| |
|Azure Functions|2.x, 3.x| |
|Google App Engine|1.9.24| |
|Google Web Toolkit (GWT)|2.8.0| |
|Hibernate|1.x, 2.x, 3.x, 4.x, 5.x| |
|Java Portlets|1.0, 2.0| |
|Java Servlets|3.x| |
|JAX-RS|1.x, 2.x| |
|JAX-WS|2.x| |
|JAXB|2.x| |
|JDBC|4.2 and earlier| |
|JDOM|1.x| |
|JSF|1.x, 2.x| |
|JSTL|1.x| |
|Liferay|6.x|Veracode does not support Liferay applications if you customize them using Hook plugins.|
|Play|2.0–2.7.x| |
|Servlets|3.x| |
|Spring Boot|1.x, 2.x|Supports executable JARs, also known as Uber FAT JARs, and JARs with dependencies|
|Spring Core|1.x, 2.x , 3.x, 4.x, 5.x| |
|Spring Data Access|5.x| |
|Spring MVC|2.x, 3.x, 4.x, 5.x| |
|Spring Security|3.x, 4.x, 5.x| |
|Struts|1.x, 2.x| |
|Tiles|2.x| |

<p><span style="font-size: medium;">Template Engines</span></p>

|Name|Supported Versions|
|----|----|
|Thymeleaf|2.x, 3.x|

<p><span style="font-size: medium;">Obtaining Compilation Debug Symbols</span></p>

Using the standard Java compiler, run the `javac` command with the `-g` option to obtain debug symbols, for example:

```
javac -g test1.java
```

<p><span style="font-size: medium;">Eclipse IDE Settings</span></p>

If you develop the project with Eclipse:

1.  Go to **Project** \> **Properties**.
2.  Select the Java compiler properties.
3.  Under Classfile Generation, select these options:
    -   **Add variable attributes to generated class files**
    -   **Add line number attributes to generated class files**
    -   **Add source file name to generated class files**

<p><span style="font-size: medium;">Maven Settings</span></p>

If you build the project using Maven, include a directive to use the Maven compiler plugin in `pom.xml`, for example:

```
<build>
  <plugins>
    <plugin>
      <artifactId>maven-compiler-plugin</artifactId>
      <configuration>
        <debug>true</debug>
        <debuglevel>lines,vars,source</debuglevel>
      </configuration>
    </plugin>
  </plugins>
</build>

```

After making this change, use `mvn compile` or `mvn package` to build and package the project. The project now includes debug symbols with the application.

Veracode SCA upload scans are more accurate when the Fat JAR files include the JAR files of the project dependencies. To ensure you package your applications to include the dependency JAR files, Veracode recommends you add the OneJar Maven Plugin or, for Spring Boot, the Maven Spring Boot Plugin in the `<build><plugins/></build>` element of `pom.xml`. For example:

-   OneJar Maven Plugin

    ```
    <plugin>
      <groupId>com.jolira</groupId>
      <artifactId>onejar-maven-plugin</artifactId>
      <version>1.4.4</version>
      <executions>
        <execution>
          <goals>
            <goal>one-jar</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
    ```

-   Maven Spring Boot Plugin

    ```
    <plugin>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-maven-plugin</artifactId>
      <version>2.3.4.RELEASE</version>
      <executions>
        <execution>
          <goals>
            <goal>repackage</goal>
          </goals>
        </execution>
      </executions>
    </plugin>
    ```


<p><span style="font-size: medium;">Gradle Settings</span></p>

If you use Gradle to build the project, after applying the Java plugin, configure the build task to add line numbers and local variables in the `build.gradle` file. For example:

```
apply plugin: 'java'
compileJava.options.debug = true
compileJava.options.debugOptions.debugLevel = "source,lines,vars"

```

<p><span style="font-size: medium;">Ant Settings</span></p>

If you build the project using Ant, you must enable the `debug` property in the `javac` tasks, for example:

```
<javac debug="on"> ... set of classes
     </javac>

```

<p><span style="font-size: medium;">Packaging the Application as a WAR, EAR, or JAR</span></p>

Veracode expects you to submit Java web applications in a standard WAR or EAR format. Specifically, the WAR file must contain these directories with these structures:

-   `/WEB-INF/`
-   `/WEB-INF/classes/:` contains all class files
-   `/WEB-INF/lib/:` contains all supporting libraries
-   `/WEB-INF/web.xml`

To determine the scope of analysis, Veracode examines the contents of the WAR or EAR file. Ensure that all classes that you want to analyze exist in either:

-   The `/WEB-INF/classes` directory
-   A non-third party library in `/WEB-INF/lib`

Veracode recommends that EAR files contain a `/META-INF/application.xml` file. If an EAR file does not contain any WAR files, you do not need to include the `/WEB-INF/` directory or the `/WEB-INF/web.xml` file.

For more information on how to prepare a WAR file, see the [Java EE tutorial](https://docs.oracle.com/javaee/7/tutorial/packaging003.htm).

Veracode can scan JAR files that contain a web.xml file in the `/WEB-INF/` directory. Veracode scans these JARs as if they are WAR files, which improves support for application servers and packaging methods that manage this deployment method, including OSGi. Veracode SCA upload and scan only analyzes JAR, WAR, and EAR files. It ignores Java build files, such as `pom.xml` and `build.gradle`.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode Static Analysis does not support JAR files nested inside other JAR files, except for Spring Boot applications. Veracode does support analysis of uber-jar files created by the Maven Shade plugin.</p>

[See Packaging Spring Boot Applications](#j2meBB1).

Veracode extracts client-side JavaScript from JSP files that are uploaded as part of a JAR, WAR, or EAR file, and creates a separate JavaScript module that is selectable for analysis.

<p><span style="font-size: medium;">JSP Files</span></p>

Veracode automatically compiles uploaded JSP files before performing analysis on them. Veracode uses either the Tomcat Jasper compiler version 7 or the WebLogic compiler version 12.x for WebLogic applications.

JSP files that are part of the application must be included in a correctly structured WAR or EAR file. Veracode appends JARs under the directory containing the WAR or EAR file and its subdirectories to the classpath of the JSP compiler. If JSP or other source files must undergo preprocessing during the build process, you must perform this preprocessing before you can submit files for a static scan. However, if artifacts contain precompiled JSP classes, ensure that you also include the source. Veracode does not analyze precompiled JSP files. Ensure that any JSP files that you generate from templates or components, such as include files, have compiled successfully before submission.

At compilation time, the Veracode compiler attempts to force expressions to evaluate so that they can be scanned. This action can sometimes result in compilation errors. Two possible workarounds can prevent these errors:

-   In the TLD file included with the WAR, update the value of any ``<rtexprvalue>`` nodes to `true`.
-   In individual JSPs, set the taglib URIs to point to versions of the taglibs that explicitly support rt-expressions. For example, instead of pointing to the namespace `http://java.sun.com/jstl/core`, point to the namespace `http://java.sun.com/jstl/core_rt`.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> JSP tags and tag attributes are case-sensitive.</p>

If JSP files are dynamically generated at runtime, Veracode cannot analyze them. Veracode identifies these files as missing dependencies during prescan verification. To facilitate analysis, provide static instances of these files or stubs.

Veracode cannot scan JSP files if you cannot compile those files. Veracode reports JSP compilation errors as part of the prescan verification process. You can submit an application that has JSP compilation errors for scanning, but Veracode does not analyze JSP files with compilation errors.


<a name ="velocity"></a>
<p><span style="font-size: medium;">Apache Velocity Template Files</span></p>

Before scanning VM files that you upload in a WAR archive, Veracode automatically compiles them using a custom compiler. Veracode does not scan VM files that are inside JAR files. Before submitting your application, ensure that you package these files within WAR or EAR archives. Veracode cannot scan VM files that an Apache Velocity engine cannot compile. Veracode does not scan any applications that do not meet these requirements.


<a name ="axis"></a>
<p><span style="font-size: medium;">Apache Axis and Axis2</span></p>

If you include any Apache Axis web service code within your WAR file, you must make all WSDD files available in the `/WEB-INF/` directory of the WAR file. For further information on the creation of WSDD files, see the [Apache Axis documentation](https://axis.apache.org/axis/java/user-guide.html#Custom_Deployment_-_Introducing_WSDD).

You must upload Axis2 modules in the MAR format and server-side Axis2 applications in the AAR format.

MAR files must contain these directories with these structures:

-   `/META-INF/`
-   `/META-INF/module.xml`: contains all module files
-   `/class_files`: contains all class files

AAR files must contain these directories with these structures:

-   `/META-INF/`
-   `/META-INF/services.xml`: contains all services files
-   `/class_files`: contains all class files

<p><span style="font-size: medium;">WebSphere Applications</span></p>

For applications that are deployed on WebSphere, a common cause of JSP compilation failure is missing standard WebSphere libraries that are in the WebSphere environment but not packaged with the application. In the event of JSP compilation failure combined with warnings about missing classes, you can check the standard WebSphere directories for your deployed version of the JAR containing these classes; this may include the `<was>lib/app` directory or the `ws.ext.dirs`.

You can use a resource such as [FindJar.com](http://www.findjar.com/) to identify which JARs contain the classes that Veracode indicated as missing. You may use the [JAR Class Finder Plugin for Eclipse](http://www.findjar.com).

In some cases, Veracode can substitute a stock library for libraries that are not provided with the application. It is generally better to provide the version of the library that your project uses to ensure that the application model accurately represents the functionality of your application.

<a name ="j2meBB1"></a>
<p><span style="font-size: medium;">Packaging Spring Boot Applications</span></p>

Spring Boot applications submitted as WAR files should be structured according to the guidance in the Packaging the Application as a WAR, EAR, or JAR section. Ensure that the WAR file contains these directories:

-   `/BOOT-INF/classes/`: contains all class files
-   `/BOOT-INF/lib/`: contains dependencies

See the [Spring Boot documentation](https://docs.spring.io/spring-boot/docs/current-SNAPSHOT/reference/html/) for additional details.

<p><span style="font-size: medium;">Packaging AWS Lambda Applications</span></p>

Veracode requires you to submit applications built for AWS Lambda according to the AWS Lambda Deployment Package formats. For information, see [https://docs.aws.amazon.com/](https://docs.aws.amazon.com) and search for AWS Lambda Deployment Package in Java.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode does not support the analysis of dependencies submitted as <a href="https://docs.veracode.com/r/c_lambda_layers>Lambda layers</a>. To analyze Lambda components deployed in layers, submit them as standard deployment packages, or consider repackaging the function to include layer components as part of the lambda function package.</p>

<p><span style="font-size: medium;">Identifying Lambda Handlers for Java</span></p>

The analysis of Lambda functions relies on the identification of Lambda Handler methods. Veracode uses this set of heuristics to identify methods that can be candidates for handler methods:

-   Classes implementing `com.amazonaws.services.lambda.runtime.RequestHandler`:

    -   The method `handleRequest` that overrides `com.amazonaws.services.lambda.runtime.RequestHandler.handleRequest`

-   Classes implementing `com.amazonaws.services.lambda.runtime.RequestStreamHandler.handleRequest`:

    -   The method `com.amazonaws.services.lambda.runtime.RequestStreamHandler.handleRequest`

-   Deployment packages that reference AWS components or namespaces and classes that do not implement an AWS class:

    -   All public functions that have up to two input parameters, where the second parameter is of type `com.amazonaws.services.lambda.runtime.Context`

    -   All public functions that have up to two input parameters that the Lambda Deployment package does not reference


<a name ="adobe_experience"></a>
<p><span style="font-size: medium;">Packaging Adobe Experience Manager Applications</span></p>

As part of the build process for typical Adobe Experience Manager projects, you can use `mvn install`. After the build completes, upload all ZIP files containing OSGi components or other compiled Java code. The Java code includes any code in the `ui.apps` ZIP archive, which is usually found in `ui.apps/target/`.

Upload each package individually. Do not upload multiple packages in a ZIP file. Veracode does not support ZIP archives containing ZIP files.

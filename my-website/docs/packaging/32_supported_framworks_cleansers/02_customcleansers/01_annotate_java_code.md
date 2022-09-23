---
"ft:title" : "Annotate Java Code"
"ft:prettyUrl" : "t_annotate_java"
---
You can add Veracode custom cleanser annotations to your Java code.

<p font-size="13pt"><b>Steps</b></p>

1.  Download the Veracode annotations JAR file from this URL: [https://tools.veracode.com/customcleanser/VeracodeAnnotations.jar](https://tools.veracode.com/customcleanser/VeracodeAnnotations.jar)

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> Custom cleanser annotations for Java are also available from Maven Central: <a href="https://repo1.maven.org/maven2/com/veracode/annotation/VeracodeAnnotations">https://repo1.maven.org/maven2/com/veracode/annotation/VeracodeAnnotations</a>
    </p>

2.  Reference the custom cleanser annotations package in the project `pom.xml` file. For example:

    ```
    <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
    	...
    	<dependencies>
    		<dependency>		
    			<groupId>com.veracode.annotation</groupId>
    			<artifactId>VeracodeAnnotations</artifactId>
    			<version>[1.0.4,)</version>
    		</dependency>
    	</dependencies>
    	...
    </project>
    
    ```

3.  Build the code using Maven. For example:

    ```
    mvn package
    ```

4.  When compiling, ensure `VeracodeAnnotations.jar` is in your classpath.

5.  Import one or more of these cleansers into your Java source file:

    |Cleanser| Description                                            |
    |--------------------------------------------------------|-----------|
    |`com.veracode.annotation.CRLFCleanser`| Annotates a method that mitigates CWE-93, 113, or 117. |
    |`com.veracode.annotation.FilePathCleanser`| Annotates a method that mitigates CWE-73.              |
    |`com.veracode.annotation.RedirectURLCleanser`| Annotates a method that mitigates CWE-601.             |
    |`com.veracode.annotation.SQLQueryCleanser`| Annotates a method that mitigates CWE-89.              |
    |`com.veracode.annotation.XSSCleanser`| Annotates a method that mitigates CWE-80.              |

6.  If you want to add custom mitigation text to provide additional information, enter a user comment with this syntax:

    ```
    @FilePathCleanser(userComment = "{your custom text}")
    ```

7.  Annotate your method with one or more custom cleanser annotations, depending on how the method validates or sanitizes the user-controlled data provided to it, and apply the cleanser method to user-controlled data to ensure it is validated or sanitized before use. For example:

    ```
    import com.veracode.annotation.FilePathCleanser
                  
    public class SecurityUtil
    {
       @FilePathCleanser
       public static String myProprietaryFilePathCleanser(String path) {
                  
         // Example file path validatation/sanitization implementation 
                  
         return myCleansedFilePath;
      }
    }
                  
    // ...
                  
    String validatedPath = SecurityUtil.myProprietaryFilePathCleanser(userProvidedFilename);
    File myFile = new File(validatedPath);
    ```

<p font-size="13pt"><b>Results</b></p>

Mitigations from Veracode custom cleanser mitigations, including custom mitigation text when provided, appear in the Triage Flaws page, the Application page, and the PDF reports.


---
"ft:title" : "Annotate .NET Code"
"ft:prettyUrl" : "t_annotate_net"
---
You can add Veracode custom cleanser annotations to your .NET code to improve mitigations when using Veracode Static Analysis.

<p font-size="13pt"><b>Steps</b></p>

1.  Download the Veracode custom cleanser DLL file from this URL and add it as a dependency of your project: [https://tools.veracode.com/customcleanser/VeracodeAttributes.dll](https://tools.veracode.com/customcleanser/VeracodeAttributes.dll)

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The Veracode custom cleansers DLL is compatible with .NET 4.x and later. It is also available from NuGet: [https://www.nuget.org/packages/VeracodeAttributes](https://www.nuget.org/packages/VeracodeAttributes)
</p>

2.  Add the `VeracodeAttributes` and start the build using either the Visual Studio Package Manager or the .NET CLI.

    - Open your project in Visual Studio 2012 or later.
        
        a. In Visual Studio, go to **View** > **Other Windows** > **Package Manager Console** and run this command:
    
            Install-Package VeracodeAttributes

        b. Build the project.
        
    - Use the .NET CLI.
    
        a. Add the package to the project with this command:

            
            dotnet add package VeracodeAttributes
            

        b. Build the project with this command:

            
            dotnet build
            

3.  When compiling, ensure your project links against `VeracodeAttributes.dll`.

4.  Identify the appropriate cleansers for your .NET source file:

    |Cleanser|Description|
    |--------|-----------|
    |`Veracode.Attributes.CRLFCleanserAttribute`|Annotates a method that mitigates CWE-93, -113, or -117.|
    |`Veracode.Attributes.FilePathCleanserAttribute`|Annotates a method that mitigates CWE-73.|
    |`Veracode.Attributes.RedirectURLCleanserAttribute`|Annotates a method that mitigates CWE-601.|
    |`Veracode.Attributes.SQLQueryCleanserAttribute`|Annotates a method that mitigates CWE-89.|
    |`Veracode.Attributes.XSSCleanserAttribute`|Annotates a method that mitigates CWE-80.|

5.  If you want to add custom mitigation text to provide additional information, enter a comment with this syntax:

    ```
    [FilePathCleanser(UserComment = "{your custom text}")]
    ```

6.  Annotate your method with one or more custom cleanser annotations, depending on how the method validates or sanitizes the user-controlled data provided to it, and apply the cleanser method to user-controlled data to ensure it is validated or sanitized before use. For example:

    ```
    using Veracode.Attributes;
    
    public class SecurityUtil
    {
        [FilePathCleanser]
        public static String myProprietaryFilePathCleanser(String filename)
        {
            // Example file path validatation/sanitization implementation 
            
            return myCleansedFilePath;
        }
    }
    
    // ...
    
    String validatedPath = SecurityUtil.myProprietaryFilePathCleanser(userProvidedFilename);
    FileStream fs = File.OpenRead(validatedPath);
    ```

<p font-size="13pt"><b>Results</b></p>

Mitigations from Veracode custom cleanser mitigations, including custom mitigation text when provided, appear in the Triage Flaws page, the Application page, and the PDF reports.


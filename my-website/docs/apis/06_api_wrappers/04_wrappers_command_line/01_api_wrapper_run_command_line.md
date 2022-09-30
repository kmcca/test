---
"ft:title": "Run the API Wrapper from the Command Line"
"ft:prettyUrl": "t_running_wrapper_CL"
---
You can run the Java or C# API wrapper from a command line.

<p font-size="13pt"><b>Steps</b></p>

1.  Open a command prompt.

2.  Navigate to the directory where you [downloaded the wrapper](../README.md).

3.  Enter one of these commands to run the API wrapper:

    - Java wrapper: `java -jar vosp-api-wrapper-java{version}.jar`
    - C# wrapper: `VeracodeC#API.exe`

    You can add `| more` or `| less` to the end of the command to enable scrolling through the output, depending on which commands are available in your environment. The returned text shows the supported calls, parameters, and the wrapper version.

    To return the wrapper version, include the `-wrapperversion` parameter.
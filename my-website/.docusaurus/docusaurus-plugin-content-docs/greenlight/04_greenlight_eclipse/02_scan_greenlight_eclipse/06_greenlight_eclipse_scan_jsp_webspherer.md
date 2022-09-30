---
"ft:title" : "Scan JSP Files from a WebSphere Server with Greenlight for Eclipse"
"ft:prettyUrl" : "Scan_JSP_Files_from_a_WebSphere_Server_in_Greenlight_for_Eclipse"
---
You can use Greenlight for Eclipse to scan JSP files from a WebSphere Server.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).

<p font-size="13pt"><b>Steps</b></p>

1.  Clean the server of data and restart the server in debug mode. Review your WebSphere documentation for information on these tasks.

2.  Configure the local WebSphere server with these JSP engine configuration parameters for the project:
    
    - `jsp-attribute name="keepgenerated" value="false" /`
    - `jsp-attribute name="keepGeneratedclassfiles" value="false" /`
    - `jsp-attribute name="deleteClassFilesBeforeRecompile" value="true" /`
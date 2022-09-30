---
"ft:title" : "Scan JSP Files from a Tomcat Server with Greenlight for Eclipse"
"ft:prettyUrl" : "Scan_JSP_Files_from_a_Tomcat_Server_in_Veracode_Greenlight_for_Eclipse"
---
You can use Greenlight for Eclipse with Apache Tomcat to scan JSP files. You enable the Tomcat application server to parse and compile the Java embedded in the JSP and create a class file for Greenlight to submit for scanning.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).

<p font-size="13pt"><b>Steps</b></p>

1.  Configure the local Tomcat server and deploy the project to that server.

2.  Make an HTTP request to that Tomcat server for each JSP resource you want to scan.
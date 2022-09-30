---
"ft:title" : "Pipeline Scan Example Scan Results"
"ft:prettyUrl" : "r_pipeline_scan_output"
---
This section provides example scan results from Pipeline Scans.

If the scan produces very large results output, Pipeline Scan might truncate the results and include only a subset of the total results for the scan in the JSON and summary results output. Pipeline Scan issues a warning before starting with the truncation process.

The Pipeline Scan reports up to 200 flaws. If you include the [`--fail_on_severity`](04_r_pipeline_scan_commands.md) parameter, the Pipeline Scan counts only the flaws requested using the `--fail_on_severity` parameter.

<p font-size="13pt"><b>Default Settings</b></p>

This example shows the scan results using the default settings.

```

====================
Analysis Successful!
====================

===================
Analyzed 2 modules.
===================
Module1.war
Module2.war

======================
Analyzed 11 issues!
======================
-------------------------------------
Found 1 issues of Very High severity.
-------------------------------------
CWE-78: Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection'): flawedpackage/Flawed.java:50
--------------------------------
Found 1 issues of High severity.
--------------------------------
CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection'): flawedpackage/Flawed.java:43
----------------------------------
Found 7 issues of Medium severity.
----------------------------------
CWE-326: Inadequate Encryption Strength: flawedpackage/GreenLightKeySizeHMAC.java:38
CWE-259: Use of Hard-coded Password: flawedpackage/Flawed.java:23
CWE-259: Use of Hard-coded Password: flawedpackage/Flawed.java:54
CWE-331: Insufficient Entropy: flawedpackage/Flawed.java:59
CWE-327: Use of a Broken or Risky Cryptographic Algorithm: flawedpackage/Flawed.java:60
CWE-327: Use of a Broken or Risky Cryptographic Algorithm: flawedpackage/Flawed.java:61
CWE-326: Inadequate Encryption Strength: flawedpackage/Flawed.java:68
-------------------------------
Found 2 issues of Low severity.
-------------------------------
CWE-597: Use of Wrong Operator in String Comparison: flawedpackage/OneFlaw.java:5
CWE-404: Improper Resource Shutdown or Release: flawedpackage/Flawed.java:37

=========================
FAILURE: Found 11 issues!
=========================

```

<p font-size="13pt"><b>Issue Details Expanded</b></p>

This example shows the expanded information shown in the results if you specify `--issue_details true`. The results include a link to Veracode remediation guidelines. For example: [https://downloads.veracode.com/securityscan/cwe/v4/java/245.html](https://downloads.veracode.com/securityscan/cwe/v4/java/245.html)

```

====================
Analysis Successful.
====================

===================
Analyzed 2 modules.
===================
Module1.war
Module2.war

==================
Analyzed 2 issues.
==================
-------------------------------
Found 2 issues of Low severity.
-------------------------------
CWE-209: Information Exposure Through an Error Message: tiles/error/errorUncaughtMessage.jsp:9
Details: <span> The application calls the javax.servlet.jsp.JspWriter.print() function, which may expose information about the application logic or other 
details such as the names and versions of the application container and associated components.  This information can be useful in executing other attacks 
and can also enable the attacker to target known vulnerabilities in application components. </span> <span>Ensure that error codes or other messages 
returned to end users are not overly verbose.  Sanitize all messages of any sensitive information that is not absolutely necessary.</span> 
<span>References: <a href="https://cwe.mitre.org/data/definitions/209.html">CWE</a></span>
https://downloads.veracode.com/securityscan/cwe/v4/java/209.html
CWE-245: J2EE Bad Practices: Direct Management of Connections: edu/ufl/osg/webmail/prefs/DBPrefsPlugIn.java:172
Details: <span>This call to getConnection() fails to use the J2EE container's resource management facilities as required by the J2EE standard.</span> 
<span>Request the connection from the container rather than attempting to access it directly.</span> <span>References: <a href="https://cwe.mitre.
org/data/definitions/245.html">CWE</a></span>
https://downloads.veracode.com/securityscan/cwe/v4/java/245.html
========================
FAILURE: Found 2 issues!
========================
 

```

<p font-size="13pt"><b>Severity Filters Selected</b></p>

This example shows the results if you specify `--fail_on_severity ”Very High,High”`.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> GitLab sometimes removes quotes when expanding variables, exposing any spaces in the variable to the shell. The entire parameter is not set correctly if it contains spaces. Because the Pipeline Scan recognizes filter parameters, both with and without spaces, you may need to remove all spaces from the parameter if you include the filter arguments in a variable. Otherwise, the command may fail.</p>

```

    ====================
    Analysis Successful!
    ====================
    
    ===================
    Analyzed 2 modules.
    ===================
    Module1.war
    Module2.war
    
    =====================
    Found 1 total issues!
    =====================
    ----------------------------------
    Skipping 1 issues of Low Severity.
    ----------------------------------
    ===================================
    SUCCESS: All issues passed filters!
    ===================================
   
```

<p font-size="13pt"><b>CWE Filters Selected</b></p>

This example shows the expanded information shown in the results if you specify `--fail_on_cwe`. In this example, the filter is set for CWEs 89 and 331: `--fail_on_cwe="89, 331"`.

```

    ====================
    Analysis Successful!
    ====================
    
    ===================
    Analyzed 2 modules.
    ===================
    Module1.war
    Module2.war
    
    ==================
    Analyzed 5 issues.
    ==================
    --------------------------
    Found 1 issues of CWE 331.
    --------------------------
    CWE-331: Insufficient Entropy: flawedPackage/Flawed.java:49
    -------------------------
    Found 1 issues of CWE 89.
    -------------------------
    CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection'): flawedPackage/Flawed.java:33
    
    ========================
    FAILURE: Found 2 issues!
    ======================== 
   
```

<p font-size="13pt"><b>Baseline Filters Selected</b></p>

This example shows the expanded information shown in the results if you specify `--baseline [_baseline_file_path_]` to scan against a [baseline file](c_about_pipeline_baseline_file.md).

```

    ====================
    Analysis Successful!
    ====================
    
    ===================
    Analyzed 2 modules.
    ===================
    Module1.war
    Module2.war
    
    ==================
    Analyzed 3 issues.
    ==================
    ----------------------------------
    Found 2 issues of Medium severity.
    ----------------------------------
    CWE-470: Use of Externally-Controlled Input to Select Classes or Code 
    ('Unsafe Reflection'): org/apache/sqoop/test/hive/MetastoreServerRunnerFactory.java:50
    CWE-470: Mock Issue 2 ('Mock Issue: Suser'): org/apache/sqoop/test/hive/MetastoreServerRunnerFactory.java:50
    ****************************************************************
    Total flaws found: 3, New flaws found: 2 as compared to baseline
    ****************************************************************
    
    ========================
    FAILURE: Found 2 issues!   
   
```

<p font-size="13pt"><b>Duplicate Issues Not Uploaded to GitLab</b></p>

When you create GitLab issues from the scan results, if the Pipeline Scan finds issues that are duplicates of issues previously uploaded to GitLab, Veracode ignores those issues, and sends only the new issues to GitLab.

In this example, the Pipeline Scan found seven issues, four of which are duplicates. Therefore, Veracode sends only the three new issues to GitLab.

```

Scan Summary:
PIPELINE_SCAN_VERSION: null
DEV-STAGE: DEVELOPMENT
SCAN_STATUS: SUCCESS
SCAN_MESSAGE: Scan successful. Results size: 15021 bytes
====================
Analysis Successful.
====================
===================
Analyzed 1 modules.
===================
myapp.jar
==================
Analyzed 7 issues.
==================
----------------------------------
Found 7 issues of Medium severity.
----------------------------------
CWE-470: Use of Externally-Controlled Input to Select Classes or Code ('Unsafe Reflection'): org/apache/sqoop/test/hive/MetastoreServerRunnerFactory.java:50
CWE-470: Use of Externally-Controlled Input to Select Classes or Code ('Unsafe Reflection'): org/apache/sqoop/test/hive/HiveServerRunnerFactory.java:50
CWE-470: Use of Externally-Controlled Input to Select Classes or Code ('Unsafe Reflection'): org/apache/sqoop/test/hadoop/HadoopRunnerFactory.java:35
CWE-117: Improper Output Neutralization for Logs: org/apache/sqoop/test/hadoop/HadoopRealClusterRunner.java:50
CWE-73: External Control of File Name or Path: org/apache/sqoop/test/hadoop/HadoopRealClusterRunner.java:52
CWE-117: Improper Output Neutralization for Logs: org/apache/sqoop/test/hadoop/HadoopMiniClusterRunner.java:64
CWE-117: Improper Output Neutralization for Logs: org/apache/sqoop/test/hadoop/HadoopMiniClusterRunner.java:67
========================
FAILURE: Found 7 issues!
========================
[14 oct 2020 17:06:23,0792] PIPELINE-SCAN INFO: Uploading 7 issues to GitLab 
[14 oct 2020 17:06:25,0553] PIPELINE-SCAN INFO: Found 4 duplicates.
```


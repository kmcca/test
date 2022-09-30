---
"ft:title": "Enable Logging in Jira"
"ft:prettyUrl": "t_debug_jira"
---
You can configure Jira to log the actions that the Veracode Integration for Jira performs. The log messages are located in the standard Jira log.

<p font-size="13pt"><b>Overview</b></p>

You can enable logging in the Jira interface and the log4j.properties file. If you enable logging in the Jira interface and restart Jira Server, you must re-enable logging. If you enable logging in the log4j.properties file and restart Jira Server, logging remains enabled.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Jira Cloud does not support logging.</p>

The location of the Jira logs depends on the Jira installation location. For example:

-   On Linux: `/opt/atlassian/jira/logs/catalina.out`
-   On Windows: `C:\Program Files (x86)\Atlassian\Application Data\Jira\log\atlassian-jira.log`

<p font-size="13pt"><b>Steps</b></p>

1.  In Jira, select **Administration** > **System** > **Logging & Profiling**.

2.  In the Default Loggers section, click **Configure logging level for another package**.

3.  In the window, in the Package name field, enter `com.veracode.jira.plugin`.

4.  From the Logging Level dropdown menu, select **INFO** or **DEBUG**.

5.  Click **Add**.

6.  If you want logging to remain enabled after restarting Jira Server, edit the file `{Jira home}/JIRA/atlassian-jira/WEB-INF/classes/log4j.properties`.

7.  Add these two properties to `log4j.properties`:

    ```plaintext
    log4j.logger.com.veracode.jira.plugin = INFO, filelog
    log4j.additivity.com.veracode.jira.plugin = false
    ```

    For `log4j.logger.com.veracode.jira.plugin`, you can enter one of these logging levels: `DEBUG`, `ERROR`, `INFO`, or `WARNING`.

<p font-size="13pt"><b>Results</b></p>

The Veracode Integration for Jira saves all retrieved findings information. You can review the flaw report XML files to understand the actions the integration performed. Example flaw report locations include:

-   On Linux: `/var/atlassian/application-data/jira/jira_home/veracode/flawreportxml`
-   On Windows: `C:\Program Files (x86)\Atlassian\Application Data\Jira\veracode\flawreportxml`
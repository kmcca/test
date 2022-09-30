---
"ft:title" : "Enable Auto-Scan with Veracode for VS Code"
"ft:prettyUrl" : "t_set_vs_code_autoscan"
---
You can enable auto-scan to have Veracode Greenlight automatically scan any file that is in focus in your IDE as soon a you save it, as long as the file compiles successfully.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).

<p font-size="13pt"><b>Overview</b></p>

You can use the auto-scan feature only if a network connection is available. Otherwise, Veracode for VS Code logs an information message that the feature is disabled.

Scans that you start yourself manually take precedence over scans that start automatically. Greenlight never initiates a new automatic scan while another scan is already running, whether it is an automatic scan or one you started yourself.

When a scan is ongoing, Greenlight adds newly saved files to a queue in the order that they are saved.

The Veracode scan queue shows the priority in which Greenlight scans the files. Because manually initiated scans always take precedence, the queue only shows automatically initiated scans. The scans in the queue occur 30 seconds apart as long as the files compile successfully. If a file does not compile, a message appears in the log file and Greenlight does not scan the file.

<p font-size="13pt"><b>Steps</b></p>

1.  In VS Code, click the **Settings** icon ![](../../images/settings_button.png) and select **Settings**.

2.  Expand **User** > **Extensions** > **Veracode**.

3.  Select **Automatically scan files with Veracode Greenlight when they are saved**.
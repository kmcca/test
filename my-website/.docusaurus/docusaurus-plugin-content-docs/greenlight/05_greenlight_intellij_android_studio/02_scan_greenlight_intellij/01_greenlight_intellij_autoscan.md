---
"ft:title" : "Enable Auto-Scan for Veracode Greenlight for IntelliJ"
"ft:prettyUrl" : "t_install_GL_intellij"
---
You can enable auto-scan to automatically scan any saved, successfully compiled file that is in focus in your IDE.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [Greenlight prerequisites](https://docs.veracode.com/r/Meet_Veracode_Greenlight_Prerequisites).

<p font-size="13pt"><b>Overview</b></p>

Scans that you start yourself manually take precedence over scans that start automatically. Greenlight never initiates a new automatic scan while another scan is already running, whether it is an automatic scan or one you started yourself. When a scan is ongoing, Greenlight adds newly saved files to a queue in the order you save them.

The Veracode scan queue shows the priority in which Greenlight scans the files. The queue only shows automatically initiated scans because manually initiated scans always take precedence. The scans in the queue occur 30 seconds apart as long as the files compile successfully. When a file does not compile, a message appears in the log file and Greenlight does not scan the file.

For Java projects, you can select the **Build Automatically** option and Greenlight automatically scans any file that is in focus in the IDE as soon as it saves.

<p font-size="13pt"><b>Steps</b></p>

1. In your IDE, select **Tools** > **Veracode Greenlight** > **Auto-Scan**.

2. Select to automatically start a Greenlight scan when you open or save a file.
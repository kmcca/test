---
"ft:title" : "Install the Veracode Jenkins Plugin"
"ft:prettyUrl" : "t_install_jenkins"
---
You can download and install or upgrade the Veracode Jenkins Plugin using the Plugin Manager from within Jenkins. You can also download the plugin from the Jenkins Marketplace and, then, install it using the Plugin Manager.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [prerequisites](https://docs.veracode.com/r/c_using_jenkins).

<p font-size="13pt"><b>Overview</b></p>

Starting with version 20.6.10.0 of the Veracode Jenkins Plugin, Veracode distributes the plugin as open source under an MIT license. You can download the plugin source code from [GitHub](https://github.com/jenkinsci).

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you are currently running a Veracode Jenkins Plugin that is earlier than version 20.6.10.0, do not uninstall or disable the plugin before installing the new plugin. The installation imports the configuration settings from the existing plugin to the new plugin. After completing the installation and restarting Jenkins, you must uninstall the earlier plugin version and restart Jenkins a second time.</p>

<p font-size="13pt"><b>Steps</b></p>

1. Open a browser and log in to Jenkins.

2. Select **Manage Jenkins** > **Manage Plugins** > **Available** tab.

3. In the Filter field, enter `veracode` to show only the available Veracode plugins.

4. Select the **Veracode Scan** checkbox. On the [Jenkins Marketplace](https://plugins.jenkins.io/) and in the Jenkins Plugin Manager, the plugin name is Veracode Scans.

5. At the bottom of the page, click **Download now and install after restart**.

6. On the Installing Plugins/Upgrades page, select the **Restart Jenkins when installation is complete and no jobs are running** checkbox.

7. Select **Manage Jenkins** \> **Manage Plugins** > **Installed** tab.

8. Confirm that the Veracode Scan plugin appears in the list of installed plugins.

    If a plugin earlier than version 20.6.10.0 is installed, the earlier version, which has the name Veracode Jenkins Plugin, is also listed on the **Installed** tab.

9. Optionally, right-click the **Veracode Scan** link and select to open it in a new tab or window.

    The [https://www.veracode.com](http://www.veracode.com) site opens in the new tab or window, which confirms that you are running the official Veracode plugin.

10. Uninstall any Veracode Jenkins Plugin earlier than version 20.6.10.0. Then, restart Jenkins.

<p font-size="13pt"><b>Next Steps</b></p>

[Configure the Veracode Jenkins Plugin](https://docs.veracode.com/r/c_jenkins_config_plugin).
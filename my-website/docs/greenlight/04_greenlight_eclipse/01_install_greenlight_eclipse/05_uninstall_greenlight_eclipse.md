---
"ft:title" : "Uninstall Veracode Greenlight for Eclipse"
"ft:prettyUrl" : "Uninstalling_Veracode_Greenlight_for_Eclipse"
---
You can uninstall Greenlight for Eclipse to remove it from your Eclipse IDE and, optionally, delete all Eclipse files if you need the storage capacity.

<p font-size="13pt"><b>Steps</b></p>

1.  In the IDE, select **Help** > **About Eclipse** > **Installation Details**.

2.  On the **Installed Software** tab, select **Veracode Greenlight** and click **Uninstall**.

3.  When prompted to confirm your action, click **Finish**.

    Greenlight for Eclipse is disabled, but not completely removed from your computer.

4.  Exit Eclipse.

5.  Manually remove all the files associated with Veracode Greenlight for Eclipse from the `eclipse/features` directory.

6.  Manually remove Veracode Greenlight for Eclipse from the `eclipse/plugins` directory. Refer to the Eclipse documentation for more information on deleting files.

7.  Run the Eclipse command `-clearPersistedState` to remove any metadata that Eclipse might have cached.
---
"ft:title" : "Uninstall the Veracode TeamCity Plugin"
"ft:prettyUrl" : "Uninstall_the_Veracode_TeamCity_Plugin"
---
You can uninstall the Veracode TeamCity Plugin to remove Veracode scanning from your TeamCity projects.

<p font-size="13pt"><b>Steps</b></p>

1.  In TeamCity, select **Administration** > **Plugins List** > **External plugins**.

2.  Delete the plugin ZIP file from the directory `{TeamCity data directory}/plugins`.

3.  Delete the `VeracodeGlobal.properties` file:

    - On Windows, `C:\ProgramData\JetBrains\TeamCity\config`
    - On Linux, `{TeamCity data directory}/.BuildServer/config`

4.  Restart the TeamCity server.
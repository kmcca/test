---
"ft:title" : "Troubleshooting Configuration Errors in the ISM Endpoint Installer"
"ft:prettyUrl" : "c_installer_troubleshooting"
---

This table provides guidance for resolving errors you may encounter using the ISM endpoint installer. If an issue persists after attempting the solution, contact Veracode Technical Support.

| Issue                                | Solution                                                                                                                                                                                                                                                                                                                                              |
|--------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Invalid installation folder          | Verify that the location specified in the Installation Folder field is either an empty folder that you created or a nonexistent folder that the installer creates.                                                                                                                                                                                    |
| Invalid Java home location           | Verify that the Java Home field points to a valid Java Runtime Environment \(JRE\) or Java Development Kit \(JDK\) and that your machine uses Java version 1.8 or later. Veracode recommends using Oracle Java SE Runtime Environment 8u212.                                                                                                          |
| Proxy settings errors                | Verify that the proxy server is accessible from the machine running the installer and does not require more authentication in addition to username and password. The installer supports only basic proxy authentication.                                                                                                                              |
| Failure to authenticate endpoint key | Copy the endpoint key to your clipboard directly from the Veracode Platform. To copy the key, go to the gateway page, click the Actions menu for the endpoint you are installing, and select **Copy Endpoint Key**. <br><br>If you still encounter an error, verify that you have not already installed an endpoint with that key on another machine. |


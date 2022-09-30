---
"ft:title" : "Update an ISM Endpoint"
"ft:prettyUrl" : "t_update_endpoint"
---

If Veracode releases a new endpoint version or you want to update your endpoint proxy settings or Java home, you can install the update with the endpoint installer.

<p font-size="13pt"><b>Overview</b></p>

The Endpoints table displays the endpoint version. From the Version column, you can view [the updates included in the latest endpoint versions](https://docs.veracode.com/r/c_ism_endpoint_history).

<p font-size="13pt"><b>Steps</b></p>

1.  Navigate to the installation folder specified during the [endpoint installation](https://docs.veracode.com/r/t_create_endpoint).

2.  Open the installer file.

    -   For Windows machines, the filename is `veracode_ism_install.bat`.
    -   For Linux machines, the filename is `veracode_ism_install.sh`.
    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you have insufficient permissions to create the service, run the file as an administrator. If you are using a Linux machine without a GUI wrapper, Veracode recommends you open the installer with this command: <code>sudo -s ./veracode_ism_install.sh</code>
</p>

    The endpoint installer opens to a page asking if you want to install the update to the latest endpoint version.

3.  Click **Next**.

4.  If you want to change your Java home to an upgraded Java version, select the new location, then click **Next**.

5.  If you want to update your proxy settings, select **Manual configuration** and enter your proxy details, then click **Next**.

6.  Click **Next** on the Endpoint Key page.

7.  Click **Install** on the Summary page.

8.  When the endpoint successfully updates, click **Close**.



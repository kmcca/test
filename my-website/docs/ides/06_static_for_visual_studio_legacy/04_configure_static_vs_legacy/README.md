---
"ft:title": "Configure Veracode Static for Visual Studio (Legacy)"
"ft:prettyUrl": "c_vs_config"
---
You configure Veracode Static for Visual Studio to enable access to Veracode.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites for Veracode Static for Visual Studio](https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio).
- You have [installed the extension](https://docs.veracode.com/r/t_install_visual_studio_extension_2).

<p font-size="13pt"><b>Steps</b></p>

1. In Visual Studio, select **Extensions** > **Veracode Static** \> **Options**.

2. Select a tab to view the configuration settings:

    - **Credentials**: explains that you are required to use an [API credentials file](https://docs.veracode.com/r/c_configure_api_cred_file). You can no longer use username and password credentials. If you have already configured this file, the extension detects and uses it automatically. 
    - **Proxy**: optionally, [configure proxy settings](https://docs.veracode.com/r/Install_Veracode_Static_for_Visual_Studio_Behind_a_Proxy) for the extension.
    - **Precompilation**: configure [precompilation settings](https://docs.veracode.com/r/c_precompilation) that the extension ses during builds.
    - **Detailed Reports**: optionally, select to save the [detailed report XML file](https://docs.veracode.com/r/t_download_detailed_report) to your local computer and the location for the report.
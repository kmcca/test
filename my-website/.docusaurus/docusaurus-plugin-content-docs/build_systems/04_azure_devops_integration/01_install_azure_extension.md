---
"ft:title" : "Install the Veracode Azure DevOps Extension"
"ft:prettyUrl" : "t_install_azure_devops_extension"
---
You can install the Veracode Azure DevOps Extension from the Microsoft Visual Studio Marketplace.

  <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
  <b>Note:</b> Starting with Veracode Azure DevOps Extension version 3.10.0, TFS 2017 is no longer supported. For TFS 2018 support, you must be running <a href="https://github.com/Microsoft/azure-pipelines-agent/releases">Azure Pipelines Agent version 2.196.2 or later</a>.</p>

<p font-size="13pt"><b>Before You Begin</b></p>

Before installing the Veracode Azure DevOps Extension, you must meet these prerequisites:

- Supported version of Azure DevOps or TFS and Java listed in the [Veracode-Authored Integrations page](https://community.veracode.com/s/article/Support-Matrix). Veracode recommends that you run the latest Veracode Azure DevOps Extension and keep it current. For Azure DevOps Services, the extension can update to the latest version automatically. For on-premise Azure DevOps Server or TFS, you must update the extension manually.
- For each TFS agent:
    - TFS 2015.3 or later.
    - Latest build agent for Windows, Linux, or macOS. For Linux and macOS, directories and filenames are case-sensitive. If projects use the wrong case, builds and releases can fail.
    - Java Runtime Environment \(JRE\) 1.8 or Java 11. Azul Systems provides a free JRE for Azure that is compatible with OpenJDK. You can download the JRE for Azure from the Downloads page on the Azul Systems website at [https://www.azul.com](https://www.azul.com).
- You have [generated your Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).

<p font-size="13pt"><b>Steps</b></p>

1.  Go to the [Visual Studio Marketplace](https://marketplace.visualstudio.com).

2.  Select **Azure DevOps** from the top of the page.

3.  Search for `veracode`.

4.  In the search results, click the link for the Azure DevOps extension.

5.  Follow the instructions to download and install the extension.

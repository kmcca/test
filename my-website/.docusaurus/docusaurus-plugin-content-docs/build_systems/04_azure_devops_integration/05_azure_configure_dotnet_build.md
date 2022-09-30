---
"ft:title" : "Configure an Azure DevOps Build for ASP.NET Applications"
"ft:prettyUrl" : "t_vsts_precompilation"
---
You can configure the Veracode Azure DevOps Extension in Visual Studio to scan ASP.NET applications as part of your Azure DevOps build process.

<p font-size="13pt"><b>Before You Begin</b></p>

- You have precompiled your ASP.NET application and generated a PUBXML file according to the instructions in the [Veracode Packaging Requirements](https://docs.veracode.com/r/c_precomp_MS). You can see an example .NET project that has a precompilation on line 25 in this example: [https://github.com/veracode/verademo-dotnet/blob/main/azure-pipelines.yml](https://github.com/veracode/verademo-dotnet/blob/main/azure-pipelines.yml).
- The Azure DevOps Build configuration task requires that you use Visual Studio as your integrated development environment.

<p font-size="13pt"><b>Steps</b></p>

1.  Open the ASP.NET application in Visual Studio.

2.  Add the [veracode.pubxml](https://docs.veracode.com/r/c_precomp_MS) file that contains Veracode-specific settings to the `PublishProfiles` folder.

3.  View the `veracode.pubxml` file to verify your configuration.

    Veracode uses the information in this file to generate the necessary artifacts for scanning an application.

4.  Check in the changes to your repository.

5.  In TFS or Azure DevOps, open your Azure DevOps project.

6.  Select the **Build** tab and navigate to your build definition.

7.  Select the **Build solution** task.

8.  In the MSBuild Arguments field, enter the path of your application PUBXML file. For example, `/p:PublishProfile=veracode.pubxml`

9.  Perform the [standard Azure DevOps build configuration steps](https://docs.veracode.com/r/t_TFS_config_build_pipe).
---
"ft:title": "Configuring Precompilation Options for Visual Studio (Legacy)"
"ft:prettyUrl": "c_precompilation"
---
In the Veracode Static for Visual Studio Options window, you can use the settings on the **Precompilation** tab to configure MSBuild and select a legacy precompilation method. You can usually accept the default values.

**Precompilation and Publish Target Directory**

Specifies the location of the precompilation target directory in which to publish the build artifacts. The extension saves this value to the `VeracodePrecompileProfile.pubxml` file, which it creates during the precompilation process.

**Publish on build with Veracode settings**

Select this checkbox to invoke the precompile or publish process after a build or rebuild.

**Use legacy precompilation method**

- Select this checkbox to use the legacy method for precompiling and publishing, instead of the MSBuild method configured under the ASP.NET Publish section in the window. The MSBuild settings are saved. You can clear this checkbox to return to the MSBuild precompilation method.
- Project-less templates, such as web forms applications, require that the **Use legacy precompilation method** checkbox is selected. The new functionality relies directly on MSBuild, which does not fully support legacy project-less templates.

**MSBuild Directory**

If MSBuild is not located in one of the [standard MSBuild paths](https://docs.veracode.com/r/c_msbuild_paths), you see the preferences window with an empty MSBuild Directory field. See [Troubleshooting Precompilation Errors](https://docs.veracode.com/r/c_comp_troubleshoot) if you have problems.

 - In general, you can use a later version of MSBuild on projects created with older versions of Visual Studio.
 - In the MSBuild Directory field, enter the directory path of the MSBuild version you want to use.

**Default MSBuild Arguments**

This line shows the default MSBuild arguments:

```
${SolutionName} /p:DeployOnBuild=true /p:PublishProfile=VeracodePrecompileProfile
```

At runtime, the full path to the solution currently open in the Visual Studio solution explorer replaces the `SolutionName` variable. The other two parameters are required for MSBuild to precompile the solution and, more specifically, each web project in the solution.

The last parameter, `/p:PublishProfile=VeracodePrecompileProfile`, instructs MSBuild to find a publish profile named `VeracodePrecompileProfile.pubxml` in the default publish profiles directory. For example, `WebProjectRoot/Properties/PublishProfiles`.

By default, if the extension does not modify the `/p:PublishProfile` property or find the `VeracodePrecompileProfile.pubxml` file in the default publish profiles directory, it always creates the `VeracodePrecompileProfile.pubxml` file. If you want to place this file in a different location, pass the full path within quotes to the location of the file: `/p:PublishProfile="C:\PublishProfiles\VeracodePrecompileProfile.pubxml"`

The custom directory location and publish profile file must exist or an error occurs. If you modify the `/p:PublishProfile` property, the extension no longer automatically creates the `VeracodePrecompileProfile.pubxml` file. You can click **Restore to Default** to revert to the original behavior.

If you encounter problems and want more detailed information about MSBuild activity, you can add the logging parameter. For example, you must change this path to an appropriate logging directory:

`/flp:verbosity=detailed;logfile=C:\Logs\VeracodeMsBuildLog-${LogDateTimeStamp}.log`

Valid `verbosity` values are: `diagnostic`, `detailed`, `normal`, `minimal`, and `quiet`.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The <code>diagnostic</code> value can create extremely large log files depending on the complexity of your solution. Veracode recommends starting with a less-verbose value.</p>

You must ensure the directory structure referenced in the `logfile` attribute exists. The filename is automatically created, but you receive an error if the directories do not already exist. Also, verify there is a space between the previous parameter and this parameter.

The `LogDateTimeStamp` variable at the end of the path is automatically replaced with a date and time stamp. Each time you publish it creates a new file as opposed to appending to an existing file.
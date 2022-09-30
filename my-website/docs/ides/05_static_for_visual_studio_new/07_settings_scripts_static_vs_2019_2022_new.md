---
"ft:title": "Settings and Scripts for Building and Packaging"
"ft:prettyUrl": "Settings_and_Scripts_for_Building_and_Packaging_for_Visual_Studio"
---

 <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> This topic is for the new Veracode Static for Visual Studio released April 2022. For the legacy versions of Veracode Static for Visual Studio, see <a href="https://docs.veracode.com/r/c_title_VS">Veracode Static for Visual Studio (Legacy)</a>.</p>

The build/packaging steps can be refined and customized through a number of files outlined here. The files are listed in rough order of importance. It is worth noting that all six files discussed below are automatically created after the first Veracode build.

The files are `veracode-build-microsoft.json` (a settings file), `veracode-build-microsoft-user.json` (a corresponding user version of the microsoft build file), and four MSBuild files: `Veracode.Package.build`, `Directory.Build.targets`, `Veracode.props`, and `VeracodePublishProfile.pubxml`. The MSBuild files are build templates. If these files do not exist, the extension copies them to each application. They are intended to be checked into source control so that any developer that checks out the solution already has the files in place to successfully build and package the solution with any custom settings already applied.

## `veracode-build-microsoft.json`

This file is the orchestrator of the build system. It controls the build engine for each application (msbuild or dotnet), the parameters to pass to the build system for each of the build actions, and more. There is a corresponding user file discussed further below and is primarily used to change the location of your MSBuild or .NET CLI locations.

This file is created in the root directory of the solution folder and is intended to be checked into source control.

Some of the most important settings are discussed below.

### `buildEngine`

By default, this is set to `msbuild` to use the MSBuild executable for all building and packaging. This can also be set to `dotnet` to use the dotnet CLI for all building and packaging.

```json
"buildEngine": "msbuild",
```

Setting the dotnet CLI as the default:

```json
"buildEngine": "dotnet",
```

### `canRemoveExecutables`

 <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Because all modern versions of .NET Core, .NET 5, and .NET 6 create a fully self-contained executable, set this to <code>true</code> during your initial setup. This file can cause module selection issues on the Veracode Platform.</p>

By default, this is `false`.

### `buildArguments`

All of the build/rebuild/publish/package arguments are being grouped together here for discussion purposes since they're all closely related and basically work the same.

These are all arrays of MSBuild (`buildArguments`) or dotnet CLI commands (`dotnetBuildArguments`) that are executed based on the `buildEngine` option you have chosen. Each line in the array is executed separately. Typically, you do not need to modify any of the default settings. However, since these are MSBuild or dotnet CLI statements, you can modify them for specialized use if you are familiar enough with MSBuild or the dotnet CLI.

### `veracode-build-microsoft-user.json`

This file is created in the same directory as the Veracode API credentials:

```
C:\Users\{UserName}\.veracode\veracode-build-microsoft-user.json
```

Below are some of the most important settings.

#### `msBuildPath`

When the `veracode-build-microsoft-user.json` is initially created during the build, the application `vswhere.exe` executes to find the default location of `MSBuild.exe`. You might want to change this, such as if you wanted to use a 64-bit version of MSBuild, so you can modify the location.

```json
"msBuildPath": "F:\apps\Microsoft\VS\2019\Professional\MSBuild\Current\Bin",
```

#### `dotnetPath`

The default location for the dotnet CLI is in a fixed directory (for the default 64-bit version), and is set here. If for some reason your dotnet CLI is in a different location, or you want to specifically use the 32-bit version, you can change it here.

```json
"dotnetPath": "C:\Program Files\dotnet",
```

#### `solutions`

The solutions array allows you to override the default settings for any specific solution. You use the name of the solution you want to override in the solutionName property, and any settings you want to override after that. A placeholder entry is automatically added to this file if it does not exist. See the last entry WebGoatCore.

The example below shows how you can change the logging verbosity level for the WebGoat.Net solution from its default `m` , for minimal logging level, to `d`, for detailed logging. You can copy and paste the `buildArguments` from the primary `veracode-build-microsoft.json` file and change `verbosity:m` to `verbosity:d`.

```json
  "solutions": [
    {
      "solutionName": "WebGoat.Net",
        "buildArguments": [
          "Veracode.Package.build /t:VeracodeClean /p:VeracodeBuild=true",
          "'{SolutionName}.sln' /p:VeracodeBuild=true /p:VeracodeSolutionName='{SolutionName}' /p:VeracodeBuildOutputPath='{BuildOutputPath}' /p:VeracodeRemoveExecutables={RemoveExecutables} /verbosity:d"
        ]     
    },
    {
      "solutionName": "WebGoatCore"
    }
  ]
```

## `Directory.Build.targets`

This is a special Microsoft MSBuild file that, if included in your solution directory or any parent directory, with this name, executes the included MSBuild commands, once for each project in your solution. The Veracode extension only runs these commands when a special `VeracodeBuild` flag is passed, otherwise it ignores this file.

By default, the file includes the DLL, EXE, and PDB output to upload to Veracode. The line that controls this is:

```xnl
<BinFiles Include="$(OutputPath)/**/*.dll;$(OutputPath)/**/*.exe;$(OutputPath)/**/*.pdb" />
```

Two examples are commented out that show how you can remove all `Microsoft.*` files or `System.*` files if this is recommended by your Veracode solution architect.

```xml
<!-- <BinFiles Remove="$(OutputPath)/**/Microsoft.*" /> -->
<!-- <BinFiles Remove="$(OutputPath)/**/System.*" /> -->
```

While rare, if you are already using a `Directory.Build.targets` file in your solution directory, you can add the Veracode-specific parts to your file by copying everything within the Project node to your file.

## `Veracode.Package.build`

This file packages the output, including zipping the files, for uploading to Veracode. The typical customizations that might be made to this file is the removal of test class libraries from the final output, or any other directories or files that might be inappropriate to upload to Veracode.

Several examples are included and commented out to give ideas of how directories or files can be removed as shown below:

```xml
<!-- <RemoveDir Directories="$(VeracodeTemporaryBuildPath)OrchardCore.Benchmarks" /> -->
<!-- <Delete Files="$(VeracodeTemporaryBuildPath)OrchardCore.Mvc.Web/OrchardCore.Mvc.Web.exe" /> -->
```

There is also a section commented out that you can use as an example to upload JavaScript files if this were a web application.

## `Veracode.props`

This file should never need to be modified, and simply sets property names used by the reset of the MSBuild files.

## `VeracodePublishProfile.pubxml`

For older ASP.NET web applications, this file is added to the `Properties/PublishProfiles` directory of each ASP.NET web application included in the solution. There is usually no reason to customize the file further.

## Additional `veracode-project.json` Project Settings

See [uploadandscan.do](https://docs.veracode.com/r/r_uploadandscan) for additional details on the parameters. References to the CLI below, are the parameters passed to the API wrapper CLI. Veracode Static for Visual Studio uses the `UploadAndScan` composite action.

### `scanName`

This is `version` in the CLI. If you do not specify a `scanName`, the default is `"scanName": "{appName}-{timestamp}"`.

The `scanName` property can use the two placeholders shown below, or any string constant as shown in the second example.

```json
"scanName": "{appName}-{timestamp}"
```

```json
"scanName": "DivisionA-{appName}-{timestamp}"
```

### `scanTimestampFormat`

There is no equivalent in the CLI. If you do not specify a `scanTimestampFormat`, it defaults to `"scanTimestampFormat": "yyyy-MM-dd-HH:mm:ss"`.

You can customize the output of the timestamp placeholder by using this property. The format follows the standard Microsoft custom date and time format strings.

```json
"scanTimestampFormat": "yyyy-MM-dd-HH:mm:ss"
```

### `autoScan`

This is `autoscan` in the CLI. By default, this is set to `true`. Do not set it to `false` unless you understand the ramifications.

### `appName`

This is `appname` in the CLI. This is a **required** field that you must either add manually or add through [the wizard](https://docs.veracode.com/r/Configure_Project_Settings_for_Veracode_Static_for_Visual_Studio).

```json
"appName": "Your Veracode Application Name"
```

### `fileFolderPath`

This is `filepath` in the CLI. This is a **required** field that [the wizard](https://docs.veracode.com/r/Configure_Project_Settings_for_Veracode_Static_for_Visual_Studio) adds by default:

```json
"fileFolderPath": [
  ".veracode/build"
]
```

Currently, even though this is a JavaScript array, the extension only expects a single entry here. The `Veracode.Package.build` file places all artifacts you want to upload to Veracode within this directory.


### `sandboxName`

This is `sandboxname` in the CLI. This is typically added through [the wizard](https://docs.veracode.com/r/Configure_Project_Settings_for_Veracode_Static_for_Visual_Studio). While it is more commonly added to the `veracode-project-user.json` file, for special use cases it can also be added to the `veracode-project.json`.

```json
"sandboxname": "YourSandboxName"
```

### `sandboxId`

This is `sandboxid` in the CLI. This is used for advanced use cases and is set to empty by default.

### `criticality`

This is null, by default.

Only used for special workflows that create the `appName` if it does not already exist.

### `createApplication`

This is `createprofile` in the CLI. Defaults to `false`.

Only used for special workflows that create the `appName` on the Veracode Platform if it does not already exist.

### `createSandbox`

This is `createsandbox` in the CLI. Defaults to `false`.

Only used for special workflows that create the `sandboxName` on the Veracode Platform if it does not already exist.

### `scanTimeout`

This is `scantimeout` in the CLI. Defaults to `120` minutes.

```
"scanTimeout": "120"
```

### `exclude`

Defaults to an empty string.

### `include`

Defaults to an empty string.

### `pattern`

Defaults to an empty string.

### `replacement`

Defaults to an empty string.

### `scanAllNonFatalTopLevelModules`

This is `scanallnonfataltoplevelmodules` in the CLI. Defaults to `false`.

### `selected`

Defaults to `false`.

### `selectedPreviously`

This is `selectedpreviously` in the CLI. Defaults to `false`.

### `teams`

Defaults to an empty string.

### `topLevel`

This is `toplevel` in the CLI. Defaults to `false`.
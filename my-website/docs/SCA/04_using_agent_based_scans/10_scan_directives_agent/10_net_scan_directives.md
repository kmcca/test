---
"ft:title" : ".NET Scan Directives"
"ft:prettyUrl" : "NET_Scan_Directives"
---

**`skip_dotnet_restore`**

Boolean value that skips the restore step for NuGet packages in MSBuild during the scan. Veracode recommends you use this directive in either of these situations:

-   You do not have the executables installed on your machine.
-   You built the project with the `project.assets.json` files present in the project directory before performing the scan.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If you set this directive to true when the <code>project.assets.json</code> files are not present in the project, Veracode SCA cannot identify dependencies.
</p>


Default value: `false`

Example:

```
skip_dotnet_restore: true
```

**`use_dotnet_exec`**

This directive specifies the .NET toolchain for the Veracode SCA agent to use. If you do not specify a toolchain, the agent attempts to identify one of the three valid case-insensitive toolchain values, searching in this order: `dotnet`, `nuget`, then `msbuild`. The agent ignores this directive if the `custom_dotnet_exec`, `custom_msbuild_exec`, or `custom_nuget_exec` directive specifies an executable.

Example:

```
use_dotnet_exec: nuget
```

**`custom_dotnet_exec`**

String attribute that specifies the full path to a custom .NET CLI executable. The default value is the .NET executable on the `PATH` of the environment in which the agent performs the scan.

Example:

```
custom_dotnet_exec: C:\build_tools\dotnet.exe
```

**`custom_msbuild_exec`**

String attribute that specifies the full path to a custom MSBuild CLI executable. The default value is the MSBuild executable on the `PATH` of the environment in which the agent performs the scan. The agent ignores this directive if the `custom_dotnet_exec` directive specifies an executable.

Example:

```
custom_msbuild_exec: C:\build_tools\msbuild.exe
```

**`custom_nuget_exec`**

String attribute that specifies the full path to a custom NuGet CLI executable. The default value is the NuGet executable on the `PATH` of the environment in which the agent performs the scan. The agent ignores this directive if either the `custom_dotnet_exec` or `custom_msbuild_exec` directive specifies an executable.

Example:

```
custom_nuget_exec: C:\build_tools\nuget.exe
```


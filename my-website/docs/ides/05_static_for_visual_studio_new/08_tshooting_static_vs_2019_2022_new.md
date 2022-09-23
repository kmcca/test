---
"ft:title": "Troubleshooting Veracode Static for Visual Studio"
"ft:prettyUrl": "Troubleshooting_Veracode_Static_for_Visual_Studio"
---

 <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> This topic is for the new Veracode Static for Visual Studio released April 2022. For the legacy versions of Veracode Static for Visual Studio, see <a href="https://docs.veracode.com/r/c_title_VS">Veracode Static for Visual Studio (Legacy)</a>.</p>

# Publish + Package Fails on ASP.NET Framework Web Apps

This condition can occur if you are preparing an ASP.NET Framework Web application for uploading to Veracode. The Publish + Package step can fail with the following message:

```
C:\projects\csharp\WebGoat\WebGoat-01\Veracode.Package.build(33,3): error MSB3941: Failed to zip directory "C:\projects\csharp\WebGoat\WebGoat-01\.veracode\veracode-tmp\binary\" because it does not exist or is inaccessible.

========== Package for Static Scanning failed ==========
```

This issue might be due to:

- Both Visual Studio 2019 and Visual Studio 2022 are installed on the same machine.
- The default MSBuild version is not the same version that Visual Studio uses to run Publish + Package. For example, if you run Publish + Package from Visual Studio 2022 and your version of MSBuild is set to a 2019 version.

You can change the default version in your `C:\Users\{UserName}\.veracode\veracode-build-microsoft-user.json` file.

```json
{
  "projectVersion": "1.0.0",
  "msBuildPath": "C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\MSBuild\Current\Bin",
```

To resolve this issue, you can either change the default version of MSBuild to a 2022 version, such as:

```json
{
  "projectVersion": "1.0.0",
  "msBuildPath": "C:\Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin",
```

Or, you can change it for specific solutions, such as:

```json
  "solutions": [
    {
      "solutionName": "WebGoat-01",
      "msBuildPath": "C:\Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin"
    },
```

# Publish + Package Still Fails on ASP.NET Framework Web Apps

If the above does not resolve the issue, and you participated in the Early Access (EA) program for this extension, remove the `VeracodePublishProfile.pubxml` file from each ASP.NET Web project. These files are located in the `Properties/PublishProfiles` directory. The extension re-creates these file(s) during the next time you run Publish/Package.

# Inconsistent Module Selection on ASP.NET 5 or Greater Web Apps

This condition can be triggered if you have an ASP.NET Core Web application with .NET 5 or later, and are using the `Microsoft.VisualStudio.Web.CodeGeneration.Design` library. This library generates a `dotnet-aspnet-codegenerator-design.exe` file that causes the module selection issue.

## Steps to Resolve

1. Ensure that the `canRemoveExecutables` property in `veracode-build-microsoft.json` is set to `true`: `"canRemoveExecutables": true`

2. Update the `Directory.Build.targets` file to remove the `dotnet-aspnet-codegenerator-design.exe` file from the final artifacts directory by adding the second `<BinFiles Remove=` line as shown below.

```xml
<ItemGroup Condition=" '$(VeracodeRemoveExecutables)' == 'true'">
  <BinFiles Remove="$(OutputPath)/**/$(MSBuildProjectName).exe" />
  <BinFiles Remove="$(OutputPath)/**/dotnet-aspnet-codegenerator-design.exe" />
</ItemGroup>
```

After making the changes above, the packaging step should remove the offending `dotnet-aspnet-codegenerator-design.exe` any time you run a scan.
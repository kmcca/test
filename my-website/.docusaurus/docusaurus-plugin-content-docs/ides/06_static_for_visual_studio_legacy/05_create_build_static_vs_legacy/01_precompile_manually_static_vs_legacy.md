---
"ft:title": "Manually Precompile Web Projects Using Visual Studio (Legacy)"
"ft:prettyUrl": "Precompile_Web_Projects_Using_Visual_Studio"
---
You can choose to manually precompile your builds when they complete if you do not want them to precompile automatically, which is the default.

<p font-size="13pt"><b>Before You Begin</b></p>

- You meet the [prerequisites for Veracode Static for Visual Studio](https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio).
- To precompile web projects that target a 64-bit architecture, you must use the 64-bit version of Windows. 
- Before you can successfully upload your binaries, you must correct all compilation and precompilation errors. Veracode cannot upload and scan an application that does not build successfully.

<p font-size="13pt"><b>Overview</b></p>

Precompilation translates ASP.NET views/pages and controls into DLL files with debug information for Veracode to analyze. It stores the precompilation output in `$(SolutionDir)\PrecompiledWeb`. Defaults to Automatic Precompilation.

<p font-size="13pt"><b>Steps</b></p>

1.  In Visual Studio, select **Extensions** > **Veracode Static** \> **Options** \> **Precompilation**.

2.  Clear the **Publish on build with Veracode settings** checkbox to disable automatic precompilation.

3.  Select **Veracode Static** \> **Publish/Precompile Web Projects** to start precompiling your web project.

4.  To issue a clean solution command that deletes all artifacts and creates a new build, select **Veracode Static** \> **Rebuild With Veracode Settings**.
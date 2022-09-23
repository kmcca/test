---
"ft:title": "Create a Veracode Build Using Visual Studio (Legacy)"
"ft:prettyUrl": "c_creating_build_VS"
---
You can use Veracode Static for Visual Studio to create a build of your application and upload the application to Veracode for analysis.

<p font-size="13pt"><b>Before You Begin</b></p>

You meet the [prerequisites for Veracode Static for Visual Studio](https://docs.veracode.com/r/Permissioning_Veracode_Static_for_Visual_Studio).

<p font-size="13pt"><b>Overview</b></p>

When you create a new build of your application, the extension creates the build with the necessary compilation and linker settings as outlined in [Veracode Packaging Requirements](https://docs.veracode.com/r/compilation_packaging).

<p font-size="13pt"><b>Steps</b></p>

1.  Open your project solution in Visual Studio.

2.  Select **Extensions** > **Veracode Static** \> **Build with Veracode Settings**.

    This action temporarily changes the compilation and linker settings of the source build configuration in preparation for uploading to Veracode. By default, the extension builds your code using the active build configuration, then precompiles your project automatically.

<p font-size="13pt"><b>Next Steps</b></p>

[Manually Precompile Web Projects Using Visual Studio](https://docs.veracode.com/r/Precompile_Web_Projects_Using_Visual_Studio)
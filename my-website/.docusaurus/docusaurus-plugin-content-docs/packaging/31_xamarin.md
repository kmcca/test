---
"ft:title" : "Xamarin Application Packaging"
"ft:prettyUrl" : "compilation_xamarin"
---

Your Xamarin applications must meet specific compilation requirements before you can submit them for scanning.

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires that you submit the EXE, DLL, and MDB or PDP files you create when you build your Xamarin application to a target environment. Upload these files individually or package them in a ZIP file.

<p><span style="font-size: medium;">Supported Xamarin Versions</span></p>

|Framework/Technology|Platform|Version|Compiler|
|----|----|----|----|
|Xamarin.Forms|Cross-Platform, including iOS and Android| 5.0 and earlier|Visual Studio 2012 and higher, Xamarin Studio, Mono 4.x, 5.x, 6.x|
|Xamarin.Android|Android|12.1 and earlier|Visual Studio 2012 and higher, Xamarin Studio, Mono 4.x, 5.x, 6.x|
|Xamarin.iOS|iOS|15.4 and earlier|Visual Studio 2012 and higher, Xamarin Studio, Mono 4.x, 5.x, 6.x|
|Xamarin.Mac|Mac|8.4 and earlier|Visual Studio 2012 and higher, Xamarin Studio, Mono 4.x, 5.x, 6.x|
|Xamarin.TVOS|TVOS|15.4 and earlier||
|Xamarin.WatchOS|WatchOS|15.4 and earlier||
|Xamarin.Essentials|Cross-Platform, including iOS and Android||Visual Studio 2017 and higher, Xamarin Studio, Mono 4.x, 5.x, 6.x|

<p><span style="font-size: medium;">Compilation and Packaging Guidance for Xamarin.Forms</span></p>

Xamarin.Forms allows you to develop a cross-platform application that can target different devices. When you create a Xamarin.Forms solution, the solution consists of a shared Forms project in combination with separate projects for targeting iOS and Android. In this example, the Xamarin.Forms application called `FormsApp` has two different projects: `FormsApp.Droid` targeting Android, and `FormsApp.IOS` targeting iOS.

When you build applications with Xamarin, you must compile the project in debug mode. When you create a cross-platform application, package one target platform per scan to avoid duplicate results.

<p><span style="font-size: medium;">Compilation and Packaging Guidance for <code>Xamarin.iOS</code></span></p>

When you build a Xamarin iOS project, it targets a specific simulator. After you build the project using the debug configuration targeting a specific device, for example, iPhone, you can find the output in `bin/iPhoneSimulator/Debug`. In this example, the output consists of a single EXE and possibly multiple DLL, PDB, and MDB files. Upload these files excluding subdirectories individually, or package them in a ZIP file.

<p><span style="font-size: medium;">Compilation and Packaging Guidance for Xamarin.Android</span></p>

After you build the project using the debug configuration, the build creates a subdirectory called `bin/Debug`. This subdirectory contains the output DLL, PDB, and MDB files. Upload these files individually or package them in a ZIP file.

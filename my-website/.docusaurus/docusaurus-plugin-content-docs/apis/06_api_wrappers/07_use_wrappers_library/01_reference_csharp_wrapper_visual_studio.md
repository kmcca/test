---
"ft:title": "Reference the Veracode C# API Wrapper from Visual Studio"
"ft:prettyUrl": "t_VS_library"
---
You can reference the [C# API wrapper](https://docs.veracode.com/r/c_about_wrappers) as a library from Visual Studio. Adding the wrapper as a library enables you to call API functions without having to set up web requests and look up the required URL or query string parameters.

<p font-size="13pt"><b>Steps</b></p>

1.  In Visual Studio, select **View** > **Solution Explorer**.

2.  Right-click the **References** folder and select **Add Reference**.

3.  In the Add Reference window, select the **Browse** tab.

4.  Locate and select the `VeracodeC#API.exe` file.

5.  Import the `com.veracode.apiwrapper` namespace.

6.  Optionally, complete these steps to display the API wrapper documentation in the Visual Studio interface. The documentation XML file must be in the same directory as the `VeracodeC#API.exe` file.

    a.  In Solution Explorer, expand the **References** folder.

    b.  Double-click **VeracodeC#API.exe**.
---
"ft:title" : "Troubleshooting IDE Integrations"
"ft:prettyUrl" : "Troubleshooting_IDE_Integrations"
---
This section helps you remedy common problems and understand how better to use Veracode IDE integrations.

<style>
table.veracode {
  width: 100%;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 1px;
  border-color: #000000;
  border-style: solid;
  color: #000000;
}

table.veracode td, table.veracode th {
border-width: 1px;
border-color: #000000;
border-style: solid;
padding: 2px;
text-align: left;
vertical-align: top;
}

table.veracode thead {
background-color: ##F8F8F8;
}
</style>
   <table class="veracode">
        <thead>
            <tr>
                <th>IDE Integration</th>
                <th>Issue</th>
                <th>Solution</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Veracode Static for Eclipse</td>
                <td>I experience a PKIX path building failure when installing the plugin from Eclipse.</td>	
                <td>Add the following lines to the eclipse.ini file in your Eclipse installation directory:
                    <code><br/>
 -vmargs<br/>
 --Djavax.net.ssl.trustStore="path for cacerts"<br/>
 --Djavax.net.ssl.trustAnchors="path for cacerts"<br/></code>
                </td>
            </tr>
            <tr>
                <td>Veracode Static for Eclipse</td>
                <td>I cannot install Veracode Static for Eclipse for a new integration.</td>
                <td>
                    <ol>
 <li>Ensure you install the latest version of the plugin.</li>
 <li><a href="https://docs.veracode.com/r/api_eclipse">Meet Veracode Static for Eclipse prerequisites</a>>.</li>
 <li>Ensure your Java version is 1.8 or later.</li>
 <li>Provide this information to Veracode Technical Support:<ul>
     <li>Eclipse version.</li>
     <li>Veracode Static for Eclipse plugin version.</li>
     <li>Screenshots of your errors.</li>
     <li>Eclipse IDE log.</li>
     <li>The workspace log file.</li>
     <li>Proxy settings screenshot if the issue is with your proxy.</li>
     <li>Whether this is a user account or API service account.</li>
     <li>If you are using an API ID and key.</li>
     <li>The user roles, team membership, and the application name.</li>
 </ul></li>
                    </ol>
                </td>
            </tr>
            <tr>
                <td>Veracode Static for IntelliJ</td>
                <td>I cannot install Veracode Static for IntelliJ for a new integration.</td>
                <td>
                    <ol>
 <li>Ensure you are using the latest version of Veracode Static for IntelliJ.</li>
 <li><a href="https://docs.veracode.com/r/api_intellij">Meet Veracode Static for IntelliJ prerequisites</a>.</li>
 <li>Ensure your Java version is 1.8 or later.</li>
 <li>Provide this information to Veracode Technical Support:<ul>
     <li><a href="https://intellij-support.jetbrains.com/hc/en-us/articles/207241085-Locating-IDE-log-files">Logs and Diagnostics Data in a ZIP file.</a>.</li>
     <li>Screenshots of your errors.</li>
     <li>Whether this is a user account or API service account.</li>
     <li>If you are using an API ID and key.</li>
     <li>The user roles, team membership, and the application name.</li>
 </ul></li>
                    </ol>
                </td>
            </tr>
                <tr>
                    <td>Maven Build Script</td>
                    <td>This message appears: <code>java.lang.ClassNotFoundException: Cannot find the
 specified class com.ibm.websphere.ssl</code></td>
                    <td>The IBM WebSphere environment may prevent a Veracode UploadandScan target
 from executing if the Maven build script dependencies with the Java class
 path are missing. To resolve this, generate two <code>pom.xml</code>
 scripts, using one specifically for the Veracode upload.</td>
                </tr>
                <tr>
                    <td>Veracode Static for Visual Studio</td>
                    <td>I received this download error: <code>No applications exist for the
     specified user's account.</code></td>
                    <td>Using the Visual Studio Veracode menu, you may have attempted to download
 results after selecting a specific application for which you do not have
 permission to access. You must be a member of each team associated with an
 application to be able to access that application data.</td>
                </tr>
                <tr>
                    <td>Veracode Static for Visual Studio</td>
                    <td>The Upload Build menu does not populate the Application dropdown list or
 allow me to complete the Build text box.</td>
                    <td>This message indicates that you do not have the required <a
     href="https://docs.veracode.com/r/c_API_roles">role</a> to either create
 a new application or build.</td>
                </tr>
                <tr>
                    <td>Veracode Static for Visual Studio</td>
                    <td>I receive this message Support Issue: <code>No precompiled files were found
     for this ASP.NET web application.</code></td>
                    <td>Use the Veracode Static for Visual Studio to prepare your .NET application
 for uploading to Veracode. For information about this extension, see <a
     href="https://docs.veracode.com/r/c_title_VS">Using Veracode Static for
     Visual Studio</a>.</td>
                </tr>
                <tr>
                    <td>Veracode Static for Visual Studio</td>
                    <td>I ran a scan from within Visual Studio and downloaded the scan results.
 Then, I selected <b>Veracode Static</b> > <b>View Results</b>. The Results
 window is empty.</td>
                    <td>
 <p>If you are using Visual Studio 2019 with .NET Framework version 4.8, you
     must clear an option in Visual Studio to ensure the downloaded scan
     results display in the Results window. Otherwise, the Results window
     might be empty.</p>
 <p>See <a href="https://docs.veracode.com/r/t_vs_config_2019_results"
         >Configure Visual Studio 2019 to Display Scan Results</a>.</p>
 <p>After configuring Visual Studio, you can select <b>Veracode Static</b> >
         <b>View Results</b> to view the scan results in the Results
     window.</p>
                    </td>
                </tr>
                <tr>
                    <td>Veracode Static for Visual Studio</td>
                    <td>Upload and Scan fails to complete automatically.</td>
                    <td>For web applications built on ASP.NET 3.0 Core and later, there is an
 executable that duplicates the artifacts included in the upload to the
 Veracode Platform. In your web application project, you must deselect the
 duplicate executable to exclude it from the upload, or you see an error and
 the Veracode Platform initiates a manual module selection.</td>
                </tr>
                <tr>
                    <td>Veracode Static for Visual Studio</td>
                    <td>I need to open a support case with Veracode Technical Support.</td>
                    <td>Provide this information to Veracode Technical Support: <ul>
     <li>Your IDE version.</li>
     <li>Your Veracode Static for Visual Studio version.</li>
     <li>If you are scanning at the file level or the project level.</li>
     <li>The programming language of the application you are trying to
         scan.</li>
     <li>The size of the file you are trying to scan.</li>
     <li>If autoscan is on or off.</li>
     <li>A list of third-party plugins, such as Sonar Lint, you use to for
         code analysis.</li>
     <li>Precompilation output. If your application is a web application,
         then select the <b>Use legacy precompilation</b> method checkbox on
         the Precompilation page in the Veracode Visual Studio Extension
         Options.</li>
     <li>If your application is built with the .NET Core framework, then
         provide a zipped folder of the Visual Studio log and name your ZIP
         file in this format:
             <code>C:\Users\UserName\AppData\Local\Microsoft\VisualStudio\VisualStudioVersion#\Extensions\som
             efolder\Log\veracode_YYYYMMDD.log</code>. These are the
         corresponding Visual Studio version numbers: 11 = VS 2012, 12 = VS
         2013, 14 = VS 2015, 15 = VS 2017, and 16 = VS 2019. Note that in the
         Visual Studio log path, the VisualStudioVersion# is in the format of
         15.0_8ea552db for Visual Studio 2017 and later, and there may be
         multiple folders with that format. Because you can do side-by-side
         installs with Visual Studio 2017 and later, each install creates a
         new random sequence after the version number.</li>
 </ul></td>
                </tr>
                <tr>
                    <td>Veracode Static for Visual Studio</td>
                    <td>I still cannot solve my problem.</td>
                    <td>
 <p>Reinstall Veracode Static for Visual Studio. Before uninstalling, clear
     the contents in this folder:
         <code>C:\Users\UserName\AppData\Local\Microsoft\VisualStudio\</code></p>
 <p>For more uninstall information, see: <a
         href="https://stackoverflow.com/questions/22444799/how-to-uninstall-vsix-visual-studio-extensions"
         >https://stackoverflow.com/questions/22444799/how-to-uninstall-vsix-visual-studio-extensions</a>.</p>
                    </td>
                </tr>
        </tbody>
    </table>
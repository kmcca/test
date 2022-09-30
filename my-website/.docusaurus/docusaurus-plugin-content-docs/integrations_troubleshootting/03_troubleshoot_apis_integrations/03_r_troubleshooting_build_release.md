---
"ft:title" : "Troubleshooting Build and Release Management System Integrations"
"ft:prettyUrl" : "Troubleshooting_Build_and_Release_Management_System_Integrations"
---
This section helps you remedy common problems and understand how better to use Veracode build and release management system integrations.

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
    <th>Build and Release Management System</th>
    <th>Issue</th>
    <th>Solution</th>
</tr>
        </thead>
        <tbody>
<tr>
    <td>Veracode Jenkins Plugin</td>
    <td>I receive one of these messages: <ul><li><code>An app_id could not be located
        for application profile</code></li>
        <li><code>Access denied</code></li></ul></td>
    <td>
        <ul>
<li>Check the Veracode user role for the logged-in account to verify that you have a role with permissions to create an application profile, such as Upload API for API service accounts or Creator for user accounts.</li>
<li>Confirm that the Veracode application profile for the specified application name is visible by the <a href="https://docs.veracode.com/r/Assign_an_Application_to_Teams">specified teams</a> who have access to this application and its scan results.</li>
        </ul>
    </td>
</tr>
<tr>
    <td>Veracode Jenkins Plugin</td>
    <td>This message appears in the console output: <code>The policy status 'Did Not Pass' is not passing. Unable to continue.</code></td>
    <td>This message indicates that you selected the <b>Wait for scan to complete</b>
checkbox in your job configuration and the scan failed to pass your policy.
If you want builds for scans that fail policy to complete, you must deselect
that checkbox.</td>
</tr>
<tr>
    <td>Veracode Jenkins Plugin</td>
    <td>The test connection action fails. There is no success message.</td>
    <td>
        <ul>
<li>Verify that your Jenkins server has internet connectivity.</li>
<li>Check outside of the Jenkins plugin environment to verify if the server the Jenkins tool is running on has internet connectivity. To determine connectivity, download and run the <a href="https://docs.veracode.com/r/c_about_wrappers">Veracode Java API wrapper</a> on the same machine the Jenkins tools are running on to test for internet connectivity.</li>
<li>Verify the proxy settings to see if a proxy is required.</li>
<li>If a proxy is not required, you can test for an external internet connection with a cURL command and running, for example, the <a href="https://docs.veracode.com/r/r_getapplist"><code>getapplist.do</code></a> call.</li>
<li>Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>.</li>
        </ul>
    </td>
</tr>
<tr>
    <td>Veracode Jenkins Plugin</td>
    <td>I see this message: <code>Unknown vid and vkey</code>.</td>
    <td>See step <a href="https://docs.veracode.com/r/t_jenkins_pipe">23</a>.</td>
</tr>
<tr>
    <td>Veracode Jenkins Plugin or Java API Wrapper</td>
    <td>I see this message: <code>Requested array size exceeds VM limit.</code></td>
    <td>This error indicates you are attempting to upload an archive that is too large
for the current limit (in GB). Check the content and size of the files or
archives you are uploading to verify you are using the correct files.</td>
</tr>
<tr>
    <td>Veracode Jenkins Plugin or Java API Wrapper</td>
    <td>I see this message:<br/>
        <code>[16.01.11 14:28:39] java/net/HttpURLConnection.setFixedLengthStreamingMode(J)V Build step Upload and Scan with Veracode marked build as failure Finished: FAILURE</code></td>
    <td>This message indicates that the Java version you are using is not Java 7 or
later. The Veracode Jenkins Plugin and the Veracode Java API wrapper require
Java 7 or later.</td>
</tr>
<tr>
    <td>Veracode Azure DevOps Extension</td>
    <td>The Veracode Release Summary report is not displaying in the TFS on-premise extension.</td>
    <td>If you rename the build step task Upload and Scan, the extension cannot find and
execute the task. The Platform does not create  a Veracode Summary
Report.</td>
</tr>
<tr>
    <td>Veracode Azure DevOps Extension</td>
    <td>I am receiving upload errors for my Azure DevOps builds.</td>
    <td>To resolve the upload errors, you have these options:<ul>
    <li>Before uploading to Veracode, add the folder containing the files
        you want to scan to a ZIP archive. The ZIP archive suppresses errors
        due to unsupported file types.</li>
    <li>After prescan, resolve any fatal errors:<ol>
<li><a
        href="https://docs.veracode.com/r/c_understanding_status_values"
        >Review the prescan results</a> to identify the modules
    that have fatal errors.</li>
<li><a href="https://docs.veracode.com/r/errors_master">Resolve
        the errors</a>.</li>
        </ol> Optionally, if you do not want to resolve the errors, you can:<ul>
<li>Remove the modules that have errors:<ul>
        <li><a
  href="https://docs.veracode.com/r/Re-upload_Modules_with_Issues_or_Errors"
  >Update your uploaded files in the Veracode
  Platform</a>.</li>
        <li>Update the values for the include and
  <code>exclude</code> parameters in the <code><a
  href="https://docs.veracode.com/r/r_uploadandscan"
  >uploadandscan.do</a></code> API to specify which
files to include or exclude from upload.</li>
        <li>Update the build settings in Azure DevOps to specify
which files to include or exclude from upload.</li>
    </ul></li>
<li><a href="https://docs.veracode.com/r/Start_the_Static_Scan"
        >Start the analysis manually</a>.</li>
        </ul>If you have not added or deleted any modules since the last
        analysis that contained the fatal errors, the next automated
        analysis uses the same selected modules.</li>
    <li>Ensure your binaries are in the default location, or modify the
        default location system variable
<code>$(build.artifactstagingdirectory)</code> if you require
        your files to be in a different location. For example, if your files
        have a different pathname and are in a <code>bin</code> folder, you can modify
        your system variable to look like this:
<code>$(build.sourcesdirectory){pathname}/bin</code>.</li>
</ul>Microsoft provides pipeline build steps for creating a folder with only
the files that Veracode requires for scanning. See the Copy Files task and
Delete Files task in the pipeline documentation on the <a
    href="https://docs.microsoft.com/en-us/azure">Azure documentation
    website</a>.</td>
</tr>
<tr>
    <td>Veracode Azure DevOps Extension</td>
    <td>I selected the <b>Veracode Scan Summary</b> tab in Azure DevOps to view scan
results and see the message Veracode is taking longer than expected to
load.</td>
    <td>Clear your browser cache. Then, select the <b>Veracode Scan Summary</b>
tab again.</td>
</tr>
<tr>
<td>Veracode Pipeline Scan</td>
<td>I received an error code message.</td>
<td>Try these resolutions for each error code:<ul>
 <li><code>401: Unauthenticated.</code> The API credentials may be expired. If they
        are not expired, verify the API credential ID and key you use in the
        pipeline match the generated credentials. They cannot contain extra
        spaces.</li>
 <li><code>403: Unauthorized.</code> Check that the user accounts have Security Lead,
Creator, and Submitter roles. Ensure the <a href="https://docs.veracode.com/r/c_about_veracode_accounts">API user account</a>
        credentials have Upload and Scan API or Upload API - Submit Only
<a href="https://docs.veracode.com/r/c_API_roles_details">roles</a>.</li>
        <li><code>429: Throttled.</code> The API credentials were submitted for more than
        six scans in the last one minute. Try again after a short
        delay.</li>
        <li><code>-50x: Server side problems.</code> This can be a problem with AWS or with
        Veracode services. Check the Veracode service status dashboards for
        details. For example, if the Identity Service is not working, then
        Pipeline Scan also does not work.</li>
</ul></td>
</tr>
<tr>
    <td>Veracode Pipeline Scan</td>
    <td>I need to open a support case with Veracode Technical Support.</td>
    <td>Provide this information to Veracode Technical Support:<ul>
    <li>Pipeline Scan version</li>
    <li>Java version</li>
    <li>Platform application name and the URL of the application</li>
    <li>Build logs</li>
    <li>Debug logs</li>
</ul></td>
</tr>
 <tr>
<td>Veracode Pipeline Scan</td>
<td>I see a PKIX error as a result of this SSL error: <code>PIPELINE-SCAN ERROR: CREATE FAILURE: Error executing HTTP request. Error was: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target.</code><br>
 <code>PIPELINE-SCAN ERROR: The scan failed to complete: there are no results to analyze.</code></td>
   <td>Review <a href="https://docs.veracode.com/r/c_using_certificates">Using SSL Certificates</a>.
   </td>
   </tr>
   </tbody>
</table>
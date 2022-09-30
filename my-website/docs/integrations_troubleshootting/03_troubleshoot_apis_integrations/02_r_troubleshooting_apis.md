---
"ft:title" : "Troubleshooting Veracode APIs and Wrappers"
"ft:prettyUrl" : "Troubleshooting_Veracode_APIs_and_Wrappers"
---
This section helps you remedy common problems and understand how better to use Veracode APIs and wrappers.

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
<th>API or Wrapper</th>
<th>Issue</th>
<th>Solution</th>
</tr>
</thead>
<tbody>
<tr>
<td>Any API or Wrapper</td>
<td>I received an HTTP 401 or Access Denied error. I do not have access to the APIs or I am unsure what kind of access I need.</td>
<td>
<ul>
<li>You must have a <a href="https://docs.veracode.com/r/c_about_veracode_accounts">Veracode account</a> with the required <a href="https://docs.veracode.com/r/c_API_roles_details">API roles</a> assigned by your Veracode administrator.</li>
<li>Ensure your <a href="https://docs.veracode.com/r/c_api_credentials3">Veracode API credentials</a> are valid and have not expired. You can generate new credentials in the Veracode Platform.</li>
</ul>
</td>
</tr>
<tr>
<td>Any API</td>
<td>I cannot log in to Veracode when using the APIs.</td>
<td>
<ul>
<li>Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>.</li>
<li>Verify that your IP address is in the list or range of addresses in the Allowed IP Addresses field of your user account login settings. If the IP range is set incorrectly, edit the Allowed IP Addresses field to include the IP address of the location of your login.</li>
</ul>
</td>
</tr>
<tr>
<td>Any API</td>
<td>The scan stopped after prescan.</td>
<td>To determine why a scan that started from an API failed after prescan, review the response code returned from <code><a href="https://docs.veracode.com/r/r_beginscan">beginscan.do</a></code>. When your script calls <code>beginscan.do</code>, the API returns a status code that confirms the scan successfully started, or provides an error message to explain why the scan did not start.</td>
</tr>
<tr>
<td>Any API</td>
<td>I received cURL error 35.</td>
<td>If you receive the cURL error <code>35: Unknown SSL protocol error in connection to ...</code>, you need to update your version of cURL. Alternatively, you can pass the option <code>-3</code>, which forces cURL to use SSL version 3 when negotiating with a remote SSL server.
</td>
</tr>
<tr>
<td>Any Wrapper</td>
<td>I received a message that displays missing mandatory parameters.</td>
<td>Provide all mandatory parameters in your call. If you do not provide all mandatory parameters, the wrapper returns the missing mandatory parameters in your console.
</td>
</tr>
<tr>
<td>Any Wrapper</td>
<td>I cannot connect to Veracode through my proxy.</td>
<td>If your organization uses a proxy for outbound connections, provide this information to the wrapper to successfully connect to Veracode.
</td>
</tr>
<tr>
<td>Archer API</td>
<td>See <a href="https://docs.veracode.com/r/Troubleshooting_GRC_Integrations">Troubleshooting GRC Integrations</a>.</td>
<td></td>
</tr>
<tr>
<td>Dynamic Analysis API</td>
<td>I need to open a support case with Veracode Technical Support.</td>
<td>Provide this information to Veracode Technical Support:
<ul>
<li>API call you are trying to make.</li>
<li>Response error code. For example, 201 or 401.</li>
<li>Response body from the call.</li>
<li>Description of the error you receive.</li>
<li>The username and API ID for the account.</li>
<li>API ID.</li>
<li>Whether the API call is programmatic or by an application like Postman. If an application is calling the API, then provide the name of the application.</li>
</ul>
</td>
</tr>
<tr>
<td>Java API Wrapper or Veracode Jenkins Plugin</td>
<td>See <a href="https://docs.veracode.com/r/Troubleshooting_Build_and_Release_Management_System_Integrations">Troubleshooting Build and Release Management System Integrations</a></td>
<td></td>
</tr>
<tr>
<td>Java API Wrapper</td>
<td>I experience a <code>PKIX</code> path building failure when installing the plugin from Eclipse.</td>
<td>Add these lines to the <code>eclipse.ini</code> file in your Eclipse installation directory:
<code><br>
-vmargs<br>
--Djavax.net.ssl.trustStore="path for cacerts"<br>
--Djavax.net.ssl.trustAnchors="path for cacerts"<br></code>
</td>
</tr>
<tr>
<td>Flaw Report API</td>
<td>I see HTTPS status code <code>204</code> when I try to call <code>downloadflawreport.do</code>.</td>
<td>If you try to call <code>downloadflawreport.do</code> before <code>generateflawreport.do</code> has completed, you receive HTTP status code <code>204</code> to indicate no content is available. Try to download the report at a later time. After an excessively long time, if the Veracode Platform does not return the report, contact Veracode Technical Support.</td>
</tr>
<tr>
<td>Results API</td>
<td>The <code><a href="https://docs.veracode.com/r/r_getappbuilds">getappbuilds.do</a></code> call is slow to deliver information.</td>
<td>Veracode recommends that you use <code>getapplist.do</code> to generate a list of all applications and <code>getbuildlist.do</code> to generate a list of all builds for an application. You can then use <code>getappinfo.do</code> and <code>getbuildinfo.do</code> to retrieve the information about specific applications and builds.</td>
</tr>
<tr>
<td>Upload API</td>
<td>I do not know if the prescan is complete or successful.</td>
<td>To check the prescan results in the Upload API, call <code><a href="https://docs.veracode.com/r/r_getprescanresults">getprescanresults.do</a></code>.
</td>
</tr>
<tr>
<td>Upload API</td>
<td>My scan does not complete due to non-fatal errors.</td>
<td>If you want to ensure the scan completes even though there are non-fatal errors such as unsupported frameworks, ensure you use the <code>scan_all_top_level_modules</code> parameter when you use the <code>beginscan.do</code> call.
</td>
</tr>
<tr>
<td>Upload API and Integrations</td>
<td>I received a fatal error after prescan, which is preventing my static analysis from starting automatically.</td>
<td>Before the next time your static analysis is scheduled to start automatically, you need to:
<ol>
<li><a href="https://docs.veracode.com/r/c_understanding_status_values">Review the prescan results</a> to identify the modules that have fatal errors.</li>
<li><a href="https://docs.veracode.com/r/errors_master">Resolve the errors</a>.</li>
</ol>
Optionally, if you do not want to resolve the errors, you can:
<ul>
<li><a href="https://docs.veracode.com/r/Re-upload_Modules_with_Issues_or_Errors">Update your uploaded files</a> to remove the modules that have errors.</li>
<li><a href="https://docs.veracode.com/r/Start_the_Static_Scan">Start the analysis manually</a>.</li>
</ul>

If you have not added or deleted any modules since the last analysis that contained the fatal errors, the next automated analysis uses the same selected modules.</td>
</tr>
<tr>
<td>Any Plugin, Any API</td>
<td>When using either a Veracode plugin, the Veracode API wrappers, or a custom script, I see this returned in the output text: <code>App not in state where new builds are allowed.</code></td>
<td>This message indicates that a previous static scan did not succeed for the specific application. Log into the Veracode Platform and review the application's current scans to determine if the previous scan did not successfully complete. A previous scan may still be in progress. If a previous scan is still running due to an error, select <b>Delete</b>. You can then use the plugin to submit a new scan request.
</td>
</tr>
<tr>
<td>Any Plugin, Any API</td>
<td>I receive an error when an API or integration attempts to access Veracode.</td>
<td>Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>.
</td>
</tr>
</tbody>
</table>
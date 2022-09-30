---
"ft:title" : "Troubleshooting GRC Integrations"
"ft:prettyUrl" : "Troubleshooting_GRC_Integrations"
---
This section helps you remedy common problems and understand how better to use the Archer API for Veracode GRC integrations.

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
<th>Issue</th>
<th>Solution</th>
</tr>
</thead>
<tbody>
<tr>
<td>Invalid IP address range.</td>
<td>Ensure that you are attempting to connect from an IP address that is allowed by the IP address restrictions for the login you are using. Veracode APIs and integrations require access to <code>analysiscenter.veracode.com</code> and <code>api.veracode.com</code>. Contact your IT team to ensure these domains are on the allowlist for your organization and that there is one-way communication on port 443 to <code>api.veracode.com</code>. Refer to the <a href="https://docs.veracode.com/r/IP_addresses">complete list of domains and IP addresses to add to your allowlist</a>.
</td>
</tr>
<tr>
<td>Invalid login type.</td>
<td>Ensure that you are providing credentials for an API class login with the Archer API role.</td>
</tr>
<tr>
<td>Invalid or null token.</td>
<td>Each login account is limited to using five tokens at a time to download Archer reports. The last five generated tokens are valid. All tokens expire after 30 days whether they are used or not. Using invalid tokens returns HTTP status code 403.</td>
</tr>
<tr>
<td>Incorrect date format.</td>
<td>Ensure the date format for the <code>date_from</code> and <code>date_to</code> fields is dd-mm-yyyy.</td>
</tr>
<tr>
<td>The report is not ready.</td>
<td>If you try to call <code><a href="https://docs.veracode.com/r/r_downloadarcher">downloadarcherreport.do</a></code> before <code><a href="https://docs.veracode.com/r/r_generatearcher">generatearcherreport.do</a></code> has completed, you receive HTTP status code 204 to indicate no content is available. Try to download the report at a later time. After an excessively long time, if the Veracode Platform does not return the report, contact Veracode Technical Support.</td>
</tr>
<tr>
<td>The results file is too large.</td>
<td>When attempting to fetch the Archer feed for a large number of applications at the same time, the Veracode Platform may return HTTP status code 500. Veracode recommends that you fetch the data using the optional arguments for the Archer API to limit the scope of the data being pulled, for example using <code>scan_type</code> or a date range. After all the historical data is in place, use one of these <code>period</code> arguments to pull data on a scheduled basis: <code>yesterday</code>, <code>last_week</code>, or <code>last_month</code>.
<p>Alternatively, you can use the asynchronous calls <code><a href="https://docs.veracode.com/r/r_generatearcher">generatearcherreport.do</a></code> and <code><a href="https://docs.veracode.com/r/r_downloadarcher">downloadarcherreport.do</a></code>.</p>
</td>
</tr>
</tbody>
</table>
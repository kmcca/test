---
"ft:title" : "generatearcherreport.do"
"ft:prettyUrl" : "r_generatearcher"
---
The `generatearcherreport.do` call initiates the process of generating the Archer report, which contains a token you use to retrieve the report when the processing is complete.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/generatearcherreport.do`

<p><span style="font-size: medium;">Parameters</span></p>

These parameters are optional. However, to avoid returning an oversized report and risking the failures that an unwieldy report can cause, Veracode recommends that you only select the minimum number of parameters necessary for your report.

For example, limit the time window when using `from_date` and `to_date` as much as possible and limit the number of IDs added to `app_id_list` to make the report creation time faster and the final report size manageable.

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
}

table.veracode thead {
background-color: ##F8F8F8;
}
</style>
<table class="veracode">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>app_id</code></td>
<td>Integer</td>
<td>Application ID of the application for which you wish to pull data. You can find the application ID in the main Archer feed or by using the <a href="https://docs.veracode.com/r/c_results_master">Results API</a>. In a single call, you cannot use this parameter if you are also using the <code>app_id_list</code> parameter.</td>
</tr>
<tr>
<td><code>app_id_list</code></td>
<td>String</td>
<td>Comma-separated list, with no spaces, of application IDs for which you want to pull data. You can find the application IDs in the main Archer feed or by using the <a href="https://docs.veracode.com/r/c_results_master">Results API</a>. In a single call, you cannot use this parameter if you are also using the <code>app_id</code> parameter.</td>
</tr>
<tr>
<td><code>period</code></td>
<td>String</td>
<td>Use to select published applications with modifications, either published or mitigated, during the specified time period: <code>yesterday</code>, <code>last week</code> (preceding Saturday to Sunday), <code>last month</code> (preceding calendar month)</td>
</tr>
<tr>
<td><code>from_date</code></td>
<td>String</td>
<td>Specify the beginning of a date range using a <code>MM-dd-yyyy</code> format. The range begins at 12:00AM ET on the specified date. You can use this parameter with the <code>to_date</code> parameter, but it is not required to use both. The default is the earliest possible date.</td>
</tr>
<tr>
<td><code>to_date</code></td>
<td>String</td>
<td>Specify the end of a date range using <code>MM-dd-yyyy</code> format. The range ends at 12:00AM ET the morning after the specified date. You can use this parameter with the <code>from_date</code> parameter, but it is not required to use both. Default is the current day.</td>
</tr>
<tr>
<td><code>scan_type</code></td>
<td>String</td>
<td>Specify a scan type: <code>static</code>, <code>dynamic</code>, <code>manual</code></td>
</tr>
</tbody>
</table>

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

`http --auth-type=veracode_hmac "https://analysiscenter.veracode.com/api/3.0/generatearcherreport.do"`

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `generatearcherreport.do` call returns the token string you need to retrieve the report using the `downloadarcherreport.do` call. Each [user account](https://docs.veracode.com/r/c_about_veracode_accounts) can only use the five most recently produced tokens to download an Archer report, which means that if you generated 10 reports, you can only use the tokens from the last five reports. All tokens expire after 30 days.

The `generatearcherreport.do` call references the [archerreportrequest.xsd](https://analysiscenter.veracode.com/resource/1.0/archerreportrequest.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<archerreport xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;
  XMLSchema-instance"
  xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;
  schema&#x2f;1.0&#x2f;archerapi"
  xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com
  &#x2f;schema&#x2f;1.0&#x2f;archerapi
  https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;
  1.0&#x2f;archerreportrequest.xsd" token="<report token>" archer_report_version="3.0">
</archerreport>
```

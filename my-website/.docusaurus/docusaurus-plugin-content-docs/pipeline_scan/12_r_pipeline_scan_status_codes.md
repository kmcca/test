---
"ft:title" : "Pipeline Scan Status Codes"
"ft:prettyUrl" : "Pipeline_Scan_Status_Codes"
---
This table describes the status codes for a completed Pipeline Scan. You can configure your development pipeline to use these status codes for pass-fail criteria during scanning.

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
    <th>Status Code</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><code>0</code></td>
    <td>Pipeline Scan did not find any flaws.</td>
  </tr>
  <tr>
    <td><code>1</code>-<code>200</code></td>
    <td>Range of the number of discovered flaws.</td>
  </tr>
  <tr>
    <td><code>-1</code></td>
    <td>Scan failed because of network flaws, invalid Veracode API credentials, or other problems.</td>
  </tr>
  <tr>
    <td><code>-3</code></td>
    <td>Scan did not complete within the time specified for the <code>--timeout</code> parameter.</td>
  </tr>
</table>
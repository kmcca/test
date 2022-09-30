---
"ft:title" : "Troubleshooting Veracode Integration Authentication"
"ft:prettyUrl" : "Troubleshooting_Veracode_Integration_Authentication"
---
This section helps you remedy common problems and understand how better to use Veracode integration authentication.

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
<td>I have received one of these messages:
<ul>
  <li><code>Received fatal alert: handshake_failure</code></li>
  <li><code>Peer not authenticated error</code></li>
  <li><code>System.Net.WebException was unhandled. Message=The request was aborted: Could not create SSL/TLS secure channel</code></li>
  <li><code>OpenSSL::SSL::SSLError: Received fatal alert: handshake_failure</code></li>
  <li><code>The underlying connection was closed: An unexpected error occurred on a send.</code></li>
  <li><code>Could not create SSL/TLS secure channel</code></li>
</ul>
</td>
<td>If you are using an integration that attempts to connect over TLS 1.0 or 1.1, you may receive one of these error messages. See <a href="https://docs.veracode.com/r/c_tls_support">Using TLS with Veracode Integrations</a>.</td>
</tr>
</tbody>
</table>
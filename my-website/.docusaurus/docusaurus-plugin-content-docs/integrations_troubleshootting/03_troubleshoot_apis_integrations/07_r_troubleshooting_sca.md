---
"ft:title" : "Troubleshooting Veracode Software Composition Analysis"
"ft:prettyUrl" : "Troubleshooting_Veracode_Software_Composition_Analysis"
---
This section helps you remedy common problems and understand how better to use Veracode Software Composition Analysis.

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
<td>I need to open a support case with Veracode Technical Support.	</td>
<td>Provide this information to Veracode Technical Support:
<ul>
<li>The package manager and version you are using.</li>
<li>The agent CLI, CI, and plugins you use for scanning, and their versions.</li>
<li>The environment variables, flags, and directives you use for scanning.</li>
<li>Your debug logs, which you can get with any of these commands:</li>
<ul>
<li>In your terminal: <code>srcclr scan --debug</code></li>
<li>In a CI: <code>curl -sSL https://download.sourceclear.com/ci.sh | DEBUG=1 bash</code></li>
<li>In a CI: <code>export DEBUG=1 curl -sSL https://download.sourceclear.com/ci.sh | bash</code></li>
</ul>
<li>The project you are scanning with the correct directory structure.</li>
<li>The command you use to start the scan and answers to these questions:</li>
<ul>
<li>Was your scan only a SRCCLR scan or did you use other environment variables?</li>
<li>Did you use a CI script to perform the scan?</li>
</ul>
</ul>
</td>
</tr>
</tbody>
</table>
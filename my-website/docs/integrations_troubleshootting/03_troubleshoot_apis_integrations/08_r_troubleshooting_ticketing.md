---
"ft:title" : "Troubleshooting Ticketing Integrations"
"ft:prettyUrl" : "Troubleshooting_Ticketing_Integrations"
---
This section helps you remedy common problems and understand how better to use Veracode ticketing integrations.

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
<th>Ticketing Integration</th>
<th>Issue</th>
<th>Solution</th>
</tr>
</thead>
<tbody>
<tr>
<td>Veracode Integration for Jira</td>
<td>I cannot install or configure Veracode Integration for Jira.</td>
<td>You need the Jira administrator role to install and configure Veracode Integration for Jira.
</td>
</tr>
<tr>
<td>Veracode Integration for Jira</td>
<td>I installed Veracode Integration for Jira but it is not working.</td>
<td>Ensure the API user has the Results API user role assigned. Then, <a href="https://docs.veracode.com/r/t_jira_display_veracode_fields">Associate Veracode Fields with Project Screens in Jira</a> or <a href="https://docs.veracode.com/r/t_jira_cloud_config_custom_fields">Associate Veracode Fields with Project Screens in Jira Cloud</a>.
</td>
</tr>
<tr>
<td>Veracode Integration for Jira</td>
<td>If you need to troubleshoot any issues, enable debug logging in Jira.
The location of the Jira logs depends on the Jira installation location. For example:
<ul>
<li>On Linux: <code>/opt/atlassian/jira/logs/catalina.out</code></li>
<li>On Windows: <code>C:\Program Files (x86)\Atlassian\Application Data\Jira\log\atlassian-jira.log</code></li>
</ul>
</td>
<td><a href="https://docs.veracode.com/r/t_debug_jira">Enable Logging in Jira</a> and set the logging level to DEBUG. After completing any debugging, ensure you change the logging level from DEBUG back to the logging level, such as INFO, and restart Jira.
</td>
</tr>
</tbody>
</table>
---
"ft:title" : "Identifying a Relevant TrustStore for SSL Certificates"
"ft:prettyUrl" : "c_identify_trust_store"
---
After creating an SSL certificate you want to use with Veracode integrations, verify which Java Runtime Environment to use with the TrustStore.

Java includes the file `\lib\security\cacerts`, which is the TrustStore for that Java Runtime Environment (JRE). However, you can install multiple JREs on a single machine, and some products install and use a default Java Development Kit (JDK) and JRE. You must determine which JRE to use.

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
<th>Product</th>
<th>Default TrustStore</th>
<th>User-customized JRE Location</th>
</tr>
</thead>
<tbody>
<tr>
<td>C# wrapper</td>
<td>
<ol>
<li>Run <code>certmgr.msc</code>.</li>
<li>Navigate to <b>Trusted Root Certificate Authorities</b> > <b>Certificates</b>.</li>
</ol>
<td>Not applicable</td>
</tr>
<tr>
<td>Eclipse/RAD</td>
<td><code>%JAVA_HOME%\lib\security\cacerts</code></td>
<td>In Eclipse, select <b>Window</b> > <b>Preferences</b> > <b>Java</b> > <b>Installed JREs</b></td>
</tr>
<tr>
<td>IntelliJ</td>
<td><code>C:\Program Files\JetBrains\IntelliJ IDEA Community Edition {<i>version</i>}\jre{<i>32/64</i>}\lib\security\cacerts</code></td>
<td>
<ol>
<li>Open Find Action.</li>
<li>Find "Switch Boot JDK".</li>
<li>Identify the JDK in use.</li>
</ol>
</td>
</tr>
<tr>
<td>Java wrapper</td>
<td><code>[%JAVA_HOME%\lib\security\cacerts]</code></td>
<td>Not applicable</td>
</tr>
<tr>
<td>Jenkins</td>
<td>Jenkins Server: <code>C:\{<i>Jenkins_install_dir</i>}\jre\lib\security\cacerts</code></td>
<td>
<ol>
<li>Navigate to <code>http://{<i>Jenkins_url</i>}/systeminfo</code></li>
<li>Identify the value next to <code>java.home</code>.</li>
</ol>
</td>
</tr>
<tr>
<td>TeamCity</td>
<td><code>C:\{<i>TeamCity_install_dir</i>}\jre\lib\security\cacerts</code></td>
<td>
<ol>
<li>Open <code>{<i>build_agent_directory</i>}\buildAgent.properties</code> in a text editor.</li>
<li>Search for the <code>env.JAVA_HOME</code> property.</li>
If you see <code>env.JAVA_HOME</code>, it is in the specified directory of the property. Otherwise, it is the default.
</ol>
</td>
</tr>
<tr>
<td>Visual Studio</td>
<td>
<ol>
<li>Run <code>certmgr.msc</code>.</li>
<li>Navigate to <b>Trusted Root Certificate Authorities</b> > <b>Certificates</b>.</li>
</ol>
</td>
<td>Not applicable</td>
</tr>
</tbody>
</table>
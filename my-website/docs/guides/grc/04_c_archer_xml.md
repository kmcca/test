---
"ft:title" : "Archer XML Report Fields"
"ft:prettyUrl" : "c_archer_xml"
---
This table describes the fields in the Archer XML report.

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
<th>Archer XML Field</th>
<th>Definition</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>any_scan_due_date</code></td>
<td>When you must next run a scan, as dictated by the associated policy.</td>
</tr>
<tr>
<td><code>app_name</code></td>
<td>Name of the application.</td>
</tr>
<tr>
<td><code>archer_app_name</code></td>
<td>An optional name to match with the application name in Archer.</td>
</tr>
<tr>
<td><code>app_origin</code></td>
<td>Ultimate origin of the application, such as open source.</td>
</tr>
<tr>
<td><code>assurance_level</code><br><strong>Deprecated</strong></td>
<td>The level of assurance for the application. Veracode has deprecated assurance level and replaced it with <a href="https://docs.veracode.com/r/review_assurancelevels">business criticality</a>.</td>
</tr>
<tr>
<td><code>business_owner</code></td>
<td>First and last name of the person responsible for the application.</td>
</tr>
<tr>
<td><code>business_unit</code></td>
<td>Department or group associated with the application.</td>
</tr>
<tr>
<td><code>custom0</code></td>
<td>Custom metadata field 1.</td>
</tr>
<tr>
<td><code>custom1</code></td>
<td>Custom metadata field 2.</td>
</tr>
<tr>
<td><code>custom2</code></td>
<td>Custom metadata field 3.</td>
</tr>
<tr>
<td><code>custom3</code></td>
<td>Custom metadata field 4.</td>
</tr>
<tr>
<td><code>custom4</code></td>
<td>Custom metadata field 5.</td>
</tr>
<tr>
<td><code>custom5</code></td>
<td>Custom metadata field 6.</td>
</tr>
<tr>
<td><code>custom6</code></td>
<td>Custom metadata field 7.</td>
</tr>
<tr>
<td><code>custom7</code></td>
<td>Custom metadata field 8.</td>
</tr>
<tr>
<td><code>custom8</code></td>
<td>Custom metadata field 9.</td>
</tr>
<tr>
<td><code>custom9</code></td>
<td>Custom metadata field 10.</td>
</tr>
<tr>
<td><code>custom10</code></td>
<td>Custom metadata field 11.</td>
</tr>
<tr>
<td><code>custom11</code></td>
<td>Custom metadata field 12.</td>
</tr>
<tr>
<td><code>custom12</code></td>
<td>Custom metadata field 13.</td>
</tr>
<tr>
<td><code>custom13</code></td>
<td>Custom metadata field 14.</td>
</tr>
<tr>
<td><code>custom14</code></td>
<td>Custom metadata field 15.</td>
</tr>
<tr>
<td><code>custom15</code></td>
<td>Custom metadata field 16.</td>
</tr>
<tr>
<td><code>custom16</code></td>
<td>Custom metadata field 17.</td>
</tr>
<tr>
<td><code>custom17</code></td>
<td>Custom metadata field 18.</td>
</tr>
<tr>
<td><code>custom18</code></td>
<td>Custom metadata field 19.</td>
</tr>
<tr>
<td><code>custom19</code></td>
<td>Custom metadata field 20.</td>
</tr>
<tr>
<td><code>custom20</code></td>
<td>Custom metadata field 21.</td>
</tr>
<tr>
<td><code>custom21</code></td>
<td>Custom metadata field 22.</td>
</tr>
<tr>
<td><code>custom22</code></td>
<td>Custom metadata field 23.</td>
</tr>
<tr>
<td><code>custom23</code></td>
<td>Custom metadata field 24.</td>
</tr>
<tr>
<td><code>custom24</code></td>
<td>Custom metadata field 25.</td>
</tr>
<tr>
<td><code>dynamic_score</code></td>
<td>Veracode security quality score of the most recent Dynamic Analysis scan of this application.</td>
</tr>
<tr>
<td><code>flaws</code></td>
<td>Parent field of the collection of ArcherRecords that describe flaws.</td>
</tr>
<tr>
<td><code>flaws\app_name</code></td>
<td>Name of the application.</td>
</tr>
<tr>
<td><code>flaws\capecid</code></td>
<td>Category ID for the flaw.</td>
</tr>
<tr>
<td><code>flaws\categoryid</code></td>
<td>ID number of flaw category.</td>
</tr>
<tr>
<td><code>flaws\categoryname</code></td>
<td>Name of the flaw category.</td>
</tr>
<tr>
<td><code>flaws\cia_impact</code></td>
<td>CIA value for the calculated CVSS score.</td>
</tr>
<tr>
<td><code>flaws\count</code></td>
<td>Number of times this flaw occurs in this scan.</td>
</tr>
<tr>
<td><code>flaws\cwe_description</code></td>
<td>Definition of the Common Weakness Enumeration (CWE).</td>
</tr>
<tr>
<td><code>flaws\cweid</code></td>
<td>ID number for the Common Weakness Enumeration (CWE).</td>
</tr>
<tr>
<td><code>flaws\date_first_occurrence</code></td>
<td>Date of the scan when this flaw first occurred.</td>
</tr>
<tr>
<td><code>flaws\exploit_desc</code></td>
<td>Description of the flaw discovered during Manual Penetration Testing.</td>
</tr>
<tr>
<td><code>flaws\exploitdifficulty</code></td>
<td>Level of vulnerability for the calculated CVSS score.</td>
</tr>
<tr>
<td><code>flaws\exploitLevel</code></td>
<td>Calculated level of exploitability after static scan.</td>
</tr>
<tr>
<td><code>flaws\flaw_description</code></td>
<td>Description of the flaw.</td>
</tr>
<tr>
<td><code>flaws\flaw_issue_id</code></td>
<td>Unique issue ID number of the flaw.</td>
</tr>
<tr>
<td><code>flaws\functionprototype</code></td>
<td>Class/function information for flaws in binaries that do not have debug symbols.</td>
</tr>
<tr>
<td><code>flaws\functionrelativelocation</code></td>
<td>Relative location of flaws in the class file of binaries that do not have debug symbols.</td>
</tr>
<tr>
<td><code>flaws\is_latest_build</code></td>
<td>Boolean value that indicates if this report is for the most recent scan of the application.</td>
</tr>
<tr>
<td><code>flaws\line</code></td>
<td>Line location of flaws in binaries that do not have debug symbols.</td>
</tr>
<tr>
<td><code>flaws\module</code></td>
<td>Calling module where the flaw is located.</td>
</tr>
<tr>
<td><code>flaws\note</code></td>
<td>Exploitability level: <code>Very Unlikely</code> to <code>Very Likely</code></td>
</tr>
<tr>
<td><code>flaws\pcirelated</code></td>
<td>Boolean value that indicates if the flaw is PCI-related.</td>
</tr>
<tr>
<td><code>flaws\platform</code></td>
<td>Platform metadata from the application profile.</td>
</tr>
<tr>
<td><code>flaws\published_date</code></td>
<td>Date of the publication date of the scan results.</td>
</tr>
<tr>
<td><code>flaws\remediation_desc</code></td>
<td>Description of how to remediate flaws discovered during Manual Penetration Testing.</td>
</tr>
<tr>
<td><code>flaws\remediation_status</code></td>
<td>Remediation status: <code>New</code>, <code>Open</code>, <code>Re-Open</code>, <code>Fixed</code></td>
</tr>
<tr>
<td><code>flaws\remediationeffort</code></td>
<td>Level of difficulty of effort to remediate the flaw with values ranging from <code>1</code> to <code>5</code>, where <code>5</code> is the most difficult.</td>
</tr>
<tr>
<td><code>flaws\scope</code></td>
<td>Approximate classpath for flaws in binaries that do not have debug symbols.</td>
</tr>
<tr>
<td><code>flaws\severity</code></td>
<td>Severity of the flaw. Value ranges from <code>1</code>-<code>5</code>, where <code>5</code> is the most severe.</td>
</tr>
<tr>
<td><code>flaws\severity_desc</code></td>
<td>Flaw severity: <code>5</code> is Very High (VH), <code>4</code> is High, <code>3</code> is Medium, <code>2</code> is Low, <code>1</code> is Very Low (VL)</td>
</tr>
<tr>
<td><code>flaws\sourcefile</code></td>
<td>Name of the source code file that contains the flaw.</td>
</tr>
<tr>
<td><code>flaws\sourcefilepath</code></td>
<td>Filepath of the source code file that contains the flaw.</td>
</tr>
<tr>
<td><code>flaws\type</code></td>
<td>Flaw type.</td>
</tr>
<tr>
<td><code>flaws\url</code></td>
<td>For Dynamic Analysis, the URL where the flaw is located.</td>
</tr>
<tr>
<td><code>flaws\version</code></td>
<td>Version of the application that contains the flaw.</td>
</tr>
<tr>
<td><code>generation_date</code></td>
<td>Date of results report generation.</td>
</tr>
<tr>
<td><code>grace_period_expired</code></td>
<td>Parameter to indicate if flaws have existed in the most recent scan of this application for longer than the acceptable grace period.</td>
</tr>
<tr>
<td><code>last_update_date</code></td>
<td>Date of publication of the most recent scan of this application.</td>
</tr>
<tr>
<td><code>lifecycle_stage</code></td>
<td>Lifecycle stage of this application, such as external or beta testing.</td>
</tr>
<tr>
<td><code>manual_score</code></td>
<td>Security quality score for the most recently published results of Manual Penetration Testing of the application.</td>
</tr>
<tr>
<td><code>mitigated_rating</code><br><strong>Deprecated</strong></td>
<td>Score in the previous Veracode scoring system.</td>
</tr>
<tr>
<td><code>modules</code></td>
<td>Parent field of the collection of ArcherRecords that describe the scans.</td>
</tr>
<tr>
<td><code>modules\analysis_type</code></td>
<td>Type of scan: <code>static</code>, <code>dynamic</code>, <code>manual</code></td>
</tr>
<tr>
<td><code>modules\architecture</code></td>
<td>Architecture on which the application was built or compiled.</td>
</tr>
<tr>
<td><code>modules\compiler</code></td>
<td>Name and version of the compiler of the module.</td>
</tr>
<tr>
<td><code>modules\module</code></td>
<td>Name of the module.</td>
</tr>
<tr>
<td><code>modules\os</code></td>
<td>Name of the operating system for which the module is targeted.</td>
</tr>
<tr>
<td><code>modules\target_url</code></td>
<td>Target URL that the Dynamic Analysis scan is to analyze.</td>
</tr>
<tr>
<td><code>planned_deployment_date</code></td>
<td>Specified deployment date of the application, if provided.</td>
</tr>
<tr>
<td><code>platform</code></td>
<td>Platform used for the application scan.</td>
</tr>
<tr>
<td><code>policy_compliance_status</code></td>
<td>Description of the policy compliance of the application: <code>Calculating</code>, <code>Did Not Pass</code>, <code>Conditional Pass</code>, <code>Pass</code></td>
</tr>
<tr>
<td><code>policy_name</code></td>
<td>Name of the policy assigned to the application.</td>
</tr>
<tr>
<td><code>policy_rules_passed</code></td>
<td>Boolean value that indicates if the application passed the policy rules.</td>
</tr>
<tr>
<td><code>policy_version</code></td>
<td>Policy version.</td>
</tr>
<tr>
<td><code>rating</code><br><strong>Deprecated</strong></td>
<td>Score in the previous Veracode scoring system.</td>
</tr>
<tr>
<td><code>scan_overdue</code></td>
<td>Boolean value that indicates the length of time since the last scan of this application is unacceptable according to the associated policy.</td>
</tr>
<tr>
<td><code>static_score</code></td>
<td>Security Quality Score for the most recent static scan of this application.</td>
</tr>
<tr>
<td><code>submitted_date</code></td>
<td>Submission date of the most recent static scan of this application.</td>
</tr>
<tr>
<td><code>tags</code></td>
<td>Comma-separated list of metadata tags associated with this application.</td>
</tr>
<tr>
<td><code>teams</code></td>
<td>Teams assigned to the application.</td>
</tr>
<tr>
<td><code>version</code></td>
<td>Version of this application.</td>
</tr>
</tbody>
</table>

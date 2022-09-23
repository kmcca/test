---
"ft:title" : "Understanding Veracode and the CWE"
"ft:prettyUrl" : "c_review_cwe"
---
Veracode references the Common Weakness Enumeration \(CWE\) standard to map the flaws found in its static and dynamic scans.

Since its founding, Veracode has reported flaws using the industry standard Common Weakness Enumeration as a taxonomy. The CWE provides a mapping of all known types of software weakness or vulnerability, and provides supplemental information to help developers understand the cause of common weaknesses and how to fix them.

Veracode always uses the latest version of the CWE, and updates to new versions within 90 days of release. This page lists the flaws that Veracode may report in automated static and dynamic scans. When a flaw may be mapped to several CWEs, Veracode generally reports the most general CWE that describes that particular case. For example, Veracode prefers CWE-80 for cross-site scripting over its child CWEs. Veracode updates this list frequently.

Veracode Manual Penetration Testing scans may report any valid CWE. You can see the full list of CWEs at the [Mitre CWE website](http://cwe.mitre.org/).

The listed flaws are grouped according to a list of categories that Veracode uses for convenience. The categories generally correspond to common types of attacks.

<p><span style="font-size: medium;">Supported Static and Dynamic Scans</span></p>

This table lists all the CWEs that Veracode searches for during static and dynamic scans.

[Appendix: CWEs That Violate Security Standards](https://docs.veracode.com/r/r_cwes_impact_policy) provides the full list of CWEs that can prevent an application from passing security standard rules in policies.

<div class="tablenoborder"><table cellpadding="4" cellspacing="0" summary="" id="concept_ixy_r1c_qg__CWE_table" class="table" frame="border" border="1" rules="all">
      <colgroup><col style="width:81pt">
      <col style="width:56.25pt">
      <col style="width:292.5pt">
      <col style="width:54pt">
      <col style="width:39.75pt">
      <col style="width:54pt">
      </colgroup><thead class="thead" style="text-align:left;">
       <tr class="row">
        <th class="entry cellrowborder" style="text-align:left;vertical-align:middle;" id="d87305e139">Flaw Category</th>

        <th class="entry cellrowborder" style="text-align:center;vertical-align:top;" id="d87305e142">CWE ID</th>

        <th class="entry cellrowborder" style="text-align:left;vertical-align:middle;" id="d87305e145">CWE Name</th>

        <th class="entry cellrowborder" style="text-align:center;vertical-align:middle;" id="d87305e148">Flaw Severity¹
        </th>

        <th class="entry cellrowborder" style="text-align:center;vertical-align:middle;" id="d87305e158">Static</th>

        <th class="entry cellrowborder" style="text-align:center;vertical-align:middle;" id="d87305e162">Dynamic</th>

       </tr>

      </thead>

      <tbody class="tbody">
       <tr class="row">
        <td class="entry cellrowborder" rowspan="6" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">API Abuse</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">234</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Failure to Handle Missing Parameter</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">243</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Creation of Chroot Jail Without Changing Working Directory</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">245</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">J2EE Bad Practices: Direct Management of Connections</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">560</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Umask() with Chmod-Style Argument</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">628</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Function Call with Incorrectly Specified Arguments</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">675</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Duplicate Operations on Resource</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="3" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Authentication Issues</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">287</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Authentication</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">352</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Cross-Site Request Forgery (CSRF)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">693</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Protection Mechanism Failure</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="13" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Authorization Issues</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">99</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Control of Resource Identifiers</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">272</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Least Privilege Violation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">273</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Check for Dropped Privileges</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">274</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Handling of Insufficient Privileges</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">282 </td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Ownership Management</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">285</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Authorization</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">346</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Origin Validation Error</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">350</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Reliance on Reverse DNS Resolution for a Security-Critical Action</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">639</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Authorization Bypass Through User-Controlled Key</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">566</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Authorization Bypass Through User-Controlled SQL Primary Key</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">708</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Incorrect Ownership Assignment</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">732</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Incorrect Permission Assignment for Critical Resource</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">942</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Permissive Cross-domain Policy with Untrusted Domains</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="9" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Buffer Management Errors</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">118</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Access of Indexable Resource (Range Error)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">125</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Out-of-Bounds Read</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">129</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Validation of Array Index</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">135</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Incorrect Calculation of Multi-Byte String Length</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">170</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Null Termination</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">193</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Off-by-One Error</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">787</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Out-of-Bounds Write</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">823</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Out-of-Range Pointer Offset</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">824</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Access of Uninitialized Pointer</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Buffer Overflow</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">121</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Stack-Based Buffer Overflow</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="7" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Code Injection</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">74</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Special Elements in Output Used by a Downstream Component
         (Injection)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">91</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">XML Injection (Blind XPath Injection)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">94</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Control of Generation of Code</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">95</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Directives in Dynamically Evaluated Code ('Eval
         Injection')</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">98</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Control of Filename for Include/Require Statement in PHP Program (PHP File
         Inclusion)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">185</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Incorrect Regular Expression</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">830</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Inclusion of Web Functionality from an Untrusted Source</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="10" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Code Quality</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">111</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Direct Use of Unsafe JNI</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">159</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Failure to Sanitize Special Element</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">401</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Release of Memory Before Removing Last Reference (Memory Leak)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">404</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Resource Shutdown or Release</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">415</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Double Free</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">416</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use After Free</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">477</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Obsolete Functions</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">479</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Signal Handler Use of a Non-Reentrant Function</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">489</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Leftover Debug Code</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">597</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Wrong Operator in String Comparison</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="3" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Command or Argument Injection</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">77</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Special Elements used in a Command (Command
         Injection)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">78</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Special Elements used in an OS Command (OS Command
         Injection)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">88</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Argument Injection or Modification</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="4" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Credentials Management</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">256</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Plaintext Storage of a Password</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">259</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Hard-coded Password</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">522</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Insufficiently Protected Credentials</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">798</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Hard-code Credentials</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="3" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">CRLF Injection</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">93</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of CRLF Sequences (CRLF Injection)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">113</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of CRLF Sequences in HTTP Headers (HTTP Response
         Splitting)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">117</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Output Neutralization for Logs</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="4" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Cross-Site Scripting (XSS)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">79</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Input During Web Page Generation (Cross-site
         Scripting)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">80</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Script-Related HTML Tags in a Web Page (Basic XSS)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">83</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Script in Attributes in a Web Page</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">86</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Invalid Characters in Identifiers in Web Pages</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="26" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Cryptographic Issues</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">261</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Weak Cryptography for Passwords</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">295</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Certificate Validation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">296</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Following of Chain of Trust for Certificate Validation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">297</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Validation of Host-specific Certificate Data</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">298</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Validation of Certificate Expiration</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">299</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Check for Certificate Revocation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">311</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Missing Encryption of Sensitive Data</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">312</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Cleartext Storage of Sensitive Information</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">313</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Plaintext Storage in a File or on Disk</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">316</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Plaintext Storage in Memory</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">319</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Cleartext Transmission of Sensitive Information</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">321</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Hard-coded Cryptographic Key</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">326</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Inadequate Encryption Strength</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">327</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of a Broken or Risky Cryptographic Algorithm</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">328</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Reversible One-Way Hash</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">329</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Not Using a Random IV with CBC Mode</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">330</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Insufficiently Random Values</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">331</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Insufficient Entropy</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">338</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Cryptographically Weak Pseudo-Random Number Generator</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">347</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Verification of Cryptographic Signature</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">354</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Validation of Integrity Check Value</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">547</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Hard-coded, Security-relevant Constants</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">614</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Sensitive Cookie in HTTPS Session Without Secure Attribute</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">760</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of a One-Way Hash with a Predictable Salt</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">780</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of RSA with Optimal Asymmetric Encryption Padding</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">916</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Password Hash With Insufficient Computational Effort</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="2" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Dangerous Functions</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">242</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Inherently Dangerous Function</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">676</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Potentially Dangerous Function</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="3" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Deployment Configuration</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">402</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Transmission of Private Resources into a New Sphere (Resource Leak)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">668</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Exposure of Resource to Wrong Sphere</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">926</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Export of Android Application Components</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="3" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Directory Traversal</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">22</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:middle;" headers="d87305e145 ">Improper Limitation of a Pathname to a Restricted Directory (Path
         Traversal)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">35</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:middle;" headers="d87305e145 ">Path Traversal</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">73</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:middle;" headers="d87305e145 ">External Control of File Name or Path</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 "> </td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="4" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Encapsulation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">494</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Download of Code Without Integrity Check</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">501</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Trust Boundary Violation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">502</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Deserialization of Untrusted Data</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">749</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Exposed Dangerous Method or Function</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="2" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Error Handling</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">248</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Uncaught Exception</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">252</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Unchecked Return Value</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Format String</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">134</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Externally-Controlled Format String</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="15" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Information Leakage</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">200</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Information Exposure</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">201</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Insertion of Sensitive Information Into Sent Data</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">209</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Information Exposure Through an Error Message</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">215</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Information Exposure Through Debug Information</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">359</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Exposure of Private Information (Privacy Violation)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">497</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Exposure of System Data to an Unauthorized Control Sphere</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">526</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Information Exposure Through Environmental Variables</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">530</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Exposure of Backup File to an Unauthorized Control Sphere</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">532</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Insertion of Sensitive Information into Log File</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">538</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">File and Directory Information Exposure</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">548</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Information Exposure Through Directory Listing</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">611</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Information Exposure Through XML External Entity Reference</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">615</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Information Exposure Through Comments</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">665</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Initialization</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">918</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Server-side Request Forgery</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Insecure Dependencies</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">829</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Inclusion of Functionality from Untrusted Control Sphere</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="16" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Insufficient Input Validation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">20</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Input Validation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">90</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Special Elements Used in an LDAP Query (LDAP
         Injection)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">103</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Struts: Incomplete validate() Method Definition</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">104</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Struts: Form Bean Does Not Extend Validation Class</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">112</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Missing XML Validation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">115</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Misinterpretation of Input</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">183</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Permissive List of Allowed Inputs</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">345</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Insufficient Verification of Data Authenticity</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">434</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Unrestricted Upload of File with Dangerous Type</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">470</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Use of Externally-Controlled Input to Select Classes or Code (Unsafe
         Reflection)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">472</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">External Control of Assumed-Immutable Web Parameter</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">601</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">URL Redirection to Untrusted Site (Open Redirect)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">618</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Exposed Unsafe ActiveX Method</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">915</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improperly Controlled Modification of Dynamically-Determined Object
         Attributes</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3 </td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">1174</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">ASP.NET Misconfiguration: Improper Model Validation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">1236</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Formula Elements in a CSV File</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Insufficient Logging &amp; Monitoring</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">223</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Omission of Security-relevant Information</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="6" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Numeric Errors</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">190</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Integer Overflow or Wraparound</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">191</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Integer Underflow (Wrap or Wraparound)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">192</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Integer Coercion Error</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">195</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Signed to Unsigned Conversion Error</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">196</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Unsigned to Signed Conversion Error</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">197</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Numeric Truncation Error</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="5" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Potential Backdoor</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">398</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Indicator of Poor Code Quality</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">506</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Embedded Malicious Code</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">511</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Logic/Time Bomb</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">514</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Covert Channel</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">656</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Reliance on Security Through Obscurity</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="3" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Race Conditions</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">366</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Race Condition within a Thread</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">367</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Time-of-check Time-of-use (TOCTOU) Race Condition</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">421</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Race Condition During Access to Alternate Channel</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="4" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Server Configuration</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">16</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Configuration</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">441</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Unintended Proxy or Intermediary (Confused Deputy)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">642</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">External Control of Critical State Data</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">757</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Selection of Less-Secure Algorithm During Negotiation (Algorithm Downgrade)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">&nbsp;X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Session Fixation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">384</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Session Fixation</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="3" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">SQL Injection</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">89</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Special Elements used in an SQL Command (SQL
         Injection)</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">X</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">564</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">SQL Injection: Hibernate</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">943</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Improper Neutralization of Special Elements in Data Query Logic</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="4" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Time and State</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">377</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Insecure Temporary File</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">382</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">J2EE Bad Practices: Use of System.exit()</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">557</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Concurrency Issues</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">2</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">691</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Insufficient Control Flow Management</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="2" style="text-align:left;vertical-align:top;" headers="d87305e139 ">Untrusted Initialization</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">15</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">External Control of System or Configuration Setting</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">4</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">454</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">External Initialization of Trusted Variables or Data Stores</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">0</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" rowspan="3" style="text-align:left;vertical-align:middle;" headers="d87305e139 ">Untrusted Search Path</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">114</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Process Control</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">5</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">426</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Untrusted Search Path</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

       <tr class="row">
        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e142 ">427</td>

        <td class="entry cellrowborder" style="text-align:left;vertical-align:top;" headers="d87305e145 ">Uncontrolled Search Path Element</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e148 ">3</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e158 ">X</td>

        <td class="entry cellrowborder" style="text-align:center;vertical-align:top;" headers="d87305e162 ">&nbsp;</td>

       </tr>

      </tbody>

     </table>
</div>
¹Veracode defines flaw severities on the following severity scale: 0: Informational, 1: Very Low, 2: Low, 3: Medium, 4: High, 5: Very High. For more information, see [Veracode Flaw Severities](https://docs.veracode.com/r/review_severity_exploitability).
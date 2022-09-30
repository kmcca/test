---
"ft:title" : "Creating ModSecurity WAF Rules for Dynamic Analysis"
"ft:prettyUrl" : "c_waf_modsec"
---
You can create web application firewalls \(WAF\) rules using ModSecurity. You can use these rules to block potential attacks based on the results of your dynamic scans.

<p font-size="13pt"><b>Overview</b></p>

Veracode ModSecurity rules attempt to block vulnerabilities identified by Dynamic Analysis scans. These rules are not guaranteed nor designed to fix every vulnerability discovered. Veracode recommends an in-depth defense strategy that also may require code-level remediation.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **My Portfolio** \> **Applications**.
2. Locate an application with a completed Dynamic Analysis scan.
3. In the Scan Status column, click **Dynamic Scan** to open the Application page.
4. In the left pane, under Completed, click **WAF Integration**.
5. Enter the ID for the first rule. ModSecurity rules have identification \(ID\) numbers. 
 
    The First Rule ID field specifies the ID of the first rule we include in the ModSecurity rules file. The ID value increments with successive issues. It is important to generate rules with identifiers that do not conflict with IDs already in use.

8. Select the severity of the security rule from the dropdown menu. The default is 4 - Warning.
9. Click **Generate**.

    Veracode generates a text file containing the ModSecurity rules that you can upload to your WAF.

<p font-size="13pt"><b>Next Steps</b></p>

1. Upload these rules to your WAF.
2. Run a Dynamic Analysis to verify the effectiveness of the WAF rules.
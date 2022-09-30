---
"ft:title" : "Creating Imperva WAF Rules for Dynamic Analysis"
"ft:prettyUrl" : "c_waf_imperva"
---
You can create web application firewalls \(WAF\) rules using Imperva. You can use these rules to block potential attacks based on the results of your dynamic scans.

<p font-size="13pt"><b>Overview</b></p>

The Veracode Imperva integration exports the vulnerabilities found in Dynamic Analysis scan results for import into the Imperva SecureSphere management console. This console converts the vulnerabilities to rules and uploads them to the WAF. These rules are not guaranteed nor designed to fix every vulnerability discovered. Veracode recommends an in-depth defense strategy that also may require code-level remediation.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **My Portfolio** \> **Applications**.
2. Locate an application with a completed Dynamic Analysis scan.
3. In the Scan Status column, click **Dynamic Scan** to open the Application page.
4. In the left pane, under Completed, click **WAF Integration**.
5. Select **Imperva** from the Format dropdown menu.
6. Click **Generate**.

    Veracode generates a text file containing the Imperva rules that you can upload to your WAF.

<p font-size="13pt"><b>Next Steps</b></p>

1. Upload these rules to your WAF.
2. Run a Dynamic Analysis to verify the effectiveness of the WAF rules.
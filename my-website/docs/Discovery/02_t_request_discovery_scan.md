---
"ft:title" : "Request a Discovery Scan"
"ft:prettyUrl" : "Request_a_Discovery_Scan"
---
You provide a list of domain names and Internet-facing IP address ranges that you want the Discovery scan to search and analyze.

<p font-size="13pt"><b>Overview</b></p>

Discovery web traffic originates from `54.236.209.106` and `54.236.113.103`. Veracode uses Amazon Web Services \(AWS\) to generate Discovery traffic. Your security operation center can track all Discovery traffic back to these two Veracode IP addresses.

Discovery scans take a minimum of three business days to complete, based on the number of inputs for your discovery assessment.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, select **Scans & Analysis** \> **Website Discovery**.

2. Click **New Discovery Scan**.

3. On the New Discovery Scan page, enter a name for the new scan.

4. Select to restrict scan visibility to Security Leads or to both teams and Security Leads in your organization.

5. Enter the domain names and Internet-facing IP address ranges you want the Discovery scan to search and analyze by either:

    - Uploading a TXT file that contains the list of the domain names
    - Clicking **Manual Entry** and manually entering or pasting the inputs into the Inputs field

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The name of your input file can be no longer than 256 characters. You can only enter one input per line in your text file or in your manually entered text.</p>
    
7. Optionally, in the Discovery Inputs section, you can enter keywords to extend the scope of your Discovery to domains that contain these words.

    For example, a Discovery with the keyword `examplecorp` processes the domain of `examplecorp.com` as a valid domain and searches for sites associated with that domain.

8. Specify when to start the Discovery scan:

    - **Immediately**: start the scan within 24 hours.
    - **In the Future**: specify the date and time, up to three months from today, to start the scan.

9. In the Blocklist Domains section, enter domains that you want to blocklist so that the Discovery scan knows to not analyze the sites in that domain.

    You can use the asterisk character as a wildcard for matching patterns in the blocklisted domains. For example:

    -  `*mywebsite*` blocklists anything with `mywebsite` in the hostname
    -  `*.org` blocklists all `.org` domains

    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Enter only one entry per line in the input area and do not use commas or any other separators. The input area allows a maximum of 250 lines. You cannot use schemas, ports, or paths as inputs.</p>

    Although you are allowed to enter large Classless Inter-Domain Routing (CIDR) blocks between 11 and 15, Veracode warns you when you enter a large block, informing you how many IP addresses the Discovery scan must analyze. Scanning excessive numbers of IP addresses delays the completion of your scan.

10. Click **Save**.

<p font-size="13pt"><b>Results</b></p>

Discovery scan appears on the Discovery Scans page, where you can see its status and estimated delivery time.

On the Discovery Scan page, you can click the name of your scan to open the overview page for that specific Discovery scan. On the overview page, you can view scan submission information, view the activity log, change the visibility of the results, download the results of the Discovery scan, or delete the scan. If you want to better understand the terms and concepts in your results, see the [Discovery data dictionary](https://docs.veracode.com/r/Understanding_URL_Structure). In addition, from the scan overview page you can download a ZIP archive of the inputs file, which contains a file for each of the input types, including IP addresses, domains, keywords, and blocklisted domains, associated with the Discovery scan.
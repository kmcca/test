---
"ft:title" : "Data Dictionary for Action Items Worksheet"
"ft:prettyUrl" : "Action_Items_Tab_Data_Dictionary"
---
This topic describes data in the Action Items worksheet included in the Discovery scan extract. Veracode generates this extract after you run a Discovery scan.

The Action Items worksheet lists the sites and network objects identified during Discovery scanning that might pose a security risk and require remediation.

**Sites Potentially Transmitting Unencrypted Authentication Information**

 - Identifies a list of any sites that are operating across unencrypted HTTP that return a server 200 message. This message indicates that the servers are present and listening. Information sent to these sites, including usernames and passwords, is not encrypted, and may be seen by outside parties.

 - Remediation: Implement encrypted communication over SSL. Disable unencrypted communication by default.

**Sites Running On Potentially Non-Standard or Unanticipated Ports \(\> 443\)**

 - Identifies any site running outside of a standard web port and could indicate internal resources that might be exposed to the public internet.

 - Remediation: Verify if you want the sites to run on these ports. If necessary, decommission the sites.

**Sites Discovered Via DNS Zone Transfer**

 - Your hosting provider provides an option for specifying which DNS servers are responsible for resolving the URL. Because other information may be included in the transfer, you may want to prevent users from downloading the entire DNS table to find out which systems are running. This type of request should come from a legitimate source.

 - Remediation: Restrict DNS zone transfers through similar IP restrictions.

**Potential externally exposed Dev / Staging sites**

 - Identifies sites with prefixes indicate they may be development or staging sites. These sites are frequently not as secure or up-to-date as production versions.

 - Remediation: Place your development and staging sites behind a firewall.

**Sites With Older Copyright Dates**

 - Identifies sites with most recent copyright dates older than 2010. Older copyright dates could indicate sites that have not been accessed recently. The sites may have outdated information or may be running less-secure applications.

 - Remediation: Determine if the site is still used or can be removed.

**Sites Leaking Server Header Information Indicating Older Web Servers**

 - Indicates that older versions of server tools are potentially vulnerable to an attack.

 - Remediation: Upgrade your server version. Do not list the server version in the HTTP response header.

**Sites Located on IP Addresses Outside the Input List \(Possibly Unknown\) with Authentication**

 - Indicates that visibility into your web assets exists. Sensitive systems require authentication.

 - Remediation: Determine if identified sites were known previously. A login on the site indicates that something of value exists on the page.

**Sites Located on Domains Outside the Input List \(Possibly Unknown\) with Authentication**

 - Indicates that a shadow IP registered a site that may not be known to the IT team.

 - Remediation: Determine if identified sites were known previously. A login on the site indicates that something of value exists on the page.

**Potential externally exposed Printers**

 - Indicates that your printers are exposed, potentially allowing someone to access them. This situation could result in spamming and make other parts of your network vulnerable.

 - Remediation: Set locks on your printer.

**Sites That Resemble Default Web Server Pages**

 - Indicates that most default web server pages are not particularly secure.

 - Remediation: Restrict access to only authorized users through firewalls, VPN, or other controls.

**Sites with Response Codes Equal To 2XX Found With No Body Content Or No DOM**

 - Identifies sites that returned no page content, but did not indicate any errors in returning a response. These sites could be unused placeholders, or some problem on the site is preventing content from rendering correctly.

 - Remediation: Determine if the page is needed. If not, remove, decommission or deprovision the page.
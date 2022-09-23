---
"ft:title" : "Data Dictionary for Dashboard Worksheet"
"ft:prettyUrl" : "r_discovery_scan_dd"
---
This topic describes the data and graphs in the Dashboard worksheet included in the Discovery scan extract. Veracode generates this extract after you run a Discovery scan.

<p><span style="font-size: medium;">By the Numbers Data</span></p>

**Customer**

Name of the organization.

**Scan Date**

Date the Discovery scan started.

**Scan Start Date and Scan End Date**

Dates the Discovery scan started and ended, in UTC format.

**Scan Duration**

Number of hours the Discovery scan machines were running. Start date and time is within 24 hours of the start date entered by the user. End date is either defined by the user in the Veracode Platform or when the Discovery scan engine cannot find any new hostnames.

**Sites from All Confidences**

Summary of statistics pertaining to websites that are below every confidence level. These sites may or may not belong to your organization.

**Responding Sites \(Hosts: Ports\) Found**

Number of websites, whether they have a URL or IP address as the hostname, found with a unique host/port combination. For example, Veracode considers `http://xyz.com:8080` and `https://xyz.com:443` to be two separate websites. In comparison, Veracode considers `http://xyz.com:80` and `xyz.com:80` to be the same website. In the second example, the host and port combinations are the same.

**Unique Hosts Found**

Number of websites found with unique hostnames.

**Unique IPs**

Number of unique IP addresses found by the Discovery scan. This metric provides an estimation of the size for the underlying web network supporting your externally facing applications.

**Unique DOM structures found**

Number of unique Document Object Model \(DOM\) structures found in the application. DOM structures are a key component underlying HTML web page structure. This method provides insights as to how many unique websites were found in the application during the Discovery scan.

**Unique Server Platforms**

Number of unique servers and server versions beneath the websites found in the Discovery scan.

**Authenticated Sites Found**

Number of websites found that have either HTTP-header or forms-based authentication on the homepage of those websites. These websites are generally considered the higher priority and higher risk websites, because they contain more sensitive user information.

**Redirecting Sites Found**

Number of websites found that pointed to another website. These websites responded with any of the values in the 300 range.

**Unique Sites Found**

Number of unique websites found from the Discovery scan. The unique calculation is the most thorough, as it rules out duplicates based on both IP address and DOM hash. This is the best indicator of the total number of websites found in the Discovery scan.

<p><span style="font-size: medium;">Discovery Result/Coverage Visualizations Graphs</span></p>

**Site Confidence Breakdown**

This graph illustrates the confidence that the sites belong to the user's organization. Values `High`, `Highest`, and `Medium High`. A graph with a large percentage of High and Highest indicates that a large percentage of websites may have been unknown to the user and may require investigation.

**Sites Contained Within Input IP Ranges**

This graph illustrates whether the websites scanned had IP addresses provided by the user. A large percentage of `No` values may indicate a high number of websites were previously unknown to the user, and may require investigation.

**Matching Input Registered Domains**

Similar to the previous graph, this graph also indicates whether the websites found by the Discovery scan had any association to domains provided by the user. This graph breaks down the domains by match type:

   - Exact Domain Match: percentage of websites found that were domains provided by the user.
   - Host is an IP: percentage of websites found where the hostname is an IP address provided by the user.
   - Sub-domain Match: percentage of websites found that were domains provided by the user.
   - Exact Domain Match: percentage of websites found where the subdomain had a domain name that matched one of the domains provided by the user.
   - No Match: percentage of websites with hostnames that matched none of the domain names provided by the user.

   Users may not know or provide all domains that belong to their organization, but usually provide a more thorough list of IP addresses.

**Discovery Plugin Summary**

This graph illustrates the plugins found in the Discovery scan, broken down by function. The plugin types are:

   - DNS: uses DNS to search for domain names and resolve IP addresses. DNS stands for Domain Name System, which underpins the current internet infrastructure. Using the Input IP Addresses provided by the user, Veracode Discovery searches for the hostname associated with the IP address. Veracode uses the input domains provided by the user to confirm that the hostname has an IP address that is part of the input list, or was previously unknown to the user.
   - Hostlist: checks the domains provided by the user to make sure they still exist and provide a valid web response.
   - Web: crawls known websites to find web links that lead to other potential hostnames. These hostnames discovered by Veracode are usually links found on the original website located in the Found From Display field.
   - Brute-Forcer: uses a set of predefined keywords to find subdomains within discovered hostnames. There are many instances of standalone websites that are not easily found when crawling the user's known websites.
   - Bing: finds websites that use the Microsoft Bing search engine. The plugin uses the Bing as well, to identify possible hostnames related to the input IP address and domains list provided by the user.
   - Director: finds websites using subdomains provided by the user.
   - AXFR \(Authoritative Transfer\): finds websites by using a specific feature within DNS \(inducing a zone transfer query\). AXFR is a mechanism for replicating DNS data across DNS servers. If AXFR is turned on within your DNS servers, this plugin can find other websites hosted on related DNS servers. If websites are found, this hints at potential vulnerabilities with misconfigured DNS servers.

**Site Port Usage**

Percentage of websites using each port number. Not all ports found refer to standard web ports, which present an opportunity to clean up the web infrastructure. Only 80 and 443 are standard web port numbers.

**Site Response Codes Seen**

Percentage of websites with each response code:
 
   - `1xx`: informational
   - `2xx`: success
   - `3xx`: redirection
   - `4xx`: client error
   - `5xx`: server error

**Site Authentication**

This graph illustrates the percentage of websites with either HTTP Authentication, Forms-based Authentication, or No Authentication on the homepage of the website found. Any website with authentication on the homepage is considered higher priority because it can hold sensitive user information.

**HTTP vs HTTPS Hosts**

This graph illustrates the percentage of websites with various protocols. HTTP and HTTPS are standard web protocols. Some websites respond to both HTTP and HTTPS requests, and are classified under the HTTP HTTPS category. A high percentage of Non-Standard protocols may indicate an operational and security hazard. You may also find servers that appear to be websites and are running on non-standard protocols for the web that should not be externally facing.

**Sever Headers/ Banners Top - 20**

This graph illustrates the percentage of various servers underneath the websites found by a Discovery scan. This chart is useful because some servers have known vulnerabilities associated with them. These servers should not be running externally-facing websites and may pose application security risk.
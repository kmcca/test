---
"ft:title" : "Data Dictionary for DynamicMP Input Worksheet"
"ft:prettyUrl" : "DynamicMP_Input_Tab_Data_Dictionary"
---
This topic describes the data in the DynamicMP Input worksheet included in the Discovery scan extract. Veracode generates this extract after you run a Discovery scan.

The DynamicMP Input worksheet provides data that might point to websites that were previously unknown to you and might be good candidates for a DynamicMP scan.

<p><span style="font-size: medium;">URL Structure Example</span></p>

**URL**

`http://subdomain.domain.com:1234/`

**Protocol**

`HTTP`

**Hostname**

subdomain

**Domain Name**

`domain.com`

**FQDN**

`subdomain.domain.com`

**Port**

`1234`

**Top Level Domain**

`com`

**DynamicMP Candidate**

Determines if the host is a good candidate for a DynamicMP scan. Values are `Yes` or `No`.

**IP Address**

The identifier assigned to each computer and another device, for example, printer, router, mobile device, connected to a TCP/IP network. An IP address locates and identifies a server behind the device or computer for communication purposes.

**DOM Hash**

The DOM hash is a unique identifier to characterize the structure of the web page that the Discovery scan detects. Because the Discovery scan does not crawl the entire application, the DOM hash usually refers to the structure of the homepage or login page of that application.

**DynamicMP Candidate**

A list of hostnames that are good candidates for DynamicMP because there is some confidence that this site is a responding website containing content or structure that might be open to security vulnerabilities. The calculation considers response code, confidence level, and DOM hash. Values are:

  - Good: hostnames that have a `200`, `301`, or `302` response code, and have a confidence level of high or highest and have a unique DOM hash value. In the case of multiple websites with similar DOM hash, one of those hostnames is selected as a good candidate.
  - Limited Results: hostnames that meet the same standards as a good candidate, but have the same DOM hash as one of the good candidates, which indicates they are duplicates of the good candidates and do not need to be scanned by DynamicMP. This list helps to optimize how much time you spend on public websites.

**Host**

The registered name for the domain, or in the case where there is no registered name, the host is the IP address of the domain.

Possible values include a string that contains a domain and subdomain. It is also known as a fully-qualified domain name. In the previous example, subdomain.domain.com is the host.

**Response Code**

The `HTTP` status code or response code for the host. Values are `200`, `301`, or `302`.

**Location Redirect**

Also known as URL redirection or `HTTP` direction, this redirect occurs when the hostname is a URL that the web server responds with when the engine is attempting to load another URL. For example, if the Discovery engine attempts to load `domain.com`, the location redirect expects the web server to redirect to `example.domain.com`, which is the hostname Veracode finds with a Discovery scan. The response code for a hostname that was found through location redirect returns a response code of `3xx`.

The `HTTP` location header field is returned in responses from an HTTP server under these circumstances:

URL redirection requests a web browser to load a different web page. In this circumstance, send the location header with an `HTTP` status code of `3xx`. It is passed as part of the response by a web server when the requested URI has:

   - Moved temporarily
   - Moved permanently
   - Processed a request

The responses provide information about the location of a newly created resource. In this circumstance, send the location header with an `HTTP` status code of `201` or `202`.

**In Input Range**

Determines if the IP address of the hostname found by Veracode is in the input IP range or ranges you provided. Values are `Yes` or `No`.

**In Input Domain**

Determines if the hostname found by Veracode is in the input domains list you provided. The values are:

 - Exact Domain Match: URL of the hostname found by Veracode matches one of the domains in the input domains list. In the previous example, `http://domain.com` is an exact domain match.
 - Subdomain Match: URL of the hostname found by Veracode matches one of the domains in the input domain list even if the URL contains a subdomain that was not provided to Veracode. For example, `sports.domain.com` might be found from an input of `domain.com`.
 - No Domain Match: Veracode found this site, but it is not part of the input domains list. For example, if domain.com is the only input domain you provided and if the Discovery scan returned the finding of abc.com and `sports.example.com`, those sites are classified as no domain match. You can view the Found by Display field to find the source of this finding.
 - Host is an IP: hostname is an IP address. This value does not indicate if this IP address was also in the input IP range that you provided.

**Copy Paste Column**

This column provides the ability to copy the host list into a text editor to generate a standard input file for a DynamicMP scan.
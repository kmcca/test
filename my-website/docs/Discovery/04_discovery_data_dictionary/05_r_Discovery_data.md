---
"ft:title" : "Data Dictionary for Discovery Data Worksheet"
"ft:prettyUrl" : "r_Discovery_data"
---
This topic defines the data in the Discovery Data worksheet included in the Discovery scan extract. Veracode generates this extract after you run a Discovery scan. The findings might point to websites previously unknown to you.

<p><span style="font-size: medium;">URL Structure Example</span></p>

**URL**

   `http://subdomain.domain.com:1234/`

**Protocol**

   `HTTP`

**Hostname**

   subdomain

**Domain name**

   `domain.com`

**FQDN**

   `subdomain.domain.com`

**Port**

   `1234`

**Top Level Domain**
   
   `com`

**Scheme**

   A scheme consists of a sequence of characters beginning with a letter and followed by any combination of letters, digits, plus symbol \(+\), period \(.\), or hyphen \(-\). Possible values include `HTTP` or `HTTPS` Although schemes are case-insensitive, the canonical form is lowercase. Documents that specify schemes must use lowercase letters and include a colon following a scheme. In the previous example, the scheme is `HTTP`.

**Host**

   The registered name for the domain, or in the case where there is no registered name, the host is the IP address of the domain. Possible values include a string that contains a domain and subdomain. It is also known as a fully-qualified domain name. In the previous example, `subdomain.domain.com` is the host.

**Port**

   The protocol port you use to contact the server referenced in the fully-qualified domain name or host. The most common values are 80, 8080, 443, and 8443. [View additional information on specific ports](http://web.mit.edu/rhel-doc/4/RH-DOCS/rhel-sg-en-4/ch-ports.html).

**Open Ports**
   
   The ports that responded with a host. The most common values are `80`, `8080`, `443`, and `8443`.

**IP Address**

   The identifier assigned to each computer and another device, for example, printer, router, mobile device, connected to a TCP/IP network. An IP address locates and identifies a server behind the device or computer for communication purposes.

**Domain**

   The part of a network address that identifies it as belonging to a specific domain. When there is no registered domain name, the domain is the IP address. In the previous example, the domain is `domain.com`.

**Wildcard Domain**

   The domains that match requests for any domain names including non-existing subdomains. In the previous example, the wildcard domain is a.domain.com.

**Confidence Level**

The probability that the site listed in each row in the table belongs to you. Values are:

   - Highest: Highest confidence sites contain both the domain and IP address that you supplied, which indicates Veracode has a very high confidence the site belongs to you.

   - High: High confidence sites contain either the domain or IP address that you supplied, which indicates Veracode has a high confidence the site belongs to you.

   - Medium High: Medium High sites contain a domain name that matches domains you provided on the input list. This status does not mean that the entire URL you provided in the input list. Medium High sites are prime candidates for you to investigate further because they were previously unknown to you.

   - Medium Low: Medium Low sites contain a domain that does not match any input you provided, but the IP address of the site matches the IP address you provided in the input list. Medium Low sites are prime candidates for you to investigate further because they were previously unknown to you.

   - Low: Low sites contain a domain that does not match any input you provided. The IP address of the site does not match the IP address you provided in the input list.

**Scan Scope**

   Determines if the site is in the scope of the scan, based on two criteria:

   - The domain of the website is a partial match to one of the domains provided as input.
   - The IP address was unresolvable and exists within the IP range you provided as input for the Discovery scan. For example, if you provide `www.domain.com` as input to a Discovery scan, Veracode matches all discovered hosts against the terms on your allowlist that it determined from the input. A Discovery scan might also find `mobile.domain.com`, or `www.domainlabs.com` because these sites partially match the domains in the approved allowlist. The site `domain.jobs.com` is considered out of scope with a value of `False`, because the approved allowlist matches against the subdomain, and not the domain itself.

**In Input Range**

   Determines if the IP address of the hostname found by Veracode is in the input IP range or ranges you provided. Values include Yes or No.

**In Input Domain**

   Determines if the hostname that Veracode found is in the input domains list you provided. Values are:

   - Exact Domain Match: URL of the hostname found by Veracode matches one of the domains in the input domains list. In the previous example, `http://domain`.com is an exact domain match.

   - Subdomain Match: URL of the hostname found by Veracode matches one of the domains in the input domain list even if the URL contains a subdomain that was not provided to Veracode. For example, `sports.domain.com` might be found from an input of `domain.co`.

   - No Domain Match: Veracode found this site, but it is not part of the input domains list. For example, if domain.com is the only input domain you provided and if the Discovery scan returned the finding of abc.com and `sports.example.com`, those sites are classified as no domain match. You can view the Found by Display field to find the source of this finding.

   - Host is an IP: Hostname is an IP address. This value does not indicate if this IP address was also in the input IP range that you provided.

**Found By Display**

   The Discovery scan technology that Veracode uses to find the specific hostname. Values are:

   - brute\_forcer \(subdomain\): A plugin that uses a set of predefined keywords to find subdomains within discovered hostnames. There are many instances of standalone websites that are not easily found when crawling your known websites.

   - dns: Using the provided Input IP addresses, Discovery searches for the hostname associated with the IP address. Veracode uses the input domains that you provide to confirm that the hostname has an IP address that is part of the input list, or was previously unknown to you.

   - web: A plugin that crawls known websites to find URLs that can lead to other potential hostnames. These hostnames which Veracode discovers are usually links found on the original website located in the Found From Display field.

   - Bing: A plugin that uses the Microsoft Bing search engine to identify possible hostnames related to the input IP address and domains list you provide.

   - cert: A plugin that uses the SSL certificate to identify possible hostnames, and other information in the SSL certificate, for example, the `Certificate Organization` and `Certificate Issued To` values.

   - Director: Discovery splits subdomains and domains of known sites and uses these subdomains and domains to search for related domains.

   - axfr: A plugin that uses the DNS records behind websites found to find other unlinked websites that are most likely owned by you because they are hosted by DNS servers behind known websites. If websites are found with this plugin, it lists potential vulnerabilities with misconfigured DNS servers. AXFR is a mechanism for replicating DNS data across DNS servers. If you turn on AXFR within your DNS servers, this plugin can find other websites hosted on related DNS servers.

**Found From**

   The URL that led Veracode to the associated URL in the hostname field. The hostname field can include subdomains of the Found From URL, or links on the web page of the Found From URL.

**Server Header**

   The information passed in the `HTTP` header for the server field, which usually refers to the server name or any other information the website wanted to pass in the `HTTP` headers. Veracode finds this header during the scraping of the `HTTP` response from the hostname and usually refers to the web server that hosts this website.

**Location Redirect**
   
   Also known as URL redirection or HTTP direction, this redirect occurs when the hostname is a URL that the web server responds with when the engine is attempting to load another URL. For example, if the Discovery engine attempts to load `domain.com`, the location redirect expects the web server to redirect to `example.domain.com`, which is the hostname Veracode finds with a Discovery scan. The response code for a hostname that was found through location redirect returns a response code of `3xx`.

   The `HTTP` location header field is returned in responses from an HTTP server under two circumstances:

   - URL redirection requests a web browser to load a different web page. In this circumstance, send the location header with an `HTTP` status code of `3xx`. A web server passes the location header as part of the response when the requested URI has:
        -   Moved temporarily
        -   Moved permanently
        -   Processed a request
    
   - The responses provide information about the location of a newly created resource. In this circumstance, send the location header with an `HTTP` status code of `201` or `202`.

**Meta Redirect**

   An alternative to location redirect, meta redirect is the preferred way to redirect a user agent to a different page. You can redirect a user agent to a different page by a special rule in the web server, through JavaScript upon loading the web page or using a simple script on the web server. Metadata redirect is used because some users prefer not being shown one URL that takes them to a different URL.

**HTTP Authentication**

   This authentication is also known as basic authentication, or HTTP header authentication, in the context of an HTTP transaction. Basic access authentication is a method for an HTTP user agent to provide a username and password when making a request. This method of authentication is commonly seen as a browser window that requires you to authenticate before loading the page.

**Forms Authentication**

   This fields provides editable form you can complete and submit to log in to some system or service within the application. This authentication is also known as login-forms authentication and it is the most common form of login authentication.

**DOM Hash**

   The DOM hash is a unique identifier to characterize the structure of the web page that the Discovery scan detects. Because the Discovery scan does not crawl the entire application, the DOM hash usually refers to the structure of the homepage or login page of that application.

**Site Fingerprint**

   The DOM hash plus the IP address of the site.

<p><span style="font-size: medium;">Site Info</span></p>

**HTML Title Tag**

   The `<title>` tag is required in all HTML documents and it defines the title of the document. It also defines a title in the browser toolbar, provides a title for the page when you add it to favorites, and displays a title for the page in search engine results.

   Possible values include any string of characters the site has within the `<title>` tag. This field is sometimes used to determine application owners because the title might include information about the site owner. For example, the title in the HTML of `subdomain.domain.com` might contain a brand or company name you own. This field, when paired with an unknown domain, can indicate if you are the owner of the site.

**Certificate Organization**

   This value is the Common Name field in the Issued To section of the SSL certificate. The values of this field usually look like a domain name. SSL certificates provide secure encrypted communications between a website and an internet browser. SSL stands for Secure Sockets Layer, the protocol that provides the encryption.

   The Discovery scan populates this field from the SSL certificate available from the site is on the `HTTPS` scheme, which is on port 443. This field, when paired with an unknown domain, can indicate if you are the owner of the site.

**Certificate Issued To**

   In the Discovery scan, this value refers to the organization named in the Issued To section of the SSL certificate. The values of this field usually refer to an organization name. This field, when paired with an unknown domain, can indicate if you are the owner of the site.

**Copyright Year**

   This value is populated from the copyright year or year range information within the copyright element in the HTML of the web page found in the Discovery scan. For users, this field is regularly found at the footer of the web page. This field can provide you information about sites that are older or have not been updated recently.

**Copyright Data**

   This value refers to any information found in the copyright element in the HTML of the web page, excluding the copyright year. Normally, you can find this field regularly at the footer of the web page. This field, when paired with an unknown domain, can indicate if you are the owner of the site.

<p><span style="font-size: medium;">Admin</span></p>

**Time Found**

   Refers to the date and time stamp when the Discovery scan found the site.

**Host Display**

   The fully-qualified domain name. This value combines the scheme and host of the site.

**DynamicMP Candidate**

   A list of hostnames that are good candidates for DynamicMP because there is some confidence that this site is a responding website containing content or structure that might be open to security vulnerabilities. The calculation considers response code, confidence level, and DOM hash. Values are:

   - Good:  Hostnames that have a `200`, `301`, or `302` response code, and have a confidence level of high or highest and have a unique DOM hash value. In the case of multiple websites with similar DOM hash, one of those hostnames is selected as a good candidate.

   - Limited Results:  Hostnames that meet the same standards as a good candidate, but have the same DOM hash as one of the good candidates, which indicates they are duplicates of the good candidates and do not need to be scanned by DynamicMP. This list helps to optimize how much time you spend on public websites.

**Authentication Display**

   This field is true if either the `HTTP` authentication or forms authentication field is true. This field allows you to determine if you have authentication on your website. Values are:

   -   HTTP Authentication
   -   Forms Authentication
   -   HTTP and Forms Authentication
   -   No Authentication

**Redirected Display**

   Determines if another website redirected the hostname. This field helps you determine if your multiple websites redirect to the same hostname. Values are:

   -   Redirected
   -   Not Redirected

**Response Code Display**

   The textual representation of the `HTTP` status codes or response codes for the hostname. The associated numerical value of the status codes is located in the Response Code field.

**Found From Duplicate**

   This field has useful values when the hostname is found in the Discovery scan, which is noted in the Found By field. If Veracode finds a hostname subdomain.example.com, because it was a link on example.com, then example.com is the value for this field. This field provides more assurance that the website belongs to you.

**HTTP vs. HTTPS**

   A representation of the scheme of the hostname found in the Discovery scan. Values are:

   -   HTTP
   -   HTTPS
   -   HTTP and HTTPS, which indicate that the same hostname responds to both schemes

**Firefox Page Hash**

   This hash is the same DOM hash representation that was found in the DOM hash field when the `HTTP` request header contained a Firefox user agent before the website was loaded.

**IE Page Hash**

   This is the same DOM hash representation that was found in the DOM hash field when the `HTTP` request header contained an Internet Explorer user agent before the website was loaded. This field might be useful if your website structure changes significantly based on the user agent field in the `HTTP` request header.

**iPhone Page Hash**

   This hash is the same DOM hash representation that was found in the DOM hash field when the `HTTP` request header contained a mobile Safari user agent before the website loaded. This field might be useful if your website structure changes significantly based on the user agent field in the `HTTP` request header.
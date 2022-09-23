---
"ft:title" : "Data Dictionary for Domains Needing Review Worksheet"
"ft:prettyUrl" : "Domains_Needing_Review_Data_Dictionary"
---
This topic describes the data and graphs in the Domains Needing Review worksheet included in the Discovery scan extract. Veracode generates this extract after you run a Discovery scan.

The Domains Needing Review worksheet contains a summary of the registered domains that you might need to review, including domains that you might need to add to the next Discovery scan to maximize coverage.

**Domain**

The domain of the application. The domain may be an IP address.

**Host**

The host of the domains under your application, usually an IP address.

**IP Address**

The IP address of the domain.

**In Input Range**

Determines whether the domain is in input range.

**In Input Domain**

Determines whether the hostname found by Veracode was in the input domains list provided by the user. The values are:

   - Exact Domain Match: the URL of the hostname found by Veracode matches one of the domains in the input domains list. In the example above, `http://domain.com` is an exact domain match.
   - Sub-domain Match: the URL of the hostname was found by Veracode and the domain in the URL matches one of the domains in the input domain list, even if the URL contains a subdomain that was not provided to Veracode. For example, `sports.domain.com` could be found from an input of `domain.com`.
   - No Domain Match: this site was found by Veracode, but was not part of the input domains list. For example, if `domain.com` was the only input domain provided by the user, the finding of `abc.com` and `sports.example.com` are classified as no domain match. View the Found by Display field to find the source of this finding.
   - Host is an IP: the hostname is an IP address. It is not an indication of whether this IP address was also in the input IP range provided by the user.

**Open Ports**

Open ports are ports that responded with a host. The most common values are `80`, `8080`, `443`, and `8443`.

**Response Code**

The response code for the site:

   - `1xx`: informational
   - `2xx`: success
   - `3xx`: redirection
   - `4xx`: client error
   - `5xx`: server error

**\# of Web Apps**

The number of web applications for the domain.
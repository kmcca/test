---
"ft:title" : "Configuring Dynamic Analysis URL Settings"
"ft:prettyUrl" : "c_was_conf_url3"
---
In the Veracode Platform, you can configure Dynamic Analysis scan settings for each web application or API specification.

On the Edit Configuration page, provide detailed information about the URL scan.

**URL Information**

Enter a starting URL for your scan, including any custom ports. Select the checkbox if you want to include both the `http://` and `https://` address in the scan.

The scan starts at this webpage and then searches the entire website. Choose a URL that enables the scan to crawl all the pages on the site and adheres to these rules:

  - You must precede URLs with `http://` or `https://`
  - You must end directory names with a slash \(/\)
  - Acceptable formats are full hostname, such as `http://www.example.com`, or hostname and directory, such as `http://example.com/dir/`
  - Do not use wildcards in the target URL
  - You are not allowed to use wildcards in the Allowlist and Exclude URLs fields to include or exclude multiple pages or portions of a site all at one time
  - You can specify a page as a target URL, for example, `http://www.example.com/dir/my_page`

**Authentication**

If the URL requires authentication, select **Required** and a [login method](https://docs.veracode.com/r/c_was_login_settings).

**Directory Restrictions**

Select the dropdown menu to choose how to restrict the scan of the directories at the URL:

- **Directory and Subdirectories**: allow the scan to crawl within the specified directory and any subdirectories, but not to crawl up from the starting point.
- **Directory Only**: allow the scan to stay within the specified directory and not crawl up or down from it.
- **No Restrictions**: allow the scan to crawl up and down from the specified directory.

**Scan Controls**

In the Number of Concurrent Browsers section, in the Browsers field, enter the maximum number of browsers that can run Dynamic Analysis scan processes at the same time. The scan processes include crawling and auditing the URLs for your web applications. The value range is `1` to `12` and the default is `4`.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> Reducing the number of concurrent browsers can significantly increase the time for scans to complete.</p>

**URL-Specific Blocklist and Allowlist**

Exclude URLs that you do not want the Dynamic Analysis to scan. You can also change the scope of the blocklist by excluding the HTTP or HTTPS versions.

By default, the Dynamic Analysis scan engine scans all subdirectories under the top-level domain. Because Veracode does not automatically scan the subdomains, you can include them in the scope of the scan by specifying them in the **Allowlist** tab. You can also change the scope of the URL scan by excluding the HTTP or HTTPS versions.

**[Crawl Script](https://docs.veracode.com/r/t_was_crawl_script)**

To ensure a comprehensive scan, you can upload a crawl script as an HTML file or SIDE (JSON format) file (<5 MB) containing a single script or test suite.

**[Internal Scanning](https://docs.veracode.com/r/c_was_internal)**

If the URL is behind a firewall, select a reachable gateway and endpoint for the URL.

**User Agent**

Enter customized details of your browser to ensure the scan crawls for known vulnerabilities for that specific browser and returns information specific to the respective environment.

**Custom Host**

If you do not want Veracode to perform a DNS lookup to obtain the IP address for the target host of your scan or if your target host does not have a DNS entry, you can enter one or more custom host-to-IP resolutions. Wildcards, slashes, or filepaths are not permitted. Private or internal IP addresses are only allowed if you have selected a gateway and endpoint in the Internal Scanning section.

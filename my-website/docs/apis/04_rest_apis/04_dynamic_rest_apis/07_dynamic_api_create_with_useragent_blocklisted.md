---
"ft:title": "Create a Dynamic Analysis with a User Agent and Blocklisted URLs Using the REST API"
"ft:prettyUrl": "t_dynamic_useragent"
---
You can use the Dynamic Analysis API to create an analysis that scans multiple URLs, applies a user agent, and blocklists specific URLs.

<p font-size="13pt"><b>Steps</b></p>

1.  Enter values for the `scan_config_request`, `scan_setting`, `blacklist_configuration`, `org_info`, `visibility`, and `user_agent` properties in the JSON file.

    If you want to specify a custom header, set `"type: "CUSTOM"`. If you use a predefined agent, such as Internet Explorer 11, you cannot include a `custom_header` field.

2.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json
    ```

This is an example of a Dynamic Analysis of multiple URLs. This analysis specifies the user agent string and the URLs to exclude from both the analysis and the URL scan.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b>The URLs that you blocklist at the URL-specific level take precedence over the URLs in this blocklist. For example, if you blocklist a URL in your URL configuration, but not in the configuration of the whole Dynamic Analysis, the URL configuration blocklist determines which URLs to exclude from the scan.</p>

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com/one/"
        },
        "scan_setting": {
          "user_agent": {
            "type": "CUSTOM",
            "custom_header": "Custom User Agent String"
          },
          "blacklist_configuration": {
            "blackList": [
              {
                "url": "http://www.example.com/one/black/",
                "http_and_https": true
              }
            ]
          }
        }
      }
    },
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com/two/",
          "http_and_https": true
        }
      }
    }
  ],
  "org_info": {
    "email": "user@example.com"
  },
  "visibility": {
    "setup_type": "SEC_LEADS_ONLY",
    "team_identifiers": []
  },
  "scan_setting": {
    "blacklist_configuration": {
      "blackList": [
        {
          "url": "http://www.example.com/black1/",
          "http_and_https": false
        },
        {
          "url": "http://www.example.com/black2/site.html",
          "http_and_https": false
        }
      ]
    },
    "user_agent": {
      "type": "CUSTOM",
      "custom_header": "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko VERACODE"
    }
  }
}     
```


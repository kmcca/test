---
"ft:title": "Create an Authenticated Dynamic Analysis with the REST API"
"ft:prettyUrl": "t_dynamic_logins"
---
You can use the Dynamic Analysis API to create an analysis that uses auto-login, basic authentication, and form-based login with a login script.

<p font-size="13pt"><b>Steps</b></p>

1.  Enter values for the `scan_config_request`, `auth_configuration`, and `schedule` properties in the JSON file.

2.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/analyses" < input.json
    ```

These are examples of the different types of authentication you can use with a Dynamic Analysis:

<p><span style="font-size: medium;">Auto-login</span></p>

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com",
          "http_and_https": true,
          "directory_restriction_type": "DIRECTORY_AND_SUBDIRECTORY"
        },
        "auth_configuration": {
          "authentications": {
            "AUTO": {
              "username": "user",
              "password": "pass",
              "authtype": "AUTO"
            }
          }
        }
      }
    }
  ],
  "schedule": {
    "now": true,
    "duration": {
      "length": 1,
      "unit": "DAY"
    }
  }
}          
```

<p><span style="font-size: medium;">Client Certificate</span></p>

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com",
          "http_and_https": true,
          "directory_restriction_type": "DIRECTORY_AND_SUBDIRECTORY"
        },
        "auth_configuration": {
          "authentications": {
            "CERT": {
              "cert_name": "Cert-name.p12",
              "password": "Password",
              "base64_pkcs12": "<base64 encoded p12 cert>",
              "authtype": "CERT"
            }
          }
        }
      }
    }
  ],
  "schedule": {
    "now": true,
    "duration": {
      "length": 1,
      "unit": "DAY"
    }
  }
}
```

<p><span style="font-size: medium;">Basic Authentication</span></p>

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com",
          "http_and_https": true,
          "directory_restriction_type": "DIRECTORY_AND_SUBDIRECTORY"
        },
        "auth_configuration": {
          "authentications": {
            "BASIC": {
              "username": "username",
              "password": "pass",
              "authtype": "BASIC"
            }
          }
        }
      }
    }
  ],
  "schedule": {
    "now": true,
    "duration": {
      "length": 1,
      "unit": "DAY"
    }
  }
}
```

<p><span style="font-size: medium;">Form-Based Login with Login Script</span></p>

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Before adding the crawl script to the API body, you must escape the JSON. If you need assistance, use the JSON escape utility available from <a href="https://jsonformatter.org">https://jsonformatter.org</a>.</p>

```json
{
  "name": "Name-of-Your-Dynamic-Analysis",
  "scans": [
    {
      "scan_config_request": {
        "target_url": {
          "url": "http://www.example.com",
          "http_and_https": true,
          "directory_restriction_type": "DIRECTORY_AND_SUBDIRECTORY"
        },
        "auth_configuration": {
          "authentications": {
            "FORM": {
              "script_file": "example-login-script.side",
              "login_script_data": {
                "script_body": "<escaped JSON>",
                "script_type": "SELENIUM"
              },
              "authtype": "FORM"
            }
          }
        }
      }
    }
  ],
  "schedule": {
    "now": true,
    "duration": {
      "length": 1,
      "unit": "DAY"
    }
  }
}
```
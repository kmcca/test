---
"ft:title": "getmaintenancescheduleinfo.do (Deprecated)"
"ft:prettyUrl": "r_getmaintenancescheduleinfo"
---
The `getmaintenancescheduleinfo.do` call requests the upcoming Veracode Platform maintenance schedule. Plan to pause scheduled API activity during the downtime to avoid automation failures.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

<p><span style="font-size: medium;">REST API Equivalent</span></p>

The REST API equivalent of this call is a `GET` to `https://api.status.veracode.com/status`. Veracode strongly recommends that you use the REST API for this action. For new integrations, always use the REST APIs.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/3.0/getmaintenancescheduleinfo.do`

<p><span style="font-size: medium;">Permissions</span></p>

An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) or [user account](https://docs.veracode.com/r/c_role_permissions).

<p><span style="font-size: medium;">Parameters</span></p>

This call takes no parameters.

<p><span style="font-size: medium;">HTTPie Example</span></p>

Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac -o maintenancescheduleinfo.xml "https://analysiscenter.veracode.com/api/3.0/getmaintenancescheduleinfo.do"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `getmaintenancescheduleinfo.do` call returns the `maintenancescheduleinfo` XML document, which references the [maintenancescheduleinfo.xsd](https://analysiscenter.veracode.com/resource/3.0/maintenancescheduleinfo.xsd) schema file. You can use the XSD schema file to validate the XML data.

If the date in the XML return is in the past, Veracode has not yet scheduled the next maintenance window.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<maintenancescheduleinfo xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;3.0&#x2f;maintenancescheduleinfo" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;3.0&#x2f;maintenancescheduleinfo 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;3.0&#x2f;maintenancescheduleinfo.xsd">
   <maintenanceschedule>
      <downtime_start>2019-08-28T16&#x3a;44&#x3a;42-04&#x3a;00</downtime_start>
      <downtime_end>2019-08-28T16&#x3a;44&#x3a;42-04&#x3a;00</downtime_end>
      <title>Scheduled Maintenance Notification</title>
      <description>The Veracode service will be unavailable due to maintenance.&#xa;We apologize for any inconvenience caused 
         during this period.&#xa; Please contact your primary services manager or Veracode Support 
         &#x28;&#x3c;a href&#x3d;&#x22;mailto&#x3a;support&#x40;veracode.com&#x22;&#x3e; 
         support&#x40;veracode.com&#x3c;&#x2f;a&#x3e;&#x29; if you have any questions.</description>
   </maintenanceschedule>
</maintenancescheduleinfo>
```


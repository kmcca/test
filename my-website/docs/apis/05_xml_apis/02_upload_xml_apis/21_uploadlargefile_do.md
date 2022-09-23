---
"ft:title": "uploadlargefile.do"
"ft:prettyUrl": "r_uploadlargefile"
---
The `uploadlargefile.do` call uploads a single file as a set of parts to an existing build or creates a build. Uploading the file in parts avoids timeout errors, which can occur when uploading a large file using the [`uploadfile.do`](https://docs.veracode.com/r/r_uploadfile) call.

Veracode recommends using this call as an alternative to the `uploadfile.do` call. Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

Before uploading additional files, ensure that:

-   An upload or prescan is not in progress.
-   The [`beginscan.do`](https://docs.veracode.com/r/r_beginscan) call is not in progress.
-   If you recently ran the `beginscan.do` call, you did not set `auto_scan` to `true`.

Because the `uploadlargefile.do` call creates a build, if one does not already exist or if the most recent build has a published static scan, you do not need to call [`createbuild.do`](https://docs.veracode.com/r/r_createbuild). If the call creates a build, the build name is the date of the build with the scan type. For example, `03 Mar 2019 Static`.

If you want to upload a file that does not have the same name as a previous file, you can use the filename parameter to change the name, enabling flaw-matching with previously scanned files.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/uploadlargefile.do`

<p><span style="font-size: medium;">Header Requirements</span></p>

-   Set `Content-Length: <number of bytes in the file>`
-   Set `Content-Type: binary/octet-stream`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Type    | Description                                                                                                                                                                                                                                             |
|:-------------------------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `appid`<br>**Required** | Integer | Application ID.                                                                                                                                                                                                                                         |
| `file`<br>**Required**   | String  | File to upload. The maximum file size is 2GB.<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You must enter the <code>@</code> symbol before the entire pathname, including the specific filename.</p> |
| `filename`               | String  | Enter a new, unique filename for the uploaded file. The filename cannot begin or end with slashes or periods.                                                                                                                                           |
| `sandbox_id`             | Integer | Enter the ID of the target sandbox for the upload file.                                                                                                                                                                                                 |

<p><span style="font-size: medium;">Java Example</span></p>

This call supports the HTTP POST method. Because HTTPie does not support streaming uploads, you can use this Java example as an alternative to HTTPie.

```java
java -jar vosp-api-wrappers-java-<version>.jar -vid <Veracode API ID> -vkey <Veracode API key> -action uploadfile -appid <Veracode application ID> -filepath c:\Users\<username>\<filename>
```

<p><span style="font-size: medium;">Java Results</span></p>

The `uploadlargefile.do` call returns the `filelist` XML document, which references the [filelist.xsd](https://analysiscenter.veracode.com/resource/2.0/filelist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>

<filelist xmlns="https://analysiscenter.veracode.com/schema/2.0/filelist" 
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      account_id=<account ID> app_id=<application ID> build_id=<build ID> filelist_version="1.1" 
      xsi:schemaLocation="https://analysiscenter.veracode.com/schema/2.0/filelist 
      https://analysiscenter.veracode.com/resource/2.0/filelist.xsd">
   <file file_id=<file ID> file_name="<filename>" file_status="Uploaded"/>
</filelist>
```

<p><span style="font-size: medium;">Python Example</span></p>

This call supports the HTTP POST method. Because HTTPie does not support streaming uploads, you can use this Python script example as an alternative to HTTPie.

```shell
import requests
import sys
from veracode_api_signing.plugin_requests import RequestsAuthPluginVeracodeHMAC

app_id = 123456 #insert <Veracode application id> here
filename = 'verademo.war' #insert <filename> here
vid = 123456 #insert veracode api key id here
vkey = 1234567890 #insert veracode api key secret here

try:
    with open(filename, 'rb') as file:
        resp = requests.post('https://analysiscenter.veracode.com/api/5.0/uploadlargefile.do',
                headers={'Content-Type': 'binary/octet-stream'},params={'app_id': app_id, 'filename': filename},
                data=file,auth=RequestsAuthPluginVeracodeHMAC(vid,vkey))
except Exception as err:
    print(f'Error occurred: {err}')
    sys.exit(1)
else:
    print(f'Req Headers: {resp.request.headers}')
    print(f'Resp Code: {resp.status_code}\nResp Text: {resp.text}')
```
---
"ft:title": "uploadfile.do"
"ft:prettyUrl": "r_uploadfile"
---
The `uploadfile.do` call uploads a file to an existing build or creates a build. Veracode recommends that you use the [`uploadlargefile.do`](r_uploadlargefile.md) call to avoid timeout errors when uploading a large file.

Before using this API, Veracode strongly recommends that you read [API Usage and Access Guidelines](https://docs.veracode.com/r/c_API_usage_guidelines). Ensure you access the APIs with the [domain for your region](https://docs.veracode.com/r/Region_Domains_for_Veracode_APIs).

Before uploading additional files, ensure that:

-  An upload or prescan is not in progress.
-  The [`beginscan.do`](https://docs.veracode.com/r/r_beginscan) call is not in progress.
-  If you recently ran the `beginscan.do` call, you did not set `auto_scan` to `true`.

Because the `uploadfile.do` call creates a build, if one does not already exist or if the most recent build has a published static scan, you do not need to call [`createbuild.do`](r_createbuild.md). If the call creates a build, the build name is the date of the build with the scan type. For example, 03 Mar 2019 Static.

If you want to upload a file that does not have the same name as a previous file, you can use the `save_as` parameter to change the name, enabling flaw-matching with previously scanned files.

<p><span style="font-size: medium;">Resource URL</span></p>

`https://analysiscenter.veracode.com/api/5.0/uploadfile.do`

<p><span style="font-size: medium;">Parameters</span></p>

| Name                     | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|:-------------------------|:--------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `app_id`<br>**Required** | Integer | Application ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `file`<br>**Required**   | String  | File to upload. The maximum file size is 2GB. <br>Requirements: <ul><li>Set `Content-Type: multipart/form-data`.</li><li>Open the file in binary mode.</li></ul> If you see timeout errors during the upload, you can use the [`uploadlargefile.do`](r_uploadlargefile.md) call. <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> You must enter the <code>@</code> symbol before the entire pathname, including the specific filename.</p> |
| `sandbox_id`             | Integer | Enter the ID of the target sandbox for the upload file.                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `save_as`                | String  | Enter a new, unique filename for the uploaded file. The filename cannot begin or end with slashes or periods.                                                                                                                                                                                                                                                                                                                                                                               |

<p><span style="font-size: medium;">HTTPie Example</span></p>

This call supports the HTTP POST method. Examples use the [HTTPie command-line tool](https://docs.veracode.com/r/c_httpie_tool).

```shell
http --auth-type=veracode_hmac POST -f "https://analysiscenter.veracode.com/api/5.0/uploadfile.do" "app_id==<application ID>" "file@c:\myappfiles\myappzip.zip" "save_as==myappfile.zip"
```

<p><span style="font-size: medium;">HTTPie Results</span></p>

The `uploadfile.do` call returns the `filelist` XML document, which references the [filelist.xsd](https://analysiscenter.veracode.com/resource/2.0/filelist.xsd) schema file. You can use the XSD schema file to validate the XML data.

```xml
<?xml version="1.0" encoding="UTF-8"?>

<filelist xmlns:xsi="http&#x3a;&#x2f;&#x2f;www.w3.org&#x2f;2001&#x2f;XMLSchema-instance" 
      xmlns="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;filelist" 
      xsi:schemaLocation="https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;schema&#x2f;2.0&#x2f;filelist 
      https&#x3a;&#x2f;&#x2f;analysiscenter.veracode.com&#x2f;resource&#x2f;2.0&#x2f;filelist.xsd" filelist_version="1.1" 
      account_id="<account ID>" app_id="<application ID>" build_id="<build ID>">
   <file file_id="<file ID>" file_name="myappfile.zip" file_status="Uploaded" file_md5="<file md5>/>
   <file file_id="<file ID>" file_name="myappfile2.zip" file_status="Uploaded" file_md5="<file md5>"/>
</filelist>
```

<p><span style="font-size: medium;">Java Example</span></p>

```java
java -jar vosp-api-wrappers-java-<version>.jar -vid <Veracode API ID> -vkey <Veracode API key> -action uploadfile -appid <application ID> -filepath c:\Users\<username>\<filename>
```

<p><span style="font-size: medium;">Java Results</span></p>

The `uploadfile.do` call returns the `filelist` XML document, which references the [filelist.xsd](https://analysiscenter.veracode.com/resource/2.0/filelist.xsd) schema file. You can use the XSD schema file to validate the XML data.

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
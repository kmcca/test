---
"ft:title": "Mapping Upload API Tasks"
"ft:prettyUrl": "c_mapping_Upload"
---
To understand how the Upload API works and in which order you use the [Upload API calls](https://docs.veracode.com/r/c_UploadAPI_calls), this table maps the API calls to the manual steps in the Veracode Platform.

| Step | Using the Veracode Platform                    | Using the Upload API                                                                                                                                                                        | Returns XML File                |
|------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
| 1    | Create an application profile.                 | `createapp.do` <br> Optionally, if you want to name a scan, use createbuild.do.                                                                                                             | `appinfo.xml`                   |
| 2    | Select and upload binaries.                    | `uploadfile.do` or `uploadlargefile.do`, `beginprescan.do` <br> Use `uploadfile.do` or `uploadlargefile.do` in a programmatic loop to iterate through a directory in the local file system. | `filelist.xml`, `buildinfo.xml` |
| 3    | Wait for the prescan to complete.              | `getprescanresults.do` or `getbuildinfo.do`                                                                                                                                                 | `prescanresults.xml`            |
| 4    | Select and upload binary modules. Submit scan. | `beginscan.do`                                                                                                                                                                              | `buildinfo.xml`                 |


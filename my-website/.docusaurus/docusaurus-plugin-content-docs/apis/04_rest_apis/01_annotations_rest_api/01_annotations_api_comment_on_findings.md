---
"ft:title": "Commenting on Findings with the Annotations API"
"ft:prettyUrl": "c_annotations_add_comment_rest"
---
Veracode does not include comments in scan reports, so your comments are private to you and your team. 

You can consider comments as a private working area while you and your team remediate findings (flaws). You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info).

Use this command to add a comment to an application with two findings:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v2/applications/{application_guid}/annotations" < input.json
```

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "issue_list": "1,2",
  "comment": "This is my comment",
  "action": "COMMENT"
}
```

| Name                           | Type   | Description                                                                                                                                                           |
|--------------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `issue_list` <br> **Required** | String | Comma-separated list of finding IDs. You can use the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro) to get a list of finding IDs for an application. |
| `comment` <br> **Required**    | String | Enter a brief comment about the findings for `issue_list`.                                                                                                            |

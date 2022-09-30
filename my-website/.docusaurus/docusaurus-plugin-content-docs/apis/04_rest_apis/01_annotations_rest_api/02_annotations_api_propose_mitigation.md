---
"ft:title": "Proposing a Mitigation with the Annotations API"
"ft:prettyUrl": "c_annotations_propose_mitigation_rest"
---
Use this command to propose a mitigation, based on an environmental control in the network, with a comment, for an application with two findings:

```shell
http --auth-type=veracode_hmac POST "https://api.veracode.com/appsec/v2/applications/{application_guid}/annotations" < input.json
```

You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info).

The API passes the JSON file that you populate with the necessary values as shown in this example payload:

```json
{
  "issue_list": "1,2",
  "comment": "This is my comment",
  "action": "NETENV"
}
```

<p><span style="font-size: medium;">Proposing a Mitigation in TSRV Format</span></p>

If you want to propose a mitigation with a comment in [TSRV format](https://docs.veracode.com/r/c_review_TSRV): 

- Provide each Technique, Specifics, Remaining Risk, and Verification component in the comment as a single string
- Separate each component with a carriage return and the line feed `\r\n`

For example, for a mitigation proposal with these TSRV components:

* Technique : M1 : Establish and maintain control over all of your inputs.
* Specifics : We are using an encoder for our input.
* Remaining Risk : None.
* Verification : We must decline, for secret reasons.

Add this value to the `comment` property in your payload:

```json
{
  "issue_list": "1,2",
  "comment": "\rTechnique : M1 : Establish and maintain control over all of your inputs\r\nSpecifics : We are using an encoder for our input.\r\nRemaining Risk : None.\r\nVerification : We must decline, for secret reasons.",
  "action": "NETENV"
}
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> These comments are only examples. Veracode does not recommend offering any of these comments in your mitigations.</p>

<p><span style="font-size: medium;">Mitigation Properties</span></p>

| Name                           | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|--------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `issue_list` <br> **Required** | String | Comma-separated list of finding IDs. You can use the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro) to get a list of finding IDs for an application.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `comment` <br> **Required**    | String | Enter a brief comment about the findings for `issue_list`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `action` <br> **Required**     | String | Enter one of these mitigation actions:<ul><li>`APPDESIGN` states that custom business logic within the body of the application has addressed the finding. An automated process may not be able to fully identify this business logic.</li><li>`NETENV` states that the network in which the application is running has provided an environmental control that has addressed the finding.</li><li>`OSENV` states that the operating system on which the application is running has provided an environmental control that has addressed the finding.</li><li>`FP`, which stands for false positive, states that Veracode has incorrectly identified a finding in your application. If you identify a finding as a potential false positive, Veracode does not exclude the potential false positive from your published report. Your organization can approve a potential false positive to exclude it from the published report. If your organization approves a finding as a false positive, your organization is accepting the risk that the finding might be valid.</li><li>`LIBRARY` states that the current team does not maintain the library containing the finding. You referred the vulnerability to the library maintainer.</li><li>`ACCEPTRISK` states that your business is willing to accept the risk associated with a finding. Your organization evaluated the potential risk and effort required to address the finding.</li></ul> |

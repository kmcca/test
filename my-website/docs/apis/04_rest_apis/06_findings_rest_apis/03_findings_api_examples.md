---
"ft:title": "Findings REST API Examples"
"ft:prettyUrl": "c_findings_v2_examples"
---
These examples demonstrate how to perform several functions with the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro).

Each example command requires the GUID of a target Veracode application. You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info).

You can combine queries in your commands using `&`. For example:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?cwe=80&scan_type=STATIC"
```

## Get Findings by CWE ID

To identify each finding of a specific CWE in an application, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?cwe=80"
```

## Get Findings by Scan Type

To identify each finding of a specific scan type in an application, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?scan_type=STATIC"
```

The valid `scan_type` values are `STATIC`, `DYNAMIC`, `MANUAL`, and `SCA`. If you do not include `SCA` in this command, the Findings API excludes Software Composition Analysis findings.

## Get Findings for a Sandbox

To identify each finding for a specific sandbox in an application, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?context={sandbox_guid}"
```

The `{sandbox_guid}` parameter refers to non-policy sandboxes only. If you do not pass `{sandbox_guid}`, the API returns the latest policy scan findings. 

## Get Findings by Severity

To identify each finding of a specific severity in an application, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?severity=3"
```

The valid `severity` values are the numbers `0`–`5`.

## Get Findings of a Specific Severity or Higher

To identify each finding higher than or equal to a specific severity in an application, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?severity_gte=3"
```

The valid `severity_gte` values are the numbers `0`–`5`.

## Get Findings and Include Annotations

To identify each finding in an application and return the annotations, including mitigation details and comments, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?include_annot=TRUE"
```

This command adds an `annotations` node containing the annotation information to the response.

### Findings with Annotations in TSRV Format

For findings with mitigation proposals in [TSRV format](https://docs.veracode.com/r/c_review_TSRV), the command output appears as:

```
\rTechnique : M1 : Establish and maintain control over all of your inputs.\r\nSpecifics : We are using an encoder for our input.\r\nRemaining Risk : None.\r\nVerification : We must decline, for secret reasons.
```

Each component is separated by a carriage return and the line feed `\r\n`. Processing the comment and separating at the `\r\n` provides these items:

* Technique : M1 : Establish and maintain control over all of your inputs
* Specifics : We are using an encoder for our input.
* Remaining Risk : None.
* Verification : We must decline, for secret reasons.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> These comments are only examples. Veracode does not recommend offering any of these comments in your mitigations.</p>

## Get Findings that Violate Policy

To identify each finding in an application that does not pass policy, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?violates_policy=TRUE"
```

## Get Findings by Category

To identify each finding of a specific category in an application, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?finding_category=20"
```

Use the numeric ID value for `finding_category`, as shown in the API output results as `finding..finding_category.id`.

## Get New Findings from Latest Scan

To identify each new finding in the most recent scan of an application, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?new=true"
```

## Get SCA Findings of a Severity Higher than the Allowed CVSS Score

To identify each Software Composition Analysis (SCA) finding in an application with a severity higher than the CVSS score allowed in the policy, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?scan_type=SCA&cvss_gte=6"
```

## Get MPT Findings of a Severity Higher than the Allowed CVSS Score

To identify each Manual Penetration Testing (MPT) finding in an application with a severity higher than the CVSS score allowed in the policy, run this command:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings?scan_type=MANUAL&cvss_gte=6"
```

You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info). You can use the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro) to get the issue ID for a finding.

This endpoint uses the [Manual Testing API specification](https://docs.veracode.com/r/c_mpt_rest_api).

## Get Details About a Dynamic Analysis Flaw

Use this command to view details for a specific dynamic flaw:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings/{issue_id}/dynamic_flaw_info"
```

You can use the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro) to get the issue ID for a finding.

This endpoint uses the [Dynamic Flaw API specification](https://docs.veracode.com/r/c_rest_dynamic_flaw_intro).

## Get Details About a Static Finding

This endpoint uses the [Static Finding Data Path API specification](https://docs.veracode.com/r/c_rest_static_finding_data_path_intro).

Use this command to view the data paths for a static finding:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings/{finding_id}/static_flaw_info"
```

Use this command to view the data paths for a static finding from a sandbox scan:

```shell
http --auth-type=veracode_hmac GET "https://api.veracode.com/appsec/v2/applications/{application_guid}/findings/{issue_id}/static_flaw_info?context={sandbox_guid}”
```

You can use the [Applications API](https://docs.veracode.com/r/c_apps_intro) to get the GUID for an [application](https://docs.veracode.com/r/r_applications_info) or [development sandbox](https://docs.veracode.com/r/r_applications_sandboxes). You can use the [Findings API](https://docs.veracode.com/r/c_findings_v2_intro) to get the issue ID for a finding.

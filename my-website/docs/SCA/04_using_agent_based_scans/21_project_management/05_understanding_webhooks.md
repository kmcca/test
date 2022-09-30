---
"ft:title" : "Understanding Webhooks"
"ft:prettyUrl" : "Understanding_Webhooks"
---

A webhook allows Veracode Software Composition Analysis to notify you when certain events occur in your project. When the event is triggered, Veracode sends an HTTP POST request with a payload to your configured URL.

## Webhook Trigger Events 

These events can trigger notifications:

| Event                                                           | Description                                                                       |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------|
| Scan                                                            | Veracode successfully scans project.                                              |
| Vulnerability issues discovered in project library after a scan | The Veracode research team releases a new vulnerability that affects your project |
| Vulnerability issues changed in project library after a scan    | The Veracode research team updates a vulnerability that affects your project      |

## Webhook Payload Examples

Each trigger event generates a particular type of payload with the relevant information. These examples show the content Veracode provides for each event.

**Event: scan success**

```
    {
      "event": "SCAN_SUCCESS",
      "organization": {
        "id": 310,
        "name": "Veracode",
        "planType": "ENTERPRISE"
      },
      "workspace": {
        "id": 4788,
        "name": "Webhooks"
      },
      "user": {
        "id": 2910,
        "name": "John Smith"
      },
      "scan": {
        "id": 1099430,
        "commit": "2bedd63b8e3019121c89108bfccb2421b08e28e9",
        "branch": "New_demo_branch",
        "tag": null,
        "reportLink": "<LINK TO REPORT>",
        "vulnIssuesCount": 31,
        "outofDateIssuesCount": 9,
        "licenseIssuesCount": 0
      },
      "project": {
        "id": 20757,
        "name": "example-javascript"
      }
    }
```

**Event: vulnerability issues discovered**

```
    {
      "event": "VULN_ISSUES_DISCOVERED_AFTER_SCAN",
      "organization": {
        "id": 310,
        "name": "Veracode",
        "planType": "ENTERPRISE"
      },
      "workspace": {
        "id": 4788,
        "name": "Webhooks"
      },
      "user": null,
      "issues": [
        {
          "id": 111967,
          "status": "NEW",
          "issueUrl": "<LINK TO ISSUE>",
          "vuln": {
            "id": 16462,
            "title": “Title of vulnerability",
            "cvssScore": 4.3,
            "cvss3Score": 5.9,
            "cve": null,
            "cveStatus": "NA",
            "stage": "RELEASED",
            "disclosureDate": null,
            "hasExploits": false,
            "vulnerabilityTypes": [],
            "overview": null
          }
        }
      ],
      "project": {
        "id": 20757,
        "name": "example-javascript"
      }
    }
```

**Event: vulnerability issues changed**

```
    {
      "event": "VULN_ISSUES_CHANGED_AFTER_SCAN",
      "organization": {
        "id": 310,
        "name": "Veracode",
        "planType": "ENTERPRISE"
      },
      "workspace": {
        "id": 4788,
        "name": "Webhooks"
      },
      "user": null,
      "issues": [
        {
          "id": 111967,
          "status": "RESOLVED",
          "issueUrl": “<LINK TO ISSUE>”,
          "vuln": {
            "id": 16462,
            "title": "Title of vulnerability",
            "cvssScore": 7.8,
            "cvss3Score": 5.9,
            "cve": null,
            "cveStatus": "NA",
            "stage": "RELEASED",
            "disclosureDate": null,
            "hasExploits": false,
            "vulnerabilityTypes": [],
            "overview": null
          }
        }
      ],
      "project": {
        "id": 20757,
        "name": "example-javascript"
      }
     }
```



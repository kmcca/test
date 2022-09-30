---
"ft:title": "Create a Credentials Variable for Dynamic Analysis Login Scripts with the REST API"
"ft:prettyUrl": "orRWez4I0tnZNaA_i0zn9g/Tm9_6Fsn86MoWhu2YkBtYw"
---
You can use the Dynamic Analysis API to update credentials fields in login scripts by creating a scan engine variable that the API uses at runtime.

<p font-size="13pt"><b>Overview</b></p>

With a variable login script you do not need to know the credentials for the application to which Dynamic Analysis is logging in, nor do you need to create a new login script every time the credentials values change.

Example Python code for using the scan engine variables API feature is available from [https://github.com/anon-veracoder/veracode-dynamic-analysis-api-examples](https://github.com/anon-veracoder/veracode-dynamic-analysis-api-examples).

<p font-size="13pt"><b>Steps</b></p>

1.  Add the values for the `description`, `value`, and, optional, `reference_key` properties in the JSON file. The reference key is the value you use in your login script. Alternatively, you can use the `scanner_variable_id` that the API returns in response to a POST in your login scripts.

2.  Run this command:

    ```shell
    http --auth-type=veracode_hmac POST "https://api.veracode.com/was/configservice/v1/scanner_variables" < input.json
    ```

This is an example of how to create a new scan engine variable key-value pair:

```json
{
   "description": "Password key for my application",
   "reference_key": "MY_PASSWORD_KEY",
   "value": "hunter2"
}
```

This is an excerpt of a Selenium command in a login script that references the key `MY_PASSWORD_KEY`. When the dynamic scan engine executes the login script, the value `hunter2` replaces the key `${MY_PASSWORD_KEY}` at runtime.

```json
 {
  "name": "Name-of-Your-Dynamic-Analysis",
  "id": "5045080b-99ad-47e9-a8a6-7897bf4b5975",
  "comment": "",
  "command": "type",
  "target": "name=password",
  "targets": [
    [
      "name=password",
      "name"
    ],
    [
      "css=tr:nth-child(7) input:nth-child(2)",
      "css:finder"
    ],
    [
      "xpath=//input[@name='password']",
      "xpath:attributes"
    ],
    [
      "xpath=//tr[7]/td[2]/form/input[2]",
      "xpath:position"
    ]
  ],
  "value": "${MY_PASSWORD_KEY}"
}  
```
---
"ft:title" : "Troubleshooting ISM"
"ft:prettyUrl" : "c_troubleshooting_endpoints"
---

This table provides guidance for resolving errors you may encounter when trying to perform a Veracode Dynamic Analysis with ISM. The error text appears in the [ISM log files](https://docs.veracode.com/r/t_view_endpoint_logs) and, if you are running the endpoint from the command line, on the command prompt.

| Error Text                                                                                                                          | Solution                                                                                                                                       |
|-------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `ERROR - Exit due to initialization failure: Failed to reach the gateway`                                                           | Verify that the gateway server on port 443 is on your allowlist and available from the machine on which the endpoint is installed.             |
| `ERROR - Failed to get list of tunnels`                                                                                             | Verify that the gateway server on port 443 is on your allowlist and available from the machine on which the endpoint is installed.             |
| `ERROR - Exit due to initialization failure: GMS API invoke failed, cause : \{"error":"Token already registered","success":false\}` | Run the endpoint on the machine on which it originally ran. If you want to run an endpoint on another machine, you must create a new endpoint. |
| `ERROR - Exit due to initialization failure: Failed to make websocket connection to gateway`                                        | Verify that WebSockets are allowed in your firewall or proxy configuration for port 443.                                                       |


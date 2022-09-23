---
"ft:title" : "ISM Prerequisites"
"ft:prettyUrl" : "c_system_requirements"
---

<p><span style="font-size: medium;">System Requirements</span></p>

The system requirements for Veracode Internal Scanning Management \(ISM\) are based on the minimum requirements to run a Java Virtual Machine \(JVM\) on Java 8+.

| Requirement          | Description                                                                                                                                                                                                                                                                                                                                       |
|----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Operating System     | Veracode ISM can run on these operating systems: <ul><li>Windows 7 or later</li><li>macOS Lion or later</li><li>Linux with one of these distributions: RHEL, CentOS, or Ubuntu</li></ul> <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The ISM endpoint installer does not support Ubuntu.</p> |
| Java Version         | Java JRE 8+ or later. Veracode recommends using the latest Long-Term Support (LTS) OpenJDK from `https://adoptopenjdk.net/`.                                                                                                                                                                                                                      |
| Memory               | At least 8 GB of memory                                                                                                                                                                                                                                                                                                                           |
| Disk Space           | At least 4 GB available                                                                                                                                                                                                                                                                                                                           |
| Network Requirements | <ul><li>Reliable internet access</li><li>Reliable connection between the endpoint server and the Veracode gateway</li><li>Reliable connection between the endpoint server and your target URLs</li></ul>                                                                                                                                          |
| Port                 | Port 443 must be open.                                                                                                                                                                                                                                                                                                                            |
| WebSocket            | Your firewall must not block WebSocket traffic.                                                                                                                                                                                                                                                                                                   |


<p><span style="font-size: medium;">Veracode Requirements</span></p>

To configure ISM in the Veracode Platform, you must have:

-   A [Veracode Dynamic Analysis](https://docs.veracode.com/r/c_was_intro) subscription
-   The Administrator or Security Lead [role](https://docs.veracode.com/r/c_role_permissions)

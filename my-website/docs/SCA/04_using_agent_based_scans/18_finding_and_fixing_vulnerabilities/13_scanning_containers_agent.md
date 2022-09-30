---
"ft:title" : "Scanning Containers with Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_container_scan"
---

Container scanning extends the Veracode vulnerability database and SCA technology to system libraries in Docker containers.

Veracode Software Composition Analysis agent-based scanning supports container scanning for these Linux distributions:

-   RHEL 7
-   CentOS 6 and 7
-   Alpine 3
-   Debian 8, 9, and 10
-   Ubuntu 16.04, 18.04, 20.04, 20.10, and 21.04

You must have one of these package managers installed on your machine:

-   yum
-   pip
-   NPM
-   gem
-   apk
-   apt

When using yum, Veracode recommends you have the permissions to run yum updates in the container without root privileges.

For RHEL Linux containers, agent-based scanning only supports official RHEL Docker images, which require a RHEL subscription.

### CLI Container Scanning

**Images**

To scan a Docker image, use `--image`:

```
$ docker images --format '{{.Repository}}:{{.Tag}}'
centos:7
 
$ srcclr scan --image centos:7
```

**Containers**

To scan a container running locally, pass the container ID or name to `--container`:

```
$ docker ps --format '{{.ID}}'
2ca861ab7e85
  srcclr scan --container 2ca861ab7e85 
 
$ docker ps --format '{{.Names}}'
compassionate_shirley
 
$ srcclr scan --container compassionate_shirley 
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> These repository-specific features are not available for container scanning: vulnerable methods, lines of code, and SCM-specific concepts such as branches.
</p>

### Continuous Integration Container Scanning

To scan a Docker image using the continuous integration \(CI\) agent, modify the existing cURL script for the Veracode SCA agent to:

```
curl -sSL https://download.sourceclear.com/ci.sh | sh -s scan --image <image name>
```

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The Travis CI addon, which does not use this cURL script, does not support scanning Docker images.
</p>

### Viewing Container Scanning Results

After your agent-based scan is complete, you can [view the vulnerabilities](https://docs.veracode.com/r/Viewing_Agent_Based_Scan_Results) in your container from the project page in the Veracode Platform.




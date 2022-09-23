---
"author": ["Doc Team"]
"ft:lang": "en-US"
"ft:title": "Veracode Glossary"
"ft:prettyUrl": "Veracode_Glossary"
"media_dir": "images/"
---
This glossary provides definitions for general application security terms and terms specific to Veracode products.

## A

### Application Profile

Application profiles serve as an organizing container for scan results from different scan types. For SCA, Veracode automatically adds upload scan results to an application profile. To add agent-based scan results to an application profile, you must link an SCA project to an application profile.

### Assignment (Security Labs)

A group of labs in a campaign.

## C

### Campaign (Security Labs)

A group of assignments assigned to one or more user roles.

### Competition Mode (Security Labs)

A type of campaign in which individuals or teams compete against each other for points. A campaign in competition mode has its own leaderboard and countdown timer.

## D

### Dynamic Analysis

The Veracode Dynamic Application Security Testing (DAST) solution that enables broad scan coverage for internal and external web applications and API specifications.

### Dynamic Analysis Blocklist

A list of URLs that you do not want the Dynamic Analysis to scan. <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> The URLs that you add to the blocklist at the URL-specific level take precedence over the URLs in this blocklist. For example, if you blocklist a URL in your URL configuration, but not in the configuration of the whole Dynamic Analysis, the URL configuration blocklist determines which URLs are scanned or not.</p>

### Dynamic Analysis Configuration

The general configuration settings for a Dynamic Analysis. It includes blocklisted URLs and user agent strings.

## E

### eLearning

[Veracode eLearning](https://docs.veracode.com/r/elearning_master) consists of course-based training that helps developers gain the critical skills they need to identify and address potential vulnerabilities. These courses contain multiple slides, videos, and, usually, a quiz.

### Endpoint

For ISM, the JAR file that establishes the necessary connection between the gateway and the applications to scan. You must deploy endpoints behind your firewall in a location in your network that has access to the applications you want to scan.

### Endpoint Activity

For ISM, indicates when scans are in progress or when Veracode is providing scan support using an endpoint.

### Endpoint Installer

For ISM, the tool that supports the simple installation of your endpoints and creates a service that runs your endpoints continuously. Veracode recommends you use it to install your endpoints.

### Endpoint Status

For ISM, the status of the connection between the endpoint and gateway: Ready, Pending, or Offline.

## G

### Gateway

For ISM, the access point to the Veracode cloud. It provides information to endpoints upon request, acting as the intermediate system between endpoints and the Veracode scan machines. You should create only one gateway for your ISM configuration.

### Gateway Status

For ISM, the availability status of the gateway for Dynamic Analysis: Ready, Initializing, or Offline.

## I

### Internal Scanning Management (ISM)

Veracode Internal Scanning Management (ISM) is a simplified approach to web application scanning for applications hosted within a corporate firewall that cannot be reached from the public internet. ISM allows Veracode to bring uniformity to the scanning of external and internal applications for Veracode Dynamic Analysis users.

## P

### Project

For SCA agent-based scanning, projects typically correspond directly to a repository in a source control system. When executing a scan with the <ph keyref="sca_short"/> agent, the agent automatically creates the project based on the repository being scanned. The project itself is associated with a workspace based on the agent used when performing the scan.

## S

### SCA Agent

For SCA agent-based scanning, an agent is a command-line tool that interfaces with the artifacts or repositories to be scanned and the Veracode service. Agents associate the results of their scans to a project within a particular workspace. You can configure agents at the organization or workspace level.

### Security Labs

[Veracode Security Labs](https://docs.veracode.com/r/Veracode_Security_Labs) provides interactive lessons that help developers gain practical knowledge about application security. These lessons contain instructions and hands-on lab exercises.

## U

### URL Configuration

For Dynamic Analysis, the detailed configuration of a specific URL in a scan occurrence. It includes URL blocklists and allowlists, login settings, and user agent details.

## V

### Veracode Support Engineer

Provides multiple levels of support for your ISM project, such as: <ul><li>Troubleshooting login issues</li><li>Configuring dynamic scanners to support uncommon settings</li><li>Removing false positives from scan results</li></ul>
You have the option to grant Veracode Support Engineers limited access to your environment to perform these functions.

### Veracode Vulnerability Database

The Veracode Vulnerability Database contains all the public CVEs and vulnerability content that is exclusively available through Veracode. You can use the Veracode Vulnerability Database as a tool to determine if a library is safe prior to adding it to your code. It also provides important details about a library, such as the license in use and insight into specific vulnerabilities.

### Vulnerability

An exploitable weakness found during a Dynamic Analysis or SCA scan.

## W

### Workspace

Workspaces serve as the organizing container for your agent-based scanning projects. Some common groupings include creating workspaces by product, by scrum team, or by geographic region.

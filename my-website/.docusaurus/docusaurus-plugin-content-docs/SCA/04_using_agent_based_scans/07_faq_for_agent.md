---
"ft:title" : "Frequently Asked Questions for Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_faq"
---

If your question is not answered in the list below, email support@veracode.com.

## What are the Veracode SCA CLI agents requirements?

Scanning a repository that utilizes Java and one of its build or package managers requires the ability to build the code within the environment in which you scan the project. This ability includes these requirements based on the various build and package managers:

- One of these operating systems:
        
    - macOS
    - Windows 7 or later with Powershell 3 or later
    - 64-bit Linux. Veracode Software Composition Analysis agent-based scanning supports these Linux distributions:
         - Alpine 3.11 or later
         - Debian 9 or later
         - Ubuntu 18.04 or later
         - Fedora 19 or later
         - RHEL/CentOS 7 or later

- Outbound connections to these URLs:
    - `https://api.sourceclear.io`
    - `https://download.sourceclear.com`
    - `https://sca.analysiscenter.veracode.com`
  
- Git 1.9.3 or later
- If your code repository is not a [Git-based](https://git-scm.com/) repository, you need to set up the appropriate environment variables as described in [Use the Agent with an SCM Other than Git](https://docs.veracode.com/r/c_sc_scm).
- Scanning with the [agent-based scanning command-line interface](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent) requires Java 1.8 or higher.

## What are issues?

See the documentation on [agent-based scanning issues](https://docs.veracode.com/r/c_sc_issues_overview) for details on issues.

## Why can’t Veracode SCA verify the validity of a software license?

Occasionally, the software license for a component cannot be found with the build instructions. For example, a Java component registered with Maven Central may not have the license information in the Project Object Model (POM) file, however, the parent POM of the component may have it. When Veracode SCA displays license information with an asterisk, it means it obtained the license information from the parent of the component.

## How do I add another person to my organization?

For information about managing users, see [Managing Users](https://docs.veracode.com/r/admin_user).

## What is a transitive component, as compared to a direct component?

A direct component is a dependency that is directly referenced in the configuration file that the repository build or package manager supports, such as `pom.xml` for Maven or `package.json` for NPM. A transitive component is a dependency that is not directly specified in your configuration file, but is required by another component that your repository uses.

## What languages and package managers does agent-based scanning support?

See the full list of [supported languages and tools](https://docs.veracode.com/r/c_sc_supported_lang).

## Does agent-based scanning find vulnerabilities in my custom code?

No. Veracode SCA agent-based scanning only scans for vulnerabilities in your open-source libraries.

## Does agent-based scanning work with Docker?

Veracode SCA agent-based scanning does work with Docker. To scan applications that use Docker, Veracode recommends that you scan the code when building it, prior to adding it to a Docker container, or by running this command in the root of the project within Docker:

  ```
    curl -sSL https://download.sourceclear.com/ci.sh | sh
  ```

See [customization options for using the cURL script](https://docs.veracode.com/r/c_sc_ci_script).

## What languages support vulnerable method scanning?

Java, .NET, JavaScript, Python, and Ruby support vulnerable method scanning.

## How does agent-based scanning handle circular dependencies between two components?

Agent-based scans use the native build system for a given repository to handle dependency resolution. This functionality means that in the case of circular dependencies, the build system resolves the dependency graph.

## Where does the vulnerability information come from?

Veracode researchers curate and validate public database entries and track developer lists, code commits and releases, discussion forums, underground bulletin boards, social chatter, and more to collect vulnerability information. They use data science and deep-learning, extracting patterns from known vulnerabilities and applying new techniques and theories. They also use clone verification to validate that versions have been patched as intended.

## Does agent-based scanning have an API to use?

Yes. See the [SCA Agent REST API documentation](https://docs.veracode.com/r/c_sourceclear_intro).

## What happens to the repositories that my agent clones after they are scanned?

For Veracode SCA agents connected to your source code management system, code is cloned to the agent host and built to send evidence back to the Veracode Platform and provide component and vulnerability information. Immediately after being built, the cloned repository is deleted completely from the host. In cases where the scan is canceled or fails, the repository is also removed from the host to prevent excessive disk usage.

## What information does Veracode send from my environment to perform a scan?

Veracode only sends fingerprints of the libraries used in your code to the Veracode Platform for identification. Fingerprints consist of unique identifying attributes for a given build or package manager. This list provides the fingerprint attributes used for the corresponding build or package manager:

- Maven/Gradle/Scala: groupId, artifactId, version
- NPM/Bower/Yarn: library name, version
- Ruby Gems: library name, version
- Python: library name, version
- PHP: library name, version
- Go: library name, commit hash/version
- .NET: library name, version
- Objective-C: library name, version

For more details on the information Veracode collects for scans, see [Understanding Agent-Based Scanning Evidence Collection](https://docs.veracode.com/r/c_sc_evidence).

## What information does agent-based scanning collect about vulnerable methods?

Veracode SCA agent-based scanning collects the list of vulnerable methods the agent finds during the creation of call chains from your code, which determine the usage of library APIs in your repository. Veracode does not collect those call chains. You can use the [`--no-upload` option](https://docs.veracode.com/r/Veracode_SCA_Agent_Commands) in your scans to prevent the agent from sending the vulnerable method list.

## Can you perform quick scans inside of archives?

Yes. You can scan with the Veracode SCA agent inside archives in quick mode using the `--fat-jar` option. For example:

```
srcclr scan --quick --allow-dirty --scan-collectors 'jar quickscan' --fat-jar
```

WAR, JAR, and EAR files cannot be inside a `target`, `build`, or `bin` folder.
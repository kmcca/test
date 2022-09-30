---
"ft:title" : "Understanding Agent-Based Scanning Evidence Collection"
"ft:prettyUrl" : "c_sc_evidence"
---

Because the scanning process consists of building the code to be scanned, generating a dependency graph from the built code, and identifying libraries used with the dependency graph, Veracode Software Composition Analysis agent-based scanning requires the source code of the repository you want to scan in order to function properly. Libraries are identified by sending information to Veracode to match against the Veracode database. This section provides details on what information is sent from your environment to Veracode.

<p><span style="font-size: medium;">What Veracode Does Not Send</span></p>

Veracode never sends your source code off of your environment. Veracode also never sends call chains built for vulnerable method calculation from your environment, but instead matches them on your environment.

<p><span style="font-size: medium;">Git Information</span></p>

Veracode SCA requires that any repository being scanned contains Git metadata in a `.git` folder because agent-based scanning uses this information to identify the repository, and track commit, branch, and tag information. The Git metadata is sent to Veracode to evaluate and identify this information.

<p><span style="font-size: medium;">Language Type</span></p>

Before beginning a scan, agent-based scans identify the build and package managers used in your repository. Veracode SCA finds the configuration files for a given build or package manager in the root of the project, or in a location where a configuration file might be typically found. For example, a `pom.xml` in the root of a project indicates a Maven repository. This information is sent to the Veracode to distinguish coordinates among the various build and package managers.

<p><span style="font-size: medium;">Library Identification</span></p>

To identify the open-source libraries that your code uses, Veracode SCA uses a set of coordinates from the dependency graph generated during the build process in combination with the language type. The coordinates for each language are:

-   Maven/Gradle/Scala: groupId, artifactId, version
-   NPM/Bower/Yarn: library name, version
-   Ruby Gems: library name, version
-   Python: library name, version
-   PHP: library name, version
-   Go: library name, commit hash/version
-   .NET: library name, version
-   Objective-C: library name, version

By sending these coordinates along with the language type, Veracode SCA is able to uniquely identify the libraries used in your project.



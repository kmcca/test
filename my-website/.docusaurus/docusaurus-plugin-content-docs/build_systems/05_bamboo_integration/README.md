---
"ft:title" : "Veracode Bamboo Integration"
"ft:prettyUrl" : "c_integration_bamboo"
---
You use the [Veracode Java API wrapper](https://docs.veracode.com/r/c_about_wrappers) to integrate Veracode with your Maven build server. The integration seamlessly adds static scanning into the existing build processes that you use in your Software Development Life Cycle (SDLC).

You use the Veracode Java API wrapper to integrate the Veracode APIs with Bamboo to run Maven builds. To integrate Veracode with Bamboo, you use the Veracode APIs provided in the Java API wrapper. The API wrapper takes input from the command line, external tools, or existing build server integration workflows and returns a response from Veracode. You install the wrapper on the build server and it initiates communication between the build server and Veracode.

<p><span style="font-size: medium;">Prerequisites</span></p>

Before integrating Veracode with Bamboo, you must meet these prerequisites:

- An [API service account](https://docs.veracode.com/r/c_about_veracode_accounts) with the [Upload API role](https://docs.veracode.com/r/c_API_roles_details) or a Veracode user account with the [Creator role](https://docs.veracode.com/r/c_role_permissions).
- [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).
- The application you plan to scan is properly compiled according to the instructions in the [Veracode Packaging Requirements](https://docs.veracode.com/r/compilation_packaging).
- Bamboo is installed on your build server. You can download Bamboo from [http://www.atlassian.com/software/bamboo/download](http://www.atlassian.com/software/bamboo/download). If you downloaded the archive file, instead of the EXE installer, you have unzipped the archive.
- Bamboo is configured according to the Bamboo installation instructions on the [Atlassian Support website](https://support.atlassian.com/bamboo/).
- Java and a zip utility, such as WinZip, are defined as executables in your Bamboo Administration account.
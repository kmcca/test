---
"author": ["Kevin McCarthy"]
"ft:originID": "Integrating_Veracode_SCA_with_Atlassian_Bamboo"
"ft:lang": "en-US"
"ft:title" : "Integrating Agent-Based Scanning with Atlassian Bamboo"
"ft:prettyUrl" : "Integrating_Veracode_SCA_with_Atlassian_Bamboo"
"media_dir": "images/"
---

You can set the Veracode Software Composition Analysis (SCA) agent-based scanning API token environment variable on an individual plan basis or globally within your Bamboo environment. You can also set the environment variable when you create the script command in your Bamboo task instead of setting it at the plan or global levels.

<p><span style="font-size: medium;">Requirements</span></p>

Depending on the build and package managers your repositories use, your agent host has specific requirements depending on the language scanned. To view the requirements, see the code language in [Finding and Fixing Vulnerabilities](https://docs.veracode.com/r/Finding_and_Fixing_Vulnerabilities).
---
"ft:title" : "About Selenium Script Best Practices"
"ft:prettyUrl" : "About_Selenium_Script_Best_Practices"
---
Veracode provides recommendations for optimizing Selenium scripts you can use with Dynamic Analysis.

When you record a [Selenium script](https://docs.veracode.com/r/Selenium_Commands_Supported_in_Dynamic_Analysis), consider these best practices:

- To ensure that a web page has finished loading before the user can enter credentials, include a `wait` command, such as `waitForPageToLoad`, at the beginning of the script.
- To find text visible on a web page when a user successfully logs in, include a text verification command, such as `assertTextPresent` or `verifyTextPresent`, at the end of the script.
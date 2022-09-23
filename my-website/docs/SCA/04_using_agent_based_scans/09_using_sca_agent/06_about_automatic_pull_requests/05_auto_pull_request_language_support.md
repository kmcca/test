---
"ft:title" : "Automatic Pull Request Language Support"
"ft:prettyUrl" : "Understanding_Automatic_Pull_Request_Support"
---

This table lists which GitHub and GitLab projects support automatic pull requests.

| Package Manager | Language    | Files Modified in Pull Request                                                                                                                                                                                                      |
|-----------------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Maven           | Java        | `pom.xml`                                                                                                                                                                                                                           |
| Gradle          | Java        | `build.gradle`                                                                                                                                                                                                                      |
| Pip             | Python      | `requirements.txt`                                                                                                                                                                                                                  |
| Pipenv          | Python      | `Pipfile` and `Pipfile.lock`                                                                                                                                                                                                        |
| Bundler         | Ruby        | `Gemfile` and `Gemfile.lock`                                                                                                                                                                                                        |
| NPM             | JavaScript  | `package.json` and either `npm-shrinkwrap.json` or `package-lock.json` <br><br> If neither `npm-shrinkwrap.json` nor `package-lock.json` are present in the project, the agent-based scan generates a `package-lock.json` file.</p> |
| Bower           | JavaScript  | `bower.json`                                                                                                                                                                                                                        |
| CocoaPods       | Objective-C | `Podfile` and `Podfile.lock`                                                                                                                                                                                                        |
| Composer        | PHP         | `composer.json`                                                                                                                                                                                                                     |
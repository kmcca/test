---
"ft:title" : "Fix Example Transitive Vulnerability for NPM Without Force Resolutions"
"ft:prettyUrl" : "Fix_Example_Transitive_Vulnerability_for_NPM_Without_Force_Resolutions"
---

If you encounter problems [using the NPM `force-resolutions` package](https://docs.veracode.com/r/Fix_Example_Transitive_Vulnerability_for_NPM), you can use this alternative method to fix transitive vulnerabilities in NPM projects.

<p font-size="13pt"><b>Before You Begin</b></p>

- Run a Veracode SCA agent-based scan or run the `npm install` command to install dependencies. These actions result in a `node_modules` folder and a `package-lock.json` appearing in your project.
- Use [NPM version 3.10.4 or later](https://github.com/npm/npm/pull/13214).

<p font-size="13pt"><b>Steps</b></p>

1. Run the `npm shrinkwrap` command in the same directory as your `package.json` file.

    This command generates a `npm-shrinkwrap.json` file with all the dependencies currently in use.

2. Find the `cookie-signature` library with the version specified in the issue details viewed previously. In this example, version 1.0.3 is vulnerable and the recommended version is 1.0.4.
3. Edit the `npm-shrinkwrap.json` file to update the `cookie-signature` library:

    ```
    "cookie-signature": {
      "version": "1.0.4",
      "from": "cookie-signature@1.0.4",
      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.4.tgz"
    }
    ```

4. Delete the `node_modules` folder.
5. Run the `npm install` command to download the updated dependency and ensure the updated version works with your project.

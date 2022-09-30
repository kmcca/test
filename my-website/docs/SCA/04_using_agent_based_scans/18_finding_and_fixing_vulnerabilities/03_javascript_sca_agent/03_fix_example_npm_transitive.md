---
"ft:title" : "Fix Example Transitive Vulnerability for NPM"
"ft:prettyUrl" : "Fix_Example_Transitive_Vulnerability_for_NPM"
---

Because NPM projects allow for multiple versions of the same library, you cannot override a vulnerable library by adding the appropriate version directly to the configuration file.

These steps provide a fix for a [Timing Attack Via Signature Validation](https://www.sourceclear.com/registry/vulnerabilities/2678) vulnerability in [cookie-signature, version 1.0.3](https://www.sourceclear.com/registry/libraries/610?version=1.0.3) in the [example-javascript](https://github.com/srcclr/example-javascript) repository. In the example, the recommended version of cookie-signature is 1.0.4.

<p font-size="13pt"><b>Before You Begin</b></p>

You must have already run a Veracode SCA agent-based scan or run the `npm install` command to install dependencies. These actions result in a `node_modules` folder and a `package-lock.json` appearing in your project. 

<p font-size="13pt"><b>Steps</b></p>

1. Add this `resolutions` section to your `package.json` file:

    ```
    "resolutions": {
      "cookie-signature": "1.0.4"
    }
    ```

    If a `resolutions` section already exists, add `"cookie-signature": "1.0.4"` to it.

2. Add this `scripts` section to your `package.json` file:

    ```
    "scripts": {
      "preinstall": "npx npm-force-resolutions"
    }
    ```

    If a `scripts` section already exists, add `"preinstall": "npx npm-force-resolutions"` to it. This change makes the `npm install` command force the version resolution of the `cookie-signature` library to 1.0.4, according to the `resolutions` section using the [NPM Force Resolutions](https://www.npmjs.com/package/npm-force-resolutions) package.

3. Delete the `node_modules` folder.
 
4. Run the `npm install` command to download the updated dependency and ensure the updated version works with your project.

<p font-size="13pt"><b>Next Steps</b></p>

If you encounter problems using the NPM `force-resolutions` package, you can use [this alternative method](https://docs.veracode.com/r/Fix_Example_Transitive_Vulnerability_for_NPM_Without_Force_Resolutions).


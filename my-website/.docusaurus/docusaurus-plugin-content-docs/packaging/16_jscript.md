---
"ft:title" : "JavaScript and TypeScript Application Packaging"
"ft:prettyUrl" : "compilation_jscript"
---

Your JavaScript and TypeScript applications must meet specific packaging and compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis \(SCA\) upload and scan, if licensed. For SCA agent-based scan requirements, see [Using Veracode SCA with Programming Languages](https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages).

<p><span style="font-size: medium;">Supported JavaScript Libraries and Technologies</span></p>

Veracode supports analyzing many client- and server-side JavaScript and TypeScript applications, including those that use HTML5 APIs, Typescript 4.5 and earlier, ECMAScript 2015, ECMAScript 2016, ECMAScript 2017, ECMAScript 2018, and JSX. Veracode also supports these technologies:

|Framework/Technology|Supported Versions|
|----|----|
|Angular|0–1.x, 2.x, 4.x–13.x|
|AWS SDK for JavaScript|2.x.x|
|Azure Functions|2.x-4.x|
|Backbone.js|1.3.3 and earlier|
|Bootstrap|1–4|
|Cheerio.js|0.2–0.20|
|Ember.js|1.x–3.x|
|Express|0–4.17.1|
|jQuery|All|
|Koa.js|0.x–2.13|
|Node.js|16.x and earlier|
|React.js|0.13–17.x.x, react-router versions 2–4|
|SAPUI5/OpenUI5|1.x|
|Underscore.js|1.8.3 and earlier|
|Vue.js|1–2.x, vue-router versions 1–3.x|



<p><span style="font-size: medium;">Template Engines</span></p>

|Name|Supported Versions|
|----|----|
|Angular templates|All|
|Handlebars.js|1–4.x|
|Hogan.js|0–3.x|
|Mustache.js|0.6–2.2.x|
|Swig|1.x|

<p><span style="font-size: medium;">Unsupported JavaScript Technologies</span></p>

Veracode does not support the analysis of CoffeeScript or Dart applications.

<p><span style="font-size: medium;">Packaging Guidance for JavaScript and TypeScript</span></p>

Veracode extracts client-side JavaScript from JSP files that are uploaded as part of a JAR, WAR, or EAR file, and creates a separate JavaScript module that is selectable for analysis.

Upload a ZIP file containing JavaScript source code, or files that contain JavaScript. Veracode only extracts JavaScript from files with these extensions:

-   ASP
-   CSS
-   EHTML
-   ES
-   ES6
-   HANDLEBARS
-   HBS
-   HJS
-   HTM
-   HTML
-   JS
-   JSX
-   JSON
-   JSP
-   MAP
-   MUSTACHE
-   PHP
-   TS
-   TSX
-   VUE
-   XHTML

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> If a packaged web application includes files that contain JavaScript and those included files have one of the file extensions in the previous list, Veracode extracts the JavaScript and scans it.</p>

Files within the `node_modules` folder display as separately selectable modules if they are not listed as part of the `dependencies` or `devDependencies` sections of either the `package.json` or `package-lock.json` files. To reduce the upload size, ensure you only provide files that you would provide to your production environment. You typically provide these files using `npm install --production`.

When you submit .NET applications that use TypeScript for analysis, package the TypeScript source files separately from the .NET application. For best results, do not precompile TypeScript applications into JavaScript. Submit only the TypeScript source files.

If your JavaScript build or packaging process produces source map files that include the original source, submit the MAP files with the other files in your application, which Veracode can use to provide greater accuracy when analyzing the application. MAP files must include `sources` and `sourcesContent` properties.

Each element of the `sources` property array must have a corresponding element in the `sourcesContent` property array.

Veracode requires that you submit JavaScript as source code in a format readable by developers. Avoid build steps that minify, obfuscate, bundle, or otherwise compress JavaScript sources.

You must upload original JavaScript sources. Do not upload files that are concatenated or minified. Veracode ignores files that have filenames that suggest that they are concatenated or minified files. For example, Veracode does not analyze files with names such as `all.js`, `app.all.js`, or `library.min.js` because it interprets them as potentially concatenated or minified. You must rename files such as these if you want Veracode to analyze them.

If using Veracode Software Composition Analysis, follow these requirements for your package manager:

**NPM**

Include `npm-shrinkwrap.json`, `package-lock.json`, or a `node_modules` directory in the root of your ZIP archive.

If you include `npm-shrinkwrap.json` or `package-lock.json`, Veracode excludes development dependencies from the scan results.

If you include a `node_modules` directory without `npm-shrinkwrap.json` or `package-lock.json`, the content of the directory determines which dependencies to include in the results. Ensure that you use the correct `npm install` options to install the appropriate packages in `node_modules` for your NPM version.

**Yarn**

Include both `package.json` and `yarn.lock` or a `node_modules` directory in the root of your ZIP archive.

If you include `package.json` and `yarn.lock`, Veracode restricts scan results to production, peer, and optional dependencies.

If you include a `node_modules` directory without both `package.json` and `yarn.lock`, the content of the directory determines which dependencies to include in the results. Ensure that you use the correct `yarn install` options to install the appropriate packages in `node_modules`.

**Bower**

Include the `bower_components` directory in your project. To achieve the most accurate results, include `bower.json` in that directory.

<p><span style="font-size: medium;">Packaging AWS Lambda Applications</span></p>

Veracode requires you to submit applications built for AWS Lambda according to the AWS Lambda Deployment Package formats. For information, see [https://docs.aws.amazon.com/](https://docs.aws.amazon.com) and search for AWS Lambda Deployment Package in Node.js.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode does not support the analysis of dependencies submitted as <a href="https://docs.veracode.com/r/c_lambda_layers">Lambda layers</a>. To analyze Lambda components deployed in layers, submit them as standard deployment packages, or consider repackaging the function to include layer components as part of the lambda function package.</p>

<p><span style="font-size: medium;">Identifying Lambda Function Handlers for JavaScript and TypeScript</span></p>

In JavaScript, you pass either two or three parameters to [Lambda function handlers](https://docs.aws.amazon.com/lambda/latest/dg/nodejs-handler.html) depending on whether the functions are asynchronous. However, the JavaScript runtime allows functions to have multiple parameters.

To detect Lambda function handlers for JavaScript and TypeScript, Veracode accepts the YAML and YML configuration files included in the uploaded package from the serverless and AWS SAM frameworks. Veracode parses these configuration files to identify the function handlers defined in the uploaded artifact. Veracode does not use these configuration files to identify the configuration of layers or other settings.

If a deployment package does not contain a YAML configuration file, Veracode may not identify the deployment package as containing an Express or Koa application. In this case, Veracode applies these heuristics to identify the candidate source files in the deployment package:

-   If a directory called functions exists, every JavaScript file in every subdirectory below functions is a candidate file. Veracode does not consider files in any directories below one directory level to be candidate files.
-   Every JavaScript file in the top-level directory of the archive is a candidate source file.

After Veracode identifies a candidate file, the scan considers the exported functions attached to `exports` or `module.exports` as handler functions. Examples include:

-   `exports.handler = async function(event, context) {`
-   `exports.handler = function(event, context, callback) {`
-   `exports.handler = async function(event, context, testval, testbar) {`
-   `module.exports.lambdaproxyentry = async event => {`

Developers often configure Express or Koa applications that run as Lambda functions to use those Lambda functions as proxies for the original Express or Koa code. In these cases, Veracode analyzes the artifact as an uploaded, standalone Express or Koa application.

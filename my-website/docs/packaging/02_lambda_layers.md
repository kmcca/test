---
"ft:title" : "Using Lambda Layers"
"ft:prettyUrl" : "c_lambda_layers"
---

By using Lambda layers, you can reduce the packaging size of components that different Lambda functions reuse.

AWS Lambda requirements for control how the AWS Lambda framework accesses the content of the uploaded layers at runtime. For information, see [https://docs.aws.amazon.com/lambda/](https://docs.aws.amazon.com/lambda/) and search for Lambda layers configuration. The Veracode upload process accepts different technologies and packaging techniques during the upload and prescan phases. Veracode evaluates the uploaded artifacts according to their format and content.

Lambda layer packages resemble dependency packages that you upload for other technologies. Veracode cannot uniquely identify a Lambda layer package as a layer for a specific Lambda function or set of functions without additional information for the uploaded packages. The Veracode upload process does not currently support JSON, YML, or YAML files for the identification of layers. However, you can use different packaging strategies to analyze the components included in Lambda layers.

<p><span style="font-size: medium;">Uploading Lambda Layers as a Standard Deployment Package</span></p>

This sample strategy shows considerations when analyzing applications using Lambda functions and layers. In this example, an application consists of separate archives:

-   `lambda-function.zip`
-   `layers1.zip`
-   `layers2.zip`

These three artifacts upload separately. This upload approach scans the lambda-function as a separate unit. The scan may not report flaws in components contained in `layers1.zip` or `layers2.zip` that have a source in `lambda-function`, because components in `layers1` and `layers2` may be considered third-party components. Depending on the module selection choices you use for the scan, if you select the components in `layers1` and `layers2` for an entry-point scan, you can analyze flaws that originate inside those components.

Uploading Lambda Layers as part of a Lambda function deployment does not affect Veracode Software Composition Analysis. Veracode reports vulnerabilities in components uploaded in layers1 and layers2 as normal.

<p><span style="font-size: medium;">Uploading Lambda Layers As Part of a Lambda Function Deployment Package</span></p>

This sample strategy shows considerations when analyzing applications using Lambda functions and layers. This approach requires you to package components managed as Lambda layers as if the Lambda function package is self-contained. When you move dependencies outside the function code to be managed as layers, AWS requires you to package them with a defined folder structure that depends on the runtime used by the Lambda function.

Include these dependencies as part of the same Lambda package so that they are uploaded as a single unit to scan.

In this example, an application is composed of separate archives:

-   `lambda-function.zip`
-   `layer1.zip`

With this content:

```

   lambda-function.zip
   └── myfunction.js


   layer1.zip
   └── nodejs
   └── node_modules
   ├── my_dep1.js
   └── my_dep2.js

```

You can upload a package with this structure:

```

    self-contained-lambda.zip
    ├── myfunction.js
    └── nodejs
    └── node_modules
    ├── my_deps1.js
    └── my_deps2.js

```

Packaging the components in this way does not affect your Veracode Software Composition Analysis results.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> You cannot include the layer archive into the Lambda function package. You must include dependencies as if they are not part of a layer package. Uploading a package as shown in this example prevents Veracode from analyzing the included dependencies:
<br>
<code>
     invalid-self-contained-lambda.zip<br>
     ├── myfunction.js<br>
     └── layer1.zip<br>
</code></p>

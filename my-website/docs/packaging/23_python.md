---
"ft:title" : "Python Application Packaging"
"ft:prettyUrl" : "compilation_python"
---

Your Python applications must meet specific compilation requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis \(SCA\) upload and scan, if licensed. For SCA agent-based scan requirements, see [Using Veracode SCA with Programming Languages](https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages).

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires all source files for the application, including HTML template files, such as Flask/Django.

Veracode can also analyze Jython applications that you submit as source.

<p><span style="font-size: medium;">Supported Python Versions</span></p>

|Language|Supported Versions|
|----|----|
|Python|2.x, 3.x|


<p><span style="font-size: medium;">Supported Python Frameworks and Libraries</span></p>

|Framework/Library|Supported Versions|
|----|----|
|AWS SDK for Python (Boto3)|1.x|
|Cryptography|0.6–1.x|
|Django|1.x, 3.x|
|Flask|0.x, 1.x|
|httplib2|0.9.2 and earlier|
|Jinja Template Library|2.x|
|Requests|2.x|
|SQLAlchemy|.9.x–1.0.x|


<p><span style="font-size: medium;">Packaging Guidance</span></p>

Upload a compressed ZIP archive containing all Python and HTML code, maintaining the project structure, to Veracode. Do not include third-party packages. Do not upload individual Python source files. If using Veracode Software Composition Analysis, include `Pipfile.lock` in the root of your ZIP archive.

Veracode scans only files with these extensions:

-   PY
-   HTML
-   HTM

<p><span style="font-size: medium;">Packaging AWS Lambda Applications</span></p>

Veracode requires you to submit applications built for AWS Lambda according to the AWS Lambda Deployment Package formats. For information, see [https://docs.aws.amazon.com/](https://docs.aws.amazon.com) and search for AWS Lambda Deployment Package in Python.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> Veracode does not support the analysis of dependencies submitted as <a href="https://docs.veracode.com/r/c_lambda_layers">Lambda layers</a>. To analyze Lambda components deployed in layers, submit them as standard deployment packages, or consider repackaging the function to include layer components as part of the lambda function package.</p>

<p><span style="font-size: medium;">Identifying Lambda Function Handlers for Python</span></p>

In Python, function handlers must have at least two positional \(default\) parameters. The function handlers may have additional parameters that must have initial values set because AWS Lambda passes data only to the first two positional parameters.

To detect Lambda function handlers for Python, Veracode accepts the YAML and YML configuration files included as part of the uploaded package from the Serverless and AWS SAM frameworks. Veracode parses these configuration files to identify the function handlers defined in the uploaded artifact. Veracode uses these configuration files to identify the configuration of layers or other settings.

When a deployment package does not contain a YAML configuration file, Veracode applies this heuristic to identify the candidate source files in which to look for function handlers in the deployment package:

-   If a directory called functions exists, Veracode recognizes every Python file in every subdirectory below functions as a candidate source file.
-   Veracode does not consider files in any directories one level below `functions` as candidate files.

    ```

    .
    └── functions
    ├── one
    │   ├── misc
    │   │   └── utils.py
    │   └── primero.py
    └── two
    ├── orangefunc.py
    └── utils.py

    ```

-   The candidate files are:
    -   `functions/one/primero.py`
    -   `functions/two/orangefunc.py`
    -   `functions/two/utils.py`
-   Every Python file in the top-level directory of the archive is a candidate source file.

    ```

      .
      ├── misc
      │   └── utils.py
      └── primero.py

    ```

-   The only candidate file is `primero.py`.

After Veracode identifies a candidate file, functions with exactly two parameters or with more parameters where all additional parameters have initial values set are considered function handlers. Example candidate function handlers are:

-   `def lambda_handler(event, context):`
-   `def different_func(evt, ctx, xyz=123):`

This function cannot be a function handler:

-   `def different_func(event):`

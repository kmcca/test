---
"author": ["Mike Howes"]
"ft:originID": "pipeline_scan_jenkins_examples"
"ft:lang": "en-US"
"ft:title" : "Jenkins Pipeline Scan Examples"
"ft:prettyUrl" : "Jenkins_Pipeline_Scan_Examples"
"media_dir": "images/"
---
You can add a Pipeline Scan as a job in a Jenkins declarative pipeline. You configure a Jenkins pipeline with a Jenkins file that defines stages of running the pipeline. You can use the Groovy code examples in this section to configure a Jenkins build job for building a project and running a Pipeline Scan as a stage in the pipeline.

The Pipeline Scan code examples include variables for your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3). Ensure these variables correctly reference your API ID and key stored in your CI/CD code repository.

Veracode provides these packaged applications on GitHub: [VeraDemoDotNet](https://github.com/veracode/verademo-dotnet) and [VeraDemo](https://github.com/veracode/verademo). You can use these applications for testing, debugging, or for demos if you do not have an application that meets the packaging requirements for a specific scan type. You can download these applications or connect them to a CI/CD code repository.
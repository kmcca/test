---
"ft:title" : "Using Veracode Dynamic Analysis with Jenkins"
"ft:prettyUrl" : "c_jenkins_rescan_da"
---
You can configure post-build actions, or steps, to have the Veracode Jenkins Plugin perform a Dynamic Analysis of your application and generate a report of the analysis results.

You configure Dynamic Analysis to run as a post-build action in freestyle builds and as a build step in pipeline builds. The post-build actions and steps require your [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3).

For freestyle builds, complete these tasks:

-   [Configure Global Credentials with Freestyle Builds](https://docs.veracode.com/r/t_jenkins_configure_global_credentials_freestyle)
-   [Configure a Post-Build Action to Resubmit Dynamic Analysis with Freestyle Builds](https://docs.veracode.com/r/t_jenkins_configure_da_resubmit_freestyle)
-   [Configure a Post-Build Action to Review Dynamic Analysis Results with Freestyle Builds](https://docs.veracode.com/r/t_jenkins_configure_da_review_freestyle)

For pipeline builds, complete these tasks:

-   [Configure a Step to Resubmit Dynamic Analysis with Pipeline Builds](https://docs.veracode.com/r/t_jenkins_configure_da_resubmit_pipeline)
-   [Configure a Step to Review Dynamic Analysis Results with Pipeline Builds](https://docs.veracode.com/r/t_jenkins_configure_da_review_pipeline)

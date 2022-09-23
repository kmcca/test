---
"ft:title" : "Configuring a Pipelines Repository"
"ft:prettyUrl" : "c_sc_bitbucket_pipeline"
---

To scan using Veracode Software Composition Analysis (SCA) agent-based scanning, add this YAML to the last default configuration script command in the `bitbucket-pipelines.yml` file:

```
            pipelines:
  default:
    - step:
        script:
            - curl -sSL https://download.sourceclear.com/ci.sh | sh        
```

Commit these changes to trigger a build for your repository, and Veracode SCA performs a scan and displays results to your agent-based scanning environment.

If you want to add Veracode SCA agent-based scanning to other repositories, add the installation code above to any `bitbucket-pipelines.yml` files you want.

After you add the `SRCCLR_API_TOKEN` environment variable, you can perform scans on each new build.


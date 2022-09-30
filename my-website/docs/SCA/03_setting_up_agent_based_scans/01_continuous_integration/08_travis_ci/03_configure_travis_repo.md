---
"ft:title" : "Configure Your Travis CI Repository"
"ft:prettyUrl" : "Configure_Your_Travis_CI_Repository"
---

<p font-size="13pt"><b>Steps</b></p>

1.  Add this code to your `.travis.yml` file:

    ```
    addons:
        srcclr: true
    ```

2.  If you want verbose output during the scan, add the debug key:

    ```
    addons:
        srcclr:
            debug: true
    ```

3.  Commit the changes to start a build.

<p font-size="13pt"><b>Results</b></p>

Veracode Software Composition Analysis (SCA) performs an agent-based scan, displaying results to your agent-based scanning environment.


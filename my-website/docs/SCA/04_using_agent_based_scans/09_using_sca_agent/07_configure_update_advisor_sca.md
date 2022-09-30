---
"ft:title" : "Configure the Update Advisor for Veracode SCA"
"ft:prettyUrl" : "t_update_advisor"
---

The update advisor provides a safe version to which Veracode recommends you update your libraries with agent-based scanning. If you configure it in your build automation script, it also indicates if the update might break a build.

<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
<b>Note:</b> The update advisor determines the potential of breaking a build only for Java, .NET, Python, and Ruby libraries.
</p>

<p font-size="13pt"><b>Steps</b></p>

1.  Add the `--update-advisor` argument to your build script. For example:

    ```
    EXTRA_ARGS='--update-advisor'
    ```

2.  Add the argument to the `scan` command.

    -   If you scan with a CI tool, add the argument to the build script for your Veracode SCA agent-based scanning project. For example:

        ```
        curl -sSL https://download.sourceclear.com/ci.sh | bash -s – scan $EXTRA_ARGS
        ```

    -   If you scan on your local machine with the Veracode SCA agent, add the argument in your `agent.yml` file. For example:

        ```
        srcclr scan <example_path>/example-java-maven --EXTRA_ARGS 
        ```

<p font-size="13pt"><b>Next Steps</b></p>

After you perform a scan with the update advisor enabled, your results include a Breaking Update column in the Update Advisor section.




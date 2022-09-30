---
"author": ["Kevin mcCarthy"]
"ft:lang": "en-US"
"ft:title": "Test Your ISM Endpoint with the Diagnostic Tool"
"ft:prettyUrl": "t_ism_run_diagnostics"
"media_dir": "images/"
---

You can use the Veracode Internal Scanning Management endpoint diagnostic tool to test both of the connections necessary to complete a Dynamic Analysis with ISM: the connection between the endpoint and the Veracode gateway and the connection between the endpoint and your application URL.

<p font-size="13pt"><b>Overview</b></p>

If you run diagnostics often, you can [set the parameters for the ISM endpoint diagnostic tool](https://docs.veracode.com/r/r_ism_diagnostic_parameters) in the `application.properties` file so that you do not need to set them each time you run the test.

<p font-size="13pt"><b>Steps</b></p>

1.  On the command line, navigate to your `veracode_ism` directory.

2.  Run the diagnostic test command:

    -   To run the test based on the default parameters or the parameters set in `applications.properties`, run this command:

        ```
        java -jar endpoint.jar  --diagnostics 
        ```

    -   To overwrite the diagnostic test parameters at runtime, run this command:

        ```
        java -jar endpoint.jar  --diagnostics {diagnosticUrl} {diagnosticUrlBatchCount} {diagnosticTunnelBatchCount} {diagnosticTunnelBatchSizeKB}
        ```

        For example:

        ```
        java -jar endpoint.jar  --diagnostics https://www.veracode.com 5 3 250
        ```

        If you exclude any parameters from the command, the diagnostic tool uses the `application.properties` parameters or, if you have not defined them, the default parameters.

    The test results print the performance statistics for these processes to your screen:

    -   Data transfer between the endpoint and the Veracode gateway
    -   Data transfer between the endpoint and the destination URL.

<p font-size="13pt"><b>Next Steps</b></p>

Review your [ISM diagnostic results](https://docs.veracode.com/r/c_ism_diagnostic_results).

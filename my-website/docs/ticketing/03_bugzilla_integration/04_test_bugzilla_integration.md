---
"ft:title": "Test Veracode for Bugzilla"
"ft:prettyUrl": "Test_the_Bugzilla_Integration"
---
You can test Veracode for Bugzilla to ensure it can authenticate with Veracode and import findings.

<p font-size="13pt"><b>Before You Begin</b></p>

- You must have valid [Veracode API credentials](https://docs.veracode.com/r/c_api_credentials3) to access Veracode.
- When configuring authentication for an integration, Veracode strongly recommends that you use an [API service account](https://docs.veracode.com/r/c_about_veracode_accounts).

<p font-size="13pt"><b>Steps</b></p>

1. Edit the script `importresults.pl`. 
2. Locate these lines and replace `username` with your API ID and replace `password` with your API key:

    ```
    my $user='username';
    my $passwd='password'
    ```

3. You can update other variables in the script. See the `README` file in the ZIP file for more information.

4. Run this command to start the integration:

    ```
    perl importresults.pl
    ```

    The `importresults.pl` script connects to the [Results API](https://docs.veracode.com/r/c_results_main), downloads all available results, parses them to the Bugzilla format, and then imports them using the Bugzilla `importxml.pl` library.
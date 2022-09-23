---
"ft:title" : "PHP SCA Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_php"
---

You can find vulnerabilities in your PHP applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on Composer repositories using the [agent-based scanning command-line interface](https://docs.veracode.com/r/c_sc_agent_usage) or the [CI integrations](https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects).

For packaging instructions for Veracode Static Analysis and Veracode SCA upload scans, see [Packaging PHP Applications](https://docs.veracode.com/r/compilation_php).

<p font-size="13pt"><b>Before You Begin</b></p>

Scanning a repository that uses PHP and one of its build or package managers requires the ability to assemble the projects dependencies within the environment in which you scan the project. This includes these requirements:

- Meet the [requirements for the Veracode SCA agent](https://docs.veracode.com/r/c_sc_agent_usage).
- Have access to the PHP repository.
- Have PHP 5.3.2 or later installed.
- Have Composer 1.0.0 or later installed.
- Have `composer.json` or `composer.lock` files present in the repository.
- Be able to run the `composer install` or `php composer.phar install` command from the root of the project where you perform scans.

The Veracode SCA agent runs specific commands to identify the dependencies and their versions in your project. You can run these commands before scanning to test that the agent can build the project:

```
composer install
composer show --tree
```

<p font-size="13pt"><b>Overview</b></p>

You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA [repositories](https://github.com/srcclr):

```
git clone https://github.com/srcclr/example-php-composer 
```

After you add a `srcclr.yml` file to the directory where you point the Veracode SCA agent, you can specify [scan directives](https://docs.veracode.com/r/c_sc_scan_directives) for scanning your PHP code. [Some scan directives](https://docs.veracode.com/r/PHP_Scan_Directives) are specific to PHP projects.


<p font-size="13pt"><b>Steps</b></p>

1. Run the scan command with the [Veracode SCA CLI agent](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent) pointed to the directory of the PHP repository. For example:

    ```
    srcclr scan path/to/{project_folder}
    ```
    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;">
    <b>Note:</b> To scan code repositories hosted in Git, use the <code>--url</code> argument <a href="https://docs.veracode.com/r/Veracode_SCA_Agent_Commands">with the CLI agent</a>.
    </p>

    To view more verbose output during the scan process, you can add the `--loud` argument:

    ```
    srcclr scan path/to/{project_folder} --loud
    ```

<p font-size="13pt"><b>Results</b></p>

The Veracode SCA agent uses the native package managers to identify the dependencies and their versions in your project. When the agent evaluates the open-source libraries in use, it produces a summary of the scan results. This summary includes counts for total libraries used, vulnerable libraries, percentage of third-party code, and a list of the vulnerabilities found.

<p font-size="13pt"><b>Next Steps</b></p>

After completing the scan, you can [view the results](https://docs.veracode.com/r/Viewing_Agent_Based_Scan_Results).

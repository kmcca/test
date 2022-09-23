---
"ft:title" : "Python SCA Agent-Based Scanning"
"ft:prettyUrl" : "c_sc_python"
---

You can find vulnerabilities in your Python applications using Veracode Software Composition Analysis agent-based scanning. You can run a scan on Python repositories using the [agent-based scanning command-line interface](https://docs.veracode.com/r/c_sc_agent_usage) or the [CI integrations](https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects).

For packaging instructions for Veracode Static Analysis and Veracode SCA upload scans, see [Packaging Python Applications](https://docs.veracode.com/r/compilation_python).

<p font-size="13pt"><b>Before You Begin</b></p>

Scanning a repository that uses PyPi for package management requires the ability to assemble your libraries within the environment in which you scan the project. This includes these requirements:

- Meet the [requirements for the Veracode SCA agent](https://docs.veracode.com/r/c_sc_agent_usage).
- Have access to the Python repository.
- Your code repository uses Python 2.x or 3.x.
- Have Python 2.x or 3.x installed in your path.
- Have [pip](https://pypi.python.org/pypi/pip) version 10.0.0 or later installed in your path.
- Have one of these files in the repository to be scanned: `setup.py`, `requirements.txt`, `requirements-dev.txt`, or `dev-requirements.txt`.
- Be able to perform one of these installation tasks:
    -   Run the `pip install -r {requirement}` command, where `{requirement}` is the `requirements.txt`, `requirements-dev.txt`, or `dev-requirements.txt` file, from the root of the project where you perform scans.
    -   Run the `python setup.py install` command.
- For Pipenv, be able to run `pipenv sync` if the `pipfile.lock` file is available, or be able to run `pipenv install` if the file is not available.

<p font-size="13pt"><b>Overview</b></p>

You can use agent-based scanning to scan any code repository to which you have access and fulfills the above requirements. To run an example scan, you can clone one of the public Veracode SCA [repositories](https://github.com/srcclr):

```
git clone https://github.com/srcclr/example-python   
```

After you add a `srcclr.yml` file to the directory where you point the Veracode SCA agent, you can specify [scan directives](https://docs.veracode.com/r/c_sc_scan_directives) for scanning your Python code. [Some scan directives](https://docs.veracode.com/r/Python_Scan_Directives) are specific to Python projects.


<p font-size="13pt"><b>Steps</b></p>

1. Run the scan command with the [Veracode SCA CLI agent](https://docs.veracode.com/r/Using_the_Veracode_SCA_Command_Line_Agent) pointed to the directory of the Python repository. For example:

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

---
"ft:title" : "Configure Your Bamboo Repository"
"ft:prettyUrl" : "Configure_Your_Bamboo_Repository"
---

Bamboo is an on-premise CI system, which means you must install cURL on your server prior to running a Veracode Software Composition Analysis (SCA) agent-based scan.

<p font-size="13pt"><b>Overview</b></p>

You can install cURL using SSH access to your server. After installing the CLI tool, you also need the path to the executable in order to allow Bamboo to run commands. To get the path, access the server via SSH and run the command `which curl`. This command outputs the path to the curl binary for later use.

<p font-size="13pt"><b>Steps</b></p>

1. Navigate to the plan where you want to add agent-based scanning.

2. From the Actions menu, click **Configure Plan**.

3. Select the job where your code is built.

4. In the Tasks section, select **Add Task** > **Script**.

5. Modify the fields as follows:

    a.  For Task Description, enter `Veracode Agent-Based Scan`.

    b.  Verify that Interpreter is set to `Shell`.

    c.  Verify that Script location is set to `Inline`.

    d.  For Script body, enter `curl -sSL https://download.sourceclear.com/ci.sh | sh`.

    e.  Verify that Argument is blank.

    f.  For Environment variables:

      - If you did not set the `SRCCLR_API_TOKEN_PASSWORD` at the global or plan levels, enter `SRCCLR_API_TOKEN={token}`.
      - If you set the token at the global level, enter `export SRCCLR_API_TOKEN=${bamboo.SRCCLR_API_TOKEN_PASSWORD}`.
    
    g.  Verify Working subdirectory is blank, unless the configuration file, such as the `package.json`, `pom.xml`, `build.gradle`, or `requirements.txt`, is in a subdirectory. If it is in a subdirectory, specify the path to the subdirectory.

6. Click **Save**.

7. Drag the agent-based scan command to the bottom of the task list directly above the final tasks section.

    Final tasks run even if a previous task fails. If you put the scan command before the final task it ensures that unnecessary scan attempts do not occur if the build fails.

<p font-size="13pt"><b>Results</b></p>
The next time this plan is built, Veracode SCA runs an agent-based scan.


---
"ft:title" : "Configure Your Codeship Pro Project"
"ft:prettyUrl" : "Configure Your Codeship Pro Project"
---

<p font-size="13pt"><b>Before You Begin</b></p>

Generate an Advanced Encryption Standard (AES) key and place the key in a `codeship.aes` file in the root of your project directory. Read additional [documentation on generating an AES key](https://documentation.codeship.com/pro/builds-and-configuration/environment-variables/#encrypted-environment-variables).

<p font-size="13pt"><b>Steps</b></p>

1.  Edit the text file containing your environment variables, which you encrypt prior to committing your code.

2.  Add the `SRCCLR_API_TOKEN` to the file and set it to the authentication token you generated above.

3.  Save the environment variable file.

4.  Encrypt the environment variables using Jet [CLI](https://documentation.codeship.com/pro/jet-cli/usage-overview/).

    A file is generated, called `env.encrypted` in this example, with the encrypted environment variables `jet encrypt env env.encrypted`

5.  Before you commit your code, add the env file to your `.gitignore`, or delete the file after you create it.

6.  Edit the `codeship-services.yml` file, and use the `encrypted_env_file` directive to add your encrypted environment variables from the `env.encrypted` file to your build process:

    ```
    app: build: image: myorg/appname dockerfile_path: Dockerfile encrypted_env_file: env.encrypted 
    ```

7.  To scan using Veracode Software Composition Analysis agent-based scanning, in your project, edit the `codeship-steps.yml` file and add this step after your build step:

    ```
    - name: sourceclear
      service: app
      command:  sh -c "curl -sSL https://download.sourceclear.com/ci.sh | sh”
    ```

8.  Commit the changes to your repository.

<p font-size="13pt"><b>Results</b></p>

The next time you run your build through Codeship Pro, Veracode SCA performs an agent-based scan of your repository. For details on configuring your Codeship Pro project, see the [Codeship Pro documentation](https://documentation.codeship.com/pro/jet-cli/usage-overview/).


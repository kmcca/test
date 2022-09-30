---
"ft:title" : "Troubleshooting Automatic Pull Requests for SCA"
"ft:prettyUrl" : "Troubleshooting_Automatic_Pull_Requests_for_SCA"
---

If the Veracode Software Composition Analysis (SCA) agent is not able to generate an automatic pull request, it displays this message: `No pull request was generated`.

If you see this message when you expect the agent to generate a pull request, such as when the project uses vulnerable dependencies, verify that your project uses the [supported build files](https://docs.veracode.com/r/Understanding_Automatic_Pull_Request_Support).

If your project uses `yarn.lock` files, which Veracode SCA does not support, Veracode recommends one or both of these troubleshooting steps:

- Remove `yarn.lock` while retaining `package.json`, and run the `srcclr scan` command again with the `--allow-dirty` option.
- Run the `srcclr scan --scan-collectors 'npm'` command to perform an `npm install` and generate a pull request.

After merging the pull request, run the `yarn install` command to update the `yarn.lock` based on the changes in `package.json`.
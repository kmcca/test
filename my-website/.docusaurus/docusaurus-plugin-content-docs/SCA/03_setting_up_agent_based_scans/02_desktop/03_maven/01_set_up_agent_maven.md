---
"ft:title" : "Set Up the Agent-Based Scanning Maven Plugin"
"ft:prettyUrl" : "t_sc_maven"
---

The Veracode Software Composition Analysis (SCA) agent-based scanning Maven plugin allows you to automate the scanning of your Maven repositories. You can upload the results of plugin scans to Veracode for a specific organization or to your personal environment.

<p font-size="13pt"><b>Steps</b></p>

1.  In the Veracode Platform, select **Scans & Analysis** > **Software Composition Analysis**.

2.  Click the **Agent-Based Scan** tab.

3.  Select a workspace.

4.  Click **Agents** > **Actions** > **Create** > **Maven**.

5.  Click **Create Agent & Generate Token**.

6.  Choose to set your API token as an environment variable in the environment where you build your Maven repository, or add the token directly to the configuration within your `pom.xml` file:

    -   Environment Configuration:
        -   Run this command to set your API token to the `SRCCLR_API_TOKEN` environment variable:

            ```
            export SRCCLR_API_TOKEN={apiToken}
            ```

            If your shell supports it, you may want to prefix the command with a space to avoid leaving the token in your shell history.

        -   Run this command in the root of your Maven project to start a scan:

            ```
            mvn clean compile com.srcclr:srcclr-maven-plugin:scan
            ```

    -   `pom.xml` Configuration:

        -   Add this code to your `pom.xml` file in the root directory:
        ```
                    <build>
            <plugins>
                <plugin>
                    <groupId>com.srcclr</groupId>
                    <artifactId>srcclr-maven-plugin</artifactId>
                    <version><!-- Insert latest version --></version>
                    <configuration>
                        <!--- Add configuration details here-->
                        <apiToken>OptionallyEnterUserTokenHere</apiToken>
                   </configuration>
                   <executions>
                       <execution>
                           <id>srcclr-scan</id>
                           <phase>verify</phase>
                           <goals>
                               <goal>scan</goal>
                           </goals>
                       </execution>
                  </executions>
                </plugin>
            </plugins>
        </build>        
        ```

        - Save the `pom.xml` file. The agent-based scanning plugin automatically runs when you run any Maven lifecycle phase that executes after `verify`, such as `install` or `deploy`.



---
"ft:title" : "Create Veracode SCA Agents"
"ft:prettyUrl" : "Create_Veracode_SCA_Agents"
---

For information on creating agents with the SCA Agent REST API, see [Using the Veracode SCA Agent REST API](https://docs.veracode.com/r/c_sourceclear_intro).

<p font-size="13pt"><b>Before You Begin</b></p>

To create an organization-level agent, you must have the Security Lead [role](https://docs.veracode.com/r/c_role_permissions).

To create a workspace agent, you must have the Security Lead, Workspace Administrator, Workspace Editor, or Submitter role.

<p font-size="13pt"><b>Steps</b></p>

1. In the Veracode Platform, navigate to the Agents page at either the [workspace](https://docs.veracode.com/r/View_Workspace_Agents) or [organization level](https://docs.veracode.com/r/View_Organization_Level_Agents).
2. Click **Actions** > **Create**.
3. Choose your desktop operating system or CI.
4. For CI projects, follow the [instructions for your CI integration](https://docs.veracode.com/r/Integrate_Veracode_SCA_Agent_Based_Scanning_with_Your_CI_Projects).
5. For desktop operating systems.
    
    a.  Choose the tab showing your preferred method of installation for your OS type \(curl, apt-get, yum, homebrew\).
    
    b.  Open a terminal window and follow the instructions to install the agent.
 
    c.  Copy the command to activate the agent and paste it in your terminal.
    
    d.  Copy the activation token and paste it in your terminal. After entering your activation token, the `Create` action creates the `agent.yml` configuration file and adds it to the `~/.srcclr` folder. If this file already exists. you are prompted to enter a profile name. This profile name allows you to choose which token to use when scanning.
           
       - For workspace agents, Veracode recommends using the name of the workspace associated with the token.
       - For organization-level agents, Veracode recommends that, if you plan on creating more than agent one to use with different teams or workspaces, you indicate that in the profile name.  

    f. Verify the agent by running one of these commands to see if you can scan a specific package manager:

       - Ant: `srcclr test --ant`
       - Bower: `srcclr test --bower`
       - Cocoapods: `srcclr test --cocoapods`
       - Composer: `srcclr test --composer`
       - Glide: `srcclr test --glide`
       - Go Get: `srcclr test --go`
       - Godep: `srcclr test --godep`
       - Govendor: `srcclr test --govendor`
       - Gradle: `srcclr test --gradle`
       - Ivy: `srcclr test --ivy`
       - Maven: `srcclr test --maven`
       - NPM: `srcclr test --npm`
       - Python: `srcclr test --pip`
       - Ruby Gems: `srcclr test --gem`
       - SBT: `srcclr test --sbt`
       - Trash: `srcclr test --trash`
       - Yarn: `srcclr test --yarn`
       - Nuget: `srcclr test --nuget`
    

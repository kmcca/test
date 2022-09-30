---
"ft:title" : "Use the Agent with an SCM Other than Git"
"ft:prettyUrl" : "c_sc_scm"
---

You can use the Veracode SCA agent to scan a repository that uses a source code management (SCM) system other than Git. You can use these instructions to configure all commonly used SCM systems, including Subversion (SVN), Mercurial, and Team Foundation Version Control (TFVC).

The Veracode SCA agent normally interacts with a Git repository to learn the branch, commit, working directory state, and similar attributes to make the scan reports the most meaningful to the reader. However, not every organization uses Git and thus the agent needs a mechanism through which the scan data can be associated with the underlying source control metadata.

<p><span style="font-size: medium;">Communicating SCM Metadata to the Agent</span></p>

The Veracode SCA agent accepts SCM metadata from the caller through these environment variables.

| Environment Variable  | What It Controls                                                                                                                                                                                                                                                                                                                             |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SRCCLR_SCM_URI`      | The URI you use to connect to the SCM system. For example: `https://svn.example.com/svn/repos` or `https://hg.example.com`. <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> This value is the default name of the project in Veracode SCA after you complete your first scan.</p>           
| `SRCCLR_SCM_REF`      | Any meaningful name of the current state of the working directory, such as a branch, a tag, or a similar concept in your SCM.                                                                                                                                                                                                                |
| `SRCCLR_SCM_REF_TYPE` | Optional. The type of reference described in the `SRCCLR_SCM_REF` variable, which can be one of these case-insensitive strings: `branch`, `tag`, or `commit`. The default value is `commit`.                                                                                                                                                 |
| `SRCCLR_SCM_REV`      | The revision of the current state of the working directory. For example, a Subversion change number or a Mercurial revision identifier.                                                                                                                                                                                                      |
| `SRCCLR_SCM_SUB_PATH` | Optional. Only meaningful if the project is located in a subdirectory down from the root of the SCM repository, such as with a multi-project Mercurial repository. If you use Subversion or similar directory addressable source control systems, Veracode recommends you specify the full path to the project root as the `SRCCLR_SCM_URI`. |

<p><span style="font-size: medium;">Example</span></p>

Check out the source as you normally would and change to the working directory.

```
$ svn checkout https://svn.code.sf.net/p/properties-mvn/svn/ properties-mvn
$ cd properties-mvn
```

To gather the information, use the source control tool to inspect its status.

```
$ svn info
Path: .
Working Copy Root Path: /Users/mdaniel/.tmp/properties-mvn
URL: https://svn.code.sf.net/p/properties-mvn/svn
Relative URL: ^/
Repository Root: https://svn.code.sf.net/p/properties-mvn/svn
Repository UUID: a38e15f5-c4e9-4b0a-8018-68579ae2876f
Revision: 10
Node Kind: directory
Schedule: normal
Last Changed Author: ayanul
Last Changed Rev: 10
Last Changed Date: 2010-09-29 04:28:27 -0700 (Wed, 29 Sep 2010)
```

Now you can capture the relevant pieces of metadata in environment variables and invoke the `srcclr scan` command to begin scanning.

```
$ export SRCCLR_SCM_URI=https://svn.code.sf.net/p/properties-mvn/svn
$ export SRCCLR_SCM_REF=trunk
$ export SRCCLR_SCM_REF_TYPE=branch
$ export SRCCLR_SCM_REV=10
$ srcclr scan
```

The results print a summary to the terminal and provide a hyperlink to the full details in the Veracode Platform.


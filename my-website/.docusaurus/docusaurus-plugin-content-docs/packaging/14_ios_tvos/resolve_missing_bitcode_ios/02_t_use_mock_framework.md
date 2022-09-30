---
"ft:title" : "Configure Xcode to Replace Third-Party Libraries"
"ft:prettyUrl" : "Configure_Xcode_to_Replace_Third_Party_Libraries"
---

You can force Xcode to create a mock framework so that you can successully build an application.

<p font-size="13pt"><b>Steps</b></p>

1.  In Xcode, create a mock framework with a name that includes the name of the library you want to replace. For example, if the original library is named `InclusionLib`, name the new framework `InclusionMockLib`.

2.  Import this mock framework into the application project.

3.  Edit the source code of your mock framework and stub out any methods and classes that you want to access from your application.

4.  Link the mock framework to the main application and make it a target dependency.

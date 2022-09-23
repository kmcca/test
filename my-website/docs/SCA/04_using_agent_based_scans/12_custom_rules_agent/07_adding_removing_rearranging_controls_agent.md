---
"ft:title" : "Adding, Removing, and Rearranging Controls in Agent-Based Scanning Custom Rules"
"ft:prettyUrl" : "Adding_Removing_and_Rearranging_Controls_in_Agent_Based_Scanning_Custom_Rules"
---

When a rule is in [edit mode](https://docs.veracode.com/r/Edit_Custom_Rules_for_Agent_Based_Scanning), you can add new controls, remove controls, and move controls up and down.

To add a new control, click the **Add Control** button below the last control row.

To remove a control, click the trash can icon at the far right.

To move controls up and down, use the up and down arrows next to the trash can icon.

In general, the order of controls in a rule does not affect which issues will be created, whether a build is broken or not, or the order in which controls are evaluated. It allows you to visually group controls together in an order that is meaningful to you. However, if you create two near-identical controls that only differ by a property, such as a different severity rating, the control furthest down the list takes precedence.

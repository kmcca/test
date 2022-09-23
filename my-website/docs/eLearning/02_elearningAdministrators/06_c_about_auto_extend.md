---
"ft:title" : "Using Auto-Extend for Learner Courses"
"ft:prettyUrl" : "c_about_auto_extend"
---

The auto-extend functionality allows you to automatically extend the subscription of an existing learner seat.

An organization can purchase an eLearning [subscription](https://docs.veracode.com/r/t_view_elearning_license) and indicate the number of seats learners use to access course tracks. That subscription remains active for a specified period, as determined by the terms of the subscription with Veracode. An organization can purchase another subscription from Veracode that becomes active when the current subscription ends.

By default, when you add new learners and assign course tracks to them, auto-extend is enabled. When you enable auto-extend for a course track, you automatically assign that learner seat to that track when the current subscription period ends. As subscription end-dates approach, learners receive notifications when they log in to the Veracode Platform. If auto-extend is enabled, learner track assignments automatically extend into the subsequent subscription period.

If auto-extend is not enabled, when the subscription period ends, Veracode eLearning removes course track access for all existing learners until you reassign a track to each learner.

A problem occurs if an organization reduces the number of learner seats between the time one subscription period ends and the next period starts. The organization then has more learners in a track set to auto-extend than the number of seats purchased for that track in the new subscription. In this case, Veracode eLearning locks course tracks for all learners. The learners cannot access course content until you reduce the number of auto-extend learners to equal the available seat count.

You can manage the auto-extend setting for an [individual learner](https://docs.veracode.com/r/Modify_Individual_Learner_Settings) or for [multiple learners](https://docs.veracode.com/r/t_assign_track_bulk).

---
"ft:title" : "Replacing a Library Using Conditional Compilation Blocks"
"ft:prettyUrl" : "Replacing_a_Library_Using_Conditional_Compilation_Blocks"
---

You can use a Veracode workaround to replace a library so that an application can generate bitcode.

In some cases, you can remove the library from the bitcode variant and replace it with simple stubbed-out calls in the same source code. You can then generate the bitcode.

In this example, the code refers to a third-party library `InclusionLib`. This code includes a call to a function called `RNG`. Conditional compilation blocks control whether to include the stub or the `InclusionLib` library.

```

import SwiftUI
// IF/ELSE to include the mock library under certain conditions.
#if _MISSING_BITCODE
import Foundation
#else
import InclusionLib
#endif

#if _MISSING_BITCODE
func RNG(with x:UInt32) ->UInt32 {
      print("Running dummy rng")
      return 1
}
#endif

//Contents view for a specific example
struct ExampleView View {
      let example: AccessibilityExample
      let rng:UInt32

      init(_ example: AccessibilityExample) {
      self.example = example
      self.rng = RNG(with: 3)
      }

      var body: some View {
            VStack {
                  example.view
                        .padding(.horizontal)

                  Spacer()
            }
      }
}   

```

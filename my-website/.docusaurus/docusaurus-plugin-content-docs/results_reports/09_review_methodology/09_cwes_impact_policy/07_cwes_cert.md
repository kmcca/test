---
"ft:title" : "CWEs That Violate the CERT Standard"
"ft:prettyUrl" : "CWEs_That_Violate_the_CERT_Standard"
---
This table lists all the CWEs that may cause an application to not pass a policy that includes a CERT policy rule.

|CWE ID|CWE Name|Static Support|Dynamic Support|Veracode Severity|
|------|--------|--------------|---------------|-----------------|
|14|Compiler Removal of Code to Clear Buffers| | | |
|20|Improper Input Validation|X| |0 - Informational|
|22|Improper Limitation of a Pathname to a Restricted Directory \(Path Traversal\)|X|X|3 - Medium|
|37|Path Traversal: '/absolute/pathname/here'| | | |
|38|Path Traversal: '\\absolute\\pathname\\here'| | | |
|39|Path Traversal: 'C:dirname'| | | |
|41|Improper Resolution of Path Equivalence| | | |
|59|Improper Link Resolution Before File Access \(Link Following\)| | | |
|62|UNIX Hard Link| | | |
|64|Windows Shortcut Following \(.LNK\)| | | |
|65|Windows Hard Link| | | |
|67|Improper Handling of Windows Device Names| | | |
|78|Improper Neutralization of Special Elements used in an OS Command \(OS Command Injection\)|X|X|5 - Very High|
|88|Argument Injection or Modification|X| |3 - Medium|
|111|Direct Use of Unsafe JNI|X| |4 - High|
|116|Improper Encoding or Escaping of Output| | | |
|117|Improper Output Neutralization for Logs|X| |3 - Medium|
|119|Improper Restriction of Operations within the Bounds of a Memory Buffer| | | |
|120|Buffer Copy without Checking Size of Input \(Classic Buffer Overflow\)| | | |
|121|Stack-based Buffer Overflow|X| |5 - Very High|
|122|Heap-based Buffer Overflow| | | |
|123|Write-what-where Condition| | | |
|125|Out-of-bounds Read|X| |3 - Medium|
|128|Wrap-around Error| | | |
|129|Improper Validation of Array Index|X| |3 - Medium|
|131|Incorrect Calculation of Buffer Size| | | |
|134|Use of Externally-Controlled Format String|X| |5 - Very High|
|135|Incorrect Calculation of Multi-Byte String Length|X| |5 - Very High|
|144|Improper Neutralization of Line Delimiters| | | |
|150|Improper Neutralization of Escape, Meta, or Control Sequences| | | |
|170|Improper Null Termination|X| |3 - Medium|
|171|Cleansing, Canonicalization, and Comparison Errors| | | |
|176|Improper Handling of Unicode Encoding| | | |
|180|Incorrect Behavior Order: Validate Before Canonicalize| | | |
|182|Collapse of Data into Unsafe Value| | | |
|190|Integer Overflow or Wraparound|X| |5 - Very High|
|191|Integer Underflow \(Wrap or Wraparound\)|X| |3 - Medium|
|192|Integer Coercion Error|X| |3 - Medium|
|193|Off-by-one Error|X| |3 - Medium|
|194|Unexpected Sign Extension| | | |
|195|Signed to Unsigned Conversion Error|X| |3 - Medium|
|197|Numeric Truncation Error|X| |3 - Medium|
|198|Use of Incorrect Byte Ordering| | | |
|209|Information Exposure Through an Error Message|X|X|2 - Low|
|226|Sensitive Information Uncleared Before Release| | | |
|227|7PK - API Abuse| | | |
|230|Improper Handling of Missing Values| | | |
|232|Improper Handling of Undefined Values| | | |
|241|Improper Handling of Unexpected Data Type| | | |
|242|Use of Inherently Dangerous Function|X| |5 - Very High|
|244|Improper Clearing of Heap Memory Before Release \(Heap Inspection\)| | | |
|248|Uncaught Exception|X| |2 - Low|
|250|Execution with Unnecessary Privileges| | | |
|252|Unchecked Return Value|X| |2 - Low|
|253|Incorrect Check of Function Return Value| | | |
|259|Use of Hard-coded Password|X|X|3 - Medium|
|266|Incorrect Privilege Assignment| | | |
|272|Least Privilege Violation|X| |3 - Medium|
|273|Improper Check for Dropped Privileges|X| |3 - Medium|
|276|Incorrect Default Permissions| | | |
|279|Incorrect Execution-Assigned Permissions| | | |
|289|Authentication Bypass by Alternate Name| | | |
|300|Channel Accessible by Non-Endpoint \(Man-in-the-Middle\)| | | |
|302|Authentication Bypass by Assumed-Immutable Data| | | |
|311|Missing Encryption of Sensitive Data|X| |3 - Medium|
|319|Cleartext Transmission of Sensitive Information|X| |3 - Medium|
|327|Use of a Broken or Risky Cryptographic Algorithm|X|X|3 - Medium|
|330|Use of Insufficiently Random Values|X| |3 - Medium|
|331|Insufficient Entropy|X| |3 - Medium|
|332|Insufficient Entropy in PRNG| | | |
|333|Improper Handling of Insufficient Entropy in TRNG| | | |
|336|Same Seed in Pseudo-Random Number Generator \(PRNG\)| | | |
|337|Predictable Seed in Pseudo-Random Number Generator \(PRNG\)| | | |
|338|Use of Cryptographically Weak Pseudo-Random Number Generator \(PRNG\)|X| |3 - Medium|
|347|Improper Verification of Cryptographic Signature|X| |2 - Low|
|349|Acceptance of Extraneous Untrusted Data With Trusted Data| | | |
|359|Exposure of Private Information \(Privacy Violation\)|X| |2 - Low|
|362|Concurrent Execution using Shared Resource with Improper Synchronization \(Race Condition\)| | | |
|363|Race Condition Enabling Link Following| | | |
|366|Race Condition within a Thread|X| |3 - Medium|
|367|Time-of-check Time-of-use \(TOCTOU\) Race Condition|X| |3 - Medium|
|369|Divide By Zero| | | |
|374|Passing Mutable Objects to an Untrusted Method| | | |
|375|Returning a Mutable Object to an Untrusted Caller| | | |
|377|Insecure Temporary File|X| |3 - Medium|
|379|Creation of Temporary File in Directory with Incorrect Permissions| | | |
|382|J2EE Bad Practices: Use of System.exit\(\)|X| |2 - Low|
|390|Detection of Error Condition Without Action| | | |
|392|Missing Report of Error Condition| | | |
|395|Use of NullPointerException Catch to Detect NULL Pointer Dereference| | | |
|397|Declaration of Throws for Generic Exception| | | |
|400|Uncontrolled Resource Consumption| | | |
|401|Improper Release of Memory Before Removing Last Reference|X| |2 - Low|
|403|Exposure of File Descriptor to Unintended Control Sphere \(File Descriptor Leak\)| | | |
|404|Improper Resource Shutdown or Release|X| |0 - Informational|
|405|Asymmetric Resource Consumption \(Amplification\)| | | |
|409|Improper Handling of Highly Compressed Data \(Data Amplification\)| | | |
|410|Insufficient Resource Pool| | | |
|412|Unrestricted Externally Accessible Lock| | | |
|413|Improper Resource Locking| | | |
|415|Double Free|X| |3 - Medium|
|416|Use After Free|X| |2 - Low|
|426|Untrusted Search Path|X| |3 - Medium|
|456|Missing Initialization of a Variable| | | |
|459|Incomplete Cleanup| | | |
|460|Improper Cleanup on Thrown Exception| | | |
|462|Duplicate Key in Associative List \(Alist\)| | | |
|464|Addition of Data Structure Sentinel| | | |
|466|Return of Pointer Value Outside of Expected Range| | | |
|467|Use of sizeof\(\) on a Pointer Type| | | |
|468|Incorrect Pointer Scaling| | | |
|469|Use of Pointer Subtraction to Determine Size| | | |
|470|Use of Externally-Controlled Input to Select Classes or Code \(Unsafe Reflection\)|X| |3 - Medium|
|476|NULL Pointer Dereference| | | |
|479|Signal Handler Use of a Non-reentrant Function|X| |3 - Medium|
|480|Use of Incorrect Operator| | | |
|481|Assigning instead of Comparing| | | |
|482|Comparing instead of Assigning| | | |
|486|Comparison of Classes by Name| | | |
|487|Reliance on Package-level Scope| | | |
|491|Public cloneable\(\) Method Without Final \(Object Hijack\)| | | |
|492|Use of Inner Class Containing Sensitive Data| | | |
|493|Critical Public Variable Without Final Modifier| | | |
|494|Download of Code Without Integrity Check| | | |
|497|Exposure of System Data to an Unauthorized Control Sphere|X| |2 - Low|
|498|Cloneable Class Containing Sensitive Information| | | |
|499|Serializable Class Containing Sensitive Data| | | |
|500|Public Static Field Not Marked Final| | | |
|502|Deserialization of Untrusted Data|X| |3 - Medium|
|528|Exposure of Core Dump File to an Unauthorized Control Sphere| | | |
|532|Insertion of Sensitive Information into Log File|X| |2 - Low|
|543|Use of Singleton Pattern Without Synchronization in a Multithreaded Context| | | |
|544|Missing Standardized Error Handling Mechanism| | | |
|547|Use of Hard-coded, Security-relevant Constants|X| |3 - Medium|
|552|Files or Directories Accessible to External Parties| | | |
|561|Dead Code| | | |
|562|Return of Stack Variable Address| | | |
|563|Assignment to Variable without Use| | | |
|567|Unsynchronized Access to Shared Data in a Multithreaded Context| | | |
|568|finalize\(\) Method Without super.finalize\(\)| | | |
|570|Expression is Always False| | | |
|571|Expression is Always True| | | |
|572|Call to Thread run\(\) instead of start\(\)| | | |
|573|Improper Following of Specification by Caller| | | |
|581|Object Model Violation: Just One of Equals and Hashcode Defined| | | |
|582|Array Declared Public, Final, and Static| | | |
|583|finalize\(\) Method Declared Public| | | |
|584|Return Inside Finally Block| | | |
|586|Explicit Call to Finalize\(\)| | | |
|587|Assignment of a Fixed Address to a Pointer| | | |
|589|Call to Non-ubiquitous API| | | |
|590|Free of Memory not on the Heap| | | |
|591|Sensitive Data Storage in Improperly Locked Memory| | | |
|595|Comparison of Object References Instead of Object Contents| | | |
|597|Use of Wrong Operator in String Comparison|X| |2 - Low|
|600|Uncaught Exception in Servlet| | | |
|606|Unchecked Input for Loop Condition| | | |
|609|Double-Checked Locking| | | |
|617|Reachable Assertion| | | |
|625|Permissive Regular Expression| | | |
|628|Function Call with Incorrectly Specified Arguments|X| |2 - Low|
|647|Use of Non-Canonical URL Paths for Authorization Decisions| | | |
|662|Improper Synchronization| | | |
|664|Improper Control of a Resource Through its Lifetime| | | |
|665|Improper Initialization|X| |2 - Low|
|666|Operation on Resource in Wrong Phase of Lifetime| | | |
|667|Improper Locking| | | |
|672|Operation on a Resource after Expiration or Release| | | |
|675|Duplicate Operations on Resource|X| |2 - Low|
|676|Use of Potentially Dangerous Function|X| |3 - Medium|
|680|Integer Overflow to Buffer Overflow| | | |
|681|Incorrect Conversion between Numeric Types| | | |
|682|Incorrect Calculation| | | |
|684|Incorrect Provision of Specified Functionality| | | |
|685|Function Call With Incorrect Number of Arguments| | | |
|686|Function Call With Incorrect Argument Type| | | |
|687|Function Call With Incorrectly Specified Argument Value| | | |
|690|Unchecked Return Value to NULL Pointer Dereference| | | |
|696|Incorrect Behavior Order| | | |
|697|Incorrect Comparison| | | |
|703|Improper Check or Handling of Exceptional Conditions| | | |
|704|Incorrect Type Conversion or Cast| | | |
|705|Incorrect Control Flow Scoping| | | |
|732|Incorrect Permission Assignment for Critical Resource|X| |3 - Medium|
|754|Improper Check for Unusual or Exceptional Conditions| | | |
|758|Reliance on Undefined, Unspecified, or Implementation-Defined Behavior| | | |
|762|Mismatched Memory Management Routines| | | |
|766|Critical Data Element Declared Public| | | |
|770|Allocation of Resources Without Limits or Throttling| | | |
|771|Missing Reference to Active Allocated Resource| | | |
|772|Missing Release of Resource after Effective Lifetime| | | |
|773|Missing Reference to Active File Descriptor or Handle| | | |
|775|Missing Release of File Descriptor or Handle after Effective Lifetime| | | |
|783|Operator Precedence Logic Error| | | |
|786|Access of Memory Location Before Start of Buffer| | | |
|789|Uncontrolled Memory Allocation| | | |
|798|Use of Hard-coded Credentials|X| |3 - Medium|
|805|Buffer Access with Incorrect Length Value| | | |
|807|Reliance on Untrusted Inputs in a Security Decision| | | |
|820|Missing Synchronization| | | |
|833|Deadlock| | | |
|838|Inappropriate Encoding for Output Context| | | |
|843|Access of Resource Using Incompatible Type \(Type Confusion\)| | | |
|908|Use of Uninitialized Resource| | | |
|910|Use of Expired File Descriptor| | | |



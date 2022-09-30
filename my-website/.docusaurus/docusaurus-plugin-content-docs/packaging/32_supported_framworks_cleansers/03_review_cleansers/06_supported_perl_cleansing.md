---
"ft:title" : "Supported Perl Cleansing Functions"
"ft:prettyUrl" : "Supported_Perl_Cleansing_Functions"
---
Veracode recognizes these cleansing functions for CWE-80 in Perl CGI applications:

|Function|Flaw Class|
|--------|----------|
|`escapeHTML()` from the CGI module for HTML markup escaping|CWE-80|
|`escape()` from the CGI module for URL escaping|CWE-80|
|`encode_entities($scalar)` from the HTML::Entities module for HTML markup escaping|CWE-80|

If Autoescape mode is enabled, which is the default since `CGI.pm` version 1.57, then these CGI functions automatically escape the output HTML:

|Function|Flaw Class|
|--------|----------|
|`textfield()`|CWE-80|
|`textarea()`|CWE-80|
|`password_field()`|CWE-80|
|`filefield()`|CWE-80|
|`popup_menu()`|CWE-80|
|`optgroup()`|CWE-80|
|`scrolling_list()`|CWE-80|
|`checkbox_group()`|CWE-80|
|`checkbox()`|CWE-80|
|`radio_group()`|CWE-80|
|`submit()`|CWE-80|
|`defaults()`|CWE-80|
|`hidden()`|CWE-80|

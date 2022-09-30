---
"ft:title" : "Ruby on Rails Application Packaging"
"ft:prettyUrl" : "compilation_ruby"
---

Your Ruby on Rails applications must meet specific packaging requirements before you can submit them for scanning.

See [Supported Languages and Platforms](https://docs.veracode.com/r/r_supported_table) for instructions for other platforms.

You can analyze applications using Veracode Static Analysis or Veracode Software Composition Analysis \(SCA\) upload and scan, if licensed. For SCA agent-based scan requirements, see [Using Veracode SCA with Programming Languages](https://docs.veracode.com/r/Using_Veracode_SCA_with_Programming_Languages).

<p><span style="font-size: medium;">Required Files</span></p>

Veracode requires that you use a custom Veracode RubyGem to package Ruby on Rails applications.

<p><span style="font-size: medium;">Veracode Packaging Gem</span></p>

Before uploading your Ruby on Rails code, Veracode requires you to run a special packaging gem. The gem uses features introduced in Ruby 1.9 to translate your application to an archive format that Veracode can scan. The resulting archive contains this information:

-   Modules and classes, including disassembled instruction sequences for all Ruby methods. Disassembly is not available for methods implemented in C.
-   A log of errors generated by the Veracode gem or other code in your application environment during disassembly.
-   Configuration files for Rails, Bundler, or other common gems.
-   Ruby source and template files.
-   A list of included files.
-   A recursive list of all files in the application directory, including those not contained in the archive.

To prepare your application for analysis:

1.  Ensure that the application can run.
2.  Ensure that you have a functional Rails environment on the system preparing your application.

You can test your system for these requirements by running the `rails server` command.

<p><span style="font-size: medium;">Supported Ruby on Rails Versions</span></p>

|Language|Platform|Supported Versions|
|---|---|---|
|Ruby|Ruby on Rails|Ruby 1.9.3, 2.0.x, 2.1.x, 2.3–2.7, 3.x / Rails 3.x–7.0|
|<p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> <a href="https://docs.veracode.com/r/Initial_Support_and_Supported_Languages_Meaning">Initial support</a> for Ruby 3.x and Rails 4.x–7.0</p>|

<p><span style="font-size: medium;">Packaging Guidance</span></p>

The packaging gem includes the `veracode` command-line tool that you should run in your rails application directory with the required subcommands and options. The `veracode` tool displays a list of all subcommands. Entering the `veracode` command without providing a subcommand is equivalent to entering `veracode help`.

For the `veracode` gem to properly analyze and package your application, you must disable the application setting `config.cache_classes`. You can verify that this setting is disabled in the appropriate environment configuration file. For example, if you are using the `development` environment, `RAILS_ENV=development veracode prepare`, validate that `config/environments/development.rb` contains the line `config.cache_classes = false`.

```

/your/ruby/on/railsapp/config/environments/development.rb
YourApp::Application.configure do
config.cache_classes = false

# Log error messages when you accidentally call methods on nil.
config.whiny_nils = true

...

```

<p><span style="font-size: medium;">Using the <code>veracode</code> Command</span></p>

Run the `veracode` command using this sequence:

```

$ cd /<user-folder>/ruby/on/railsapp
railsapp $ rvm current      # validate correct ruby and gemset are being used
railsapp $ veracode prepare

```

<p><span style="font-size: medium;">Using the <code>prepare</code> Subcommand to Create an Archive</span></p>

The `prepare` subcommand uses this syntax:

```

veracode prepare
veracode prepare [-h|--help]
veracode prepare [-v|--verbose]

```

The `prepare` subcommand creates the archive that you upload to Veracode.

The gem produces an archive in ZIP format and saves it in the `tmp` folder of the application, for example, `/my/ruby/on/railsapp/tmp`. The `prepare` subcommand creates a file named `veracode-[application name]-[YYYYmmddHHMMSS timestamp].zip`. Upload this file to Veracode.

If an error occurs while preparing the application, you can view the error log at `tmp/veracode-[YYYYmmddHHMMSS timestamp]/error.log`. Include this file with any support requests you make to Veracode.

<p><span style="font-size: medium;">Supported Template Formats</span></p>

Veracode supports these template formats for analyzing Ruby on Rails applications:

-   ERB/Erubis
-   HAML
-   Builder

<p><span style="font-size: medium;">Packaging Your Ruby on Rails Application</span></p>

Veracode recommends installing the gem using [Bundler](http://bundler.io). Because the gem is included in the list of dependencies for your application, Veracode recommends making a clean copy of the application source. Veracode also recommends using [RVM](https://rvm.io) to set up a clean Ruby environment before installing and running the gem. After you install RVM, you can create this Ruby environment by running this command sequence:

```

rvm install <your version>
rvm use <your version>@veracode --create

```

To install the `veracode` gem with Bundler:

1.  Add the gem as a dependency of your application. Insert these lines in the `Gemfile` of your application:

    ```

    #Add the following to /your/ruby/on/railsapp/Gemfile
    gem 'veracode'

    ```
    <p style="background-color:#FFFCF3; padding: 12px; border-left: 5px solid #F7CD55;"><b>Note:</b> If you removed the default <code>https://rubygems.org/</code> from your Ruby configuration file, you must restore it.</p>

2.  For Ruby versions earlier than 2.4, also add these lines to your `Gemfile` to specify a compatible version of `rubyzip` using this command sequence:

    ```

    source 'https://rubygems.org'
    gem 'rubyzip', '~>1.0'

    ```


After running these commands, download and install all of the application dependencies, including Rails and the `veracode` gem, using this command sequence:

```

$ cd /your/ruby/on/railsapp
railsapp $ rvm use <your version>@veracode
railsapp $ bundle install --without development test # or other non-production dependency groups

```

Run this command to update your gem to the latest version:

```

railsapp $ bundle update veracode

```

As an alternative to Bundler, you can install the gem manually using the gem `install` command. After you install RVM and ensure you meet all other application dependencies, run these commands in this sequence:

```

rvm install <your version>
rvm use <your version>@veracode --create
gem install veracode

```
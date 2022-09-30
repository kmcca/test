---
"ft:title": "Install the Python Authentication Library"
"ft:prettyUrl": "t_install_api_authen"
---
You can install the Python authentication library from the Python Package Index \(PyPI\) or obtain it as a container image from Docker Hub. The library enables HMAC authentication, which is a required security measure for using the Veracode APIs with your Python applications.

Before installing the Python authentication library, you must meet these prerequisites:

-   A Linux, UNIX, macOS, or Windows machine.
-   Installed Python 3.7 or later. If you need to install or upgrade Python, refer to the [Python Wiki](https://wiki.python.org/moin/BeginnersGuide/Download) for advice on choosing a Python download.
-   Upgraded to the latest version of pip, the Python package manager. If you have a new installation of a compatible Python version, you can omit this step. Otherwise, you must upgrade pip to work with Veracode authentication libraries. You can read pip upgrade instructions on the [pip website](https://pip.pypa.io/en/latest/). Look for the upgrade commands in the installation documentation.
    -   If using Ubuntu, you have uninstalled any system-installed version of pip, installed the latest version of pip, and uninstalled any system-installed version of HTTPie, as described in [Preparing Ubuntu for the Python Authentication Library Installation](02_prepare_ubuntu_for_python.md).
-   Generated [Veracode API credentials](../Keys/c_api_credentials3.md).
-   Added your Veracode API credentials to a [Veracode API credentials file](../Keys/c_configure_api_cred_file.md).

Run this command to install the Python authentication library from PyPI:

```shell
pip install veracode-api-signing
```

You can also obtain the Python authentication library as a container image from [Docker Hub](https://hub.docker.com/u/veracode).
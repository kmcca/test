---
"ft:title": "Prepare Ubuntu for the Python Authentication Library"
"ft:prettyUrl": "c_ubuntu_notes"
---
Before [installing the Python authentication library](https://docs.veracode.com/r/t_install_api_authen) on Ubuntu, Veracode recommends that you run these commands to prepare the system:

1. Uninstall any system-installed version of pip:

    ```shell
    sudo apt-get remove python-pip
    ```

2. Install the latest version of pip:

    ```shell
    sudo easy_install pip
    ```

3. Uninstall any system-installed version of HTTPie:

    ```shell
    sudo apt-get purge httpie
    ```
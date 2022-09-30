---
"ft:title": "Verify the Authenticity of Java API Wrapper Artifacts"
"ft:prettyUrl": "t_verifying_authenticity"
---
Each Java artifact in the Java API wrapper is associated with an ASC signature file for verifying that the publication source is Veracode. You can [download the ASC file](https://repo1.maven.org/maven2/com/veracode/vosp/api/wrappers/vosp-api-wrappers-java/) for the appropriate version of the Java wrapper.

<p font-size="13pt"><b>Before You Begin</b></p>

You have installed a GNU Privacy Guard (GPG) utility, such as GnuPG.

<p font-size="13pt"><b>Steps</b></p>

1. Download the Veracode public key from a public keyserver, such as `pgp.mit.edu`, using the key ID `0x63003CB3`. For example:

    ```
    gpg --keyserver pgp.mit.edu --recv-key 0x63003CB3
    ```

2. Verify the signature of an artifact. This example verifies the signature of `vosp-api-wrapper-java-17.10.4.8.jar`. It assumes the file is in the same directory as the ASC file:

    ```
    gpg --verify vosp-api-wrapper-java-17.10.4.8.jar.asc
    ```

    This output indicates that the Veracode public key is not trusted locally:

    ```
    gpg: Signature made 11/02/17 14:49:01 Eastern Daylight Time
    gpg: using RSA key E1AE087F8B51E8F322513009A0D8098560410C91
    gpg: Good signature from "Veracode" [unknown]
    gpg: WARNING: This key is not certified with a trusted signature!
    gpg: There is no indication that the signature belongs to the owner.
    Primary key fingerprint: 130D 4190 4800 95BD 01F5  F130 235A 4AC4 6300 3CB3
    Subkey fingerprint: E1AE 087F 8B51 E8F3 2251  3009 A0D8 0985 6041 0C91
    ```

    You can trust the Veracode public key and verify the signature of more artifacts, but Veracode recommends that you always compare the fingerprints from the output to these fingerprints to ensure the signature is not forged:

    ```
    pub   rsa2048 2017-11-02 [expires: 2020-11-01]
          130D 4190 4800 95BD 01F5  F130 235A 4AC4 6300 3CB3
    uid   Veracode
    sub   rsa2048 2017-11-02 [expires: 2020-11-01]
          E1AE 087F 8B51 E8F3 2251  3009 A0D8 0985 6041 0C91
    ```

---
"ft:title": "Preparing Files for Scanning with the Pipeline Scan"
"ft:prettyUrl": "Preparing_Files_for_Scanning_with_the_Pipeline_Scan"
---
Run these commands to compute the SHA256 hash and the file size of the application files you want to upload and scan.

<p><span style="font-size: medium;">Compute SHA256 Hash</span></p>

- Windows: `Powershell Get-Filehash`
- macOS: `shasum -a 256 {full_path_to_file}`
- Linux: `sha256sum {full_path_to_file}`

<p><span style="font-size: medium;">Compute File Size</span></p>

- Windows: `dir /{full_path_to_file}`
- macOS: `stat -f %z {full_path_to_file}`
- Linux: `stat -c %s {full_path_to_file}`
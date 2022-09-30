---
"ft:title" : "Understanding the License Consumption Reports"
"ft:prettyUrl" : "c_license_consumption"
---

The license consumption reports in the Veracode Platform provide consumption data associated with your Veracode licenses. Each report provides different details about the Static Analysis and Dynamic Analysis scan activity that uses your license.

## License Used Report

The License Used Report provides visibility into your overall usage during a specific subscription year. It includes these details:

| Field              | Description                                                                                                         |
|--------------------|---------------------------------------------------------------------------------------------------------------------|
| Account Name       | Name of your account.                                                                                               |
| Contract           | Internal Veracode contract ID.                                                                                      |
| Start Date         | Start date of your contract. If you have a multi-year contract, there is a row for each year of your subscription.  |
| End Date           | End date of the subscription year.                                                                                  |
| Is Active          | Indicates if the contract is active. All subscription years of an active multi-year contract are considered active. |
| Licenses Purchased | Number of licenses purchased in the associated contract.                                                            |
| MB Purchased       | Number of megabytes purchased in the associated contract.                                                           |
| Licenses Used      | Number of licenses used during the subscription year.                                                               |
| MB Used            | Number of megabytes used during the subscription year.                                                              |

## Largest Scan Report

The Largest Scan Report represents the largest analysis size for each application scanned during the contract term and shows which applications consumed licenses during a specific contract year. It includes these details:

| Field                         | Description                                                                                                                                 |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Licensed Account              | Veracode Platform account that performed the scan.                                                                                          |
| Application ID                | Unique ID for your application.                                                                                                             |
| Application Name              | The name of your application.                                                                                                               |
| License Type                  | Indicates if the license type is SDLC or third party.                                                                                       |
| Scanning Account              | Same as the licensed account unless it has a vendor scanning under the enterprise account.                                                  |
| 3rd Party State               | Indicates if the scan was deleted or is active. Only populated if a third-party vendor performs the scan.                                   |
| Build ID                      | Unique ID for a scan.                                                                                                                       |
| Scan Name                     | The name of your scan.                                                                                                                      |
| Sandbox Type                  | Indicates if a scan is a sandbox or policy scan.                                                                                            |
| Scan State                    | Indicates if the scan is active or was deleted.                                                                                             |
| Scan Type                     | Indicates if the scan is a Veracode Static Analysis or Dynamic Analysis scan.                                                               |
| Largest Scan Publish Date     | The date that the largest scan occurred for the application during the subscription year.                                                   |
| Published to Vendor Date      | The date the scan results were published to a third-party vendor. This field is only populated if a third-party vendor performs the scan.   |
| Published to Enterprise Date  | The date the scan results were published to the enterprise account. This field is only populated if a third-party vendor performs the scan. |
| Language                      | The predominant language in the application.                                                                                                |
| Total Analysis Size           | Size of the application analyzed in that scan.                                                                                              |
| Licenses Used                 | Largest scan of each application during that subscription year divided by the application size definition.                                  |
| MB Used                       | Sum of the total analysis size, rounded to the nearest whole number.                                                                        |
| Applied SKU per Scan          | The contracted SKU to which the scan applies.                                                                                               |
| Contract                      | Internal Veracode contract ID.                                                                                                              |
| Subscription Start Date       | Start date of your contract. If you have a multi-year contract, consumption metrics start at 0 at the beginning of each subscription year.  |
| Times App Scanned Within Year | Number of times Veracode scanned the application during the subscription year.                                                              |

## All Scans Report

The All Scans Report shows all scans associated with your account, including sandbox scans and deleted scans, for a specific contract year. The report includes these details:

| Field                         | Description                                                                                                                                 |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Licensed Account              | Veracode Platform account that performed the scan.                                                                                          |
| Application ID                | Unique ID for your application.                                                                                                             |
| Application Name              | The name of your application.                                                                                                               |
| License Type                  | Indicates if the license type is SDLC or third party.                                                                                       |
| Scanning Account              | Same as the licensed account unless it has a vendor using the enterprise account to perform scans.                                          |
| 3rd Party State               | Indicates if the scan is active or was deleted. This field is only populated if a third-party vendor performs the scan.                     |
| Build ID                      | Unique ID for a scan.                                                                                                                       |
| Scan Name                     | The name of your scan.                                                                                                                      |
| Sandbox Type                  | Indicates if a scan is a sandbox or policy scan.                                                                                            |
| Scan State                    | Indicates if the scan is active or was deleted.                                                                                             |
| Scan Type                     | Indicates if the scan is a Veracode Static Analysis or Dynamic Analysis scan.                                                               |
| First Publish Date            | The date that the largest scan occurred for the application during the subscription year.                                                   |
| Published to Vendor Date      | The date the scan results were published to a third-party vendor. This field is only populated if a third-party vendor performs the scan.   |
| Published to Enterprise Date  | The date the scan results were published to the enterprise account. This field is only populated if a third-party vendor performs the scan. |
| Language                      | The predominant language in the application.                                                                                                |
| Total Analysis Size           | Size of the application analyzed in that scan.                                                                                              |
| Potential Licenses Used       | Largest scan of each application during that subscription year, divided by the application size definition.                                 |
| Potential MB Used             | Sum of the total analysis size, rounded to the nearest whole number.                                                                        |
| Applied SKU per Scan          | The contracted SKU to which the scan applies.                                                                                               |
| Contract                      | Internal Veracode contract ID.                                                                                                              |
| Subscription Start Date       | Start date of your contract. If you have a multi-year contract, consumption metrics start at 0 at the beginning of each subscription year.  |
| Times App Scanned Within Year | Number of times the application was scanned during the subscription year.                                                                   |

## License Used Tier Model Report

The License Used Tier Model report identifies how many licenses you have used from the number you purchased. This license report type is available only if you use the tier licensing model. The report includes these details:

| Field                                      | Description                                                                                                                                                  |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| account name                               | Account name of the organization that purchased licenses from Veracode.                                                                                      |
| contract                                   | ID of the contract in use.                                                                                                                                   |
| contract year                              | For multi-year contracts, the ID for the year of the contract. One contract might have different subscriptions allocated to different years of the contract. |
| subscription \(sku\)                       | Product subscription code purchased in the contract.                                                                                                         |
| start date \(of contract year\)            | Start date for the contract year.                                                                                                                            |
| end date \(of contract year\)              | End date for the contract year.                                                                                                                              |
| quantity licenses purchased                | Number of products purchased. For Standard and Small, this value reflects the number of application profiles.                                                |
| quantity licenses used                     | Number of products used. For Standard and Small, this value reflects the number of application profiles.                                                     |
| most recent scan date during contract year | Date of most recent scan for each application profile counted.                                                                                               |


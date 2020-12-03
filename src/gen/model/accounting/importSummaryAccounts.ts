/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* A summary of the accounts changes
*/
export class ImportSummaryAccounts {
  /*
    The total number of accounts in the org
  */
  'total'?: number;
  /*
    The number of new accounts created
  */
  '_new'?: number;
  /*
    The number of accounts updated
  */
  'updated'?: number;
  /*
    The number of accounts deleted
  */
  'deleted'?: number;
  /*
    The number of locked accounts
  */
  'locked'?: number;
  /*
    The number of system accounts
  */
  'system'?: number;
  /*
    The number of accounts that had an error
  */
  'errored'?: number;
  'present'?: boolean;
  /*
    The number of new or updated accounts
  */
  'newOrUpdated'?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "total",
      "baseName": "Total",
      "type": "number"
    },
    {
      "name": "_new",
      "baseName": "New",
      "type": "number"
    },
    {
      "name": "updated",
      "baseName": "Updated",
      "type": "number"
    },
    {
      "name": "deleted",
      "baseName": "Deleted",
      "type": "number"
    },
    {
      "name": "locked",
      "baseName": "Locked",
      "type": "number"
    },
    {
      "name": "system",
      "baseName": "System",
      "type": "number"
    },
    {
      "name": "errored",
      "baseName": "Errored",
      "type": "number"
    },
    {
      "name": "present",
      "baseName": "Present",
      "type": "boolean"
    },
    {
      "name": "newOrUpdated",
      "baseName": "NewOrUpdated",
      "type": "number"
    }  ];

  static getAttributeTypeMap() {
    return ImportSummaryAccounts.attributeTypeMap;
  }
}


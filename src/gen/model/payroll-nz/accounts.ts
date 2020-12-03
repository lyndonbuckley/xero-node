/**
 * Xero Payroll NZ
 * This is the Xero Payroll API for orgs in the NZ region.
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from '././account';

export class Accounts {
  'accounts'?: Array<Account>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "accounts",
      "baseName": "accounts",
      "type": "Array<Account>"
    }  ];

  static getAttributeTypeMap() {
    return Accounts.attributeTypeMap;
  }
}


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


export class DeductionLine {
  /*
    Xero identifier for payroll deduction
  */
  'deductionTypeID'?: string;
  /*
    name of earnings rate for display in UI
  */
  'displayName'?: string;
  /*
    The amount of the deduction line
  */
  'amount'?: number;
  /*
    Identifies if the deduction is subject to tax
  */
  'subjectToTax'?: boolean;
  /*
    Deduction rate percentage
  */
  'percentage'?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "deductionTypeID",
      "baseName": "deductionTypeID",
      "type": "string"
    },
    {
      "name": "displayName",
      "baseName": "displayName",
      "type": "string"
    },
    {
      "name": "amount",
      "baseName": "amount",
      "type": "number"
    },
    {
      "name": "subjectToTax",
      "baseName": "subjectToTax",
      "type": "boolean"
    },
    {
      "name": "percentage",
      "baseName": "percentage",
      "type": "number"
    }  ];

  static getAttributeTypeMap() {
    return DeductionLine.attributeTypeMap;
  }
}


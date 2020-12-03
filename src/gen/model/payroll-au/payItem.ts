/**
 * Xero Payroll AU
 * This is the Xero Payroll API for orgs in Australia region.
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DeductionType } from '././deductionType';
import { EarningsRate } from '././earningsRate';
import { LeaveType } from '././leaveType';
import { ReimbursementType } from '././reimbursementType';

export class PayItem {
  'earningsRates'?: Array<EarningsRate>;
  'deductionTypes'?: Array<DeductionType>;
  'leaveTypes'?: Array<LeaveType>;
  'reimbursementTypes'?: Array<ReimbursementType>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "earningsRates",
      "baseName": "EarningsRates",
      "type": "Array<EarningsRate>"
    },
    {
      "name": "deductionTypes",
      "baseName": "DeductionTypes",
      "type": "Array<DeductionType>"
    },
    {
      "name": "leaveTypes",
      "baseName": "LeaveTypes",
      "type": "Array<LeaveType>"
    },
    {
      "name": "reimbursementTypes",
      "baseName": "ReimbursementTypes",
      "type": "Array<ReimbursementType>"
    }  ];

  static getAttributeTypeMap() {
    return PayItem.attributeTypeMap;
  }
}


/**
 * Xero Payroll UK
 * This is the Xero Payroll API for orgs in the UK region.
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EmployeeLeaveBalance } from '././employeeLeaveBalance';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class EmployeeLeaveBalances {
  'pagination'?: Pagination;
  'problem'?: Problem;
  'leaveBalances'?: Array<EmployeeLeaveBalance>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "pagination",
      "baseName": "pagination",
      "type": "Pagination"
    },
    {
      "name": "problem",
      "baseName": "problem",
      "type": "Problem"
    },
    {
      "name": "leaveBalances",
      "baseName": "leaveBalances",
      "type": "Array<EmployeeLeaveBalance>"
    }  ];

  static getAttributeTypeMap() {
    return EmployeeLeaveBalances.attributeTypeMap;
  }
}


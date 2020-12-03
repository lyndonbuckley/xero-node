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

import { Timesheet } from '././timesheet';

export class TimesheetObject {
  'timesheet'?: Timesheet;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "timesheet",
      "baseName": "Timesheet",
      "type": "Timesheet"
    }  ];

  static getAttributeTypeMap() {
    return TimesheetObject.attributeTypeMap;
  }
}


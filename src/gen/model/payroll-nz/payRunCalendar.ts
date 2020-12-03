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

import { CalendarType } from '././calendarType';

export class PayRunCalendar {
  /*
    Xero unique identifier for the payroll calendar
  */
  'payrollCalendarID'?: string;
  /*
    Name of the calendar
  */
  'name': string;
  'calendarType': CalendarType;
  /*
    Period start date of the calendar
  */
  'periodStartDate': string;
  /*
    Period end date of the calendar
  */
  'periodEndDate'?: string;
  /*
    Payment date of the calendar
  */
  'paymentDate': string;
  /*
    UTC timestamp of the last update to the pay run calendar
  */
  'updatedDateUTC'?: Date;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "payrollCalendarID",
      "baseName": "payrollCalendarID",
      "type": "string"
    },
    {
      "name": "name",
      "baseName": "name",
      "type": "string"
    },
    {
      "name": "calendarType",
      "baseName": "calendarType",
      "type": "CalendarType"
    },
    {
      "name": "periodStartDate",
      "baseName": "periodStartDate",
      "type": "string"
    },
    {
      "name": "periodEndDate",
      "baseName": "periodEndDate",
      "type": "string"
    },
    {
      "name": "paymentDate",
      "baseName": "paymentDate",
      "type": "string"
    },
    {
      "name": "updatedDateUTC",
      "baseName": "updatedDateUTC",
      "type": "Date"
    }  ];

  static getAttributeTypeMap() {
    return PayRunCalendar.attributeTypeMap;
  }
}


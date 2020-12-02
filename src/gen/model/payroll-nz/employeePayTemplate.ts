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

import { EarningsTemplate } from '././earningsTemplate';

export class EmployeePayTemplate {
    /**
    * Unique identifier for the employee
    */
    'employeeID'?: string;
    'earningTemplates'?: Array<EarningsTemplate>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "employeeID",
            "baseName": "employeeID",
            "type": "string"
        },
        {
            "name": "earningTemplates",
            "baseName": "earningTemplates",
            "type": "Array<EarningsTemplate>"
        }    ];

    static getAttributeTypeMap() {
        return EmployeePayTemplate.attributeTypeMap;
    }
}


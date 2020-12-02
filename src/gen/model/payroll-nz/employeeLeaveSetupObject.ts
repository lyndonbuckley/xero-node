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

import { EmployeeLeaveSetup } from '././employeeLeaveSetup';
import { Pagination } from '././pagination';
import { Problem } from '././problem';

export class EmployeeLeaveSetupObject {
    'pagination'?: Pagination;
    'problem'?: Problem;
    'leaveSetup'?: EmployeeLeaveSetup;

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
            "name": "leaveSetup",
            "baseName": "leaveSetup",
            "type": "EmployeeLeaveSetup"
        }    ];

    static getAttributeTypeMap() {
        return EmployeeLeaveSetupObject.attributeTypeMap;
    }
}


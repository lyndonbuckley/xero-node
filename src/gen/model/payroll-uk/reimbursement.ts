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


export class Reimbursement {
    /**
    * Xero unique identifier for a reimbursement
    */
    'reimbursementID'?: string;
    /**
    * Name of the reimbursement
    */
    'name': string;
    /**
    * Xero unique identifier for the account used for the reimbursement
    */
    'accountID': string;
    /**
    * Indicates that whether the reimbursement is active
    */
    'currentRecord'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reimbursementID",
            "baseName": "reimbursementID",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "accountID",
            "baseName": "accountID",
            "type": "string"
        },
        {
            "name": "currentRecord",
            "baseName": "currentRecord",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Reimbursement.attributeTypeMap;
    }
}


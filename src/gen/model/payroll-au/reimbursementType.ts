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


export class ReimbursementType {
    /**
    * Name of the earnings rate (max length = 100)
    */
    'name'?: string;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    /**
    * Xero identifier
    */
    'reimbursementTypeID'?: string;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * Is the current record
    */
    'currentRecord'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "accountCode",
            "baseName": "AccountCode",
            "type": "string"
        },
        {
            "name": "reimbursementTypeID",
            "baseName": "ReimbursementTypeID",
            "type": "string"
        },
        {
            "name": "updatedDateUTC",
            "baseName": "UpdatedDateUTC",
            "type": "Date"
        },
        {
            "name": "currentRecord",
            "baseName": "CurrentRecord",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ReimbursementType.attributeTypeMap;
    }
}


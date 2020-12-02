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


export class ReimbursementLine {
    /**
    * Xero reimbursement type identifier
    */
    'reimbursementTypeID'?: string;
    /**
    * Reimbursement type amount
    */
    'amount'?: number;
    /**
    * Reimbursement lines description (max length 50)
    */
    'description'?: string;
    /**
    * Reimbursement expense account. For posted pay run you should be able to see expense account code.
    */
    'expenseAccount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reimbursementTypeID",
            "baseName": "ReimbursementTypeID",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "Amount",
            "type": "number"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "expenseAccount",
            "baseName": "ExpenseAccount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReimbursementLine.attributeTypeMap;
    }
}


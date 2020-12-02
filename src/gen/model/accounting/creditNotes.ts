/**
 * Accounting API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CreditNote } from '././creditNote';

export class CreditNotes {
    'creditNotes'?: Array<CreditNote>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "creditNotes",
            "baseName": "CreditNotes",
            "type": "Array<CreditNote>"
        }    ];

    static getAttributeTypeMap() {
        return CreditNotes.attributeTypeMap;
    }
}


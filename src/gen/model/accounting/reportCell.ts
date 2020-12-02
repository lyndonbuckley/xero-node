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

import { ReportAttribute } from '././reportAttribute';

export class ReportCell {
    'value'?: string;
    'attributes'?: Array<ReportAttribute>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "Attributes",
            "type": "Array<ReportAttribute>"
        }    ];

    static getAttributeTypeMap() {
        return ReportCell.attributeTypeMap;
    }
}


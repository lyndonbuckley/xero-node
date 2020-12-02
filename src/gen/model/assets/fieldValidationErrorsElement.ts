/**
 * Xero Assets API
 * This is the Xero Assets API
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class FieldValidationErrorsElement {
    /**
    * The field name of the erroneous field
    */
    'fieldName'?: string;
    /**
    * The provided value
    */
    'valueProvided'?: string;
    /**
    * Explaination of the field validation error
    */
    'localisedMessage'?: string;
    /**
    * Internal type of the field validation error message
    */
    'type'?: string;
    /**
    * Title of the field validation error
    */
    'title'?: string;
    /**
    * Detail of the field validation error
    */
    'detail'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fieldName",
            "baseName": "fieldName",
            "type": "string"
        },
        {
            "name": "valueProvided",
            "baseName": "valueProvided",
            "type": "string"
        },
        {
            "name": "localisedMessage",
            "baseName": "localisedMessage",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FieldValidationErrorsElement.attributeTypeMap;
    }
}


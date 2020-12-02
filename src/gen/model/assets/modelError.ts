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

import { FieldValidationErrorsElement } from '././fieldValidationErrorsElement';
import { ResourceValidationErrorsElement } from '././resourceValidationErrorsElement';

export class ModelError {
    /**
    * Array of elements of resource validation errors
    */
    'resourceValidationErrors'?: Array<ResourceValidationErrorsElement>;
    /**
    * Array of elements of field validation errors
    */
    'fieldValidationErrors'?: Array<FieldValidationErrorsElement>;
    /**
    * The internal type of error, not accessible externally
    */
    'type'?: string;
    /**
    * Title of the error
    */
    'title'?: string;
    /**
    * Detail of the error
    */
    'detail'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resourceValidationErrors",
            "baseName": "resourceValidationErrors",
            "type": "Array<ResourceValidationErrorsElement>"
        },
        {
            "name": "fieldValidationErrors",
            "baseName": "fieldValidationErrors",
            "type": "Array<FieldValidationErrorsElement>"
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
        return ModelError.attributeTypeMap;
    }
}


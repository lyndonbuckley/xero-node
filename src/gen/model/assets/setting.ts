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


export class Setting {
    /**
    * The prefix used for fixed asset numbers (“FA-” by default)
    */
    'assetNumberPrefix'?: string;
    /**
    * The next available sequence number
    */
    'assetNumberSequence'?: string;
    /**
    * The date depreciation calculations started on registered fixed assets in Xero
    */
    'assetStartDate'?: string;
    /**
    * The last depreciation date
    */
    'lastDepreciationDate'?: string;
    /**
    * Default account that gains are posted to
    */
    'defaultGainOnDisposalAccountId'?: string;
    /**
    * Default account that losses are posted to
    */
    'defaultLossOnDisposalAccountId'?: string;
    /**
    * Default account that capital gains are posted to
    */
    'defaultCapitalGainOnDisposalAccountId'?: string;
    /**
    * opt in for tax calculation
    */
    'optInForTax'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "assetNumberPrefix",
            "baseName": "assetNumberPrefix",
            "type": "string"
        },
        {
            "name": "assetNumberSequence",
            "baseName": "assetNumberSequence",
            "type": "string"
        },
        {
            "name": "assetStartDate",
            "baseName": "assetStartDate",
            "type": "string"
        },
        {
            "name": "lastDepreciationDate",
            "baseName": "lastDepreciationDate",
            "type": "string"
        },
        {
            "name": "defaultGainOnDisposalAccountId",
            "baseName": "defaultGainOnDisposalAccountId",
            "type": "string"
        },
        {
            "name": "defaultLossOnDisposalAccountId",
            "baseName": "defaultLossOnDisposalAccountId",
            "type": "string"
        },
        {
            "name": "defaultCapitalGainOnDisposalAccountId",
            "baseName": "defaultCapitalGainOnDisposalAccountId",
            "type": "string"
        },
        {
            "name": "optInForTax",
            "baseName": "optInForTax",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Setting.attributeTypeMap;
    }
}


/**
 * Xero Projects API
 * This is the Xero Projects API
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Amount } from '././amount';
import { ChargeType } from '././chargeType';

export class TaskCreateOrUpdate {
  /*
    Name of the task. Max length 100 characters.
  */
  'name': string;
  'rate': Amount;
  'chargeType': ChargeType;
  /*
    Estimated time to perform the task. EstimateMinutes has to be greater than 0 if provided.
  */
  'estimateMinutes'?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "name",
      "baseName": "name",
      "type": "string"
    },
    {
      "name": "rate",
      "baseName": "rate",
      "type": "Amount"
    },
    {
      "name": "chargeType",
      "baseName": "chargeType",
      "type": "ChargeType"
    },
    {
      "name": "estimateMinutes",
      "baseName": "estimateMinutes",
      "type": "number"
    }  ];

  static getAttributeTypeMap() {
    return TaskCreateOrUpdate.attributeTypeMap;
  }
}


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


export class TimeEntryCreateOrUpdate {
  /*
    The xero user identifier of the person logging the time.
  */
  'userId': string;
  /*
    Identifier of the task that time entry is logged against.
  */
  'taskId': string;
  /*
    Date time entry is logged on. UTC Date Time in ISO-8601 format.
  */
  'dateUtc': Date;
  /*
    Number of minutes to be logged. Duration is between 1 and 59940 inclusively.
  */
  'duration': number;
  /*
    An optional description of the time entry, will be set to null if not provided during update.
  */
  'description'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "userId",
      "baseName": "userId",
      "type": "string"
    },
    {
      "name": "taskId",
      "baseName": "taskId",
      "type": "string"
    },
    {
      "name": "dateUtc",
      "baseName": "dateUtc",
      "type": "Date"
    },
    {
      "name": "duration",
      "baseName": "duration",
      "type": "number"
    },
    {
      "name": "description",
      "baseName": "description",
      "type": "string"
    }  ];

  static getAttributeTypeMap() {
    return TimeEntryCreateOrUpdate.attributeTypeMap;
  }
}


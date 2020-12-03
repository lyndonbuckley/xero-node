/**
 * Xero Files API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.6.0
 * Contact: api@xero.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class Folder {
  /*
    The name of the folder
  */
  'name'?: string;
  /*
    The number of files in the folder
  */
  'fileCount'?: number;
  /*
    The email address used to email files to the inbox. Only the inbox will have this element.
  */
  'email'?: string;
  /*
    to indicate if the folder is the Inbox. The Inbox cannot be renamed or deleted.
  */
  'isInbox'?: boolean;
  /*
    Xero unique identifier for a folder  Files
  */
  'id'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "name",
      "baseName": "Name",
      "type": "string"
    },
    {
      "name": "fileCount",
      "baseName": "FileCount",
      "type": "number"
    },
    {
      "name": "email",
      "baseName": "Email",
      "type": "string"
    },
    {
      "name": "isInbox",
      "baseName": "IsInbox",
      "type": "boolean"
    },
    {
      "name": "id",
      "baseName": "Id",
      "type": "string"
    }  ];

  static getAttributeTypeMap() {
    return Folder.attributeTypeMap;
  }
}


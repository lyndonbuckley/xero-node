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


export class User {
  /*
    Xero identifier
  */
  'userID'?: string;
  /*
    Email address of user
  */
  'emailAddress'?: string;
  /*
    First name of user
  */
  'firstName': string;
  /*
    Last name of user
  */
  'lastName': string;
  /*
    Last name of user
  */
  'updatedDateUTC'?: Date;
  /*
    Boolean to indicate if user is the subscriber
  */
  'isSubscriber'?: boolean;
  /*
    Boolean to indicate if user is the subscriber
  */
  'organisationRole'?: User.OrganisationRoleEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "userID",
      "baseName": "UserID",
      "type": "string"
    },
    {
      "name": "emailAddress",
      "baseName": "EmailAddress",
      "type": "string"
    },
    {
      "name": "firstName",
      "baseName": "FirstName",
      "type": "string"
    },
    {
      "name": "lastName",
      "baseName": "LastName",
      "type": "string"
    },
    {
      "name": "updatedDateUTC",
      "baseName": "UpdatedDateUTC",
      "type": "Date"
    },
    {
      "name": "isSubscriber",
      "baseName": "IsSubscriber",
      "type": "boolean"
    },
    {
      "name": "organisationRole",
      "baseName": "OrganisationRole",
      "type": "User.OrganisationRoleEnum"
    }  ];

  static getAttributeTypeMap() {
    return User.attributeTypeMap;
  }
}

export namespace User {
  export enum OrganisationRoleEnum {
    READONLY = <any> 'READONLY',
    INVOICEONLY = <any> 'INVOICEONLY',
    STANDARD = <any> 'STANDARD',
    FINANCIALADVISER = <any> 'FINANCIALADVISER',
    MANAGEDCLIENT = <any> 'MANAGEDCLIENT',
    CASHBOOKCLIENT = <any> 'CASHBOOKCLIENT'
  }
}

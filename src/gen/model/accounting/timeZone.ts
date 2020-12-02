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


/**
* Timezone specifications
*/
export enum TimeZone {
    MOROCCOSTANDARDTIME = <any> 'MOROCCOSTANDARDTIME',
    UTC = <any> 'UTC',
    GMTSTANDARDTIME = <any> 'GMTSTANDARDTIME',
    GREENWICHSTANDARDTIME = <any> 'GREENWICHSTANDARDTIME',
    WEUROPESTANDARDTIME = <any> 'WEUROPESTANDARDTIME',
    CENTRALEUROPESTANDARDTIME = <any> 'CENTRALEUROPESTANDARDTIME',
    ROMANCESTANDARDTIME = <any> 'ROMANCESTANDARDTIME',
    CENTRALEUROPEANSTANDARDTIME = <any> 'CENTRALEUROPEANSTANDARDTIME',
    WCENTRALAFRICASTANDARDTIME = <any> 'WCENTRALAFRICASTANDARDTIME',
    NAMIBIASTANDARDTIME = <any> 'NAMIBIASTANDARDTIME',
    JORDANSTANDARDTIME = <any> 'JORDANSTANDARDTIME',
    GTBSTANDARDTIME = <any> 'GTBSTANDARDTIME',
    MIDDLEEASTSTANDARDTIME = <any> 'MIDDLEEASTSTANDARDTIME',
    EGYPTSTANDARDTIME = <any> 'EGYPTSTANDARDTIME',
    SYRIASTANDARDTIME = <any> 'SYRIASTANDARDTIME',
    EEUROPESTANDARDTIME = <any> 'EEUROPESTANDARDTIME',
    SOUTHAFRICASTANDARDTIME = <any> 'SOUTHAFRICASTANDARDTIME',
    FLESTANDARDTIME = <any> 'FLESTANDARDTIME',
    TURKEYSTANDARDTIME = <any> 'TURKEYSTANDARDTIME',
    ISRAELSTANDARDTIME = <any> 'ISRAELSTANDARDTIME',
    KALININGRADSTANDARDTIME = <any> 'KALININGRADSTANDARDTIME',
    LIBYASTANDARDTIME = <any> 'LIBYASTANDARDTIME',
    ARABICSTANDARDTIME = <any> 'ARABICSTANDARDTIME',
    ARABSTANDARDTIME = <any> 'ARABSTANDARDTIME',
    BELARUSSTANDARDTIME = <any> 'BELARUSSTANDARDTIME',
    RUSSIANSTANDARDTIME = <any> 'RUSSIANSTANDARDTIME',
    EAFRICASTANDARDTIME = <any> 'EAFRICASTANDARDTIME',
    IRANSTANDARDTIME = <any> 'IRANSTANDARDTIME',
    ARABIANSTANDARDTIME = <any> 'ARABIANSTANDARDTIME',
    AZERBAIJANSTANDARDTIME = <any> 'AZERBAIJANSTANDARDTIME',
    RUSSIATIMEZONE3 = <any> 'RUSSIATIMEZONE3',
    MAURITIUSSTANDARDTIME = <any> 'MAURITIUSSTANDARDTIME',
    GEORGIANSTANDARDTIME = <any> 'GEORGIANSTANDARDTIME',
    CAUCASUSSTANDARDTIME = <any> 'CAUCASUSSTANDARDTIME',
    AFGHANISTANSTANDARDTIME = <any> 'AFGHANISTANSTANDARDTIME',
    WESTASIASTANDARDTIME = <any> 'WESTASIASTANDARDTIME',
    EKATERINBURGSTANDARDTIME = <any> 'EKATERINBURGSTANDARDTIME',
    PAKISTANSTANDARDTIME = <any> 'PAKISTANSTANDARDTIME',
    INDIASTANDARDTIME = <any> 'INDIASTANDARDTIME',
    SRILANKASTANDARDTIME = <any> 'SRILANKASTANDARDTIME',
    NEPALSTANDARDTIME = <any> 'NEPALSTANDARDTIME',
    CENTRALASIASTANDARDTIME = <any> 'CENTRALASIASTANDARDTIME',
    BANGLADESHSTANDARDTIME = <any> 'BANGLADESHSTANDARDTIME',
    NCENTRALASIASTANDARDTIME = <any> 'NCENTRALASIASTANDARDTIME',
    MYANMARSTANDARDTIME = <any> 'MYANMARSTANDARDTIME',
    SEASIASTANDARDTIME = <any> 'SEASIASTANDARDTIME',
    NORTHASIASTANDARDTIME = <any> 'NORTHASIASTANDARDTIME',
    CHINASTANDARDTIME = <any> 'CHINASTANDARDTIME',
    NORTHASIAEASTSTANDARDTIME = <any> 'NORTHASIAEASTSTANDARDTIME',
    SINGAPORESTANDARDTIME = <any> 'SINGAPORESTANDARDTIME',
    WAUSTRALIASTANDARDTIME = <any> 'WAUSTRALIASTANDARDTIME',
    TAIPEISTANDARDTIME = <any> 'TAIPEISTANDARDTIME',
    ULAANBAATARSTANDARDTIME = <any> 'ULAANBAATARSTANDARDTIME',
    TOKYOSTANDARDTIME = <any> 'TOKYOSTANDARDTIME',
    KOREASTANDARDTIME = <any> 'KOREASTANDARDTIME',
    YAKUTSKSTANDARDTIME = <any> 'YAKUTSKSTANDARDTIME',
    CENAUSTRALIASTANDARDTIME = <any> 'CENAUSTRALIASTANDARDTIME',
    AUSCENTRALSTANDARDTIME = <any> 'AUSCENTRALSTANDARDTIME',
    EAUSTRALIASTANDARDTIME = <any> 'EAUSTRALIASTANDARDTIME',
    AUSEASTERNSTANDARDTIME = <any> 'AUSEASTERNSTANDARDTIME',
    WESTPACIFICSTANDARDTIME = <any> 'WESTPACIFICSTANDARDTIME',
    TASMANIASTANDARDTIME = <any> 'TASMANIASTANDARDTIME',
    MAGADANSTANDARDTIME = <any> 'MAGADANSTANDARDTIME',
    VLADIVOSTOKSTANDARDTIME = <any> 'VLADIVOSTOKSTANDARDTIME',
    RUSSIATIMEZONE10 = <any> 'RUSSIATIMEZONE10',
    CENTRALPACIFICSTANDARDTIME = <any> 'CENTRALPACIFICSTANDARDTIME',
    RUSSIATIMEZONE11 = <any> 'RUSSIATIMEZONE11',
    NEWZEALANDSTANDARDTIME = <any> 'NEWZEALANDSTANDARDTIME',
    UTC12 = <any> 'UTC+12',
    UTC13 = <any> 'UTC+13',
    FIJISTANDARDTIME = <any> 'FIJISTANDARDTIME',
    KAMCHATKASTANDARDTIME = <any> 'KAMCHATKASTANDARDTIME',
    TONGASTANDARDTIME = <any> 'TONGASTANDARDTIME',
    SAMOASTANDARDTIME = <any> 'SAMOASTANDARDTIME',
    LINEISLANDSSTANDARDTIME = <any> 'LINEISLANDSSTANDARDTIME',
    AZORESSTANDARDTIME = <any> 'AZORESSTANDARDTIME',
    CAPEVERDESTANDARDTIME = <any> 'CAPEVERDESTANDARDTIME',
    UTC02 = <any> 'UTC02',
    MIDATLANTICSTANDARDTIME = <any> 'MIDATLANTICSTANDARDTIME',
    ESOUTHAMERICASTANDARDTIME = <any> 'ESOUTHAMERICASTANDARDTIME',
    ARGENTINASTANDARDTIME = <any> 'ARGENTINASTANDARDTIME',
    SAEASTERNSTANDARDTIME = <any> 'SAEASTERNSTANDARDTIME',
    GREENLANDSTANDARDTIME = <any> 'GREENLANDSTANDARDTIME',
    MONTEVIDEOSTANDARDTIME = <any> 'MONTEVIDEOSTANDARDTIME',
    BAHIASTANDARDTIME = <any> 'BAHIASTANDARDTIME',
    NEWFOUNDLANDSTANDARDTIME = <any> 'NEWFOUNDLANDSTANDARDTIME',
    PARAGUAYSTANDARDTIME = <any> 'PARAGUAYSTANDARDTIME',
    ATLANTICSTANDARDTIME = <any> 'ATLANTICSTANDARDTIME',
    CENTRALBRAZILIANSTANDARDTIME = <any> 'CENTRALBRAZILIANSTANDARDTIME',
    SAWESTERNSTANDARDTIME = <any> 'SAWESTERNSTANDARDTIME',
    PACIFICSASTANDARDTIME = <any> 'PACIFICSASTANDARDTIME',
    VENEZUELASTANDARDTIME = <any> 'VENEZUELASTANDARDTIME',
    SAPACIFICSTANDARDTIME = <any> 'SAPACIFICSTANDARDTIME',
    EASTERNSTANDARDTIME = <any> 'EASTERNSTANDARDTIME',
    USEASTERNSTANDARDTIME = <any> 'USEASTERNSTANDARDTIME',
    CENTRALAMERICASTANDARDTIME = <any> 'CENTRALAMERICASTANDARDTIME',
    CENTRALSTANDARDTIME = <any> 'CENTRALSTANDARDTIME',
    CENTRALSTANDARDTIMEMEXICO = <any> 'CENTRALSTANDARDTIME(MEXICO)',
    CANADACENTRALSTANDARDTIME = <any> 'CANADACENTRALSTANDARDTIME',
    USMOUNTAINSTANDARDTIME = <any> 'USMOUNTAINSTANDARDTIME',
    MOUNTAINSTANDARDTIMEMEXICO = <any> 'MOUNTAINSTANDARDTIME(MEXICO)',
    MOUNTAINSTANDARDTIME = <any> 'MOUNTAINSTANDARDTIME',
    PACIFICSTANDARDTIMEMEXICO = <any> 'PACIFICSTANDARDTIME(MEXICO)',
    PACIFICSTANDARDTIME = <any> 'PACIFICSTANDARDTIME',
    ALASKANSTANDARDTIME = <any> 'ALASKANSTANDARDTIME',
    HAWAIIANSTANDARDTIME = <any> 'HAWAIIANSTANDARDTIME',
    UTC11 = <any> 'UTC11',
    DATELINESTANDARDTIME = <any> 'DATELINESTANDARDTIME'
}

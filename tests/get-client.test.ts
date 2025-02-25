import { expect, test, describe, jest } from '@jest/globals'
import getClient from '../src/get-client';

jest.mock('../clients', () => ({
    __esModule: true,
    cyClient: {
        isAvailableInWelsh: true,
        translations: {
            en: {
                header: 'header en',
                linkText: 'link text en',
                linkUrl: 'link url en',
            },
            cy: {
                header: 'header cy',
                linkText: 'link text cy',
                linkUrl: {
                    production: 'link url cy production',
                    nonProduction: 'link url cy non production'
                },
            }
        },
        clientId: {
            "production": "welshClientProd",
            "nonProduction": "welshClientNonProd"
        },
        clientType: 'account',
        isAllowed: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true
    },
    enClient: {
        isAvailableInWelsh: false,
        translations: {
            en: {
                header: 'header en',
                linkText: 'link text en',
                linkUrl: 'link url en',
                description: 'description en'
            },
        },
        clientId: 'englishClient',
        clientType: 'account',
        isAllowed: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true
    },
    hmrcClient: {
        isAvailableInWelsh: false,
        translations: {
            en: {
                header: 'header en',
                linkText: 'link text en',
                linkUrl: 'link url en',
                description: 'description en',
                hintText: 'hint text en',
                paragraph1: 'paragraph 1 en',
                paragraph2: 'paragraph 2 en'
            },
        },
        clientId: 'englishClient',
        clientType: 'account',
        isAllowed: true,
        isHmrc: false,
        isReportSuspiciousActivityEnabled: false,
        showInClientSearch: true
    }
}));

describe('getClient', () => {
    test('should return the client object for the given clientId', () => {
        const client = getClient('test', "welshClientNonProd");
        expect(client).toEqual({
            "clientId": "welshClientNonProd",
            "clientType": "account",
            "isAllowed": true,
            "isAvailableInWelsh": true,
            "isHmrc": false,
            "isReportSuspiciousActivityEnabled": false,
            "showInClientSearch": true,
        });
    });

    test('should return correct environment values', () => {
        const client = getClient('production', "welshClientProd");
        expect(client).toEqual({
            "clientId": "welshClientProd",
            "clientType": "account",
            "isAllowed": true,
            "isAvailableInWelsh": true,
            "isHmrc": false,
            "isReportSuspiciousActivityEnabled": false,
            "showInClientSearch": true,
        });
    });
});
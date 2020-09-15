/**
 * @jest-environment node
 */
import { CONFIGS } from '../../configuration/config';
import { HttpRequest } from './http-request.service';

describe('test HttpRequest service', () => {


    test('returns correct absolute url', () => {
        const httpRequest = new HttpRequest();

        const testUrl1 = '/test-url-with-slash';
        const expectedAbsoluteUrl1 = CONFIGS.API_BASE_URL + testUrl1.substring(1);
        expect(httpRequest.getAbsoluteUrl(testUrl1)).toEqual(expectedAbsoluteUrl1);

        const testUrl2 = 'test-url-with-slash';
        const expectedAbsoluteUrl2 = CONFIGS.API_BASE_URL + testUrl2;
        expect(httpRequest.getAbsoluteUrl(testUrl2)).toEqual(expectedAbsoluteUrl2);
    });

    test(`get request fetches data from ${CONFIGS.API_BASE_URL}`, async () => {
        const httpRequest = new HttpRequest();

        const response = await httpRequest.get('/repos/facebook/react/issues');
        expect(response.data).toBeTruthy();
    });
})
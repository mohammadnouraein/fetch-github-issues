/**
 * @jest-environment node
 */
import { CONFIGS } from '../../configuration/config';
import { IssuesService } from './issues.service';
import { HttpRequest } from '../base/http-request.service';
import { Issue } from './issue';

describe('test IssuesService', () => {

    test(`get valid data from ${CONFIGS.API_BASE_URL}`, async () => {
        const httpRequest = new HttpRequest();
        const issuesService = new IssuesService();

        const expectedResponse = await httpRequest.get<Issue>(`/repos/${CONFIGS.REPOSITORY}/issues`);
        const issuesServiceResponse = await issuesService.getIssues(CONFIGS.REPOSITORY);
        let isResultValid = JSON.stringify(expectedResponse.data) === JSON.stringify(issuesServiceResponse.data)
        expect(isResultValid).toEqual(true);
    });
})
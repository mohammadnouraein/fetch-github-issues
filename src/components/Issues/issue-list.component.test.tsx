/**
 * @jest-environment node
 */
import React from 'react';
import { render } from '@testing-library/react';
import { IssueList } from './issue-list.component';
import { CONFIGS } from '../../configuration/config';
import { IssuesService, IssueState } from '../../services/issues/issues.service';
import { Issue } from '../../services/issues/issue';

describe('test issue item component', () => {
    let mockIssueList: Issue[];
    let issueState = IssueState.OPEN;
    beforeAll(async () => {
        const { data } = await new IssuesService().getIssues(CONFIGS.REPOSITORY, issueState);
        mockIssueList = data;
    });

    test('issues has been fetched', () => {
        expect(mockIssueList).toBeTruthy();
    });

    test('only issues with requested state is fetched', () => {
        expect(mockIssueList).toBeTruthy();
        const issuesWithOtherStates = mockIssueList.find(issue => issue.state != issueState);
        expect(issuesWithOtherStates).toBeFalsy();
    });
})
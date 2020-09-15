import React from 'react';
import { render, getByRole } from '@testing-library/react';
import { IssueItem } from './issue-item.component';
import { Issue } from '../../services/issues/issue';

describe('test issue item component', () => {
    let mockIssue = new Issue()
    beforeAll(() => {
        mockIssue.number = 121354;
        mockIssue.created_at='2020-09-14T20:42:09Z';
    });

    test('renders issue item', () => {
        const { getByRole } = render(<IssueItem issue={mockIssue} />);
        const linkElement = getByRole('issue-description');
        expect(linkElement).toHaveTextContent(`#${mockIssue.number}`);
    });
})
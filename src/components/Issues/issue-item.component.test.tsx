import React from 'react';
import { render } from '@testing-library/react';
import { IssueItem } from './issue-item.component';
import { Issue } from '../../services/issues/issue';

describe('test issue item component', () => {
    let mockIssue = new Issue()
    beforeAll(() => {
        mockIssue.id = 121354;
    });

    test('renders issue item', () => {
        const { getByText } = render(<IssueItem issue={mockIssue} />);
        const linkElement = getByText(`id: ${mockIssue.id}`);
        expect(linkElement).toBeInTheDocument();
    });
})
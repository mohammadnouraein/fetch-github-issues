import React, { FunctionComponent, useState, useEffect } from 'react';
import { IssuesService } from '../../services/issues/issues.service';
import { Issue } from '../../services/issues/issue';
import { IssueItem } from './issue-item.component';

type IssueListProps = {
    repository: string
}

export const IssueList: FunctionComponent<IssueListProps> = ({ repository }: IssueListProps) => {
    const [issues, setIssues] = useState<Issue[]>([]);

    useEffect(() => {
        const fetchIssues = async () => {
            let issues = await new IssuesService().getIssues(repository);
            setIssues(issues.data);
        };
        fetchIssues();
    }, []);

    return (
        <React.Fragment>
            {issues.map(issueItem =>
                <IssueItem key={issueItem.id} issue={issueItem} />
            )}
        </React.Fragment>
    );
}

export default IssueList;

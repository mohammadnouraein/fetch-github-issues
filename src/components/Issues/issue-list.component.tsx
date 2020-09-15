import React, { FunctionComponent, useState, useEffect } from 'react';
import { IssuesService } from '../../services/issues/issues.service';
import { Issue } from '../../services/issues/issue';
import { IssueItem } from './issue-item.component';
import List from '@material-ui/core/List';
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
    }, [repository]);

    return (
        <List>
            {issues.map(issueItem =>
                <IssueItem key={issueItem.id} issue={issueItem} />
            )}
        </List>
    );
}

export default IssueList;

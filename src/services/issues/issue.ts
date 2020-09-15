import { IssueLabel } from "./issue-label";
import { IssuePullRequest } from "./issue-pull-reques";
import { IssueUser } from "./issue-user";

export type Issue = {
    active_lock_reason?: string;
    assignee?: string;
    assignees?: any[];
    author_association?: string;
    body: string;
    closed_at?: string;
    comments: number
    comments_url: string;
    created_at: string;
    events_url: string;
    html_url: string;
    id: number;
    labels: IssueLabel[];
    labels_url: string;
    locked: boolean;
    milestone: string;
    node_id: string;
    number: number;
    performed_via_github_app?: string;
    pull_request: IssuePullRequest;
    repository_url: string;
    state: string;
    title: string;
    updated_at: string;
    url: string;
    user: IssueUser;
}
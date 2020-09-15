import { IssueLabel } from "./issue-label";
import { IssuePullRequest } from "./issue-pull-reques";
import { IssueUser } from "./issue-user";

export class Issue {
    public active_lock_reason?: string;
    public assignee?: string;
    public assignees?: any[];
    public author_association?: string;
    public body: string = "";
    public closed_at?: string;
    public comments: number = 0;
    public comments_url: string = '';
    public created_at: string = '';
    public events_url: string = '';
    public html_url: string = '';
    public id: number = 0;
    public labels: IssueLabel[] = [];
    public labels_url: string = '';
    public locked: boolean = false;
    public milestone: string = '';
    public node_id: string = '';
    public number: number = 0;
    public performed_via_github_app?: string;
    public pull_request?: IssuePullRequest;
    public repository_url: string = '';
    public state: string = '';
    public title: string = '';
    public updated_at: string = '';
    public url: string = '';
    public user?: IssueUser;
}
import { HttpRequest } from '../base/http-request.service';
import { AxiosResponse } from 'axios';
import { Issue } from './issue';
export enum IssueState {
    OPEN = 'open',
    CLOSED = 'closed',
    ALL = 'all'
}
export class IssuesService {
    private static http = new HttpRequest();

    public getIssues(repository: string, state?: IssueState) {
        return IssuesService.http.get<Issue>(`/repos/${repository}/issues?state=${state || IssueState.OPEN}`);
    }
}
import { HttpRequest } from '../base/http-request.service';
import { AxiosResponse } from 'axios';
import { Issue } from './issue';

export class IssuesService {
    private static http = new HttpRequest();

    public getIssues(repository: string) {
        return IssuesService.http.get<Issue>(`/repos/${repository}/issues?state=open`);
    }
}
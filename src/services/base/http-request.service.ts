import { CONFIGS } from '../../configuration/config';
import axios, { AxiosResponse } from 'axios';

export class HttpRequest {

    private startedWithSlash(path: string): boolean {
        return path.startsWith('/');
    }
    public getAbsoluteUrl(relativePath: string): string {
        let requestPath = CONFIGS.API_BASE_URL;
        requestPath += this.startedWithSlash(relativePath) ? relativePath.substring(1) : relativePath;
        return requestPath;
    }
    public get<T>(relativePath: string): Promise<AxiosResponse<T[]>> {
        return axios.get(this.getAbsoluteUrl(relativePath));
    }

}
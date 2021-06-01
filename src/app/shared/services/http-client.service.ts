import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { Environment } from "../../../environments/environment.interface";

export interface IHttpClient { 
    get: <T>(url: string) => Observable<T>;
    list: <T>(url: string) => Observable<T[]>;
    post: (url: string, params: {}) => Observable<any>;
    // delete: (url: string) => Observable<any>;
    // patch: (url: string) => Observable<any>;
    // put: (url: string) => Observable<any>;
};


Injectable({
    providedIn: 'root'
})
export class HttpClientService implements IHttpClient {
    private readonly baseAddress: string = (environment as Environment).restEndpoint;
    constructor(private readonly httpClient: HttpClient) { }

    /**
     * get method for getting record or data from the server
     */
    public get<T>(url: string): Observable<T> {
        return this.httpClient.get<T>(this.buildUrl(url));
    }

    /**
     * list method for fetching collection of data or records from the server
     */
    public list<T>(url: string): Observable<T[]> {
        return this.httpClient.get<T[]>(this.buildUrl(url));
    }

    /**
     * post method for posting data to the server
     */
    public post(url: string, params: {}): Observable<any> {
        return this.httpClient.post(this.buildUrl(url), params);
    }

    private buildUrl(url: string): string { 
        return `${this.baseAddress}/${url}`;
    }
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, share } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class AppService {
    constructor(private http: HttpClient) { }

    fetchData(): Observable<number> {
        const responseData = this.http.get(environment.baseUrl)
            .pipe(
                share(),
                map((response: number[]) => {
                    return response[0];
                })
            );
        return responseData
    }
}
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({providedIn: "root"})
export class HttpService {
	baseURL: string

	constructor(public httpClient: HttpClient) {
		this.baseURL = "hello"
	}
}

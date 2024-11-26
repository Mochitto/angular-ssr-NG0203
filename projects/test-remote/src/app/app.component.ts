import { Component } from "@angular/core"
import { RouterOutlet } from "@angular/router"
import { HttpService } from "@shared-library"

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
})
export class AppComponent {
	title = "reproduce-error"

	constructor(private httpService: HttpService) {
		console.log(this.httpService.baseURL)
	}
}

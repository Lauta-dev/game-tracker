import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { gamesList } from "../../games-list";
import { HttpClient } from "@angular/common/http";
import { LucideAngularModule } from "lucide-angular";
import { RouterLink } from "@angular/router";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { ChangeGameStatusService } from "../services/change-game-status.service";

@Component({
	selector: "app-home",
	imports: [
		CommonModule,
		LucideAngularModule,
		RouterLink,
		MatSelectModule,
		MatInputModule,
	],
	templateUrl: "./home.component.html",
	styleUrl: "./home.component.css",
})
export class HomeComponent {
	title = "game-tracker";
	games = gamesList;
	readonly FileIcon = File;

	constructor(
		private http: HttpClient,
		private changeGameStatusService: ChangeGameStatusService,
	) {
		this.changeGameStatusService.data$.subscribe((value) => {
			this.games = value;
		});
	}

	fetchGames() {
		this.http.get("https://api.rawg.io/api/games?api_key=");
		console.log("Fetching games");
	}
}

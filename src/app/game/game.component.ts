import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { filterGames, platforsColors, statusColors } from "../../const";
import { CommonModule } from "@angular/common";
import { GameService } from "../services/game-service.service";
import { infoGames } from "../../interface/info-games";
import { LocalGameTrackerService } from "../services/local-game-tracker.service";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@Component({
	selector: "app-game",
	imports: [CommonModule, MatButtonModule, MatMenuModule],
	templateUrl: "./game.component.html",
	styleUrl: "./game.component.css",
})
export class GameComponent implements OnInit {
	titleColor = statusColors[0];
	backgorundState = statusColors[0];

	id = 0;
	game: infoGames | null = null;
	loading = false;
	store = filterGames;
	statusMessage = "No Game";

	constructor(
		private router: ActivatedRoute,
		private gameService: GameService,
		private localGameTrackerService: LocalGameTrackerService,
	) {}

	ngOnInit(): void {
		this.router.queryParamMap.subscribe((p) => {
			this.id = Number(p.get("id")) || 0;
		});

		const games = this.localGameTrackerService.getGames();
		let existGame = false;
		let savesGamee: infoGames | {} = {};

		games.forEach((game) => {
			if (game.id === Number(this.id)) {
				existGame = true;
				savesGamee = game;
			}
		});

		if (existGame) {
			const d = savesGamee as infoGames;
			this.game = d;

			const { color, text } = filterGames.filter(
				(filter) => filter.value === d?.status || 0,
			)[0];

			this.backgorundState = color;
			this.statusMessage = text;
		} else {
			this.loading = true;
			this.gameService.getGameById(this.id).subscribe({
				next: (value) => {
					console.log(value);
					this.game = value[0];
				},
			});

			this.loading = false;
		}
	}

	changeStatus(i: unknown) {
		// TODO: Arreglar los typing
		const data = i as (typeof filterGames)[0];
		this.backgorundState = data.color;
		this.statusMessage = data.text;

		if (this.game) {
			this.localGameTrackerService.addGame(this.game.id, data.value, this.game);
		}
	}

	setPlatformColor(slug: string) {
		const p = slug as keyof typeof platforsColors;
		const color = platforsColors[p];
		return color;
	}
}

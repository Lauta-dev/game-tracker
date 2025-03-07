import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { filterGames, platforsColors, statusColors } from "../../const";
import { CommonModule, DatePipe } from "@angular/common";
import { GameService } from "../services/game-service.service";
import { infoGames } from "../../interface/info-games";
import { LocalGameTrackerService } from "../services/local-game-tracker.service";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { IconService } from "../services/icon.service";
import { GameStatusMenuComponent } from "../components/game-status-menu/game-status-menu.component";

@Component({
	selector: "app-game",
	imports: [
		CommonModule,
		MatButtonModule,
		MatMenuModule,
		MatIconModule,
		GameStatusMenuComponent,
	],
	templateUrl: "./game.component.html",
	styleUrl: "./game.component.css",
	providers: [IconService],
})
export class GameComponent implements OnInit {
	titleColor = statusColors[0];
	backgorundState = statusColors[0];
	menuTriggerButtonStyles = {
		"font-weight": "bold",
		color: "white",
		display: "flex",
		"align-items": "center",
	};

	id = 0;
	game: infoGames | null = null;
	loading = false;
	store = filterGames;
	statusMessage = { text: "Añadir", icon: "all" };

	constructor(
		private router: ActivatedRoute,
		private gameService: GameService,
		private localGameTrackerService: LocalGameTrackerService,
		private iconServices: IconService,
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
			console.log(d);

			const { color, text, icon } = filterGames.filter(
				(filter) => filter.value === d?.status || 0,
			)[0];

			this.backgorundState = color;
			this.statusMessage = { text, icon };
			console.log({ text, icon });
		} else {
			this.loading = true;
			this.gameService.getGameById(this.id).subscribe({
				next: (value) => {
					console.log(value);
					const setDate = new Date(value[0].releaseDate * 1000);
					this.game = { ...value[0], releaseDate: setDate.getFullYear() };
				},
			});

			this.loading = false;
		}
	}

	changeStatus(i: unknown) {
		// TODO: Arreglar los typing
		const { icon, text, color, value } = i as (typeof filterGames)[0];
		this.backgorundState = color;
		this.statusMessage = { text, icon };

		if (this.game) {
			this.localGameTrackerService.addGame(this.game.id, value, this.game);
		}
	}

	setPlatformColor(slug: string) {
		const p = slug as keyof typeof platforsColors;
		const color = platforsColors[p];
		return color;
	}
}

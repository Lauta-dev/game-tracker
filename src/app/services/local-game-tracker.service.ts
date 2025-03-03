import { Injectable } from "@angular/core";
import { infoGames } from "../../interface/info-games";

@Injectable({
	providedIn: "root",
})
export class LocalGameTrackerService {
	private storageName = "game";

	constructor() {
		if (!localStorage.getItem(this.storageName)) {
			localStorage.setItem(this.storageName, JSON.stringify([]));
		}
	}

	getGames(): infoGames[] {
		return JSON.parse(localStorage.getItem(this.storageName) || "[]");
	}

	setGames(games: infoGames[]) {
		localStorage.setItem(this.storageName, JSON.stringify(games));
	}

	addGame(id: number, status: number, game: infoGames) {
		const gameArray = this.getGames();
		let existGame = false;

		gameArray.forEach((game) => {
			if (game.id === id) {
				game.status = status;
				existGame = true;
			}
		});

		if (!existGame) {
			gameArray.push({
				...game,
				status: status,
			});
		}

		this.setGames(gameArray);
	}

	removeGame(id: number) {
		const games = this.getGames();
		const newGames = games.filter((game) => game.id !== id);
		this.setGames(newGames);
	}

	removeAllGames() {
		this.setGames([]);
	}
}

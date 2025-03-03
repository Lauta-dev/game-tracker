import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalGameTrackerService } from "./local-game-tracker.service";

@Injectable({
	providedIn: "root",
})
export class ChangeGameStatusService {
	private data = new BehaviorSubject<any[]>([]);
	data$ = this.data.asObservable();

	constructor(private localGameTracker: LocalGameTrackerService) {
		const { games } = this.filter(0);
		this.data.next(games);
	}

	private filter(fil: number) {
		const games = this.localGameTracker.getGames();
		return {
			results: games.filter((game) => game.status === fil),
			games,
		};
	}

	change(filter: number) {
		const { results, games } = this.filter(filter);

		// No pasar el valor así, usar una variable externa
		this.data.next(filter === 4 ? games : results);
	}
}

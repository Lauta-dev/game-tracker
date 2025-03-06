import { HttpClient } from "@angular/common/http";
import { Injectable, isDevMode } from "@angular/core";
import { infoGames } from "../../interface/info-games";

@Injectable({
	providedIn: "root",
})
export class GameService {
	private readonly url = isDevMode()
		? "http://localhost:3000/"
		: "https://game-tracker-proxy.vercel.app/";
	private urlSearchGames = this.url + "search";
	public data: infoGames[] = [];

	constructor(private http: HttpClient) {}

	searchGames(query: string) {
		return this.http.get(this.urlSearchGames + "?name=" + query);
	}

	getGameById(id: number) {
		return this.http.get<infoGames[]>(this.url + "games?id=" + id);
	}
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { infoGames } from "../../interface/info-games";

@Injectable({
	providedIn: "root",
})
export class GameService {
	private url = "https://game-tracker-proxy.vercel.app/";
	private urlSearchGames = this.url + "search";
	public data: any = [];

	constructor(private http: HttpClient) {}

	searchGames(query: string) {
		return this.http.get(this.urlSearchGames + "?name=" + query);
	}

	getGameById(id: number) {
		return this.http.get<infoGames[]>(
			"https://game-tracker-proxy.vercel.app/games?id=" + id,
		);
	}
}

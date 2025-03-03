import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { infoGames } from "../../interface/info-games";

@Injectable({
	providedIn: "root",
})
export class GameService {
	private url = "http://localhost:3000/";
	private urlSearchGames = this.url + "search";
	public data: any = [];

	constructor(private http: HttpClient) {}

	searchGames(query: string) {
		return this.http.get(this.urlSearchGames + "?name=" + query);
	}

	getGameById(id: number) {
		return this.http.get<infoGames[]>("http://localhost:3000/games?id=" + id);
	}
}

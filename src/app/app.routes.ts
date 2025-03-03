import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { SearchComponent } from "./search/search.component";

export const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full",
	},
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "game",
		component: GameComponent,
	},
	{
		path: "search",
		component: SearchComponent,
	},
];

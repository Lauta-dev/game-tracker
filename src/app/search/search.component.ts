import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
} from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { GameService } from "../services/game-service.service";
import { RouterLink } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";

@Component({
	selector: "app-search",
	imports: [
		ReactiveFormsModule,
		FormsModule,
		MatFormFieldModule,
		MatInputModule,
		CommonModule,
		RouterLink,
		MatButtonModule,
	],
	templateUrl: "./search.component.html",
	styleUrl: "./search.component.css",
})
export class SearchComponent {
	profileForm = new FormGroup({
		query: new FormControl(""),
	});

	games: any = [];

	constructor(private gameService: GameService) {}

	submit() {
		console.log("submit");
		const q = this.profileForm.get("query")?.value || "";
		this.gameService.searchGames(q).subscribe({
			next: (v) => (this.games = v),
		});
	}
}

import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink, RouterOutlet } from "@angular/router";
import { MatMenuModule } from "@angular/material/menu";
import { ChangeGameStatusService } from "./services/change-game-status.service";
import { gamesStatus } from "../const";
import { CommonModule } from "@angular/common";
import { Filter, House, LucideAngularModule, Search } from "lucide-angular";
import { IconService } from "./services/icon.service";
import { DomSanitizer } from "@angular/platform-browser";
import { GameStatusMenuComponent } from "./components/game-status-menu/game-status-menu.component";

@Component({
	selector: "app-root",
	imports: [
		RouterOutlet,
		MatButtonModule,
		MatMenuModule,
		MatFormFieldModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		CommonModule,
		LucideAngularModule,
		RouterLink,
		GameStatusMenuComponent,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
	providers: [IconService],
})
export class AppComponent {
	store = gamesStatus;
	title = "Juegos";
	currentStatus = 4;
	currentStatusColor = "";

	readonly filter = Filter;
	readonly footerOptions = [
		{
			field: "Home",
			path: "/home",
			icon: House,
		},
		{
			field: "Buscar",
			path: "/search",
			icon: Search,
		},
	];
	constructor(
		private changeGameStatusService: ChangeGameStatusService,
		private iconService: IconService,
	) {}

	setMenuBackground(i: number) {
		return i === this.currentStatus ? this.currentStatusColor : "#000000";
	}

	getMenu(data: number) {
		const newTitle = this.store.filter(
			(filter) => filter.value === data || 0,
		)[0];

		if (data === 4) {
			this.title = `${newTitle.text} los juegos`;
		}

		this.title = `juegos ${newTitle.text}`;

		console.log(data);
		this.changeGameStatusService.change(data);

		this.currentStatus = newTitle.value;
		this.currentStatusColor = newTitle.color;
	}
}

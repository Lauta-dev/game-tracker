import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { IconService } from "../../services/icon.service";

@Component({
	selector: "app-game-status-menu",
	imports: [
		MatButtonModule,
		MatMenuModule,
		MatFormFieldModule,
		MatToolbarModule,
		MatIconModule,
		CommonModule,
	],
	templateUrl: "./game-status-menu.component.html",
	styleUrl: "./game-status-menu.component.css",
  providers: [IconService],
})
export class GameStatusMenuComponent {
	@Input() elements: any;

  constructor(private iconService: IconService) { }

}

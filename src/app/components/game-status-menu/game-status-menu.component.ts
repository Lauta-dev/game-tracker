import { CommonModule } from "@angular/common";
import {
	Component,
	EventEmitter,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { IconService } from "../../services/icon.service";
import { filterGames, gamesStatus } from "../../../const";
import { GameFilter } from "../../../interface/filterGames";

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
export class GameStatusMenuComponent implements OnChanges {
	constructor(private iconService: IconService) {}
	@Input() elements: any[] = [];
	@Input() menuTriggerButtonStyles: { [key: string]: string } = {};
	@Output() sendedValue = new EventEmitter<any>();
	defaultMenuTriggerButtonStyles = {
		display: "flex",
		"justify-content": "center",
		"align-items": "center",
		color: "white",
	};

	ngOnChanges(changes: SimpleChanges) {
		if (changes["menuTriggerButtonStyles"]) {
			this.defaultMenuTriggerButtonStyles = {
				...this.defaultMenuTriggerButtonStyles,
				...this.menuTriggerButtonStyles,
			};
		}
	}

	action(i: any) {
		this.sendedValue.emit(i);
	}
}

import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
	providedIn: "root",
})
export class IconService {
	constructor(
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer,
	) {
		this.registerIcons();
	}

	readonly icons = [
		"clock",
		"circle-check",
		"circle-x",
		"circle-alert",
		"circle-plus",
		"list",
	];

	private registerIcons() {
			this.iconRegistry.addSvgIcon(
				"list",
				this.sanitizer.bypassSecurityTrustResourceUrl(`assets/list.svg`),
			);
	}
}

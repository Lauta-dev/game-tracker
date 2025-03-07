import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
	providedIn: "root",
})
export class IconService {
	readonly icons = [
		"clock",
		"circle-check",
		"circle-x",
		"circle-alert",
		"circle-plus",
		"list",
	];

	constructor(
		private iconRegistry: MatIconRegistry,
		private sanitizer: DomSanitizer,
	) {
		this.icons.forEach((i) =>
			this.iconRegistry.addSvgIcon(
				i,
				this.sanitizer.bypassSecurityTrustResourceUrl(`icons/${i}.svg`),
			),
		);
	}
}

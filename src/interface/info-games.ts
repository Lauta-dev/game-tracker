export interface infoGames {
	id: number;
	cover: Cover;
	releaseDate: number;
	name: string;
	platforms: Platform[];
	summary: string;
	status?: number;
	companies?: Company;
}

export interface Company {
	developer: string;
}

export interface Cover {
	id: number;
	url: string;
}

export interface Platform {
	id: number;
	name: string;
	platform_family?: Platform;
	slug: string;
}

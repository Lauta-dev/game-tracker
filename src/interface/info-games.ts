export interface infoGames{
	id: number;
	cover: Cover;
	first_release_date: number;
	name: string;
	platforms: Platform[];
	summary: string;
	status?: number;
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

export const url = "https://api.rawg.io/api/";

// 0 - No hay estado
// 1 - En progreso
// 2 - Completado
// 3 - Cancelado
// 4 - Pendinte
export const statusColors = {
	0: "#6c757d",
	1: "#007bff",
	2: "#28a745",
	3: "#dc3545",
	4: "#ffc107",
};

export const filterGames = [
	{
		text: "En Progreso",
		value: 0,
		color: statusColors[1],
	},
	{
		text: "Terminado",
		value: 1,
		color: statusColors[2],
	},
	{
		text: "Cancelado",
		value: 2,
		color: statusColors[3],
	},
	{
		text: "Pendiente",
		value: 3,
		color: statusColors[4],
	},
];

export const gamesStatus = [
	{ text: "Todos", value: 4, color: statusColors[0] },
	...filterGames,
];

export const platforsColors = {
	playstation: "#003791", // Azul
	xbox: "#107C10", // Verde
	nintendo: "#E60012", // Rojo
	sega: "#0089CF", // Azul claro
	atari: "#E60012", // Rojo oscuro
	snk_neogeo: "#FFC107", // Amarillo
	steam_deck: { primary: "#1b2838", secondary: "#171a21" }, // Azul y negro
	windows: "#0078D6", // Azul
	win: "#0078D6", // Azul
	linux: "#F16020", // Naranja
	mac: "#A3AAAE", // Gris
};

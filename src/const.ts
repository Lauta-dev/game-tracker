import { Check, CircleAlert, CircleX, Clock4, List } from "lucide-angular";

export const url = "https://api.rawg.io/api/";

const icons = [
	"clock",
	"circle-check",
	"circle-x",
	"circle-alert",
	"circle-plus",
	"list",
];

const iconsStatus = {
	inProgress: icons[0],
	finished: icons[1],
	canceled: icons[2],
	pending: icons[3],
	completed: icons[4],
	all: icons[5],
};

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
		icon: iconsStatus.inProgress,
	},
	{
		text: "Terminado",
		value: 1,
		color: statusColors[2],
		icon: iconsStatus.finished,
	},
	{
		text: "Cancelado",
		value: 2,
		color: statusColors[3],
		icon: iconsStatus.canceled,
	},
	{
		text: "Pendiente",
		value: 3,
		color: statusColors[4],
		icon: iconsStatus.pending,
	},
];

export const gamesStatus = [
	{ text: "Todos", value: 4, color: statusColors[0], icon: iconsStatus.all },
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

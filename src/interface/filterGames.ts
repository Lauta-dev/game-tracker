export interface GameFilter {
	text: string;
	value: number;
	color: string; // Asumiendo que los colores son strings (hex, rgb, etc.)
	icon: string; // Asumiendo que los íconos son componentes de React
}

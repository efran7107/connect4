import {Slot} from "../types/object-types.ts";

export const createGameboard = ():Slot[] => {
	const gameboard: Slot[] = []
	for(let col = 0; col < 6; col++) {
		const letter = String.fromCharCode(65 + col)
		for(let row = 0; row < 7; row++){
				gameboard.push({
					id: row + letter,
					loc: [row, col]
				})
		}
	}
	return gameboard
}
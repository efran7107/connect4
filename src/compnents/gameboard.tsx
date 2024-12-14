import {useUser} from "../ts/provider-context.ts";
import '../styles/gameboard.css'

export const Gameboard = () => {
	const {name, gameboard} = useUser()
	const rowNums = [1,2,3,4,5,6,7]

	return(
		<div className="game-container">
			<div className="names-cont">
				<h3>{name}</h3>
				<h3>CPU</h3>
			</div>
			<div className="gameboard">
				{rowNums.map(rowNum => <p
					className='row-selection'
					key={rowNum} id={rowNum.toString()}
				>
					{rowNum}
				</p>)}
				{gameboard.map((slot) => <div className='slot' key={slot.id}></div>)}
			</div>
		</div>
	)
}
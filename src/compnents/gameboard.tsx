import {useUser} from "../ts/provider-context.ts";
import '../styles/gameboard.css'

export const Gameboard = () => {
	const {name, gameboard} = useUser()
	return(
		<div className="game-container">
			<div className="names-cont">
				<h3>{name}</h3>
				<h3>CPU</h3>
			</div>
			<div className="gameboard">
				{gameboard.map((slot) => <div className='slot' key={slot.id}></div>)}
			</div>
		</div>
	)
}
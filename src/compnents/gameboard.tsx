import {useUser} from "../ts/provider-context.ts";


export const Gameboard = () => {
	const {name} = useUser()
	return(
		<div className="game-container">
			<div className="names-cont">
				<h3>{name}</h3>
				<h3>CPU</h3>
			</div>
			<div className="gameboard">
			
			</div>
		</div>
	)
}
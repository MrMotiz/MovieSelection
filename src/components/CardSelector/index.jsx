import {Card, CardContainer,Overlay} from "./styles";
import {firstSelection, grayManOption, blondeOption, thirdPage } from "../../assets/MovieCovers";
import {useState} from "react";

function CardSelector(props){
	const [selection, setSelection] = useState([...firstSelection]);
	const {setQuestion} = props;
	const {setText} = props;
	const {setImdb} = props;

	// function resetStatus(){
	// 	setSelection(firstSelection);
	// 	setQuestion(1);
	// 	setText("Choose one of the three movies");
	// }

	function handleClick(title, imdb){
		if(title === "The Gray Man"){
			setSelection(grayManOption);
			setQuestion(2);
			setText("Which one do you like the most?")
		} else if (title === "Blonde"){
			setSelection(blondeOption);
			setQuestion(2);
			setText("Which one do you like the most?")
		} else if (title === "Minions - The rise of gru"){
			console.log("Nothing to see here");
		} else {
			setSelection(thirdPage);
			setQuestion(3);
			setText("Which one do you want to watch now?");
			setImdb(imdb);
		}
	}

    return(
        //<>
            <ul>
				{selection.map((elem, count) => {
					return (
						<CardContainer key={count}>
                            <Card src={elem.cover} alt={elem.title} />
							<Overlay onClick={()=> handleClick(elem.title, elem.imdb)}/>
						</CardContainer>
					);
				})}
			</ul>
		// 	<button onClick={()=> resetStatus()}>Restart</button>
        // </>

    )
}

export {CardSelector};
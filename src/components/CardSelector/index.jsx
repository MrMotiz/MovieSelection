import {Card, CardContainer,Overlay} from "./styles";
import {firstSelection, grayManOption, blondeOption,minionsOption, thirdPage } from "../../assets/MovieCovers";
import {useState} from "react";

function MovieSelector(props){
	const [selection, setSelection] = useState([...firstSelection]);
	const {question, setQuestion} = props;
	const {setText} = props;
	const {setImdb} = props;

	function handleClick(title, imdb){
		if(title === "The Gray Man" && question === 1){
			setSelection(grayManOption);
			nextCardSelector();
		} else if (title === "Blonde" && question === 1){
			setSelection(blondeOption);
			nextCardSelector();
		} else if (title === "Minions - The rise of gru" && question === 1){
			setSelection(minionsOption);
			nextCardSelector();
		} else {
			setSelection(thirdPage);
			setQuestion(3);
			setText("Which one do you want to watch now?");
			setImdb(imdb);
		}
	}
	function nextCardSelector(){
		setQuestion(2);
		setText("Which one do you like the most?")
	}

    return(
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
    )
}

export {MovieSelector};
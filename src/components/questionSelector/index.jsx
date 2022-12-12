import {Questions, RadioButton} from "./styles";

function QuestionSelector(props){
    const {question} = props;

    return(
            <Questions>Question {question} of 3 :
                <RadioButton>
                    <input type="radio" checked={question === 1 ? true: false}/>
                    <input type="radio" checked={question === 2 ? true: false}/>
                    <input type="radio" checked={question === 3 ? true: false}/>
                </RadioButton>
            </Questions> 
    )
}

export{QuestionSelector};
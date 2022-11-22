import {Ques, Radio} from "./styles";

function Question(props){

    const {question} = props;
    return(
        <>
            <Ques>Question {question} of 3 :
                <Radio>
                    <input type="radio" checked={question === 1 ? true: false}/>
                    <input type="radio" checked={question === 2 ? true: false}/>
                    <input type="radio" checked={question === 3 ? true: false}/>
                </Radio>
            </Ques>
            </>
    )
}

export{Question};
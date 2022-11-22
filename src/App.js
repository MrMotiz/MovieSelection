import {MainContainer} from "./styles";
import {CardSelector, Logo, Question, Footer, WatchMovie} from "./components";
import {useState} from "react";

function App() {
  let [question, setQuestion] = useState(1);
  let [text, setText] = useState("Choose one of the three movies");
  let [imdb, setImdb] = useState();

  return (
    <MainContainer>
        <Logo>Your Logo</Logo>
        {imdb === undefined ? 
        <>
        <Question question={question}/>
        <h1>{text}</h1>
        <CardSelector question={question} setQuestion={setQuestion} text={text} setText={setText}  setImdb={setImdb}/>
        </>
        : <WatchMovie imdb={imdb}/>
      
      }
      <Footer/>
    </MainContainer>
  );
}

export {App};

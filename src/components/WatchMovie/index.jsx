import {Watch, Button} from "./styles";

function WatchMovie(props){
    const {imdb} = props;
    return(
        <Watch>
            <h1>WATCH NEW MOVIES FOR FREE!</h1>
            <p>Watch any movies online for free without ads!</p>
            <p>Have fun watching your favourite movies!</p>
            <Button><a href={imdb} target="_blank" rel="noreferrer">WATCH HERE!</a></Button>
        </Watch>
    )
}

export {WatchMovie};
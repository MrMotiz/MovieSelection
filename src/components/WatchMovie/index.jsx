import {WatchMoreMenu, WatchMoreButton} from "./styles";

function WatchMovie(props){
    const {imdb} = props;

    function handleClick(){
        window.location.href= imdb;
    }

    return(
        <WatchMoreMenu>
            <h1>WATCH NEW MOVIES FOR FREE!</h1>
            <p>Watch any movies online for free without ads!</p>
            <p>Have fun watching your favourite movies!</p>
            <WatchMoreButton onClick={()=>handleClick()}>WATCH HERE!</WatchMoreButton>
        </WatchMoreMenu>
    )
}

export {WatchMovie};
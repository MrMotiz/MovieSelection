import {WatchMoreMenu,Title,SecondTitle, WatchMoreButton} from "./styles";

function WatchMovie(props){
    const {imdb} = props;

    return(
        <WatchMoreMenu>
            <Title>WATCH NEW MOVIES FOR FREE!</Title>
            <SecondTitle>Watch any movies online for free without ads!</SecondTitle>
            <SecondTitle>Have fun watching your favourite movies!</SecondTitle>
            <WatchMoreButton onClick={()=>window.location.href= imdb}>WATCH HERE!</WatchMoreButton>
        </WatchMoreMenu>
    )
}

export {WatchMovie};
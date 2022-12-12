import styled from "styled-components";

const WatchMoreMenu = styled.div`
    width: 684px;
    height: 364px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    color: black;
    border-radius: 10px;
    border: 10px solid #22DAA8;
    h1{
        color: #22DAA8;
    }
    p{
        font-size: 25px;
    }
`;

const WatchMoreButton = styled.button`
    height: 83px;
    width: 90%;
    border: none;
    background: #EC5632;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    text-decoration: none;
    color: white;
    font-size: 32px;
    cursor: pointer;
    :hover{
        background: #fe3f11;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }
`;


export {WatchMoreMenu, WatchMoreButton}
import styled from "styled-components";


const Ques = styled.h1`
    width: 300px;
    background: white;
    border-radius: 10px;
    height: 100px;
    color: #22DAA8;
    display:flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const Radio = styled.div`
    margin-top:5px;
    color: #22DAA8;
    background: white;
    scale: 1.5;
    input{
        -webkit-appearance:none;
        margin: 0 5px;
        width:20px;
        height:20px;
        border-radius:50%;
        outline:none;
        border: 2px solid #22DAA8;
    &:before{
        content:'';
        display:block;
        width:100%;
        height:100%;
        border-radius:50%;
    }   
    &:checked:before{
        background:#22DAA8;
    }
    }
`;

export {Ques, Radio};
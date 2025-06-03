import styled from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #fff'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)' : 'transparent'} ;
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover{
        opacity: 0.8;
        background: ${props => props.theme === 'primary' ? '' : '#fff'};
        color: ${props => props.theme === 'primary' ? '' : '#000'};
        border: ${props => props.theme === 'primary' ? '' : '2px solid #000'};
        transition: 0.5s ease-in-out;
    }

    &:active{
        opacity: 0.5;
        transition: 0ms ease-in-out;
    }
`;
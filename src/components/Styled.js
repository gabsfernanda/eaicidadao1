import styled from 'styled-components';

export const BtnDeFauIcons = styled.div`
    
    display:flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    mardin-bottom: 15px;
    transition: 0.4s;

    &:hover{
        background-color: #ccc;
    }

    .center{
        text-align: center;
        width: 100%;
    }
`;

export const BtnDeFau = styled(BtnDeFauIcons)`
     
     background-color: #7d2ae8;
     color: #fff;
     display: inline;

     &:hover{
         background-color: #4e129c;
     }
`;
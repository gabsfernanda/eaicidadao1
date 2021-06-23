import styled from 'styled-components';

export const BtnDeFauIcons = styled.div`
    
    display:flex;
    align-items: center;
    padding: 8px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
    transition: 0.4s;

    &:hover{
        background-color: #ccc;
    }

    .center{
        text-align: center;
        width: 100%;
    }
    .centerG{
        text-align: center;
        width: 100%;
        margin-right: 15px;
    }
    .icon{
        display: flex;
        margin-left: 10px;
    }
    .iconG{
        display:flex;
        margin-left: 16px;
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
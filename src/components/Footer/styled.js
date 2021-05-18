import styled from 'styled-components';

export const AreaFooter = styled.div`

background-image: linear-gradient(to right, #fff, #fff);
border-top: 1px solid #9370DB;
text-align: center;
padding:20px;
font-size: 14px;

bottom: 0 ;
position: fixed;
width: 100%;

.container{
    padding: 5px 20px;
    display: flex;
    align-items: center;

}
nav{      
    ul{
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    li{
        list-style: none;
        margin-left:40px;

        a{
            text-decoration: none;
            color: #883875;
            display: flex;
            align-items: center;

            &:hover{
                color: #9370DB;
            }
        }
    }


`;
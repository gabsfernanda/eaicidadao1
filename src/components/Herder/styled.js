import styled from 'styled-components';

export const AreaHeader = styled.div`
   height: 80px;
   background-image: linear-gradient(to right, #883875, #BA55D3);
   color: #fff;

   .container{
       padding: 5px 30px;
       display: flex;
       align-items: center;
   }
nav{      
    ul{
        margin-left: 970%;
        display: flex;

    }
    li{
        list-style: none;
        margin-left:40px;

        a{
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;

            &:hover{
                color: #9370DB;
            }
        }
    }


`;
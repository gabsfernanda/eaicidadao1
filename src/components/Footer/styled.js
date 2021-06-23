import styled from 'styled-components';

export const AreaFooter = styled.div`

  background: linear-gradient(to right, #fff, #fff);
  border-top: 1px solid #9370DB;
  text-align: center;
  padding:13px;
  font-size: 14px;

  position: fixed;
  flex:0.1;
  left: 0;
  right: 0;
  bottom: 0;
  width: 98%;
  flex-direction: row;

  width: 100% !important;
  display: block !important;

.container{
    padding: 5px 28px;
    display: flex;
    align-items: center;

}
nav{   
    margin-right: 9vw;
    ul{
        align-items: center;
        block-size: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    li{
        list-style: none;
        margin-left:32px;

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
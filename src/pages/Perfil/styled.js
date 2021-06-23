import styled from 'styled-components';

export const AreaPerfil = styled.div`
     
     background-color: auto;

     .photo{
            width: 10vw;
            min-width: 15px;
            height: 20vh;
            min-height: 5px;
            border-radius: 50%;
            position: absolute;
            display: flex;
            text-align: center;
            margin-left: 2vw;
            margin-top: 2vw;

     }
     div.fundo {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 47%;
  background-color: #e333;
     }

     ul.dados{
          display: flex;
          flex-direction: column;
          list-style:none;
          margin-top: 10vw;
          font-family: Verdana, Geneva, Tahoma, sans-serif;
          li{
             top: 0;
             left: 0 ;
             margin-bottom: -0px;
             
             a{
                  font-size: 15px;
                  display: flex;
                  margin-top: -16px ;
                  margin-left: 5px;
                  margin-bottom: 25px;
             }
             p{
               font-size: 15px;
               margin-top: -10px;
              

             }
             .dat{
                    margin-left: 11vw;
                    margin-top: -2.4vw;
               }
             .calend{
            width: 2.4 vw;
            min-width: 1px;
            height: 2.8vh;
            min-height: 1px;
            position: inline;
            display: relative;
            text-align: center;
            margin-right: 0vw;
            margin-top: 0vw;

             }
          }
     }
     .feedperfil{
          margin-top: 23vw;
     }
`;
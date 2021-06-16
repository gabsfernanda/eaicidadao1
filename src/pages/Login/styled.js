import styled from 'styled-components';

export const AreaLogin = styled.div`

      background: 0px;
      padding: 30px;
      max-width: 300px;
      margin-top: 100px;
      margin-left: 35%;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0px 0px 10px #7d2ac8;

      h1{
          font-size: 24px;
      }
      .organize{
          display: flex;

          a{
              color: #000000;
          }
      }
      p{
          font-size: 13px;
          color: #7d2ac8;
      }

      .form--input{
          text-align: center;

          input{
              text-align: center;
              margin-bottom: 20px;
              padding: 10px;
              font-size: 12px;
              font-family: "Noto Sans", "sans-serif";
              outline: none;
              border: 1px solid #ccc;
              border-radius: 5px;
              width: 230px;
              transition: 0.3s;
              


              &:hover{
                  border: 1px solid #7d2ac8;
              }
          }
      }
      .footerLogin{
          font-size: 13px;
          text-align: center;
          margin-top: 30px;

          a{
              font-weight: bold;
              margin-left: 5px;
              color: #4e129c;
              transition: 0.4s;
              cursor: pointer;

              &:hover{
                  color: #7d2ac8;
              }
          }
      }
`;
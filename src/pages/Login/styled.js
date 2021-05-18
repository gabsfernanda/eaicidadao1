import styled from 'styled-components';

export const AreaLogin = styled.div`

      background: 0px;
      padding: 30px;
      max width: 300px;
      margin-top: 20px:
      margin: auto;
      text-align: center;
      border-radius: 5px;
      box-shadow: 0px 0px 10px #ccc;

      h1{
          font-size: 24px;
      }

      .form--input{
          text-align: left;

          label{
              display: block;
          }
          input{
              margin-bottom: 20px;
              padding: 10px;
              font-size: 10px;
              outline: none;
              border: 1px solid #ccc;
              border-radius: 5px;
              width:200px;
              transition: 0.3s;

              &:hover{
                  border: 1px solid #7d2ac8;
              }
          }
      }
      .footerLogin{
          font-size: 13px;

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
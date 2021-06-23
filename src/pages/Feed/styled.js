import styled from 'styled-components';

export const AreaFeed = styled.div`

      background-color: auto;
      text-align: center;
      height: auto !important;
      max-width: 100% !important;
      width: auto !important;
      display: block !important;
            

      .photo{
            width: 35px;
            min-width: 35px;
            height: 35px;
            min-height: 35px;
            border-radius: 50%;
            position: fixed;
            display: flex;
            left: 10px;

            }
      .posts{
            width: 50vw;
            min-width: 35px;
            height: 10vh;
            min-height: 35px;
            position: fixed;
            margin-left: 40px;
            margin-top: 10px;
            border-radius: 5px;
            display: flex;
            align-items: center;            

      }
      .inputPost{
            color:white;
            display:flex;
            align-items: center;
            padding: 5px;
            width: 8%;
            border-radius: 5px;
            border: 0px;
            font-size: 13px;
            font-weight: bold;
            margin-left: 90%;
            margin-top: 10px;
            transition: 0.4s;
            background-color: #BA55D3;

    &:hover{
            background-color: #883875;
           }
      }
`;
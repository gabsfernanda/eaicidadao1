/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { ContainerPage } from '../../components/Main';
import { AreaFeed } from './styled'
import avatar from '../../photos/us1.jpeg'


const Feed = () => {
  return (
        <AreaFeed>
        <div className="Feed">
          
        <ContainerPage>
          <div>
          <form >   
            
            <img className = "photo" src= { avatar } />
            
            <textarea className = "posts">
            O que está acontecendo?
            </textarea>  

           <input className="inputPost" type="submit" value="Postar" />
          </form>
          <br/>

          </div>
          
        </ContainerPage>
    
      
        </div>
        </AreaFeed>
      );
    }
    export default Feed;
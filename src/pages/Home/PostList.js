import React, { useState } from 'react';

import PostItem from './PostItem';
import './Post.css';

import Avatar from '../../photos/us1.jpeg';
import Imagem from '../../photos/bur.jpg';
import Imagem2 from '../../photos/alagamen.jpg';
import Persona from '../../photos/us3.jpeg';
import Persona2 from '../../photos/us2.jpeg';

export default function PostList() {
    const [posts] = useState([
      {
        id: 1,
        author: {
          name: 'Julia Santos',
          avatar: Avatar
        },
        date: '23 Jul 2021',
        content: 'Pessoal, buraco na rua tal, cuidado',
        img: Imagem,
        comments: [
          {
            id: 2,
            author: {
              name: 'Marina',
              avatar: Persona2
            },
            date: '23 Jun 2021',
            content:
              'Obrigada Julia, irei ficar esperta'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Marcos Souza',
          avatar: Persona
        },
        date: '27 Mai 2021',
        content:
          'Terrível situação no bairro onde moro, está difícil passar carro aqui',
        img: Imagem2,
        comments: [
          {
            id: 4,
            author: {
              name: 'Michele Oliveira',
              avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
            },
            date: '27 Mai 2021',
            content:
              'Trágico a situação'
          },
          {
            id: 5,
            author: {
              name: 'João Santos',
              avatar: 'https://randomuser.me/api/portraits/men/25.jpg'
            },
            date: '29 Mai 2021',
            content:
              'Moro no mesmo bairro, está difícil'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Guilherme Pereira',
          avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        date: '01 Jul 2021',
        content:
          'Jogaram lixo ao lado do meu terreno, um absurdo',
        comments: [
          {
            id: 4,
            author: {
              name: 'Michele Oliveira',
              avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
            },
            date: '01 Jul 2021',
            content:
              'Espero que a prefeitura avise o dono do terreno para limpa isso ai'
          },
          {
            id: 4,
            author: {
              name: 'Michele Oliveira',
              avatar: 'https://randomuser.me/api/portraits/women/26.jpg'
            },
            date: '06 Jul 2021',
            content:
              'Conseguiu resolver?'
          },
          {
            id: 6,
            author: {
            name: 'Guilherme Pereira',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
          },
            date: '01 Jul 2021',
            content:
              'Consegui sim, a prefeitura viu minha reclamação e entrou em contato, graças a Deus'
          }
        ]
      }
    ])

    return (
      <div className="postlist">
        {/* Mapear posts para cada item */}
        { posts.map(post => (
          <PostItem key={ post.id } { ...post } />
        ))}
      </div>
    );
  };
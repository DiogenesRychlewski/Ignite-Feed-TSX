import { useState } from 'react'
import { Header } from './components/Header/Header'
import styles from './App.module.css'
import './global.css'
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'
import { Comment } from './components/Comment/Comment'

// author: {avatar_url: "", name: "". role:""}
// publishedAt: Date
// content: String

interface Posts {
  id: number;
  author:{
    avatarUrl: string
    name: string;
    role: string;
  },
  content: {
    type: 'paragraph' | 'link';
    content: string
  }[],
  publishedAt: Date
}

const post:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/DiogenesRychlewski.png',
      name: 'Diógenes Rychlewski',
      role: 'Front End Developer Analyst Jr'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Together, evento da Rocketseat. O nome do projeto é LetmeAsk 🚀'},
      {type: 'link', content: '👉 https://github.com/DiogenesRychlewski/NLW-Together-ReactJS'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/MarcosRychlewski.png',
      name: 'Marcos Rychlewski',
      role: 'Developer Full-Stack'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {post.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}  
              />
            )
          })}
        </main>
        
      </div>
    </div>
  )
}

export default App
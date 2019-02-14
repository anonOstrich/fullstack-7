import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

const Menu = () => (
  <div>    
    <a href='#'>anecdotes</a>&nbsp;
    <a href='#'>create new</a>&nbsp;
    <a href='#'>about</a>&nbsp;
  </div>
)

const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => <li key={anecdote.id} >{anecdote.content}</li>)}
    </ul>  
  </div>
)

const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>
    
    <em>An anecdote is a brief, revealing account of an individual person or an incident. 
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself, 
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative. 
      An anecdote is "a story with a point."</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

const Footer = () => (
  <div>
    Anecdote app for <a href='https://courses.helsinki.fi/fi/TKT21009/121540749'>Full Stack -sovelluskehitys</a>.

    See <a href='https://github.com/mluukkai/routed-anecdotes'>https://github.com/mluukkai/routed-anecdotes</a> for the source code. 
  </div>
)

const  CreateNew = (props) => {
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')

  const setters = {
    content: setContent,
    author: setAuthor,
    info: setInfo
  }


  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    const fn = setters[`${e.target.name}`]
    console.log(fn)
    console.log(setters)
    fn(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content,
      author: author,
      info: info,
      votes: 0
    })
  }

    return(
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content 
            <input name='content' value={content} onChange={handleChange} />
          </div>
          <div>
            author
            <input name='author' value={author} onChange={handleChange} />
          </div>
          <div>
            url for more info
            <input name='info' value={info} onChange={handleChange} />
          </div> 
          <button>create</button>
        </form>
      </div>  
    )

  
}

const App = () => {
  const [anecdotes, setAnecdotes] = useState([        {
    content: 'If it hurts, do it more often',
    author: 'Jez Humble',
    info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
    votes: 0,
    id: '1'
  },
  {
    content: 'Premature optimization is the root of all evil',
    author: 'Donald Knuth',
    info: 'http://wiki.c2.com/?PrematureOptimization',
    votes: 0,
    id: '2'
  }])
  const [notification, setNotification] = useState('')

  

  const addNew = (anecdote) => {
    anecdote.id = (Math.random() * 10000).toFixed(0)
    setAnecdotes(anecdotes.concat(anecdote))
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    const anecdotes = anecdotes.map(a => a.id === id ? voted : a)

    setAnecdotes(anecdotes)
  }


    return (
      <div>
        <h1>Software anecdotes</h1>
          <Menu />
          <AnecdoteList anecdotes={anecdotes} />
          <About />      
          <CreateNew addNew={addNew}/>
        <Footer />
      </div>
    );
  
}

export default App;

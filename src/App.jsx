import { useEffect, useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
    const [quotes,setQuotes] = useState('')
    const [author,setAuthor] = useState('')
    const [count,setCount] = useState(0)


    async function getQuotes(){
      const res = await fetch('https://dummyjson.com/quotes')
      const data = await res.json()
      const randomIndex = Math.floor(Math.random() * data.quotes.length)
      setQuotes(data.quotes[randomIndex].quote)
      setAuthor(data.quotes[randomIndex].author)
      setCount((e) => e + 1)
      
    }


    useEffect(function(){
      getQuotes()
    },[])

    
  return (
    <>
      <div className="container cardBody">
      <Card style={{ width: '38rem' }}>
      <Card.Body>
        <h1 className='mb-5 text-primary'>Random Quotes</h1>
        <h3 className='mb-4'>
          {quotes}
        </h3>
        <p className='mb-5'>
          - {author} -
        </p>
        <p className='text-danger'>You have generated <strong>{count}</strong> number of quotes</p>
        <Button onClick={getQuotes} className='text-center' variant="success">Generate Quote</Button>
      </Card.Body>
    </Card>
      </div>
    </>
  )
}

export default App

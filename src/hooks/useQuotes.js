import React, { useState, useEffect } from 'react'
import { colors } from '../data/color';

const useQuotes = () => {
   
    const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
    
    
    const [quote, setQuote] = useState("I am not a product of my circumstances. I am a product of my decisions.");
    const [author, setAuthor] = useState("Stephen Covey")
    const [quotesArray, setQuotesArray] = useState(null)
    const [color, setColor] = useState('#2c3e50')
  
    const fetchQuotes = async (url) => {
      const response = await fetch(url)
      const parsedJSON = await response.json()
      setQuotesArray(parsedJSON.quotes)
      console.log(parsedJSON)
    }
  
    useEffect(() => {
    fetchQuotes(API)
    }, [API]);
  
  
    const generateRandomNumber = () => {
      let randomNumber = Math.floor(Math.random() * quotesArray.length)
      setQuote(quotesArray[randomNumber].quote)
      setAuthor(quotesArray[randomNumber].author)
      setColor(colors[randomNumber])
    }

    return{
        color,
        quote,
        author,
        generateRandomNumber,
        encodeURI
    }
}

export default useQuotes
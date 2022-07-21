import './App.css';
import useQuotes from './hooks/useQuotes';



  function App() {

    const {color,quote,author,generateRandomNumber,encodeURI} = useQuotes()
  
    return (
      <div id='quote-box' className="wrapper" style={{backgroundColor: color}}>
          <div className='box rounded'>
              <p id='text'> <img src="src\assets\icons\bxs-quote-alt-left.svg" alt="" /> {quote} </p>
              <p id='author'>{author} </p>
              <div className='d-flex justify-content-between'>
                <a 
                target="_blank" 
                href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)} 
                id='tweet-quote' 
                className="btn btn-primary"
                style={{backgroundColor: color}}>
                </a>
                <button style={
                  {backgroundColor: color,userSelect: 'none',padding: '20px'}} 
                        id='new-quote' onClick={() => generateRandomNumber()} className='btn btn-primary'>New Quote</button>
          </div>
        </div>
        <footer> by Alan Damian Vrtal</footer>
      </div>
    );

  }

  export default App;

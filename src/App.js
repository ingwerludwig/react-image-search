import {useEffect, useState} from 'react';
import Image from './Image';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [input, setInput] = useState('');

  const fetchData = () => {
    console.log('Test fetch');
    fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${input}`, 
    {headers: 
      {
        'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
        'x-rapidapi-key': '6473af6281msh3cfb843c850fd66p1100a4jsn7de4a01ba434'
      }, method: 'GET'
    }
  )
    .then(res => res.json())
    
    .then(item => {setImages(item.queryExpansions);setInput('')})

  }

  return (
    <div className="App">
    <h1>Mau cari gambar apa nich?</h1>
      <div className="form">
        <input className="input" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="button" onClick={() => fetchData()}>Clickk akuuu</button>
      </div>
    <div className="images-wrapper">
      {images.length > 0 && images.map(item => {return(<Image item= {item}/>)} ) }
    </div>

    

    </div>
  );
}

export default App;

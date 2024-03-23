import { useEffect, useState } from 'react'
import './App.css'
import Monitor from './components/Monitor'
import Mouse from './components/Mouse'
import Total from './components/Total'
import MyContext from './context/MyContext'
import Stepper from './quiz02/Stepper'
import Content from './quiz02/Content'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    { id:1, step:1, name: 'Mouse', price: 60 },
    { id:2, step:1, name: 'Monitor', price: 70 },
    { id:4, step:2, name: 'Keyboard', price: 80 },
    { id:5, step:2, name: 'Headset', price: 90 },
    { id:6, step:3, name: 'Tablet', price: 100 },
    { id:7, step:3, name: 'Hub', price: 110 }
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <>
      <h1>Quiz 02</h1>
      <div>
        <div>
          <p>{products[currentIndex].name}</p>
          <p>${products[currentIndex].price}</p>
        </div>
        <div className='flex'>
          <button type="button" onClick={handlePrevious}>Previous</button>
          <button type="button" onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}

export default App;

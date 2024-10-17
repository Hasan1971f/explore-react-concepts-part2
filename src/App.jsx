
import './App.css'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('clicke button 2')
  }

  const addToFive=(num)=>{
  alert(num + 5);
  }
 
  return (
    <>
      
      <h3>React Core Concepts 2</h3>
      <button onClick={handleClick}>Click me</button>

     <button onClick={handleClick2}>Click2</button>

     <button onClick={() => {alert('third click')}}>Third</button>

     <button onClick={() => {addToFive(3)}}>Four</button>
      
   
    </>
  )
}

export default App

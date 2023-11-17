
import './App.css'
import Counter from './Components/Counter'
import Header from './Components/Header/Header'

function App() {

  return (
    <div >
      <Header/>
      <div className='flex'>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </div>
  )
}

export default App;
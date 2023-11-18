
import './App.css'
import Counter from './Components/Counter'
import Header from './Components/Header/Header'
import Condition from './Components/LoginLogout/Condition';

function App() {

  return (
    <div >
      <Condition/>
      <Header/>
      <div className='flex'>
        <Counter/>
      </div>
    </div>
  )
}

export default App;
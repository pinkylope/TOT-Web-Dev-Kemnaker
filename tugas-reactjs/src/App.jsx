import './App.css'
import Todo from './components/Todo'
import Counter from './components/Counter'
import Gambar from './assets/logo.png'
import Time from './components/Time'

function App() {
let thingsToDo = [
  {name: "Belajar GIT & CLI"}, 
  {name: "Belajar HTML & CSS"}, 
  {name: "Belajar Javascript"}, 
  {name: "Belajar ReactJS Dasar"}, 
  {name: "Belajar ReactJS Advance"}
]
  return (
    <>
      <div className="container">
        <div>
          <Time />
          <Counter />
          {/* <Counter start={100} /> */}
        </div>
        <div className="box">
        <img src={Gambar} alt="Logo Sanbercode" />
        <h2>THINGS TO DO</h2>
        <p>During bootcamp in sanbercode</p>
        <hr></hr>
        {thingsToDo.map((item, index)=>{
          return (
            <div key={index}>
              <Todo name={item.name}/>
              <hr></hr>
            </div>
          )
        })}
        <a href="#" class='tombol'>SEND</a>
      </div>
      </div>
    </>
  )
}

export default App

import './App.css'
import Counter from './components/Counter'
import Welcome from './components/welcome'

function App() {
  let people = [
    {name: "John", job: "Designer", color: "darkred"},
    {name: "Doe", job: "Programmer", color: "darkgreen"},
    {name: "Sarah", job: "Model"},
    {name: "Budi", job: "Teacher"},
  ]

  return (
    <>
      <div className="container">
        {people.map((item, index)=>{
          return (
            <div key={index}>
              <Welcome name={item.name} job={item.job} color={item.color}/>
            </div>
          )
        })}
      </div>
      <div>
        <div>
          <Counter />
          <Counter start={100} />
          <Counter start={-30} />
        </div>
      </div>
    </>
  )
}

export default App

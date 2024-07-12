import { useState } from 'react'
import Hero from './component/Hero'
import Generator from './component/Generator'
import Workout from './component/Workout'
import {generateWorkout} from './component/utils/functions'

function App() {
  const[workout, setWorkout]= useState(null)
  const [poison, setPoison] = useState("individual")
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState("strength_power")  
  
  function updateWorkout(){
    if(muscles.length==0){
      return
    }
    let newWorkout=generateWorkout({poison, muscles, goal})
    
    setWorkout(newWorkout)
    window.location.href = '#workout'
  }

  return (
    <main className='main-screen min-h-screen bg-gradient-to-r from-slate-800 to-slate-950' >
     <Hero/>
     <Generator poison={poison} setPoison={setPoison}
     muscles={muscles} setMuscles={setMuscles}
     goal={goal} setGoal={setGoal} updateWorkout={updateWorkout}/>
     {workout && (<Workout workout={workout}/>)}
    </main>
  )
}

export default App

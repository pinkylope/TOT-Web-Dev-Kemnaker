import { useEffect, useState } from "react"

const Counter = ({start=100})=>{
  const [count, setCount] = useState(start)

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count-1)
    },1000)
  }, [count])

  return(
    <>
        {count > 0 && <h3>Countdown: {count}</h3>}   
    </>
  )
}

export default Counter
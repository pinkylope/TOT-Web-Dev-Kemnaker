const Welcome = (props)=>{
  return (
    <div style={{color: props.color ?? "darkblue", backgroundColor: "#dddfff"}} className="card">
      <h1>Hello, {props.name}</h1>
      <h1>Job : {props.job}</h1>
    </div>
  )
}

export default Welcome
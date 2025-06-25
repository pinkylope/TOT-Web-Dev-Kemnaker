const Todo = (props)=>{
  return (
    <>
        {/* <h1>{props.name}</h1> */}
        <input type="checkbox" id={props.name} name={props.name} value={props.name}></input>
        <label for={props.name}> {props.name}</label><br></br>
    </>
  )
}

export default Todo
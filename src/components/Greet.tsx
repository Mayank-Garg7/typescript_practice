import EventHandeler from "./EventHandeler"

type greetProps = {
    name: string
    message: string
    age?: number
    isRunning: boolean
}


const Greet = (props: greetProps) => {
  const {age = 23, message, name} = props
  const text = props.isRunning ? "running" : "not-running"
  return (
    <div>
      <h1>hello, {name},</h1>
      <p>{message}</p>
      <span>{age} is currently {text}</span>
      <EventHandeler handleClickEvent={(event, id) => console.log("button is clicked: ",event, "id is : ", id)} />
    </div>
  )
}

export default Greet

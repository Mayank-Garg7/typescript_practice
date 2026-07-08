
type EventProps = {
    handleClickEvent: (event:React.MouseEvent<HTMLButtonElement>, id:number) => void
}

const EventHandeler = (props: EventProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClickEvent(event, 1)}>submit</button>
    </div>
  )
}

export default EventHandeler

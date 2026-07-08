
type propsType = {
    request: "success" | "error" | "loading" 

}


const AdvaProps = (props: propsType) => {
    let message;
    if(props.request === "success"){
        message = "data is fetched successfully!"
    }else if(props.request === "error"){
        message = "something went wrong during the process"
    }
    else{
        message = "loading..."
    }
  return (
    <div>
      <h2>status = {message}</h2>
    </div>
  )
}

export default AdvaProps

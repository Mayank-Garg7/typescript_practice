type childrenProps = {
    children: React.ReactNode
}
const ChildrenProps = (props:childrenProps) => {


    return(
        <div>
            {props.children}
            hey audience all good
        </div>
    )
}

export default ChildrenProps
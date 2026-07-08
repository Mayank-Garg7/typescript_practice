type childrenProps = {
    children: React.ReactNode
}
const ChildrenProps = (props:childrenProps) => {


    return(
        <div>
            {props.children}
        </div>
    )
}

export default ChildrenProps
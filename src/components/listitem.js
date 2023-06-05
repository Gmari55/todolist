import './style.css'
export function Listitem(props)
{
    return(
        <div >
        <p className="todoitem"> {props.todo} UserId:{props.userId}</p>
    </div>
    )
}
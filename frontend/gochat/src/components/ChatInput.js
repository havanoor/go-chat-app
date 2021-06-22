

function ChatInput(props){

    return(
        <>
         <input onKeyDown={props.send} />
        </>


    )



}



export default ChatInput;


function Message(props){
    let message=JSON.parse(props.message);
    console.log(message,"9089080989")
    return(
        <div className="Message">{message.body}</div>
    )
}


export default Message;
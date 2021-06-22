

import Message from './Message'

function Allmsgs(props){
    console.log("HIIIIi",props.mesgs)
    return(
        <>
        <h2>All messages</h2>
        {
            props.mesgs.map((msg,index)=>(
            // <p key={index}>{msg.data}</p>
            <Message key={index} message={msg.data}/>
            ))
        }

        </>
    )
}


export default Allmsgs;
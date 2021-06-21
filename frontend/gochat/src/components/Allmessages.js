



function Allmsgs(props){
    console.log("HIIIIi",props.mesgs)
    return(
        <>
        <h2>All messages</h2>
        {
            props.mesgs.map((msg,index)=>(
            <p key={index}>{msg.data}</p>
            ))
        }

        </>
    )
}


export default Allmsgs;
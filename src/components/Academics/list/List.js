const List=(title)=>{
    const tit=title.title.listItem;
    console.log(tit);
    return(
         <div style={{borderLeft:"2px solid black"}}>
                     <h2 style={{textAlign:"center"}}>  {title.title.name}</h2>
                     <div style={{textAlign:"right"}}>
                        <ul >
                            {tit.map((item)=>{
                                return(
                                   <li style={{margin:"5px"}}>{item}</li>
                                )
                            })}
                        </ul>
                     </div>
        </div>
    )
}
export default List;
const List=(title)=>{
    const tit=title.title.listItem;
    console.log(tit);
    return(
         <div>
                     <h2> {title.title.name}</h2>
                     <div>
                        <ul>
                            {tit.map((item)=>{
                                return(
                                    <li>{item}</li>
                                )
                            })}
                        </ul>
                     </div>
        </div>
    )
}
export default List;
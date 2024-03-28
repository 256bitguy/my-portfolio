const List=(title)=>{
    const tit=title.title.listItem;
    console.log(tit);
    return(
         <div>
                     <h2> {title.title.name}</h2>
                     <p>Description:{title.title.description}</p>
                     <div>
                        <ul>
                            {tit.map((item)=>{
                                return(
                                    <li>{item.description}</li>
                                )
                            })}
                        </ul>
                     </div>
                     <p>Technologies:{title.title.technologies}</p>
        </div>
    )
}
export default List;